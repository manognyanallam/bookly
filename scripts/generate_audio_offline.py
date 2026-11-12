"""
BOOKLY OFFLINE AUDIO GENERATOR (WINDOWS SAPI 5 / ONECORE)
100% Offline Speech Synthesis using Windows built-in voice engines.

Usage:
  python scripts/generate_audio_offline.py --slug atomic-habits
"""

import os
import sys
import re
import shutil
import argparse
import wave

def parse_markdown_script(script_path):
    if not os.path.exists(script_path):
        raise FileNotFoundError(f"Script file not found: {script_path}")

    with open(script_path, "r", encoding="utf-8") as f:
        text = f.read()

    lines = text.splitlines()
    chapters = []
    current_chapter_title = None
    current_lines = []

    for line in lines:
        line_clean = line.strip()
        if line_clean.startswith("## "):
            if current_chapter_title and current_lines:
                chapters.append({
                    "title": current_chapter_title,
                    "text": " ".join(current_lines),
                    "word_count": len(re.findall(r"\b[\w'-]+\b", " ".join(current_lines)))
                })
                current_lines = []
            current_chapter_title = line_clean.replace("## ", "").strip()
        elif current_chapter_title and line_clean:
            if not line_clean.startswith("---") and not line_clean.startswith("**"):
                cleaned_line = re.sub(r"\*+([^*]+)\*+", r"\1", line_clean)
                current_lines.append(cleaned_line)

    if current_chapter_title and current_lines:
        chapters.append({
            "title": current_chapter_title,
            "text": " ".join(current_lines),
            "word_count": len(re.findall(r"\b[\w'-]+\b", " ".join(current_lines)))
        })

    return chapters

def generate_offline_wav(text, output_wav_path, voice_name=None):
    """Generates a WAV file using Windows PowerShell System.Speech.Synthesis."""
    # Write text to a temp text file to avoid escaping issues
    temp_txt = output_wav_path + ".txt"
    with open(temp_txt, "w", encoding="utf-8") as f:
        f.write(text)

    ps_script = f"""
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.Rate = 0
$synth.SetOutputToWaveFile('{os.path.abspath(output_wav_path)}')
$text = [IO.File]::ReadAllText('{os.path.abspath(temp_txt)}')
$synth.Speak($text)
$synth.Dispose()
"""
    ps_file = output_wav_path + ".ps1"
    with open(ps_file, "w", encoding="utf-8") as f:
        f.write(ps_script)

    os.system(f'powershell -ExecutionPolicy Bypass -File "{os.path.abspath(ps_file)}"')

    if os.path.exists(temp_txt): os.remove(temp_txt)
    if os.path.exists(ps_file): os.remove(ps_file)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Offline Audio Generator")
    parser.add_argument("--slug", type=str, default="atomic-habits")
    args = parser.parse_args()

    script_path = os.path.join("scripts", f"{args.slug}.md")
    chapters = parse_markdown_script(script_path)
    total_words = sum(c["word_count"] for c in chapters)
    print(f"Loaded {len(chapters)} chapters ({total_words} words) for offline generation.")
    # Script provides offline reference
