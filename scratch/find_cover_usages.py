import os
import re

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
search_dirs = ["app", "components", "lib"]

results = []
for d in search_dirs:
    dir_path = os.path.join(base_dir, d)
    for root, _, files in os.walk(dir_path):
        for file in files:
            if file.endswith((".ts", ".tsx", ".js", ".jsx")):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    if "coverImage" in content or "cover" in content.lower():
                        matches = [i for i, line in enumerate(content.splitlines(), 1) if "coverImage" in line]
                        if matches:
                            rel_path = os.path.relpath(file_path, base_dir)
                            results.append((rel_path, matches))

for path, lines in sorted(results):
    print(f"{path}: lines {lines}")
