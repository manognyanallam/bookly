import os
import sys
import urllib.request
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
books_data_path = os.path.join(base_dir, "lib", "db", "booksData.ts")

# 1. Test Key Global Routes
global_routes = [
    ('/', 'Great ideas. Shorter listening.', 'LISTEN • LEARN • GROW'),
    ('/discover', 'Discover Audio Summaries', 'All Books'),
    ('/categories', 'Browse Categories', 'CURATED LEARNING PATHWAYS'),
    ('/library', 'My Library', 'PERSONAL AUDIO LIBRARY'),
    ('/search', 'Search Bookly', 'INSTANT SEARCH'),
]

print("="*80)
print("TESTING CORE APPLICATION ROUTES (WITH TIMEOUT=30s)")
print("="*80)
all_routes_ok = True
for path, kw1, kw2 in global_routes:
    url = f"http://localhost:3000{path}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            assert resp.status == 200, f"HTTP {resp.status}"
            assert kw1 in html, f"Missing '{kw1}' in {path}"
            assert kw2 in html, f"Missing '{kw2}' in {path}"
            print(f"[PASS] {path:<16} -> HTTP 200 OK | Verified '{kw1}' and '{kw2}'")
    except Exception as e:
        print(f"[FAIL] {path:<16} -> Error: {e}")
        all_routes_ok = False

print("\n" + "="*80)
print("TESTING ALL 19 BOOK DETAIL ROUTES & AUDIO STREAMS")
print("="*80)

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

book_failures = []

for b in books:
    slug = b['slug']

    # Test Book Detail Page Route
    route_url = f"http://localhost:3000/books/{slug}"
    try:
        req = urllib.request.Request(route_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            if resp.status != 200:
                book_failures.append((slug, f"Route HTTP {resp.status}"))
                continue
            if 'తెలుగు' not in html:
                book_failures.append((slug, "Telugu selector missing in page HTML"))
                continue
            if 'About This Summary' not in html:
                book_failures.append((slug, "Disclaimer missing in page HTML"))
                continue
    except Exception as e:
        book_failures.append((slug, f"Route error: {e}"))
        continue

    # Test English Audio Stream
    en_url = f"http://localhost:3000/audio/{slug}.mp3"
    try:
        req = urllib.request.Request(en_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as resp:
            en_len = int(resp.headers.get('Content-Length', 0))
            if en_len < 100000:
                book_failures.append((slug, f"EN Audio too small: {en_len} bytes"))
                continue
    except Exception as e:
        book_failures.append((slug, f"EN Audio stream error: {e}"))
        continue

    # Test Telugu Audio Stream
    te_url = f"http://localhost:3000/audio/te/{slug}.mp3"
    try:
        req = urllib.request.Request(te_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as resp:
            te_len = int(resp.headers.get('Content-Length', 0))
            if te_len < 100000:
                book_failures.append((slug, f"TE Audio too small: {te_len} bytes"))
                continue
    except Exception as e:
        book_failures.append((slug, f"TE Audio stream error: {e}"))
        continue

    print(f"[VERIFIED] {slug:<38} | Detail Route HTTP 200 | EN ({en_len/(1024*1024):.1f}MB) | TE ({te_len/(1024*1024):.1f}MB) HTTP 200")

print("\n" + "="*80)
if book_failures or not all_routes_ok:
    print(f"FAILED TESTS ({len(book_failures)}):")
    for slug, reason in book_failures:
        print(f"  - {slug}: {reason}")
    sys.exit(1)
else:
    print("ALL 5 MAIN ROUTES + ALL 19 BOOK DETAIL ROUTES & AUDIO STREAMS 100% VERIFIED!")
print("="*80)
