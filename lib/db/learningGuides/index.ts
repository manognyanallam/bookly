import { LearningGuide } from '@/types/learning';
import { richDadPoorDadGuide } from './richDadPoorDadGuide';
import { atomicHabitsGuide } from './atomicHabitsGuide';
import { thinkingFastAndSlowGuide } from './thinkingFastAndSlowGuide';
import { the48LawsOfPowerGuide } from './the48LawsOfPowerGuide';
import { theAlchemistGuide } from './theAlchemistGuide';
import { deepWorkGuide, zeroToOneGuide, the7HabitsGuide } from './productivityBusinessGuides';
import {
  psychologyOfMoneyGuide,
  sapiensGuide,
  theLawsOfHumanNatureGuide,
  emotionalIntelligenceGuide,
} from './psychologyHumanGuides';
import { howToWinFriendsGuide, neverSplitTheDifferenceGuide } from './communicationNegotiationGuides';
import {
  theRichestManInBabylonGuide,
  thinkAndGrowRichGuide,
  theIntelligentInvestorGuide,
  letsTalkMoneyGuide,
  navalRavikantGuide,
} from './wealthInvestingGuides';

export const ALL_LEARNING_GUIDES: Record<string, LearningGuide> = {
  'rich-dad-poor-dad': richDadPoorDadGuide,
  'atomic-habits': atomicHabitsGuide,
  'thinking-fast-and-slow': thinkingFastAndSlowGuide,
  'the-48-laws-of-power': the48LawsOfPowerGuide,
  'the-alchemist': theAlchemistGuide,
  'deep-work': deepWorkGuide,
  'zero-to-one': zeroToOneGuide,
  'the-7-habits': the7HabitsGuide,
  'psychology-of-money': psychologyOfMoneyGuide,
  'sapiens': sapiensGuide,
  'the-laws-of-human-nature': theLawsOfHumanNatureGuide,
  'emotional-intelligence': emotionalIntelligenceGuide,
  'how-to-win-friends-and-influence-people': howToWinFriendsGuide,
  'never-split-the-difference': neverSplitTheDifferenceGuide,
  'the-richest-man-in-babylon': theRichestManInBabylonGuide,
  'think-and-grow-rich': thinkAndGrowRichGuide,
  'the-intelligent-investor': theIntelligentInvestorGuide,
  'lets-talk-money': letsTalkMoneyGuide,
  'the-almanack-of-naval-ravikant': navalRavikantGuide,
};

export function getLearningGuide(slugOrId: string): LearningGuide | undefined {
  if (!slugOrId) return undefined;
  return ALL_LEARNING_GUIDES[slugOrId] || Object.values(ALL_LEARNING_GUIDES).find(g => g.bookId === slugOrId);
}

export function hasLearningGuide(slugOrId: string): boolean {
  return Boolean(getLearningGuide(slugOrId));
}
