import { NonFictionLearningGuide } from '@/types/learning';

export const thinkingFastAndSlowGuide: NonFictionLearningGuide = {
  id: 'guide-thinking-fast-and-slow',
  bookId: 'thinking-fast-and-slow',
  type: 'nonfiction',
  introduction:
    'Thinking, Fast and Slow by Nobel laureate Daniel Kahneman is the foundational masterpiece of modern behavioural economics and cognitive psychology. Synthesizing decades of groundbreaking research conducted alongside Amos Tversky, Kahneman reveals that the human mind does not operate as a purely rational computing machine. Instead, our choices are governed by two distinct modes of thought: the fast, automatic, intuitive "System 1" and the slow, deliberate, effortful "System 2". For college students preparing for complex careers, this book provides the mental tools to recognize subconscious biases, prevent costly errors in judgment, and navigate uncertainty with intellectual humility.',
  overview: {
    whatItIsAbout:
      'The book explains the cognitive architecture of human judgment and decision-making. It details how intuitive shortcuts (heuristics) enable survival and rapid reactions, but systematically lead to predictable cognitive illusions and flawed conclusions in modern complex environments.',
    problemAddressed:
      'Standard economic and social theories assumed for decades that humans are "Econs"—rational agents who weigh costs and probabilities logically. In reality, human brains rely on quick mental substitutions, emotional heuristics, and narrative storytelling, often making irrational decisions under risk and pressure.',
    centralArgument:
      'Our minds are constantly navigating the friction between fast intuition (System 1) and slow deliberation (System 2). Because System 2 is inherently lazy and energy-conserving, System 1 frequently generates overconfident judgments that go uncorrected, leading to predictable cognitive biases.',
    majorThemes: [
      'Two Systems of Thought: System 1 (Fast, Intuitive) & System 2 (Slow, Deliberate)',
      'Heuristics and Biases: Availability, Representativeness, and Anchoring',
      'Overconfidence, The Illusion of Understanding, and WYSIATI (What You See Is All There Is)',
      'Prospect Theory, Loss Aversion, and Framing Effects',
      'The Experiencing Self versus The Remembering Self (The Peak-End Rule)'
    ],
    connectionsBetweenIdeas:
      'Kahneman introduces System 1 and System 2 as characters in the mind, shows how System 1 relies on heuristics that create systematic cognitive biases, explains how overconfidence blinds us to uncertainty, introduces Prospect Theory to explain choices under financial and personal risk, and finishes with how memory distorts our subjective life satisfaction.',
    whatStudentsUnderstand:
      'Students will realize that feeling confident in an opinion is not proof of its accuracy; confidence is merely a reflection of cognitive ease and narrative coherence created by System 1.'
  },
  concepts: [
    {
      name: 'System 1 vs. System 2 Thinking',
      simpleExplanation:
        'System 1 operates automatically, effortlessly, and rapidly with little or no conscious control (e.g. detecting anger in a voice, reading billboard words, ducking a flying ball). System 2 allocates attention to effortful mental operations that require focus (e.g. solving 17 × 24, checking a logic proof, parking in a tight parallel space).',
      whyItMatters:
        'System 2 has limited biological bandwidth and tires easily (ego depletion). When System 2 is exhausted or distracted, System 1 takes over, often answering a difficult question by unconsciously substituting an easier one.',
      everydayExample:
        'Reading the headline "Tech Stocks Plunge" and feeling immediate panic to sell your shares is System 1 reacting to alarm cues. Pausing, researching historical market volatility, and calculating your 10-year horizon requires effortful System 2 intervention.',
      collegeStudentApplication:
        'During exams or high-stakes job interviews, beware of the "first answer that feels right." Force System 2 to review complex multiple-choice traps or algorithmic corner cases before submitting.',
      difficultTerms: [
        {
          term: 'Cognitive Ease',
          definition: 'A state of mental comfort where tasks feel effortless, leading you to trust intuition and accept assertions without skepticism.'
        },
        {
          term: 'Cognitive Strain',
          definition: 'A state of mental effort and vigilance where System 2 is activated, increasing scrutiny, precision, and skepticism.'
        }
      ]
    },
    {
      name: 'WYSIATI (What You See Is All There Is)',
      simpleExplanation:
        'System 1 constructs the most coherent possible story using only the evidence currently available to it, completely ignoring the vast amount of crucial information that is missing.',
      whyItMatters:
        'We routinely jump to extreme conclusions, form dogmatic beliefs, and judge individuals or projects based on minuscule, unrepresentative samples of information.',
      everydayExample:
        'Hearing a friend complain about one difficult encounter with a professor and concluding the entire department is corrupt. You judge based only on what is in front of your eyes.',
      collegeStudentApplication:
        'Whenever evaluating research papers, political debates, or career offers, ask yourself explicitly: "What crucial data is missing from this presentation? What would someone opposing this argument say?"',
      difficultTerms: [
        {
          term: 'Confirmation Bias',
          definition: 'The tendency to search for, interpret, and recall information in a way that confirms prior hypotheses while ignoring contradictory evidence.'
        }
      ]
    },
    {
      name: 'The Anchoring Effect',
      simpleExplanation:
        'When considering a numerical estimate or value, our minds unconsciously anchor on any initial reference number introduced, even if that number is completely random and irrelevant.',
      whyItMatters:
        'Anchors heavily manipulate salary negotiations, product pricing, legal settlements, and grading expectations.',
      everydayExample:
        'A store displays a shirt with an artificial "Original Price: ₹4,000 / $80" tag crossed out, offering it at "Discounted: ₹1,500 / $30". Your mind anchors on the 4,000 figure and perceives a bargain, ignoring whether the shirt is intrinsically worth ₹1,500.',
      collegeStudentApplication:
        'In post-graduate salary discussions, be prepared with researched market data so you can set an ambitious, well-grounded anchor first, or counter an employer’s low anchor before it frames the conversation.',
      difficultTerms: [
        {
          term: 'Heuristic',
          definition: 'A simple, efficient mental rule of thumb used to make decisions or solve problems quickly, often at the expense of accuracy.'
        }
      ]
    },
    {
      name: 'Prospect Theory & Loss Aversion',
      simpleExplanation:
        'Humans evaluate outcomes as gains and losses relative to a neutral reference point, rather than absolute wealth. Crucially: losses loom roughly 2 to 2.5 times larger than equivalent gains (the pain of losing ₹1,000 is twice as intense as the joy of winning ₹1,000).',
      whyItMatters:
        'Loss aversion causes people to avoid healthy, positive-expected-value opportunities because they dread the emotional sting of a loss, or inversely, to double down on catastrophic gambles to avoid locking in a sure loss.',
      everydayExample:
        'A student refuses to drop a student project or major that they dislike and have no passion for simply because they already spent 2 years on it (the Sunk Cost Fallacy, driven by loss aversion).',
      collegeStudentApplication:
        'Evaluate investments, career paths, and study strategies using expected mathematical probability and growth potential, not the emotional fear of looking foolish or suffering a minor short-term setback.',
      difficultTerms: [
        {
          term: 'Sunk Cost Fallacy',
          definition: 'The irrational continuation of an endeavor based on cumulative past investment of time, money, or effort rather than future expected value.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'Confidence is often a measure of cognitive coherence, not accuracy.',
      whatItMeans:
        'You can feel 100% certain of an opinion simply because your brain built a clean, neat narrative with no visible contradictions—even if that story is based on completely flawed assumptions.',
      whyItMatters:
        'True experts acknowledge complexity, confidence intervals, and uncertainty. Charlatans and loud pundits project dogmatic, absolute certainty.',
      realisticExample:
        'A student reads one blog post about artificial intelligence and writes an essay claiming with absolute certainty that software jobs will vanish in 12 months.',
      howStudentAppliesIt:
        'Cultivate intellectual humility. When you feel completely certain about a complex social, economic, or technical question, treat that certainty as an alarm bell to search for disconfirming evidence.'
    },
    {
      insight: 'The Availability Heuristic distorts our perception of risk.',
      whatItMeans:
        'We estimate the probability of an event based on how easily examples of it come to mind. Events that receive sensational media coverage (plane crashes, shark attacks, viral overnight crypto millionaires) feel far more common than they are.',
      whyItMatters:
        'Students make major life and career choices based on dramatic anecdotes rather than actual statistical distribution.',
      realisticExample:
        'Refusing to fly because of a recent airplane disaster news cycle, while driving a car without a seatbelt despite car accidents being orders of magnitude more fatal statistically.',
      howStudentAppliesIt:
        'Base career choices on rigorous data and market reality rather than sensationalized headlines or viral social media posts.'
    },
    {
      insight: 'The Peak-End Rule governs our memory of experiences.',
      whatItMeans:
        'When evaluating a past experience (a vacation, a semester, an exam, a relationship), our "Remembering Self" does not calculate an average over time. It judges the experience almost exclusively by its most intense point (the peak) and its final moments (the end).',
      whyItMatters:
        'An otherwise wonderful semester can be remembered as miserable if finals week ends in tears, while a grueling project can be remembered fondly if the final presentation goes smoothly.',
      realisticExample:
        'Finishing a 10-week summer internship on an energetic high note with a well-prepared final deck leaves colleagues with a stellar, lasting memory of your overall performance.',
      howStudentAppliesIt:
        'Design your study blocks, presentations, and team meetings to finish strong. Pay special attention to the conclusion of your academic papers and client projects.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Recognize ego depletion: When you study for 4 consecutive hours without rest, your System 2 is exhausted; do not make major life decisions or engage in relationship arguments late at night.',
      'Combat the Planning Fallacy: We systematically underestimate how long assignments, thesis projects, and revisions will take. Apply "reference class forecasting"—ask seniors how long the project actually took them and double your initial estimate.'
    ],
    studyingAndLearning: [
      'Induce productive cognitive strain: Passive reading feels easy (cognitive ease) but produces poor retention. Active recall, self-quizzing, and solving difficult problem sets feel strainful because they engage System 2.',
      'Beware of the Illusion of Explanatory Depth: When you think you understand a complex concept, try to explain it out loud or write it on a blank page without notes.'
    ],
    careerDevelopment: [
      'During recruitment interviews, prepare for framing effects: The same objective qualification can be framed positively ("90% pass rate in challenging coursework") or defensively ("10% failed the cohort").',
      'Neutralize the halo effect: If an interviewer or candidate is charming, articulate, and well-dressed, do not automatically assume their technical engineering skills are equally brilliant.'
    ],
    moneyManagement: [
      'Avoid the endowment effect: We overvalue things simply because we own them. Regularly audit subscriptions, belongings, and speculative assets with the question: "If I did not already own this, would I buy it today at market price?"',
      'Resist loss aversion in investing: Understand that market dips are normal; selling quality index funds at the bottom to stop the pain of a paper loss locks in financial damage.'
    ],
    decisionMakingAndGrowth: [
      'Practice Premortem Analysis: Before launching a startup, club initiative, or team project, gather the team and state: "Imagine we are 6 months into the future and this initiative has failed catastrophically. Write a 1-page report detailing why it failed." This bypasses collective optimism bias.'
    ]
  },
  misconceptions: [
    {
      misconception: 'System 1 is bad and should always be suppressed; System 2 is good.',
      reality:
        'System 1 is essential for human survival, enabling rapid motor skills, emotional empathy, and expert intuition (like a chess grandmaster seeing moves in seconds). System 2 is too slow and energy-expensive to handle every daily task.',
      caution:
        'Do not over-analyze simple everyday choices (like picking a pencil or selecting lunch). Reserve System 2 for high-consequence, statistical, and ethical decisions.'
    },
    {
      misconception: 'Reading about cognitive biases makes you immune to them.',
      reality:
        'Kahneman famously admitted that even after 50 years of studying biases, he still fell victim to them regularly. Knowing a bias exists does not stop System 1 from generating the illusion.',
      caution:
        'Do not rely on willpower to overcome biases; rely on external checklists, peer reviews, pre-mortems, and institutional guardrails.'
    },
    {
      misconception: 'Intuition is always superior to analytical data in creative endeavors.',
      reality:
        'Intuition is only trustworthy in environments that are sufficiently regular and predictable, where you have had prolonged practice with immediate, unambiguous feedback (like chess, fire fighting, or sports). In noisy, random environments (like stock-picking or predicting political elections), intuition is little better than coin-flipping.',
      caution:
        'Distinguish valid, trained intuition from emotional wishful thinking.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'Dual-process theory and the distinct cognitive operations of automatic versus deliberate thinking.',
      'Loss aversion, framing effects, and prospect theory (validated across thousands of empirical behavioural economics experiments).',
      'The anchoring effect and availability heuristics.'
    ],
    authorOpinions: [
      'Kahneman’s framing of System 1 and System 2 as distinct agents is a convenient metaphor, not two physically separate anatomical organs inside the brain.',
      'The heavy pessimism regarding human forecasting and the superiority of simple linear formulas over expert judgment in all domains remains a point of scholarly debate.'
    ],
    anecdotesVsEvidence: [
      'Chapter 4 of the book covers "priming studies" (such as students walking slower after being primed with words related to the elderly). Many of these early behavioral priming experiments suffered during the psychology replication crisis.',
      'Kahneman later acknowledged that some social priming claims lacked robust empirical reproducibility, while the core heuristics and prospect theory remained rock-solid.'
    ],
    debatedOrContextualClaims: [
      'Cultural variations: Most initial cognitive experiments were conducted on Western, Educated, Industrialized, Rich, and Democratic (WEIRD) undergraduate cohorts, though core biases have since been replicated globally with nuance.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'The human mind relies on two systems: fast, automatic System 1 and slow, effortful System 2.',
      'System 1 seeks coherence over truth; confidence is not a guarantee of factual accuracy.',
      'Losses hurt roughly twice as much as equivalent gains feel good (loss aversion).',
      'We judge past experiences by their peak intensity and how they end, not by total duration.',
      'Use structured decision-making tools (checklists, pre-mortems, reference class forecasting) to protect against overconfidence.'
    ],
    finalSummary:
      'Thinking, Fast and Slow dismantles the fantasy of human infallibility. By illuminating the cognitive shortcuts that rule our judgments, Kahneman equips students with intellectual sobriety, helping them question quick assumptions, navigate uncertainty, and build disciplined, evidence-based habits of mind.',
    actionPlan: [
      {
        step: 'Step 1: Implement the "Pause and Breathe" Rule',
        action: 'Whenever an emotional or financial decision triggers immediate urgency, enforce a mandatory 24-hour waiting period.',
        outcome: 'Gives System 2 time to cool emotional System 1 impulses.'
      },
      {
        step: 'Step 2: Conduct Pre-Mortems on Major Projects',
        action: 'Before semester projects or campus ventures start, explicitly map out every scenario that could cause total failure.',
        outcome: 'Neutralizes uncalibrated overconfidence and creates proactive contingencies.'
      },
      {
        step: 'Step 3: Anchor with Evidence in Negotiations',
        action: 'Conduct objective salary and market research before entering negotiations, and prepare to counter artificial low anchors.',
        outcome: 'Prevents anchoring manipulation in contracts and compensation.'
      },
      {
        step: 'Step 4: Use External Checklists',
        action: 'Create standardized checklists for submitting assignments, reviewing code, or budgeting monthly expenses.',
        outcome: 'Bypasses mental fatigue and eliminates careless System 1 oversights.'
      }
    ],
    fivePointsToRemember: [
      '1. Fast thinking (System 1) answers easy substitute questions; slow thinking (System 2) must be deliberately engaged for complex logic.',
      '2. What You See Is All There Is (WYSIATI): We consistently overlook missing evidence.',
      '3. Loss aversion causes us to fear small losses more than we value equivalent gains.',
      '4. Intuition is only reliable in predictable environments with rapid feedback.',
      '5. High subjective confidence is a reflection of storytelling ease, not factual truth.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'System 1',
        definition: 'Fast, automatic, unconscious, and emotionally driven mode of thought requiring zero conscious effort.'
      },
      {
        term: 'System 2',
        definition: 'Slow, deliberate, logical, and calculating mode of thought that demands active cognitive attention.'
      },
      {
        term: 'Loss Aversion',
        definition: 'The psychological phenomenon where losses create greater emotional suffering than equivalent gains create satisfaction.'
      },
      {
        term: 'Anchoring',
        definition: 'The subconscious tendency to rely disproportionately on the first piece of information encountered when estimating value.'
      },
      {
        term: 'Peak-End Rule',
        definition: 'The psychological heuristic where people judge an experience primarily by its peak moment and how it concluded.'
      }
    ],
    questions: [
      {
        question: 'Why is System 2 described as "lazy"?',
        answer:
          'Because mental effort consumes significant glucose and metabolic energy; the brain naturally defaults to System 1 heuristics to conserve cognitive resources whenever possible.'
      },
      {
        question: 'What is the "Availability Heuristic"?',
        answer:
          'Estimating the likelihood or frequency of an event based on how easily vivid examples come to mind, often exaggerated by emotional media coverage.'
      },
      {
        question: 'What is "WYSIATI"?',
        answer:
          'What You See Is All There Is: System 1 builds a coherent explanation based strictly on known information while ignoring what is unknown or missing.'
      },
      {
        question: 'How does Loss Aversion affect investor and student decision-making?',
        answer:
          'It causes individuals to hold losing investments or bad academic choices too long to avoid admitting a loss, while selling winning opportunities prematurely.'
      },
      {
        question: 'Under what conditions can expert intuition be trusted?',
        answer:
          'In environments that are regular, stable, and predictable, where the individual has had prolonged practice with immediate, unambiguous feedback.'
      }
    ],
    oneMinuteSummary:
      'Thinking, Fast and Slow demonstrates that human thought is split between fast intuitive heuristics (System 1) and slow analytical reason (System 2). Left unchecked, System 1 falls prey to overconfidence, loss aversion, anchoring, and availability bias. Becoming a better thinker requires recognizing cognitive ease, embracing intellectual humility, and consciously activating System 2 for crucial life decisions.'
  }
};
