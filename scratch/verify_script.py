import sys
import os
sys.path.insert(0, os.path.abspath("."))
from scripts.generate_audio import parse_markdown_script

res = parse_markdown_script("scripts/atomic-habits.md")
print(f"Title: {res['title']}")
print(f"Author: {res['author']}")
print(f"Total Words: {res['total_words']}")
print(f"Expected Duration @ 135 WPM: {res['total_words'] / 135:.2f} minutes ({(res['total_words'] / 135)*60:.0f} seconds)")
print("\nChapters:")
for i, c in enumerate(res['chapters'], 1):
    print(f"  {i}. {c['title']} - {c['word_count']} words")
