/**
 * ZERO-COST AUDIO PROVIDER ARCHITECTURE
 * 
 * Fundamental Rule:
 * ONE BOOK -> ONE PREPARED 15-MINUTE AUDIO SUMMARY MP3 -> ALL USERS STREAM THE SAME FILE
 * 
 * No AI dynamic generation on playback.
 * No paid TTS API required.
 * DEMO_MODE = true default.
 */

export interface AudioProvider {
  getAudioUrl(bookId: string, configuredUrl: string): string;
  isAudioAvailable(configuredUrl: string): boolean;
}

export class StaticAudioProvider implements AudioProvider {
  getAudioUrl(bookId: string, configuredUrl: string): string {
    // Simply returns the pre-configured static MP3 URL stored in the book database record
    return configuredUrl || '';
  }

  isAudioAvailable(configuredUrl: string): boolean {
    return Boolean(configuredUrl && configuredUrl.trim() !== '' && configuredUrl !== '/audio/placeholder.mp3');
  }
}

// Export singleton instance
export const staticAudioProvider = new StaticAudioProvider();
