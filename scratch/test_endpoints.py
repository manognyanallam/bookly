import urllib.request
import urllib.error

books = ['atomic-habits', 'deep-work', 'psychology-of-money', 'sapiens', 'the-alchemist', 'thinking-fast-and-slow', 'zero-to-one']

for b in books:
    # Page
    url = f"http://localhost:3000/books/{b}"
    try:
        req = urllib.request.urlopen(url)
        print(f"Page {b}: {req.getcode()}")
    except urllib.error.HTTPError as e:
        print(f"Page {b} ERROR {e.code}: {e.read().decode('utf-8', errors='ignore')[:300]}")
    except Exception as e:
        print(f"Page {b} EXCEPTION: {e}")

    # Audio
    audio_url = f"http://localhost:3000/audio/{b}.mp3"
    try:
        req = urllib.request.urlopen(audio_url)
        print(f"Audio {b}: {req.getcode()} (length: {req.headers.get('Content-Length')})")
    except urllib.error.HTTPError as e:
        print(f"Audio {b} ERROR {e.code}")
    except Exception as e:
        print(f"Audio {b} EXCEPTION: {e}")
