import os
import mutagen.mp3
import sys

sys.path.insert(0, '.')
from scripts.generate_audio import parse_markdown_script

books = [
    ('atomic-habits', 'Atomic Habits', 'James Clear'),
    ('deep-work', 'Deep Work', 'Cal Newport'),
    ('psychology-of-money', 'The Psychology of Money', 'Morgan Housel'),
    ('sapiens', 'Sapiens', 'Yuval Noah Harari'),
    ('the-alchemist', 'The Alchemist', 'Paulo Coelho'),
    ('thinking-fast-and-slow', 'Thinking, Fast and Slow', 'Daniel Kahneman'),
    ('zero-to-one', 'Zero to One', 'Peter Thiel')
]

print(f"{'Slug':<24} | {'Words':<6} | {'Duration':<10} | {'Seconds':<8} | {'Size MB':<8} | {'Status'}")
print("-" * 76)

for slug, title, author in books:
    script_path = f"scripts/{slug}.md"
    parsed = parse_markdown_script(script_path)
    mp3_path = f"public/audio/{slug}.mp3"
    info = mutagen.mp3.MP3(mp3_path).info
    dur = info.length
    mins = int(dur // 60)
    secs = int(dur % 60)
    size_mb = os.path.getsize(mp3_path) / (1024 * 1024)
    status = "VERIFIED 15-MIN" if 780 <= dur <= 1020 else "OUT OF BOUNDS"
    print(f"{slug:<24} | {parsed['total_words']:>5}  | {mins:02d}:{secs:02d}      | {dur:>6.1f}s  | {size_mb:>6.2f}MB | {status}")
