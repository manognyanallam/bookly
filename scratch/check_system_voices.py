import subprocess

ps_script = """
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voices = $synth.GetInstalledVoices()
foreach ($v in $voices) {
    Write-Host "$($v.VoiceInfo.Name) | $($v.VoiceInfo.Culture) | $($v.VoiceInfo.Gender)"
}
"""

with open("scratch/check_voices.ps1", "w", encoding="utf-8") as f:
    f.write(ps_script)

res = subprocess.run(["powershell", "-ExecutionPolicy", "Bypass", "-File", "scratch/check_voices.ps1"], capture_output=True, text=True)
print(res.stdout)
if res.stderr:
    print("Stderr:", res.stderr)
