import urllib.request
import re

url = 'http://localhost:3000/discover'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
    print('HTML length:', len(html))
    css_links = re.findall(r'<link[^>]*rel=[\'"]stylesheet[\'"][^>]*href=[\'"]([^\'"]+)[\'"]', html)
    print('CSS links found in HTML:', css_links)
    for link in css_links:
        full_url = f"http://localhost:3000{link}" if link.startswith('/') else link
        try:
            with urllib.request.urlopen(full_url) as cresp:
                cdata = cresp.read().decode('utf-8')
                print(f"CSS file {link}: HTTP {cresp.status}, length: {len(cdata)} bytes")
                # Check if Tailwind rules exist
                has_tailwind = 'bg-forest' in cdata or 'grid' in cdata or 'flex' in cdata
                print(f"  Contains Tailwind classes: {has_tailwind}")
        except Exception as ce:
            print(f"Failed to fetch CSS {link}: {ce}")

    body_classes = re.findall(r'<body[^>]*class=[\'"]([^\'"]+)[\'"]', html)
    print('Body classes:', body_classes)

    # Check for book cards
    book_titles = re.findall(r'<h3[^>]*>([^<]+)</h3>', html)
    print(f'Book titles found in rendered HTML ({len(book_titles)}):', book_titles[:5])

except Exception as e:
    print('Error fetching discover:', e)
