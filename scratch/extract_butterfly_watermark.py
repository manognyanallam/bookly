import math
from PIL import Image, ImageFilter

img = Image.open('public/covers/butterfly_headphones.jpg').convert('RGB')
w, h = img.size

# Create RGBA image
rgba = Image.new('RGBA', (w, 640), (0, 0, 0, 0))

def color_dist(c1, c2):
    return math.sqrt((c1[0]-c2[0])**2 + (c1[1]-c2[1])**2 + (c1[2]-c2[2])**2)

# Estimate background color as a smooth 2D field from sampled boundary points
# Corners:
# (0, 0): (186, 199, 174)
# (w, 0): (187, 200, 175)
# (0, 640): (199, 210, 186)
# (w, 640): (200, 211, 187)

pixels = img.load()
out_pixels = rgba.load()

for y in range(640):
    # Center bottom exclusion for the book emblem and Bookly text below butterfly
    # Butterfly body ends around y=575 in center (x: 400 to 520)
    for x in range(w):
        # Exclude center below y=580
        if y > 575 and 390 <= x <= 540:
            out_pixels[x, y] = (0, 0, 0, 0)
            continue
        
        # Exclude anything below y=640
        if y > 635 and 350 <= x <= 580:
            out_pixels[x, y] = (0, 0, 0, 0)
            continue

        r, g, b = pixels[x, y]
        
        # Expected background color at (x, y)
        t_y = y / 640.0
        t_x = x / float(w)
        bg_r = 186.0 + 13.0 * t_y + (t_x - 0.5) * 1.5
        bg_g = 199.0 + 11.0 * t_y + (t_x - 0.5) * 1.5
        bg_b = 174.0 + 12.0 * t_y + (t_x - 0.5) * 1.5
        
        dist = color_dist((r, g, b), (bg_r, bg_g, bg_b))
        
        # Soft transition:
        # If dist <= 14: background -> alpha = 0
        # If dist >= 28: foreground -> alpha = 255
        if dist <= 14:
            alpha = 0
        elif dist >= 28:
            alpha = 255
        else:
            alpha = int(255 * (dist - 14) / (28 - 14))
            
        out_pixels[x, y] = (r, g, b, alpha)

# Find tight bounding box of non-zero alpha
bbox = rgba.getbbox()
print("Tight Bounding Box:", bbox)
cropped = rgba.crop(bbox)

# Add subtle margin of 10px
final_img = Image.new('RGBA', (cropped.width + 20, cropped.height + 20), (0, 0, 0, 0))
final_img.paste(cropped, (10, 10))

# Save to public/brand/butterfly_watermark.png
import os
os.makedirs('public/brand', exist_ok=True)
final_img.save('public/brand/butterfly_watermark.png')
print(f"Saved public/brand/butterfly_watermark.png: {final_img.size}")
