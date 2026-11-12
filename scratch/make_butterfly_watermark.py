import os
import math
from PIL import Image, ImageFilter

# Open original branding artwork
img = Image.open('public/covers/butterfly_headphones.jpg').convert('RGB')
w, h = img.size

# The butterfly with headphones region
# Top: ~65, Bottom: ~640, Left: ~110, Right: ~870
crop_h = 642

# We will build an alpha mask
# Background color in the artwork has a radial/linear soft illumination
# Let's compute a background map or sample background color:
# Top corners: (186, 199, 174)
# Left edge (x=10): y=100 -> (189, 201, 176), y=300 -> (193, 204, 180), y=600 -> (199, 210, 186)
# Center background (around antennae/between headphones headband): (220, 230, 206)

mask = Image.new('L', (w, crop_h), 0)
mask_pixels = mask.load()
img_pixels = img.load()

for y in range(crop_h):
    # Exclude the area below butterfly body in the center:
    # Body tip is at (464, 575)
    for x in range(w):
        # Exclude below body tip in the center (where book emblem and Bookly text sit)
        if y >= 576 and 385 <= x <= 545:
            mask_pixels[x, y] = 0
            continue
        
        # Exclude any pixels below y=638 between wings
        if y >= 635 and 330 <= x <= 600:
            mask_pixels[x, y] = 0
            continue

        # Exclude extreme borders
        if x < 40 or x > w - 40 or y < 40:
            mask_pixels[x, y] = 0
            continue

        r, g, b = img_pixels[x, y]
        
        # Local background estimate
        # Normalized coordinates:
        nx = x / float(w)
        ny = y / float(crop_h)
        
        # Distance from center for radial lighting glow in original image:
        # The light is centered near (w/2, 250)
        cx = 0.5
        cy = 250.0 / crop_h
        dist_c = math.sqrt((nx - cx)**2 + (ny - cy)**2)
        
        # Lighting gradient: center is brighter (~210, 222, 196), edges are (~188, 200, 175)
        # and bottom edges are (~198, 209, 185)
        bg_brightness = 190.0 + 10.0 * ny + max(0.0, 1.0 - dist_c * 1.5) * 18.0
        # Color ratios in background: G/R ~ 1.06, B/R ~ 0.93
        exp_r = bg_brightness
        exp_g = bg_brightness * 1.06
        exp_b = bg_brightness * 0.93
        
        # Color distance:
        d = math.sqrt((r - exp_r)**2 + (g - exp_g)**2 + (b - exp_b)**2)
        
        # Check if this pixel is foreground or background
        # Notice: wings are pearl/cream/sage with gold borders (high contrast)
        # Headphones are sage leather with gold metallic bands (high contrast)
        # Antennae are gold thin lines with beads at tips
        if d > 24:
            # Foreground
            mask_pixels[x, y] = 255
        elif d > 15:
            # Feathered edge
            mask_pixels[x, y] = int(255 * (d - 15) / (24 - 15))
        else:
            mask_pixels[x, y] = 0

# Feather the mask slightly for beautiful anti-aliasing
smooth_mask = mask.filter(ImageFilter.GaussianBlur(radius=0.8))

# Assemble RGBA image
rgba = Image.new('RGBA', (w, crop_h), (0, 0, 0, 0))
rgba.paste(img.crop((0, 0, w, crop_h)), (0, 0), mask=smooth_mask)

# Find tight bounding box
bbox = smooth_mask.getbbox()
print("Final Butterfly Bounding Box:", bbox)

cropped_butterfly = rgba.crop(bbox)

# Add 16px padding around it
final_w = cropped_butterfly.width + 32
final_h = cropped_butterfly.height + 32
canvas = Image.new('RGBA', (final_w, final_h), (0, 0, 0, 0))
canvas.paste(cropped_butterfly, (16, 16))

# Save output
os.makedirs('public/brand', exist_ok=True)
canvas.save('public/brand/butterfly_watermark.png', 'PNG')
print(f"Successfully generated public/brand/butterfly_watermark.png! Size: {canvas.size}")
