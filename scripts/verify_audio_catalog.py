import os
import sys
import json
import urllib.request
from mutagen.mp3 import MP3

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
public_audio_en = os.path.join(base_dir, "public", "audio")
public_audio_te = os.path.join(base_dir, "public", "audio", "te")

print("="*60)
print("VERIFYING TELUGU (తెలుగు) MASTER AUDIO FILES")
print("="*60)

te_files = [f for f in os.listdir(public_audio_te) if f.endswith(".mp3")]
print(f"Total Telugu audio files found: {len(te_files)}")

for f in sorted(te_files):
    path = os.path.join(public_audio_te, f)
    audio = MP3(path)
    dur_sec = audio.info.length
    mins = int(dur_sec // 60)
    secs = int(dur_sec % 60)
    size_mb = os.path.getsize(path) / (1024 * 1024)
    bitrate = getattr(audio.info, 'bitrate', 0) // 1000
    samplerate = getattr(audio.info, 'sample_rate', 0)
    print(f"  * {f:<35} Duration: {mins:02d}:{secs:02d} ({dur_sec:.1f}s) | Size: {size_mb:.2f} MB | {bitrate} kbps, {samplerate} Hz")

print("\n" + "="*60)
print("VERIFYING ORIGINAL ENGLISH AUDIO FILES")
print("="*60)

en_files = [f for f in os.listdir(public_audio_en) if f.endswith(".mp3")]
print(f"Total English audio files found: {len(en_files)}")

for f in sorted(en_files):
    path = os.path.join(public_audio_en, f)
    audio = MP3(path)
    dur_sec = audio.info.length
    mins = int(dur_sec // 60)
    secs = int(dur_sec % 60)
    size_mb = os.path.getsize(path) / (1024 * 1024)
    print(f"  * {f:<35} Duration: {mins:02d}:{secs:02d} ({dur_sec:.1f}s) | Size: {size_mb:.2f} MB")

print("\n" + "="*60)
print("CHECKING HTTP ACCESSIBILITY FOR ALL AUDIO VIA NEXT DEV SERVER")
print("="*60)

http_success = 0
for f in te_files:
    url = f"http://localhost:3000/audio/te/{f}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        if resp.status == 200:
            http_success += 1

for f in en_files:
    url = f"http://localhost:3000/audio/{f}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        if resp.status == 200:
            http_success += 1

print(f"All {http_success} audio files ({len(te_files)} Telugu + {len(en_files)} English) successfully accessible over HTTP 200!")
