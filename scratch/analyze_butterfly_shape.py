from PIL import Image
import math

img = Image.open('public/covers/butterfly_headphones.jpg').convert('RGB')
w, h = img.size

# Let's inspect where the butterfly actually starts:
# Check vertical column from top to bottom at center x=464:
# Headphones headband
for y in range(40, 200, 10):
    p = img.getpixel((464, y))
    print(f"y={y}: {p}")

# Check horizontal row from left to right at y=350 (through wings and headphones):
row = [img.getpixel((x, 350)) for x in range(w)]
# Find first pixel that is significantly different from background (190, 202, 178)
for x in range(50, 400, 10):
    p = row[x]
    d = math.sqrt((p[0]-190)**2 + (p[1]-202)**2 + (p[2]-178)**2)
    if d > 30:
        print(f"Left wing start at y=350 around x={x}: {p}, dist={d:.1f}")
        break

for x in range(w-50, 500, -10):
    p = row[x]
    d = math.sqrt((p[0]-190)**2 + (p[1]-202)**2 + (p[2]-178)**2)
    if d > 30:
        print(f"Right wing end at y=350 around x={x}: {p}, dist={d:.1f}")
        break
