import os
import sys
import json
import re
import mutagen.mp3

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
te_audio_dir = os.path.join(base_dir, "public", "audio", "te")
te_scripts_dir = os.path.join(base_dir, "scripts", "te")
book_details_path = os.path.join(base_dir, "lib", "db", "bookDetailsData.ts")
scratch_dir = os.path.join(base_dir, "scratch")

# Find all batch result files
batch_chapters = {}
for fname in os.listdir(scratch_dir):
    if fname.startswith("batch_results_") and fname.endswith(".json"):
        fpath = os.path.join(scratch_dir, fname)
        try:
            with open(fpath, "r", encoding="utf-8") as f:
                data = json.load(f)
                for slug, info in data.items():
                    if "chapters" in info:
                        batch_chapters[slug] = info
        except Exception as e:
            print(f"Error reading {fname}: {e}")

# Read existing bookDetailsData.ts
with open(book_details_path, "r", encoding="utf-8") as f:
    content = f.read()

# For every MP3 in public/audio/te/
te_mp3s = [f[:-4] for f in os.listdir(te_audio_dir) if f.endswith(".mp3")]
print(f"Found {len(te_mp3s)} Telugu MP3 files in public/audio/te/")

for slug in te_mp3s:
    mp3_path = os.path.join(te_audio_dir, f"{slug}.mp3")
    try:
        m = mutagen.mp3.MP3(mp3_path)
        total_duration = int(round(m.info.length))
    except Exception as e:
        print(f"Skipping {slug}: cannot read MP3 ({e})")
        continue

    # Get chapters
    chapters = []
    if slug in batch_chapters:
        raw_ch = batch_chapters[slug]["chapters"]
        for idx, c in enumerate(raw_ch, 1):
            chapters.append({
                "id": f"te-c{idx}",
                "title": c["title"],
                "timestamp": c["timestamp"],
                "duration": c["duration"]
            })
    else:
        # Parse from markdown script
        md_path = os.path.join(te_scripts_dir, f"{slug}.md")
        if os.path.exists(md_path):
            with open(md_path, "r", encoding="utf-8") as f:
                lines = f.readlines()
            ch_titles = []
            ch_word_counts = []
            curr_title = None
            curr_words = 0
            for line in lines:
                l = line.strip()
                if l.startswith("## "):
                    if curr_title:
                        ch_titles.append(curr_title)
                        ch_word_counts.append(curr_words)
                    curr_title = l.replace("## ", "").strip()
                    curr_words = 0
                elif curr_title and l and not l.startswith("---") and not l.startswith("**"):
                    curr_words += len(l.split())
            if curr_title:
                ch_titles.append(curr_title)
                ch_word_counts.append(curr_words)

            total_words = sum(ch_word_counts) or 1
            curr_ts = 0.0
            for idx, (t, wc) in enumerate(zip(ch_titles, ch_word_counts), 1):
                prop_dur = int(round(total_duration * (wc / total_words)))
                chapters.append({
                    "id": f"te-c{idx}",
                    "title": t,
                    "timestamp": int(round(curr_ts)),
                    "duration": prop_dur
                })
                curr_ts += prop_dur

    if not chapters:
        print(f"Warning: No chapters found for {slug}")
        continue

    # Now format telugu fields in TS
    chapters_ts = "[\n"
    for c in chapters:
        title_escaped = c['title'].replace("'", "\\'")
        chapters_ts += f"      {{ id: '{c['id']}', title: '{title_escaped}', timestamp: {c['timestamp']}, duration: {c['duration']} }},\n"
    chapters_ts += "    ]"

    telugu_block = f"""    teluguAudioUrl: '/audio/te/{slug}.mp3',
    teluguDuration: {total_duration},
    teluguChapters: {chapters_ts}"""

    # Check if this slug is in bookDetailsData.ts
    slug_pattern = rf"('{slug}':\s*\{{[^}}]*?collegeLessons:\s*\[[\s\S]*?\]\s*,?)"
    match = re.search(slug_pattern, content)
    if match:
        # Check if already has teluguAudioUrl
        has_te = re.search(rf"'{slug}':\s*\{{[\s\S]*?teluguAudioUrl:", content)
        if has_te:
            # Replace existing telugu fields
            old_te_pattern = rf"('{slug}':\s*\{{[\s\S]*?collegeLessons:\s*\[[\s\S]*?\]\s*,?\s*)teluguAudioUrl:[\s\S]*?teluguChapters:\s*\[[\s\S]*?\]\s*"
            content = re.sub(old_te_pattern, rf"\1{telugu_block}\n", content)
            print(f"Updated existing Telugu metadata for {slug}")
        else:
            # Add telugu block right after collegeLessons: [...]
            insert_pattern = rf"('{slug}':\s*\{{[\s\S]*?collegeLessons:\s*\[[\s\S]*?\]\s*)"
            content = re.sub(insert_pattern, rf"\1,\n{telugu_block}\n", content)
            print(f"Added new Telugu metadata for {slug}")
    else:
        print(f"Could not find slug '{slug}' in bookDetailsData.ts")

with open(book_details_path, "w", encoding="utf-8") as f:
    f.write(content)

print("\nSuccessfully synchronized lib/db/bookDetailsData.ts!")
