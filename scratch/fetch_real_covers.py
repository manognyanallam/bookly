import os
import sys
import json
import urllib.request
import urllib.parse
from PIL import Image
import io

base_dir = r"c:\Users\megha\OneDrive\Desktop\BOOKLY"
covers_dir = os.path.join(base_dir, "public", "covers", "books")
os.makedirs(covers_dir, exist_ok=True)

# List of 19 books with verified metadata, primary ISBN, and secondary ISBN/sources
books_metadata = [
    {
        "id": "atomic-habits",
        "slug": "atomic-habits",
        "title": "Atomic Habits",
        "author": "James Clear",
        "year": 2018,
        "publisher": "Avery / Penguin Random House",
        "isbn13": "9780735211292",
        "isbn10": "0735211299"
    },
    {
        "id": "deep-work",
        "slug": "deep-work",
        "title": "Deep Work",
        "author": "Cal Newport",
        "year": 2016,
        "publisher": "Grand Central Publishing",
        "isbn13": "9781455586691",
        "isbn10": "1455586692"
    },
    {
        "id": "psychology-of-money",
        "slug": "psychology-of-money",
        "title": "The Psychology of Money",
        "author": "Morgan Housel",
        "year": 2020,
        "publisher": "Harriman House",
        "isbn13": "9780857197689",
        "isbn10": "0857197681"
    },
    {
        "id": "the-alchemist",
        "slug": "the-alchemist",
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "year": 1988,
        "publisher": "HarperOne",
        "isbn13": "9780062315007",
        "isbn10": "0062315005"
    },
    {
        "id": "sapiens",
        "slug": "sapiens",
        "title": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "year": 2014,
        "publisher": "Harper",
        "isbn13": "9780062316097",
        "isbn10": "0062316095"
    },
    {
        "id": "thinking-fast-and-slow",
        "slug": "thinking-fast-and-slow",
        "title": "Thinking, Fast and Slow",
        "author": "Daniel Kahneman",
        "year": 2011,
        "publisher": "Farrar, Straus and Giroux",
        "isbn13": "9780374533557",
        "isbn10": "0374533555"
    },
    {
        "id": "zero-to-one",
        "slug": "zero-to-one",
        "title": "Zero to One",
        "author": "Peter Thiel",
        "year": 2014,
        "publisher": "Crown Business",
        "isbn13": "9780804139298",
        "isbn10": "0804139296"
    },
    {
        "id": "the-7-habits",
        "slug": "the-7-habits",
        "title": "The 7 Habits of Highly Effective People",
        "author": "Stephen R. Covey",
        "year": 1989,
        "publisher": "Simon & Schuster / Free Press",
        "isbn13": "9781982137274",
        "isbn10": "1982137274"
    },
    {
        "id": "rich-dad-poor-dad",
        "slug": "rich-dad-poor-dad",
        "title": "Rich Dad Poor Dad",
        "author": "Robert T. Kiyosaki",
        "year": 1997,
        "publisher": "Plata Publishing",
        "isbn13": "9781612680194",
        "isbn10": "1612680194"
    },
    {
        "id": "the-48-laws-of-power",
        "slug": "the-48-laws-of-power",
        "title": "The 48 Laws of Power",
        "author": "Robert Greene",
        "year": 1998,
        "publisher": "Penguin Books",
        "isbn13": "9780140280197",
        "isbn10": "0140280197"
    },
    {
        "id": "how-to-win-friends-and-influence-people",
        "slug": "how-to-win-friends-and-influence-people",
        "title": "How to Win Friends and Influence People",
        "author": "Dale Carnegie",
        "year": 1936,
        "publisher": "Simon & Schuster / Pocket Books",
        "isbn13": "9780671027032",
        "isbn10": "0671027034"
    },
    {
        "id": "the-laws-of-human-nature",
        "slug": "the-laws-of-human-nature",
        "title": "The Laws of Human Nature",
        "author": "Robert Greene",
        "year": 2018,
        "publisher": "Viking / Penguin",
        "isbn13": "9780525428145",
        "isbn10": "0525428143"
    },
    {
        "id": "never-split-the-difference",
        "slug": "never-split-the-difference",
        "title": "Never Split the Difference",
        "author": "Chris Voss",
        "year": 2016,
        "publisher": "Harper Business",
        "isbn13": "9780062407801",
        "isbn10": "0062407805"
    },
    {
        "id": "the-richest-man-in-babylon",
        "slug": "the-richest-man-in-babylon",
        "title": "The Richest Man in Babylon",
        "author": "George S. Clason",
        "year": 1926,
        "publisher": "Signet / Penguin",
        "isbn13": "9780451205360",
        "isbn10": "0451205367"
    },
    {
        "id": "think-and-grow-rich",
        "slug": "think-and-grow-rich",
        "title": "Think and Grow Rich",
        "author": "Napoleon Hill",
        "year": 1937,
        "publisher": "The Napoleon Hill Foundation / TarcherPerigee",
        "isbn13": "9781585424337",
        "isbn10": "1585424331"
    },
    {
        "id": "emotional-intelligence",
        "slug": "emotional-intelligence",
        "title": "Emotional Intelligence",
        "author": "Daniel Goleman",
        "year": 1995,
        "publisher": "Bantam / Random House",
        "isbn13": "9780553383713",
        "isbn10": "0553383710"
    },
    {
        "id": "the-intelligent-investor",
        "slug": "the-intelligent-investor",
        "title": "The Intelligent Investor",
        "author": "Benjamin Graham",
        "year": 1949,
        "publisher": "Harper Business",
        "isbn13": "9780060555665",
        "isbn10": "0060555661"
    },
    {
        "id": "lets-talk-money",
        "slug": "lets-talk-money",
        "title": "Let's Talk Money",
        "author": "Monika Halan",
        "year": 2018,
        "publisher": "Harper Business India",
        "isbn13": "9789352779390",
        "isbn10": "9352779399"
    },
    {
        "id": "the-almanack-of-naval-ravikant",
        "slug": "the-almanack-of-naval-ravikant",
        "title": "The Almanack of Naval Ravikant",
        "author": "Eric Jorgenson",
        "year": 2020,
        "publisher": "Magrathea Publishing",
        "isbn13": "9781544514215",
        "isbn10": "1544514212"
    }
]

