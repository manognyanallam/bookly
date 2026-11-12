from PIL import Image, ImageFilter
import math

img = Image.open('public/covers/butterfly_headphones.jpg').convert('RGB')
w, h = img.size

# Let's inspect where the butterfly wings end vertically on left and right
# In the original image:
# Left wing bottom tip is around x=260, y=650
# Right wing bottom tip is around x=670, y=650
# The Bookly book emblem is at x=440-490, y=650-680
# The Bookly text is at y >= 680
# The little butterfly on the 'y' is around x=730-810, y=670-760

# Let's crop just the main butterfly with headphones:
# y from 0 to 650 (or 655 where the lower wing tips curve back up)
print(f"Original size: {w}x{h}")

# Let's inspect rows 630 to 660 in details:
for y in range(630, 665, 5):
    # check x near center (400 to 520) - this should be background
    center_colors = [img.getpixel((x, y)) for x in range(430, 500)]
    avg_c = (sum(c[0] for c in center_colors)/len(center_colors),
             sum(c[1] for c in center_colors)/len(center_colors),
             sum(c[2] for c in center_colors)/len(center_colors))
    print(f"y={y}: center avg={avg_c}")
