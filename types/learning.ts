export type BookGuideType = 'nonfiction' | 'fiction';

export interface ConceptExplanation {
  name: string;
  simpleExplanation: string;
  whyItMatters: string;
  everydayExample: string;
  collegeStudentApplication: string;
  difficultTerms?: Array<{ term: string; definition: string }>;
}

export interface ValuableInsight {
  insight: string;
  whatItMeans: string;
  whyItMatters: string;
  realisticExample: string;
  howStudentAppliesIt: string;
}

export interface StudentApplications {
  collegeLife?: string[];
  studyingAndLearning?: string[];
  careerDevelopment?: string[];
  moneyManagement?: string[];
  communicationAndRelationships?: string[];
  decisionMakingAndGrowth?: string[];
}

export interface Misconception {
  misconception: string;
  reality: string;
  caution: string;
}

export interface CriticalThinking {
  wellSupportedIdeas: string[];
  authorOpinions: string[];
  anecdotesVsEvidence: string[];
  debatedOrContextualClaims: string[];
}

export interface FinalLessons {
  coreLessons: string[];
  finalSummary: string;
  actionPlan: Array<{ step: string; action: string; outcome: string }>;
  fivePointsToRemember: string[];
}

export interface QuickRevision {
  keyTerms: Array<{ term: string; definition: string }>;
  questions: Array<{ question: string; answer: string }>;
  oneMinuteSummary: string;
}

export interface NonFictionLearningGuide {
  id: string;
  bookId: string;
  type: 'nonfiction';
  introduction: string; // Why this book is worth exploring
  overview: {
    whatItIsAbout: string;
    problemAddressed: string;
    centralArgument: string;
    majorThemes: string[];
    connectionsBetweenIdeas: string;
    whatStudentsUnderstand: string;
  };
  concepts: ConceptExplanation[];
  insights: ValuableInsight[];
  studentApplications: StudentApplications;
  misconceptions: Misconception[];
  criticalThinking: CriticalThinking;
  finalLessons: FinalLessons;
  quickRevision: QuickRevision;
}

export interface FictionCharacter {
  name: string;
  role: string;
  motivation: string;
  significance: string;
}

export interface StoryDevelopment {
  stage: string;
  events: string;
  importance: string;
}

export interface FictionTheme {
  theme: string;
  explanation: string;
}

export interface FictionSymbol {
  symbol: string;
  deeperMeaning: string;
}

export interface FictionEndingExplanation {
  warning: string;
  endingAnalysis: string;
  deeperInterpretation: string;
}

export interface FictionLearningGuide {
  id: string;
  bookId: string;
  type: 'fiction';
  introduction: string;
  setting: string;
  characters: FictionCharacter[];
  storyDevelopments: StoryDevelopment[];
  majorThemes: FictionTheme[];
  characterDevelopment: string;
  symbolism: FictionSymbol[];
  lifeLessons: string[];
  endingExplanation: FictionEndingExplanation;
  studentApplications: StudentApplications;
  quickRevision: QuickRevision;
}

export type LearningGuide = NonFictionLearningGuide | FictionLearningGuide;
