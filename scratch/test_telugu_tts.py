import asyncio
import os
import edge_tts
import mutagen.mp3

async def test_te():
    text = "నమస్కారం! బుక్లీ మాస్టర్‌క్లాస్‌కు స్వాగతం. రాబర్ట్ కియోసాకి రచించిన రిచ్ డాడ్ పూర్ డాడ్ పుస్తక సారాంశం."
    voice = "te-IN-MohanNeural"
    os.makedirs("scratch", exist_ok=True)
    out_file = "scratch/test_te.mp3"
    comm = edge_tts.Communicate(text=text, voice=voice)
    await comm.save(out_file)
    info = mutagen.mp3.MP3(out_file)
    print(f"Generated successfully: {out_file}")
    print(f"Duration: {info.info.length:.2f}s, Sample Rate: {info.info.sample_rate}Hz")

asyncio.run(test_te())
