from PIL import Image

img = Image.open('public/covers/butterfly_headphones.jpg')
w, h = img.size
print(f"Image dimensions: {w}x{h}")

# Background color sampling
corner_pixels = [img.getpixel((x, y)) for x in [10, 20, 30] for y in [10, 20, 30]]
avg_r = sum(p[0] for p in corner_pixels) / len(corner_pixels)
avg_g = sum(p[1] for p in corner_pixels) / len(corner_pixels)
avg_b = sum(p[2] for p in corner_pixels) / len(corner_pixels)
print(f"Top-left background RGB: ({avg_r:.1f}, {avg_g:.1f}, {avg_b:.1f})")
