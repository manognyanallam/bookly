import os
import sys
from PIL import Image

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
covers_dir = os.path.join(base_dir, "public", "covers", "books")

files = os.listdir(covers_dir)
print(f"Total cover files in public/covers/books: {len(files)}")

for f in sorted(files):
    p = os.path.join(covers_dir, f)
    img = Image.open(p)
    w, h = img.size
    ratio = w / h
    size_kb = os.path.getsize(p) / 1024
    print(f"{f:<42} | Size: {size_kb:5.1f} KB | Dim: {w}x{h} | Aspect: {ratio:.3f} | Fmt: {img.format} | Mode: {img.mode}")
