"""
BOOKLY TELUGU AUDIO PRODUCTION PIPELINE
Generates natural, studio-quality Telugu (తెలుగు) audio summaries using te-IN-MohanNeural.
Saves master audio to public/audio/te/<slug>.mp3.
"""

import os
import sys
import re
import shutil
import asyncio
import argparse
import mutagen.mp3

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

def parse_telugu_markdown_script(script_path):
    """Parses a Telugu markdown script into metadata and chapters."""
    if not os.path.exists(script_path):
        raise FileNotFoundError(f"Telugu script file not found: {script_path}")

    with open(script_path, "r", encoding="utf-8") as f:
        text = f.read()

    lines = text.splitlines()
    title = ""
    author = ""
    chapters = []
    current_chapter_title = None
    current_lines = []

    for line in lines:
        line_clean = line.strip()
        if line_clean.startswith("# ") and not title:
            title = line_clean.replace("# ", "").split(":")[0].strip()
        elif line_clean.startswith("**Author:**") and not author:
            author = line_clean.replace("**Author:**", "").strip()
        elif line_clean.startswith("## "):
            if current_chapter_title and current_lines:
                chapters.append({
                    "title": current_chapter_title,
                    "text": " ".join(current_lines),
                    "word_count": len(" ".join(current_lines).split())
                })
                current_lines = []
            current_chapter_title = line_clean.replace("## ", "").strip()
        elif current_chapter_title and line_clean:
            if not line_clean.startswith("---") and not line_clean.startswith("**"):
                cleaned_line = re.sub(r"\*+([^*]+)\*+", r"\1", line_clean)
                current_lines.append(cleaned_line)

    if current_chapter_title and current_lines:
        chapters.append({
            "title": current_chapter_title,
            "text": " ".join(current_lines),
            "word_count": len(" ".join(current_lines).split())
        })

    total_words = sum(c["word_count"] for c in chapters)
    return {
        "title": title,
        "author": author,
        "chapters": chapters,
        "total_words": total_words
    }

async def generate_chapter_audio(text, voice, rate, output_path, retries=3, timeout_secs=60):
    """Generates audio for a single chapter using edge-tts with timeout and retry."""
    import edge_tts
    for attempt in range(1, retries + 1):
        try:
            communicate = edge_tts.Communicate(text=text, voice=voice, rate=rate)
            await asyncio.wait_for(communicate.save(output_path), timeout=timeout_secs)
            if os.path.exists(output_path) and os.path.getsize(output_path) > 1000:
                return
        except Exception as e:
            print(f"      [Retry {attempt}/{retries}] Error generating Telugu chapter audio: {e}", flush=True)
            if os.path.exists(output_path):
                try:
                    os.remove(output_path)
                except OSError:
                    pass
            if attempt == retries:
                raise
            await asyncio.sleep(2 * attempt)

