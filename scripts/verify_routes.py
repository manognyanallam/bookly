import urllib.request
import sys

# Ensure UTF-8 output on Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

routes = [
    ('/books/rich-dad-poor-dad', 'Robert Kiyosaki', 'తెలుగు'),
    ('/books/psychology-of-money', 'Morgan Housel', 'తెలుగు'),
    ('/books/atomic-habits', 'James Clear', 'తెలుగు'),
    ('/books/the-richest-man-in-babylon', 'George S. Clason', 'తెలుగు'),
    ('/books/the-almanack-of-naval-ravikant', 'Eric Jorgenson', 'తెలుగు'),
    ('/books/deep-work', 'Cal Newport', 'తెలుగు'),
    ('/books/nonexistent-book-slug-xyz', 'Book Summary Not Found', 'Browse Catalog')
]

all_passed = True
for r, kw1, kw2 in routes:
    req = urllib.request.Request(f'http://localhost:3000{r}', headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            assert kw1 in content, f'{kw1} not in {r}'
            assert kw2 in content, f'{kw2} not in {r}'
            print(f'[PASS] {r}: verified "{kw1}" and "{kw2}"')
    except Exception as e:
        print(f'[FAIL] {r}: {e}')
        all_passed = False

if all_passed:
    print('\nALL 7 ROUTE TESTS PASSED PERFECTLY!')
else:
    sys.exit(1)
