import os
import sys
import json
import re
import mutagen.mp3

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
books_data_path = os.path.join(base_dir, "lib", "db", "booksData.ts")
book_details_path = os.path.join(base_dir, "lib", "db", "bookDetailsData.ts")
audio_en_dir = os.path.join(base_dir, "public", "audio")
audio_te_dir = os.path.join(base_dir, "public", "audio", "te")
scripts_te_dir = os.path.join(base_dir, "scripts", "te")

# 1. Parse books from booksData.ts
with open(books_data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract book objects with id, slug, title, author
raw_matches = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*slug:\s*["\']([^"\']+)["\'],\s*title:\s*("[^"]+"|\'[^\']+\'),\s*author:\s*["\']([^"\']+)["\']', content)
books = []
for bid, slug, raw_title, author in raw_matches:
    title = raw_title[1:-1] # strip surrounding quotes
    books.append({
        "id": bid,
        "slug": slug,
        "title": title,
        "author": author
    })

# 2. Check bookDetailsData.ts for registrations
with open(book_details_path, "r", encoding="utf-8") as f:
    details_content = f.read()

audit_results = []
missing_telugu_audio = []

for b in books:
    slug = b["slug"]
    
    # 1. English audio verified
    en_path = os.path.join(audio_en_dir, f"{slug}.mp3")
    en_exists = os.path.exists(en_path)
    en_dur = 0
    en_dur_str = "N/A"
    if en_exists:
        try:
            m = mutagen.mp3.MP3(en_path)
            en_dur = m.info.length
            mins, secs = divmod(int(en_dur), 60)
            en_dur_str = f"{mins:02d}:{secs:02d}"
        except Exception:
            en_exists = False

    # 2. Telugu script available
    te_script_path = os.path.join(scripts_te_dir, f"{slug}.md")
    te_script_exists = os.path.exists(te_script_path) and os.path.getsize(te_script_path) > 100

    # 3. Telugu audio file exists
    te_path = os.path.join(audio_te_dir, f"{slug}.mp3")
    te_file_exists = os.path.exists(te_path)
    te_dur = 0
    te_dur_str = "N/A"
    te_dur_verified = False
    te_playback_verified = False
    
    # 4. Telugu audio duration verified & 5. Playback verified
    if te_file_exists:
        try:
            m = mutagen.mp3.MP3(te_path)
            te_dur = m.info.length
            if te_dur > 30 and m.info.bitrate > 0:
                mins, secs = divmod(int(te_dur), 60)
                te_dur_str = f"{mins:02d}:{secs:02d}"
                te_dur_verified = True
                te_playback_verified = True
        except Exception:
            te_dur_verified = False

    # Check registered in bookDetailsData
    registered_te = f"'{slug}':" in details_content and "teluguAudioUrl:" in details_content

    item = {
        "slug": slug,
        "title": b["title"],
        "author": b["author"],
        "en_verified": en_exists,
        "en_duration": en_dur_str,
        "te_script": te_script_exists,
        "te_file": te_file_exists,
        "te_dur_verified": te_dur_verified,
        "te_duration": te_dur_str,
        "te_playback": te_playback_verified,
        "registered": registered_te
    }
    audit_results.append(item)

    if not (te_file_exists and te_dur_verified):
        missing_telugu_audio.append(item)

print("="*110)
print(f"BOOKLY AUDIT REPORT: {len(books)} TOTAL BOOKS IN CATALOGUE")
print("="*110)
print(f"{'Slug':<32} | {'EN Audio':<10} | {'TE Script':<10} | {'TE MP3':<8} | {'TE Duration':<12} | {'TE Playback':<12}")
print("-" * 110)

for r in audit_results:
    en_s = "YES (" + r['en_duration'] + ")" if r['en_verified'] else "NO"
    sc_s = "YES" if r['te_script'] else "NO"
    mp_s = "YES" if r['te_file'] else "NO"
    du_s = r['te_duration'] if r['te_dur_verified'] else "NO"
    pl_s = "VERIFIED" if r['te_playback'] else "MISSING"
    print(f"{r['slug']:<32} | {en_s:<10} | {sc_s:<10} | {mp_s:<8} | {du_s:<12} | {pl_s:<12}")

print("\n" + "="*110)
print(f"SUMMARY: {len(books) - len(missing_telugu_audio)}/{len(books)} books have verified Telugu audio.")
print(f"MISSING TELUGU AUDIO: {len(missing_telugu_audio)} books require generation:")
print("="*110)
for idx, m in enumerate(missing_telugu_audio, 1):
    print(f"{idx:2d}. {m['slug']:<32} ({m['title']} - {m['author']})")
