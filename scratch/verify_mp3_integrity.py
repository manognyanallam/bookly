import os
import mutagen
from mutagen.mp3 import MP3

mp3_path = "public/audio/atomic-habits.mp3"
audio = MP3(mp3_path)

print(f"File: {mp3_path}")
print(f"File size: {os.path.getsize(mp3_path) / (1024*1024):.2f} MB")
print(f"Length: {audio.info.length:.2f} seconds ({int(audio.info.length//60)}m {int(audio.info.length%60)}s)")
print(f"Bitrate: {audio.info.bitrate / 1000} kbps")
print(f"Sample Rate: {audio.info.sample_rate} Hz")
print(f"Channels: {audio.info.channels}")
print(f"MPEG Layer: {audio.info.layer}")
print(f"MPEG Version: {audio.info.version}")
print(f"Encoder: {audio.info.encoder_info if hasattr(audio.info, 'encoder_info') else 'Standard'}")