print(f"Checking cover availability for {len(books_metadata)} books...")

results = []

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for b in books_metadata:
    slug = b["slug"]
    isbn = b["isbn13"]
    
    # Check Open Library
    ol_url = f"https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg?default=false"
    found = False
    img_data = None
    source = ""
    
    try:
        req = urllib.request.Request(ol_url, headers=headers)
        with urllib.request.urlopen(req, timeout=8) as resp:
            if resp.status == 200:
                data = resp.read()
                # Open Library returns 1x1 or tiny byte array when not found if default isn't respected
                if len(data) > 1000:
                    img_data = data
                    found = True
                    source = f"Open Library (ISBN {isbn})"
    except Exception as e:
        pass
        
    # If not found on Open Library by ISBN-13, try Google Books API
    if not found:
        try:
            query = urllib.parse.quote(f"isbn:{isbn}")
            gb_url = f"https://www.googleapis.com/books/v1/volumes?q={query}"
            req = urllib.request.Request(gb_url, headers=headers)
            with urllib.request.urlopen(req, timeout=8) as resp:
                gb_data = json.loads(resp.read().decode('utf-8'))
                if gb_data.get('totalItems', 0) > 0:
                    vol_info = gb_data['items'][0].get('volumeInfo', {})
                    img_links = vol_info.get('imageLinks', {})
                    # Get highest resolution
                    cover_url = img_links.get('extraLarge') or img_links.get('large') or img_links.get('medium') or img_links.get('thumbnail')
                    if cover_url:
                        cover_url = cover_url.replace('http://', 'https://')
                        req2 = urllib.request.Request(cover_url, headers=headers)
                        with urllib.request.urlopen(req2, timeout=8) as resp2:
                            data = resp2.read()
                            if len(data) > 1000:
                                img_data = data
                                found = True
                                source = f"Google Books Volume API ({vol_info.get('publisher', b['publisher'])})"
        except Exception as e:
            pass
            
    # If still not found, search Google Books by title and author
    if not found:
        try:
            query = urllib.parse.quote(f"intitle:{b['title']} inauthor:{b['author']}")
            gb_url = f"https://www.googleapis.com/books/v1/volumes?q={query}&maxResults=3"
            req = urllib.request.Request(gb_url, headers=headers)
            with urllib.request.urlopen(req, timeout=8) as resp:
                gb_data = json.loads(resp.read().decode('utf-8'))
                if gb_data.get('totalItems', 0) > 0:
                    for item in gb_data['items']:
                        vol_info = item.get('volumeInfo', {})
                        img_links = vol_info.get('imageLinks', {})
                        cover_url = img_links.get('extraLarge') or img_links.get('large') or img_links.get('medium') or img_links.get('thumbnail')
                        if cover_url:
                            cover_url = cover_url.replace('http://', 'https://')
                            # remove curl/edge curl zoom parameter if needed, or add zoom=1
                            req2 = urllib.request.Request(cover_url, headers=headers)
                            with urllib.request.urlopen(req2, timeout=8) as resp2:
                                data = resp2.read()
                                if len(data) > 1000:
                                    img_data = data
                                    found = True
                                    source = f"Google Books Search API ({vol_info.get('publisher', b['publisher'])})"
                                    break
        except Exception as e:
            pass

    if found and img_data:
        try:
            pil_img = Image.open(io.BytesIO(img_data))
            w, h = pil_img.size
            fmt = pil_img.format
            # Save to public/covers/books/{slug}.jpg
            target_filename = f"{slug}.jpg"
            target_path = os.path.join(covers_dir, target_filename)
            # Convert to RGB if RGBA/P
            if pil_img.mode in ("RGBA", "P"):
                pil_img = pil_img.convert("RGB")
            pil_img.save(target_path, "JPEG", quality=90, optimize=True)
            size_kb = os.path.getsize(target_path) / 1024
            
            results.append({
                "slug": slug,
                "title": b["title"],
                "author": b["author"],
                "isbn": isbn,
                "publisher": b["publisher"],
                "status": "OBTAINED",
                "source": source,
                "dimensions": f"{w}x{h}",
                "aspectRatio": round(w / h, 2),
                "sizeKB": round(size_kb, 1),
                "localPath": f"/covers/books/{target_filename}"
            })
            print(f"[SUCCESS] {slug:<35} | {w}x{h} ({round(w/h, 2)}) | {size_kb:.1f} KB | Source: {source}")
        except Exception as e:
            results.append({
                "slug": slug,
                "title": b["title"],
                "status": "PROCESSING_ERROR",
                "error": str(e)
            })
            print(f"[ERROR] {slug}: {e}")
    else:
        results.append({
            "slug": slug,
            "title": b["title"],
            "status": "NOT_FOUND"
        })
        print(f"[NOT FOUND] {slug}")

with open(os.path.join(base_dir, "scratch", "fetch_results.json"), "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("\nFinished checking covers.")
