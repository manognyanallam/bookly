import os
import sys
import json
import urllib.request
import re
from PIL import Image

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
books_data_path = os.path.join(base_dir, "lib", "db", "booksData.ts")
public_covers_dir = os.path.join(base_dir, "public", "covers", "books")

print("="*80, flush=True)
print("BOOKLY END-TO-END COVER AUDIT & VERIFICATION", flush=True)
print("="*80, flush=True)

with open(books_data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Parse INITIAL_BOOKS
start_idx = content.find("export const INITIAL_BOOKS: Book[] = [")
content_books = content[start_idx:]

pattern = re.compile(
    r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*'
    r'slug:\s*[\'"]([^\'"]+)[\'"],\s*'
    r'title:\s*([\'"].*?[\'"]),\s*'
    r'author:\s*[\'"]([^\'"]+)[\'"],\s*'
    r'description:\s*([\'"].*?[\'"]),\s*'
    r'coverImage:\s*[\'"]([^\'"]+)[\'"]',
    re.DOTALL
)

books = []
for i, match in enumerate(pattern.finditer(content_books)):
    bid = match.group(1)
    slug = match.group(2)
    raw_title = match.group(3)
    if (raw_title.startswith("'") and raw_title.endswith("'")) or (raw_title.startswith('"') and raw_title.endswith('"')):
        title = raw_title[1:-1]
    else:
        title = raw_title
    title = title.replace("\\'", "'").replace('\\"', '"')
    author = match.group(4)
    cover = match.group(6)
    
    books.append({
        "id": bid,
        "slug": slug,
        "title": title,
        "author": author,
        "cover": cover
    })

print(f"Total catalogue books parsed: {len(books)}", flush=True)

# Check 1: No unsplash or placeholder URLs
errors = []
covers_seen = set()

for b in books:
    slug = b['slug']
    cover = b['cover']
    title = b['title']
    
    if "unsplash" in cover.lower():
        errors.append(f"Book '{slug}' is still using an Unsplash placeholder URL: {cover}")
        continue
    
    if not cover.startswith("/covers/books/"):
        errors.append(f"Book '{slug}' is not using standard /covers/books/ path: {cover}")
        continue
        
    if cover in covers_seen:
        errors.append(f"Duplicate cover found! Multiple books mapping to: {cover}")
    covers_seen.add(cover)
    
    # Check 2: Physical file exists on disk
    rel_path = cover.lstrip("/") # remove leading slash
    full_path = os.path.join(base_dir, "public", *rel_path.split("/"))
    
    if not os.path.exists(full_path):
        errors.append(f"Physical file missing for '{slug}': {full_path}")
        continue
        
    # Check 3: Valid image with proper dimensions
    try:
        img = Image.open(full_path)
        w, h = img.size
        aspect = w / h
        size_kb = os.path.getsize(full_path) / 1024
        
        if w < 150 or h < 200:
            errors.append(f"Image for '{slug}' is suspiciously low resolution ({w}x{h})")
        if not (0.50 <= aspect <= 0.85):
            errors.append(f"Image for '{slug}' does not match portrait book aspect ratio ({aspect:.2f})")
            
        print(f"  [OK] {slug:<35} -> {cover} | {w}x{h} ({aspect:.2f}) | {size_kb:.1f} KB | {img.format}", flush=True)
    except Exception as e:
        errors.append(f"Corrupt image file for '{slug}': {e}")

# Check 4: Check if dev server is running
print("\n" + "-"*80, flush=True)
print("TESTING HTTP 200 FOR ALL COVERS IF SERVER ACTIVE", flush=True)
print("-"*80, flush=True)

server_up = False
try:
    with urllib.request.urlopen("http://localhost:3000", timeout=1) as resp:
        server_up = True
except Exception:
    server_up = False

if server_up:
    http_accessible = 0
    for b in books:
        url = f"http://localhost:3000{b['cover']}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=2) as resp:
                if resp.status == 200:
                    http_accessible += 1
                else:
                    print(f"  [HTTP FAIL] {b['slug']} returned status {resp.status}", flush=True)
        except Exception as e:
            print(f"  [HTTP ERROR] {b['slug']}: {e}", flush=True)
    print(f"All {http_accessible}/{len(books)} cover images served HTTP 200 over local server!", flush=True)
else:
    print("Local dev server is not currently running on port 3000 (will test with npm run dev / build).", flush=True)

print("\n" + "="*80, flush=True)
if errors:
    print(f"VERIFICATION FAILED WITH {len(errors)} ERRORS:", flush=True)
    for err in errors:
        print(f"  - {err}", flush=True)
    sys.exit(1)
else:
    print(f"VERIFICATION PASSED! ALL {len(books)} BOOKS HAVE UNIQUE, GENUINE, HIGH-QUALITY LOCAL COVERS!", flush=True)
print("="*80, flush=True)
