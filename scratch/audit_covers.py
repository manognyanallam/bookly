import os
import sys
import re
import json

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
books_data_path = os.path.join(base_dir, "lib", "db", "booksData.ts")

with open(books_data_path, "r", encoding="utf-8") as f:
    content = f.read()

# Isolate INITIAL_BOOKS array
start_idx = content.find("export const INITIAL_BOOKS: Book[] = [")
if start_idx == -1:
    print("Could not find INITIAL_BOOKS")
    sys.exit(1)

content_books = content[start_idx:]

# Find all book objects at top level of INITIAL_BOOKS
# Each book has id, slug, title, author, description, coverImage
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
    # clean raw title quotes
    if (raw_title.startswith("'") and raw_title.endswith("'")) or (raw_title.startswith('"') and raw_title.endswith('"')):
        title = raw_title[1:-1]
    else:
        title = raw_title
    # unescape escaped quotes if any
    title = title.replace("\\'", "'").replace('\\"', '"')
    
    author = match.group(4)
    cover = match.group(6)
    
    # find publishedYear in the following text
    following = content_books[match.end():match.end()+300]
    m_year = re.search(r'publishedYear:\s*(\d+)', following)
    year = int(m_year.group(1)) if m_year else None
    
    books.append({
        "index": i + 1,
        "id": bid,
        "slug": slug,
        "title": title,
        "author": author,
        "publishedYear": year,
        "currentCover": cover
    })

print(f"\n================ AUDIT OF ALL {len(books)} CATALOGUE BOOKS ================")
for b in books:
    is_unsplash = "unsplash" in b["currentCover"].lower()
    is_local = b["currentCover"].startswith("/")
    status = "Unsplash stock photo (PLACEHOLDER)" if is_unsplash else ("Local" if is_local else "External URL")
    print(f"{b['index']:2d}. [{b['slug']:<30}] \"{b['title']}\" by {b['author']} ({b['publishedYear']})")
    print(f"    Current: {b['currentCover']}")
    print(f"    Status:  {status}\n")

with open(os.path.join(base_dir, "scratch", "books_catalogue.json"), "w", encoding="utf-8") as f:
    json.dump(books, f, indent=2)
