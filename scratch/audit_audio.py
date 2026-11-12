import os
import mutagen
import mutagen.mp3

audio_dir = os.path.join("public", "audio")
files = [f for f in os.listdir(audio_dir) if f.endswith(".mp3")]

print(f"{'Filename':<28} | {'Size (KB)':<10} | {'Duration (s)':<12} | {'Duration (m:s)':<14} | {'Bitrate':<8} | {'Sample Rate'}")
print("-" * 90)

for f in sorted(files):
    path = os.path.join(audio_dir, f)
    size_kb = os.path.getsize(path) / 1024
    try:
        mp3 = mutagen.mp3.MP3(path)
        length = mp3.info.length
        mins = int(length // 60)
        secs = int(length % 60)
        bitrate = f"{mp3.info.bitrate // 1000}k"
        sr = f"{mp3.info.sample_rate}Hz"
        print(f"{f:<28} | {size_kb:<10.1f} | {length:<12.2f} | {mins:02d}:{secs:02d}        | {bitrate:<8} | {sr}")
    except Exception as e:
        print(f"{f:<28} | {size_kb:<10.1f} | ERROR: {e}")
