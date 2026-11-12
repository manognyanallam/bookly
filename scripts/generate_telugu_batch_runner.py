import os
import sys
import asyncio
import json
import traceback

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

# Add scripts directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from generate_telugu_audio import produce_telugu_book_summary

async def process_batch(slugs):
    print("="*70)
    print(f"STARTING TELUGU BATCH FOR: {slugs}")
    print("="*70)
    
    results = {}
    for slug in slugs:
        print(f"\n>>> PROCESSING: {slug} ...", flush=True)
        try:
            res = await produce_telugu_book_summary(slug, voice="te-IN-MohanNeural", rate="+0%")
            results[slug] = res
            print(f"[SUCCESS] {slug}: {res['formatted_duration']} ({res['duration_seconds']}s, {res['filesize_mb']} MB)")
        except Exception as e:
            print(f"[FAIL] Error processing {slug}: {e}")
            traceback.print_exc()
            results[slug] = {"error": str(e)}

    print("\n" + "="*70)
    print("BATCH SUMMARY RESULTS")
    print("="*70)
    for s, data in results.items():
        if "error" in data:
            print(f"- {s:<35} : FAILED ({data['error']})")
        else:
            print(f"- {s:<35} : {data['formatted_duration']} ({data['duration_seconds']}s, {data['filesize_mb']} MB)")

    # Save results to a json file in scratch
    out_path = os.path.join(r"c:\Users\megha\OneDrive\Desktop\BOOKLY\scratch", f"batch_results_{slugs[0]}.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"Results saved to: {out_path}")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--slugs", nargs="+", required=True)
    args = parser.parse_args()
    asyncio.run(process_batch(args.slugs))
