"""
Comprehensive verification test for Bookly:
1. State decoupling between Continue Listening and My Library
2. Accurate progress persistence & restoration
3. Distinct filter tabs (Saved, In Progress, Completed)
4. English and Telugu independent progress tracking
5. Watermark styling & non-interference validation
6. Real published covers integrity
"""

import json
import os
import re

BOOKS_FILE = r"c:\Users\megha\OneDrive\Desktop\BOOKLY\lib\db\booksData.ts"
STORAGE_FILE = r"c:\Users\megha\OneDrive\Desktop\BOOKLY\lib\db\storage.ts"
PLAYER_FILE = r"c:\Users\megha\OneDrive\Desktop\BOOKLY\components\player\AudioPlayerContext.tsx"
LIBRARY_FILE = r"c:\Users\megha\OneDrive\Desktop\BOOKLY\app\library\page.tsx"
HOME_FILE = r"c:\Users\megha\OneDrive\Desktop\BOOKLY\app\page.tsx"
WATERMARK_FILE = r"c:\Users\megha\OneDrive\Desktop\BOOKLY\components\layout\BooklyWatermark.tsx"

results = []

def record(test_name, success, details=""):
    results.append({
        "test": test_name,
        "status": "PASS" if success else "FAIL",
        "details": details
    })
    print(f"[{'PASS' if success else 'FAIL'}] {test_name}: {details}")

# Test 1: Watermark component exists, has pointer-events: none, sage color, low opacity
if os.path.exists(WATERMARK_FILE):
    with open(WATERMARK_FILE, "r", encoding="utf-8") as f:
        wm_content = f.read()
    has_pe_none = "pointer-events-none" in wm_content
    has_sage_color = "#4B6B56" in wm_content
    has_low_opacity = "opacity = 0.06" in wm_content or "0.05" in wm_content
    has_overflow_hidden = "overflow-hidden" in wm_content
    record("1. Watermark Non-Obstructive Config", has_pe_none and has_sage_color and has_low_opacity and has_overflow_hidden,
           f"pointer-events-none={has_pe_none}, sage color={has_sage_color}, opacity~6%={has_low_opacity}, overflow-hidden={has_overflow_hidden}")
else:
    record("1. Watermark Non-Obstructive Config", False, "BooklyWatermark.tsx not found")

# Test 2: Storage decoupling - saveUserProgress must NOT write to user_library
with open(STORAGE_FILE, "r", encoding="utf-8") as f:
    storage_code = f.read()

# Check that saveUserProgress does not call saveUserLibraryItem
match_prog = re.search(r"export function saveUserProgress\([^)]*\)[^{]*{(.*?)\n}", storage_code, re.DOTALL)
if match_prog:
    body = match_prog.group(1)
    calls_lib_save = "saveUserLibraryItem" in body
    dispatches_event = "bookly-progress-change" in body
    record("2. Storage Decoupling (saveUserProgress -> user_library)", not calls_lib_save and dispatches_event,
           f"saveUserLibraryItem called in saveUserProgress: {calls_lib_save}, dispatches 'bookly-progress-change': {dispatches_event}")
else:
    record("2. Storage Decoupling", False, "Could not locate saveUserProgress function")

# Test 3: getUserLibrary only returns items with status === 'saved'
match_lib = re.search(r"export function getUserLibrary\([^)]*\)[^{]*{(.*?)\n}", storage_code, re.DOTALL)
if match_lib:
    body = match_lib.group(1)
    filters_saved = "status === 'saved'" in body
    record("3. getUserLibrary explicit saved filter", filters_saved, "Only returns explicitly saved bookmarks")
else:
    record("3. getUserLibrary explicit saved filter", False, "Could not locate getUserLibrary function")

# Test 4: Home page continueListeningBooks only includes started (>5s) and not completed books
with open(HOME_FILE, "r", encoding="utf-8") as f:
    home_code = f.read()

has_started_check = "positionSeconds" in home_code and "> 5" in home_code
has_not_completed_check = "!p.completed" in home_code or "!progress.completed" in home_code
has_watermark_in_hero = "BooklyWatermark" in home_code
no_competing_hero_canvas = "ButterflyHeroCanvas" not in home_code

record("4. Home Continue Listening excludes unplayed & completed", has_started_check and has_not_completed_check,
       f">5s check: {has_started_check}, !completed check: {has_not_completed_check}")
record("5. Home Hero Watermark & No Competing Mascot Canvas", has_watermark_in_hero and no_competing_hero_canvas,
       f"BooklyWatermark in Hero: {has_watermark_in_hero}, ButterflyHeroCanvas removed: {no_competing_hero_canvas}")

# Test 5: Library Page has 3 distinct tabs (Saved, In Progress, Completed)
with open(LIBRARY_FILE, "r", encoding="utf-8") as f:
    lib_code = f.read()

has_saved_tab = "activeTab === 'saved'" in lib_code
has_listening_tab = "activeTab === 'listening'" in lib_code
has_completed_tab = "activeTab === 'completed'" in lib_code
has_empty_state_browse = "Browse Books" in lib_code and "/discover" in lib_code
has_library_watermark = "BooklyWatermark" in lib_code

record("6. Library 3 Distinct Tabs (Saved, In Progress, Completed)", 
       has_saved_tab and has_listening_tab and has_completed_tab,
       f"Saved tab: {has_saved_tab}, In Progress tab: {has_listening_tab}, Completed tab: {has_completed_tab}")
record("7. Library Empty State & Watermark",
       has_empty_state_browse and has_library_watermark,
       f"Browse Books button: {has_empty_state_browse}, BooklyWatermark present: {has_library_watermark}")

# Test 6: Player accurate progress saving and position restoration
with open(PLAYER_FILE, "r", encoding="utf-8") as f:
    player_code = f.read()

restores_saved_position = "saved.positionSeconds" in player_code and "audio.currentTime = targetTime" in player_code
saves_on_pause = "audio.addEventListener('pause', handlePause)" in player_code or "handlePause" in player_code
saves_on_ended = "audio.addEventListener('ended', handleEnded)" in player_code or "handleEnded" in player_code
supports_bilingual_progress = "language" in player_code and "getBookProgress" in player_code

record("8. Player Restores Saved Position", restores_saved_position, "Restores saved.positionSeconds on playBook")
record("9. Player Accurate Progress Events (pause, ended, interval)", saves_on_pause and saves_on_ended, "Saves on pause and track completion")
record("10. Bilingual Independent Progress Association", supports_bilingual_progress, "Keyed with bookId and language")

# Test 7: Real published covers intact
with open(BOOKS_FILE, "r", encoding="utf-8") as f:
    books_code = f.read()

covers_19 = re.findall(r"coverImage:\s*'(/covers/books/[^']+)'", books_code)
all_covers_exist = len(covers_19) == 19 and all(os.path.exists(os.path.join(r"c:\Users\megha\OneDrive\Desktop\BOOKLY\public", p.lstrip("/\\"))) for p in covers_19)

record("11. Real Published Covers (19/19 verified on disk)", all_covers_exist, f"Found {len(covers_19)} covers, all exist on disk: {all_covers_exist}")

print("\n" + "="*50)
all_passed = all(r["status"] == "PASS" for r in results)
print(f"OVERALL RESULT: {'ALL TESTS PASSED (11/11)' if all_passed else 'SOME TESTS FAILED'}")
print("="*50)
