from PIL import Image

img = Image.open('public/covers/butterfly_headphones.jpg').convert('RGB')
w, h = img.size

# Background model: sample background from corners and edges
bg_samples = []
for x in [5, 10, 20, 50, w-50, w-20, w-10, w-5]:
    for y in [5, 10, 20, 50, 100, 200, 300, 400, 500]:
        bg_samples.append(img.getpixel((x, y)))

avg_bg = (
    sum(p[0] for p in bg_samples)/len(bg_samples),
    sum(p[1] for p in bg_samples)/len(bg_samples),
    sum(p[2] for p in bg_samples)/len(bg_samples)
)
print("Estimated BG:", avg_bg)

def color_dist(c1, c2):
    return ((c1[0]-c2[0])**2 + (c1[1]-c2[1])**2 + (c1[2]-c2[2])**2)**0.5

# Look at rows y from 0 to 650
# Let's find min_x, max_x, min_y, max_y for the butterfly
min_x, max_x = w, 0
min_y, max_y = h, 0

for y in range(0, 650):
    for x in range(w):
        # Local background estimate depending on y (gentle vertical gradient)
        # Top is around (186, 199, 174), mid is around (195, 206, 182)
        local_bg_g = 199 + (y / 650.0) * 10
        local_bg_r = 186 + (y / 650.0) * 12
        local_bg_b = 174 + (y / 650.0) * 11
        d = color_dist(img.getpixel((x, y)), (local_bg_r, local_bg_g, local_bg_b))
        if d > 28:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Butterfly Bounding Box: X=[{min_x}, {max_x}], Y=[{min_y}, {max_y}]")
print(f"Width={max_x - min_x}, Height={max_y - min_y}")
