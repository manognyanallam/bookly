import os
import re
import mutagen.mp3

def verify_catalog():
    books_data_path = os.path.join('lib', 'db', 'booksData.ts')
    with open(books_data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    book_matches = list(re.finditer(r"id:\s*['\"]([a-z0-9\-]+)['\"],\s*\n\s*slug:\s*['\"]([a-z0-9\-]+)['\"]", content))
    print("=" * 95)
    print(f"{'#':2} | {'Book Slug':37} | {'Genre':32} | {'Ch':2} | {'Duration':8} | {'Status'}")
    print("=" * 95)

    audio_books_count = 0
    all_ok = True

    for idx, match in enumerate(book_matches, start=1):
        book_id = match.group(1)
        start_pos = match.start()
        end_pos = book_matches[idx].start() if idx < len(book_matches) else len(content)
        block = content[start_pos:end_pos]

        genre_m = re.search(r"genre:\s*['\"]([^'\"]+)['\"]", block)
        genre = genre_m.group(1) if genre_m else "N/A"

        has_audio_m = re.search(r"hasAudio:\s*(true|false)", block)
        has_audio = has_audio_m.group(1) == 'true' if has_audio_m else False

        chap_matches = re.findall(r"id:\s*['\"]c\d+['\"]", block)
        chap_count = len(chap_matches)

        audio_file = os.path.join('public', 'audio', f"{book_id}.mp3")
        if has_audio:
            audio_books_count += 1
            if os.path.exists(audio_file):
                mp3_info = mutagen.mp3.MP3(audio_file)
                real_dur = mp3_info.info.length
                mins = int(real_dur // 60)
                secs = int(real_dur % 60)
                status = f"VERIFIED ({mins:02d}:{secs:02d})"
            else:
                status = "MISSING FILE"
                all_ok = False
        else:
            status = "STUB (hasAudio: false)"

        dur_str = f"{mins:02d}:{secs:02d}" if has_audio and os.path.exists(audio_file) else "N/A"
        print(f"{idx:02d} | {book_id:37} | {genre:32} | {chap_count:2} | {dur_str:8} | {status}")

    print("=" * 95)
    print(f"Total audio summaries verified: {audio_books_count}/19 required")
    print("OVERALL HEALTH STATUS        :", "100% PRODUCTION READY" if all_ok and audio_books_count == 19 else "INCOMPLETE")
    print("=" * 95)

if __name__ == '__main__':
    verify_catalog()
