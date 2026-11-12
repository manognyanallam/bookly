"""
BOOKLY TELUGU BATCH GENERATOR
Generates and verifies Telugu MP3 files for a list of slugs.
Outputs verified durations, file sizes, and chapter timestamps.
"""

import os
import sys
import asyncio
from generate_telugu_audio import produce_telugu_book_summary

SLUGS = [
    "psychology-of-money",
    "atomic-habits",
    "the-richest-man-in-babylon",
    "the-almanack-of-naval-ravikant"
]

async def run_batch():
    results = []
    for slug in SLUGS:
        print(f"\n{'#'*60}\nPROCESSING: {slug}\n{'#'*60}")
        try:
            res = await produce_telugu_book_summary(slug, voice="te-IN-MohanNeural", rate="+0%")
            results.append(res)
            print(f"[SUCCESS] {slug}: {res['formatted_duration']} ({res['duration_seconds']}s, {res['filesize_mb']} MB)")
        except Exception as e:
            print(f"[ERROR] Failed {slug}: {e}")

    print("\n" + "="*70)
    print("BATCH GENERATION SUMMARY REPORT")
    print("="*70)
    for r in results:
        print(f"- {r['slug']}: {r['formatted_duration']} ({r['duration_seconds']}s, {r['filesize_mb']} MB) -> {r['audio_url']}")
    print("="*70)

if __name__ == "__main__":
    asyncio.run(run_batch())
