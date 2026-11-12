import os
import re

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
books_data_path = os.path.join(base_dir, "lib", "db", "booksData.ts")

with open(books_data_path, "r", encoding="utf-8") as f:
    content = f.read()

# We know each book has:
# slug: 'slug-name',
# ...
# coverImage: 'https://images.unsplash...'
# We want to replace each book's coverImage with '/covers/books/{slug}.jpg'

slugs = [
    "atomic-habits",
    "deep-work",
    "psychology-of-money",
    "the-alchemist",
    "sapiens",
    "thinking-fast-and-slow",
    "zero-to-one",
    "the-7-habits",
    "rich-dad-poor-dad",
    "the-48-laws-of-power",
    "how-to-win-friends-and-influence-people",
    "the-laws-of-human-nature",
    "never-split-the-difference",
    "the-richest-man-in-babylon",
    "think-and-grow-rich",
    "emotional-intelligence",
    "the-intelligent-investor",
    "lets-talk-money",
    "the-almanack-of-naval-ravikant"
]

updated_content = content
replacements = 0

for slug in slugs:
    # Match the book starting with slug: 'slug' and find its coverImage line
    # Regex matching slug and then coverImage
    pattern = rf"(slug:\s*['\"]{re.escape(slug)}['\"].*?coverImage:\s*['\"])(https://[^'\"]+)(['\"])"
    match = re.search(pattern, updated_content, re.DOTALL)
    if match:
        old_val = match.group(2)
        new_val = f"/covers/books/{slug}.jpg"
        start, end = match.span(2)
        updated_content = updated_content[:start] + new_val + updated_content[end:]
        replacements += 1
        print(f"Updated {slug}: {old_val[:40]}... -> {new_val}")
    else:
        print(f"FAILED TO MATCH {slug}!")

print(f"\nTotal replacements: {replacements}/{len(slugs)}")

if replacements == len(slugs):
    with open(books_data_path, "w", encoding="utf-8") as f:
        f.write(updated_content)
    print("Successfully wrote updated lib/db/booksData.ts")
else:
    print("Aborting write because not all slugs matched.")
