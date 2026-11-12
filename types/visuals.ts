export type VisualFormatType =
  | 'flowchart'
  | 'mindmap'
  | 'comparison'
  | 'timeline'
  | 'concept-diagram'
  | 'infographic';

export interface FlowchartStep {
  stepNumber: number;
  label: string;
  description: string;
  tag?: string;
  isDecision?: boolean;
  decisionPath?: {
    yesLabel?: string;
    yesOutcome?: string;
    noLabel?: string;
    noOutcome?: string;
  };
  outcome?: string;
}

export interface MindmapBranchNode {
  label: string;
  description: string;
  detail?: string;
}

export interface MindmapBranch {
  category: string;
  color?: 'forest' | 'sage' | 'gold' | 'amber';
  nodes: MindmapBranchNode[];
}

export interface ComparisonTrait {
  point: string;
  explanation: string;
}

export interface ComparisonSide {
  name: string;
  subtitle: string;
  badge: string;
  colorTheme: 'forest' | 'amber' | 'sage' | 'charcoal';
  traits: ComparisonTrait[];
}

export interface TimelineEvent {
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  keyLearning: string;
}

export interface ConceptComponent {
  name: string;
  role: string;
  details: string;
  connectionToCore: string;
}

export interface InfographicItem {
  highlight: string;
  title: string;
  takeaway: string;
  iconType?: 'sparkles' | 'target' | 'trending-up' | 'shield' | 'clock' | 'award';
}

export interface VisualDiagram {
  id: string;
  title: string;
  format: VisualFormatType;
  badge: string;
  whatItRepresents: string;
  simpleDescription: string;
  studentExample: string;
  quickRevision: string;

  // Format-specific data payload
  flowchartData?: {
    steps: FlowchartStep[];
  };
  mindmapData?: {
    centralTheme: {
      label: string;
      description: string;
    };
    branches: MindmapBranch[];
  };
  comparisonData?: {
    sideA: ComparisonSide;
    sideB: ComparisonSide;
    verdict: string;
  };
  timelineData?: {
    events: TimelineEvent[];
  };
  conceptData?: {
    coreConcept: string;
    components: ConceptComponent[];
    feedbackLoop?: string;
  };
  infographicData?: {
    items: InfographicItem[];
  };
}

export interface BookVisualGuide {
  bookId: string;
  slug: string;
  bookTitle: string;
  introDescription: string;
  diagrams: VisualDiagram[];
  sourceType?: 'authored' | 'summary-derived';
}
