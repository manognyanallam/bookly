import os
import sys
import re

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
details_path = os.path.join(base_dir, "lib", "db", "bookDetailsData.ts")
books_data_path = os.path.join(base_dir, "lib", "db", "booksData.ts")

with open(details_path, "r", encoding="utf-8") as f:
    details_content = f.read()

with open(books_data_path, "r", encoding="utf-8") as f:
    books_content = f.read()

# Only books in INITIAL_BOOKS
raw_matches = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*slug:\s*["\']([^"\']+)["\'],\s*title:\s*("[^"]+"|\'[^\']+\'),\s*author:\s*["\']([^"\']+)["\']', books_content)
book_slugs = [slug for _, slug, _, _ in raw_matches]

print(f"Total book slugs in INITIAL_BOOKS: {len(book_slugs)}")

missing_extended = []
missing_lessons = []
missing_te_audio = []

for slug in book_slugs:
    has_slug = f"'{slug}':" in details_content or f'"{slug}":' in details_content
    if not has_slug:
        missing_extended.append(slug)
        missing_lessons.append(slug)
        missing_te_audio.append(slug)
    else:
        m = re.search(rf"'{slug}':\s*\{{[\s\S]*?extendedDescription:\s*", details_content)
        if not m:
            missing_extended.append(slug)
        m_l = re.search(rf"'{slug}':\s*\{{[\s\S]*?collegeLessons:\s*\[([\s\S]*?)\]", details_content)
        if not m_l or len(m_l.group(1).strip()) < 10:
            missing_lessons.append(slug)
        m_te = re.search(rf"'{slug}':\s*\{{[\s\S]*?teluguAudioUrl:\s*['\"]", details_content)
        if not m_te:
            missing_te_audio.append(slug)

print(f"Missing extendedDescription: {len(missing_extended)} -> {missing_extended}")
print(f"Missing collegeLessons: {len(missing_lessons)} -> {missing_lessons}")
print(f"Missing teluguAudioUrl: {len(missing_te_audio)} -> {missing_te_audio}")