async def produce_telugu_book_summary(slug, voice="te-IN-MohanNeural", rate="+0%"):
    """Main production function for a Telugu book summary."""
    script_path = os.path.join("scripts", "te", f"{slug}.md")
    public_audio_te_dir = os.path.join("public", "audio", "te")
    os.makedirs(public_audio_te_dir, exist_ok=True)
    master_output_path = os.path.join(public_audio_te_dir, f"{slug}.mp3")
    temp_dir = os.path.join("scratch", "audio_temp_te", slug)
    os.makedirs(temp_dir, exist_ok=True)

    print("=" * 70)
    print(f"BOOKLY TELUGU AUDIO PIPELINE: {slug.upper()}")
    print("=" * 70)

    parsed = parse_telugu_markdown_script(script_path)
    print(f"Book Title   : {parsed['title']}")
    print(f"Author       : {parsed['author']}")
    print(f"Total Chapters: {len(parsed['chapters'])}")
    print(f"Spoken Words : {parsed['total_words']:,} Telugu words")

    print(f"\n--- Generating Telugu Chapters (Voice: {voice}, Rate: {rate}) ---")
    chapter_files = []
    chapters_metadata = []
    current_timestamp = 0.0

    for i, ch in enumerate(parsed['chapters'], start=1):
        ch_filename = f"ch_te_{i:02d}.mp3"
        ch_path = os.path.join(temp_dir, ch_filename)

        already_valid = False
        if os.path.exists(ch_path) and os.path.getsize(ch_path) > 2000:
            try:
                test_info = mutagen.mp3.MP3(ch_path)
                if test_info.info.length > 5.0:
                    already_valid = True
                    print(f"[{i}/{len(parsed['chapters'])}] Using cached: {ch['title']}...", flush=True)
            except Exception:
                already_valid = False

        spoken_text = f"{ch['title']}. {ch['text']}"
        if not already_valid:
            print(f"[{i}/{len(parsed['chapters'])}] Generating: {ch['title']} ({ch['word_count']} words)...", flush=True)
            await generate_chapter_audio(spoken_text, voice, rate, ch_path)

        audio_info = mutagen.mp3.MP3(ch_path)
        ch_duration = audio_info.info.length

        chapters_metadata.append({
            "id": f"c{i}",
            "title": ch['title'],
            "timestamp": int(round(current_timestamp)),
            "duration": int(round(ch_duration)),
            "word_count": ch['word_count']
        })

        chapter_files.append(ch_path)
        current_timestamp += ch_duration
        print(f"      -> Duration: {ch_duration:.2f}s | Starts at: {int(current_timestamp - ch_duration)}s", flush=True)

    # Concatenate into Master MP3
    print(f"\n--- Assembling Master Telugu MP3 -> {master_output_path} ---")
    with open(master_output_path, "wb") as master_file:
        for ch_file in chapter_files:
            with open(ch_file, "rb") as cf:
                master_file.write(cf.read())

    master_info = mutagen.mp3.MP3(master_output_path)
    final_duration_secs = master_info.info.length
    final_mins = int(final_duration_secs // 60)
    final_secs = int(final_duration_secs % 60)
    filesize_mb = os.path.getsize(master_output_path) / (1024 * 1024)

    print("\n" + "=" * 70)
    print("TELUGU AUDIO VERIFICATION REPORT")
    print("=" * 70)
    print(f"Output File      : {master_output_path}")
    print(f"File Size        : {filesize_mb:.2f} MB")
    print(f"Audio Format     : MPEG-1 Layer 3 (MP3)")
    print(f"Sample Rate      : {master_info.info.sample_rate} Hz")
    print(f"Bitrate          : {master_info.info.bitrate // 1000} kbps")
    print(f"Total Duration   : {final_mins}:{final_secs:02d} ({final_duration_secs:.2f} seconds)")
    print("=" * 70)

    # Print Chapter Summary Table
    print("\nTELUGU CHAPTER TIMESTAMPS:")
    print("-" * 70)
    for idx, c in enumerate(chapters_metadata, 1):
        ts_m, ts_s = divmod(c['timestamp'], 60)
        len_m, len_s = divmod(c['duration'], 60)
        print(f"Chapter {idx} | {ts_m:02d}:{ts_s:02d} | {len_m:02d}:{len_s:02d} | {c['title']}")

    # Cleanup temp files
    try:
        shutil.rmtree(temp_dir)
    except Exception:
        pass

    return {
        "slug": slug,
        "audio_url": f"/audio/te/{slug}.mp3",
        "duration_seconds": int(round(final_duration_secs)),
        "formatted_duration": f"{final_mins}:{final_secs:02d}",
        "chapters": chapters_metadata,
        "filesize_mb": round(filesize_mb, 2)
    }

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Bookly Telugu Audio Pipeline")
    parser.add_argument("--slug", type=str, default="rich-dad-poor-dad")
    parser.add_argument("--voice", type=str, default="te-IN-MohanNeural")
    parser.add_argument("--rate", type=str, default="+0%")
    args = parser.parse_args()

    result = asyncio.run(produce_telugu_book_summary(
        slug=args.slug,
        voice=args.voice,
        rate=args.rate
    ))
    print("\nRESULT_JSON:", result)
