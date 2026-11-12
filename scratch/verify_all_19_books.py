import os
import sys
import urllib.request
import re
import mutagen.mp3

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
te_audio_dir = os.path.join(base_dir, "public", "audio", "te")
en_audio_dir = os.path.join(base_dir, "public", "audio")
books_data_path = os.path.join(base_dir, "lib", "db", "booksData.ts")

with open(books_data_path, "r", encoding="utf-8") as f:
    content = f.read()

raw_matches = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*slug:\s*["\']([^"\']+)["\'],\s*title:\s*("[^"]+"|\'[^\']+\'),\s*author:\s*["\']([^"\']+)["\']', content)
books = []
for bid, slug, raw_title, author in raw_matches:
    title = raw_title[1:-1]
    books.append({
        "id": bid,
        "slug": slug,
        "title": title,
        "author": author
    })

print(f"Total books to verify: {len(books)}")

failures = []

for b in books:
    slug = b['slug']
    title = b['title']
    author = b['author']

    # 1. Check local files
    en_path = os.path.join(en_audio_dir, f"{slug}.mp3")
    te_path = os.path.join(te_audio_dir, f"{slug}.mp3")

    if not os.path.exists(en_path):
        failures.append((slug, "Missing local English MP3"))
        continue
    if not os.path.exists(te_path):
        failures.append((slug, "Missing local Telugu MP3"))
        continue

    m_en = mutagen.mp3.MP3(en_path)
    m_te = mutagen.mp3.MP3(te_path)

    en_dur = m_en.info.length
    te_dur = m_te.info.length

    # 2. Check HTTP Web Route
    route_url = f"http://localhost:3000/books/{slug}"
    try:
        req = urllib.request.Request(route_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            if resp.status != 200:
                failures.append((slug, f"Route returned HTTP {resp.status}"))
                continue
            if 'తెలుగు' not in html:
                failures.append((slug, "Telugu selector missing in page HTML"))
                continue
    except Exception as e:
        failures.append((slug, f"Failed fetching route {route_url}: {e}"))
        continue

    # 3. Check English Audio HTTP endpoint
    en_url = f"http://localhost:3000/audio/{slug}.mp3"
    try:
        req = urllib.request.Request(en_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status != 200:
                failures.append((slug, f"EN Audio HTTP {resp.status}"))
                continue
            en_length = int(resp.headers.get('Content-Length', 0))
            if en_length < 100000:
                failures.append((slug, f"EN Audio too small: {en_length} bytes"))
                continue
    except Exception as e:
        failures.append((slug, f"Failed fetching EN audio {en_url}: {e}"))
        continue

    # 4. Check Telugu Audio HTTP endpoint
    te_url = f"http://localhost:3000/audio/te/{slug}.mp3"
    try:
        req = urllib.request.Request(te_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status != 200:
                failures.append((slug, f"TE Audio HTTP {resp.status}"))
                continue
            te_length = int(resp.headers.get('Content-Length', 0))
            if te_length < 100000:
                failures.append((slug, f"TE Audio too small: {te_length} bytes"))
                continue
    except Exception as e:
        failures.append((slug, f"Failed fetching TE audio {te_url}: {e}"))
        continue

    print(f"[VERIFIED] {slug:<38} | EN: {int(en_dur//60):02d}:{int(en_dur%60):02d} | TE: {int(te_dur//60):02d}:{int(te_dur%60):02d} ({te_length/(1024*1024):.2f} MB) | Route + Audio HTTP 200 OK")

print("\n" + "="*80)
if failures:
    print(f"FAILED VERIFICATIONS ({len(failures)}):")
    for slug, reason in failures:
        print(f"  - {slug}: {reason}")
    sys.exit(1)
else:
    print(f"ALL {len(books)}/19 BOOKS FULLY VERIFIED END-TO-END ACROSS HTTP, DATA, AND AUDIO!")
print("="*80)
