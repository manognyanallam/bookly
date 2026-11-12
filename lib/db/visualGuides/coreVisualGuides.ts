import { BookVisualGuide } from '@/types/visuals';

export const atomicHabitsVisuals: BookVisualGuide = {
  bookId: 'atomic-habits',
  slug: 'atomic-habits',
  bookTitle: 'Atomic Habits',
  introDescription:
    'Visualise how tiny 1% micro-actions compound into massive personal and academic breakthroughs using behavioral loops, environment architecture, and identity models.',
  diagrams: [
    {
      id: 'ah-habit-loop',
      title: 'The 4-Stage Neurological Habit Loop',
      format: 'flowchart',
      badge: 'Neurological Flowchart',
      whatItRepresents:
        'The continuous four-step neurological feedback loop that governs every human habit: Cue, Craving, Response, and Reward.',
      simpleDescription:
        'A Cue triggers a subconscious Craving; the Craving motivates an action (Response); the Response delivers a satisfying Reward, which neurologically reinforces the Cue for the next cycle.',
      studentExample:
        'Noticing your phone screen light up during study hours (Cue) sparks a craving for distraction (Craving); unlocking the phone to check Instagram (Response) delivers a burst of dopamine (Reward), reinforcing the phone-checking addiction.',
      quickRevision:
        'To build a good habit: Make it Obvious (Cue) -> Attractive (Craving) -> Easy (Response) -> Satisfying (Reward). To break a bad habit: invert all four.',
      flowchartData: {
        steps: [
          {
            stepNumber: 1,
            label: '1. Cue (Make It Obvious)',
            description: 'The physical or digital trigger that predicts a reward. It catches your sensory attention.',
            tag: 'Trigger Stage',
            outcome: 'Generates anticipation'
          },
          {
            stepNumber: 2,
            label: '2. Craving (Make It Attractive)',
            description: 'The motivational force. You do not crave the habit itself, but the internal change of state it provides.',
            tag: 'Desire Stage',
            outcome: 'Pushes toward action'
          },
          {
            stepNumber: 3,
            label: '3. Response (Make It Easy)',
            description: 'The actual action or thought performed. Determined by the friction between your ability and motivation.',
            tag: 'Action Stage',
            isDecision: true,
            decisionPath: {
              yesLabel: 'Low friction (< 2 mins)',
              yesOutcome: 'Action executed effortlessly',
              noLabel: 'High friction',
              noOutcome: 'Procrastination occurs'
            },
            outcome: 'Action complete'
          },
          {
            stepNumber: 4,
            label: '4. Reward (Make It Satisfying)',
            description: 'The end goal of every habit. Satisfies the craving and teaches the brain which actions are worth repeating.',
            tag: 'Reinforcement Stage',
            outcome: 'Loop locked into memory'
          }
        ]
      }
    },
    {
      id: 'ah-identity-vs-outcome',
      title: 'Outcome-Based vs. Identity-Based Habits',
      format: 'comparison',
      badge: 'Behavioral Comparison',
      whatItRepresents:
        'The difference between superficial outcome-driven goal setting and deep identity-driven behavioral systems.',
      simpleDescription:
        'Outcome-based habits focus on what you want to achieve and easily break when motivation wavers. Identity-based habits focus on who you wish to become, turning actions into natural expressions of character.',
      studentExample:
        'Outcome thinker: "I want to score a 9.0 GPA this semester." Identity thinker: "I am an inquisitive engineer who studies 45 minutes of core concepts every single day without fail."',
      quickRevision:
        'Every action you take is a vote for the type of person you wish to become. Focus on casting votes, not just chasing trophies.',
      comparisonData: {
        sideA: {
          name: 'Outcome-Based Habits',
          subtitle: 'Starts from the outside in (Goals & Trophies)',
          badge: 'Fragile / High Friction',
          colorTheme: 'amber',
          traits: [
            { point: 'Primary Focus', explanation: 'Target results (e.g. lose 5 kg, score an A in exams, earn ₹1 Lakh).' },
            { point: 'Mental Energy', explanation: 'Relies on temporary willpower and hype; fades when initial excitement dies.' },
            { point: 'Self-Perception', explanation: '"I am trying to study" (implies an internal struggle against your true nature).' },
            { point: 'Long-term Vulnerability', explanation: 'Once the goal is reached (or missed), people frequently relapse into old routines.' }
          ]
        },
        sideB: {
          name: 'Identity-Based Habits',
          subtitle: 'Starts from the inside out (Beliefs & Systems)',
          badge: 'Durable / Compounding',
          colorTheme: 'forest',
          traits: [
            { point: 'Primary Focus', explanation: 'Personal identity and character (e.g. "I am a disciplined scholar and athlete").' },
            { point: 'Mental Energy', explanation: 'Actions align with your self-image, eliminating exhausting internal debate.' },
            { point: 'Self-Perception', explanation: '"I am a reader / developer / athlete" (actions flow naturally from conviction).' },
            { point: 'Long-term Durability', explanation: 'Habits compound across years because they reinforce who you are every day.' }
          ]
        },
        verdict:
          'Invert your focus: do not set goals and force habits onto your life. First decide who you want to be, then prove it to yourself with small daily wins.'
      }
    },
    {
      id: 'ah-4-laws-mindmap',
      title: 'The Four Laws of Behavior Change Framework',
      format: 'mindmap',
      badge: 'System Mind Map',
      whatItRepresents:
        'The comprehensive framework to engineer productive habits and extinguish destructive ones across physical and digital environments.',
      simpleDescription:
        'Clear organizes habit engineering into 4 actionable laws, each targeting one phase of the human habit loop with practical techniques.',
      studentExample:
        'Using Habit Stacking ("After brushing teeth, review 5 flashcards") paired with Environment Design (leaving textbooks open on desk) removes all friction to study.',
      quickRevision:
        'Optimize your environment so the cues for good habits are obvious and frictionless, while cues for bad habits are completely invisible.',
      mindmapData: {
        centralTheme: {
          label: 'The Four Laws of Habit Change',
          description: 'A complete behavioral engineering toolkit for college scholars'
        },
        branches: [
          {
            category: '1st Law: Make It Obvious (Cue)',
            color: 'forest',
            nodes: [
              { label: 'Implementation Intentions', description: '"I will [BEHAVIOR] at [TIME] in [LOCATION]."' },
              { label: 'Habit Stacking', description: '"After [CURRENT HABIT], I will [NEW HABIT]."' },
              { label: 'Environment Design', description: 'Make cues of good habits prominent and visible in your study room.' }
            ]
          },
          {
            category: '2nd Law: Make It Attractive (Craving)',
            color: 'gold',
            nodes: [
              { label: 'Temptation Bundling', description: 'Pair an action you need to do with an action you want to do.' },
              { label: 'Social Norms', description: 'Join study groups where your desired habits are the accepted standard.' },
              { label: 'Reframing Mindset', description: 'Shift from "I have to study" to "I get to master this topic."' }
            ]
          },
          {
            category: '3rd Law: Make It Easy (Response)',
            color: 'sage',
            nodes: [
              { label: 'The 2-Minute Rule', description: 'Scale new habits down to take under 120 seconds to initiate.' },
              { label: 'Reduce Friction', description: 'Prepare materials the night before to eliminate morning hesitation.' },
              { label: 'Commitment Devices', description: 'Use site-blockers to lock out distracting websites during study blocks.' }
            ]
          },
          {
            category: '4th Law: Make It Satisfying (Reward)',
            color: 'forest',
            nodes: [
              { label: 'Immediate Gratification', description: 'Attach instant psychological reward to completing good routines.' },
              { label: 'Visual Habit Tracker', description: 'Mark an "X" on a calendar; visual streaks stimulate dopamine.' },
              { label: 'Never Miss Twice Rule', description: 'If you miss one day due to an emergency, recover immediately the next.' }
            ]
          }
        ]
      }
    }
  ]
};

export const richDadPoorDadVisuals: BookVisualGuide = {
  bookId: 'rich-dad-poor-dad',
  slug: 'rich-dad-poor-dad',
  bookTitle: 'Rich Dad Poor Dad',
  introDescription:
    'Decode cash flow mechanics, the difference between real assets and lifestyle liabilities, and the four income quadrants through clear visual financial diagrams.',
  diagrams: [
    {
      id: 'rdpd-cash-flow',
      title: 'Functional Cash Flow: Assets vs. Liabilities',
      format: 'comparison',
      badge: 'Financial Flow Comparison',
      whatItRepresents:
        'Kiyosaki’s famous functional definition: Assets generate recurring cash inflow; Liabilities generate recurring cash outflow.',
      simpleDescription:
        'The middle class buys liabilities believing they are assets (cars, luxury gadgets, primary homes with high mortgages). The rich buy true income-producing assets (index funds, equities, rental units, intellectual property) first.',
      studentExample:
        'A high-end smartphone purchased on EMI is a liability (monthly cash drain). Using that phone to record paid coding tutorials or freelance design work transforms equipment into an income-generating asset.',
      quickRevision:
        'Assets put money into your pocket without manual labor. Liabilities continuously extract cash from your pocket.',
      comparisonData: {
        sideA: {
          name: 'True Asset Column',
          subtitle: 'Puts recurring cash into your pocket',
          badge: 'Cash Generator (+)',
          colorTheme: 'forest',
          traits: [
            { point: 'Cash Flow Direction', explanation: 'Flows inward from the asset directly to your income statement.' },
            { point: 'Real-world Examples', explanation: 'Diversified index funds, dividend stocks, royalties, automated software tools.' },
            { point: 'Behavior Over Time', explanation: 'Appreciates in value and generates compounding cash distributions.' },
            { point: 'Student Approach', explanation: 'Automate a monthly investment of ₹1,000 / $25 into low-cost index funds.' }
          ]
        },
        sideB: {
          name: 'Liability Column (Often Mistaken for Assets)',
          subtitle: 'Drains ongoing cash from your pocket',
          badge: 'Cash Drain (-)',
          colorTheme: 'amber',
          traits: [
            { point: 'Cash Flow Direction', explanation: 'Flows outward from your bank account to creditors, fuel, maintenance, and interest.' },
            { point: 'Real-world Examples', explanation: 'New cars on finance, credit card debt, luxury clothing on BNPL, high-rent apartments.' },
            { point: 'Behavior Over Time', explanation: 'Depreciates rapidly while demanding ongoing insurance, repairs, and interest.' },
            { point: 'Student Approach', explanation: 'Avoid consumer debt; purchase consumer upgrades only with asset cash flow.' }
          ]
        },
        verdict:
          'Financial independence is achieved when the passive income generated by your asset column completely covers your living expenses.'
      }
    },
    {
      id: 'rdpd-cashflow-quadrant',
      title: 'The Cash Flow Quadrant (E, S, B, I)',
      format: 'concept-diagram',
      badge: 'Economic Quadrant Model',
      whatItRepresents:
        'The four distinct psychological and economic quadrants through which people generate income: Employee (E), Self-Employed (S), Business Owner (B), and Investor (I).',
      simpleDescription:
        'The left side of the quadrant (E & S) trades finite time for money and carries the highest tax rates. The right side (B & I) owns scalable systems and capital, achieving true time freedom and tax advantages.',
      studentExample:
        'Tutoring a junior student for ₹500/hour is Self-Employed (S). Recording a complete exam preparation video course that 500 students purchase is a scalable Business System (B).',
      quickRevision:
        'While starting as an Employee (E) after graduation is practical, your long-term goal should be to migrate your cash flow to the B and I quadrants.',
      conceptData: {
        coreConcept: 'The Cash Flow Quadrant Matrix',
        feedbackLoop:
          'Income from E/S quadrants should be systematically channeled into the I quadrant to purchase compounding assets.',
        components: [
          {
            name: 'E: Employee (Left Side)',
            role: 'Trades Time for Money',
            details: 'Values security, corporate benefits, and predictable paychecks. Has zero leverage; when labor stops, income stops.',
            connectionToCore: 'Forms the baseline starting point for most university graduates.'
          },
          {
            name: 'S: Self-Employed / Specialist (Left Side)',
            role: 'Owns a Job',
            details: 'Values perfectionism and autonomy. Cannot take extended vacations without business revenue collapsing.',
            connectionToCore: 'High expertise (freelancers, doctors, lawyers), but still tied to time.'
          },
          {
            name: 'B: Business Owner (Right Side)',
            role: 'Owns a Scalable System',
            details: 'Hires talented specialists to run processes. The business continues to generate cash even when the founder is asleep.',
            connectionToCore: 'Leverages other people’s time and skills.'
          },
          {
            name: 'I: Investor (Right Side)',
            role: 'Money Works for You',
            details: 'Deploys capital into income-producing assets (equities, index funds, real estate). Achieves complete time freedom.',
            connectionToCore: 'The ultimate destination for long-term financial independence.'
          }
        ]
      }
    },
    {
      id: 'rdpd-pay-yourself-first',
      title: 'The "Pay Yourself First" Decision Flow',
      format: 'flowchart',
      badge: 'Budgeting Flowchart',
      whatItRepresents:
        'The operational cash-flow sequence that separates wealth builders from individuals trapped in the paycheck-to-paycheck Rat Race.',
      simpleDescription:
        'Instead of paying landlords, restaurants, and bills first and hoping to invest what remains (which is usually zero), you automatically route 15-20% to your asset column the moment income lands.',
      studentExample:
        'When ₹15,000 stipend arrives, ₹3,000 is automatically swept into an index mutual fund before paying for weekend dining or movie tickets.',
      quickRevision:
        'Paying yourself first creates healthy financial discipline to control lifestyle expenses.',
      flowchartData: {
        steps: [
          {
            stepNumber: 1,
            label: '1. Income Received',
            description: 'Stipend, part-time salary, or allowance lands in your primary bank account.',
            tag: 'Day 1',
            outcome: 'Gross cash arrives'
          },
          {
            stepNumber: 2,
            label: '2. Automatic Asset Transfer (15% - 20%)',
            description: 'Before touching bills or fun money, an automated bank standing instruction transfers 15-20% directly into an index fund or savings reserve.',
            tag: 'Pay Yourself First',
            isDecision: true,
            decisionPath: {
              yesLabel: 'Automated transfer active',
              yesOutcome: 'Asset column grows effortlessly',
              noLabel: 'Attempting to save "leftovers"',
              noOutcome: 'Zero savings at end of month'
            },
            outcome: 'Capital protected'
          },
          {
            stepNumber: 3,
            label: '3. Essential Fixed Obligations',
            description: 'Pay non-negotiable living costs (rent, mess food, essential books).',
            tag: 'Fixed Costs',
            outcome: 'Shelter & survival secured'
          },
          {
            stepNumber: 4,
            label: '4. Discretionary Spending',
            description: 'Enjoy leisure, dining out, and hobbies strictly within the remaining balance.',
            tag: 'Lifestyle Balance',
            outcome: 'Zero financial guilt'
          }
        ]
      }
    }
  ]
};

export const thinkingFastAndSlowVisuals: BookVisualGuide = {
  bookId: 'thinking-fast-and-slow',
  slug: 'thinking-fast-and-slow',
  bookTitle: 'Thinking, Fast and Slow',
  introDescription:
    'Understand cognitive architecture, visual comparisons of System 1 and System 2, heuristic shortcuts, and the mathematical reality of Loss Aversion.',
  diagrams: [
    {
      id: 'tfs-systems-comparison',
      title: 'System 1 (Intuitive) vs. System 2 (Deliberate)',
      format: 'comparison',
      badge: 'Cognitive Dual-Process Comparison',
      whatItRepresents:
        'The two distinct modes of cognitive processing that drive all human judgments, reactions, and decisions.',
      simpleDescription:
        'System 1 is fast, automatic, and emotionally charged; it operates with zero effort but is prone to cognitive illusions. System 2 is slow, analytical, and logical; it requires deep effort and tires quickly.',
      studentExample:
        'Reading the word "DANGER" or recognizing an angry face is System 1. Solving 17 × 24 or writing a formal logic proof requires deliberate System 2 engagement.',
      quickRevision:
        'Subjective confidence is a feeling generated by System 1 coherence, not proof of factual accuracy.',
      comparisonData: {
        sideA: {
          name: 'System 1 (The Intuitive Mind)',
          subtitle: 'Fast, Automatic, Effortless & Emotional',
          badge: 'Default / Low Energy',
          colorTheme: 'amber',
          traits: [
            { point: 'Speed & Effort', explanation: 'Operates in milliseconds with zero conscious effort or voluntary control.' },
            { point: 'Core Function', explanation: 'Creates quick impressions, feelings, and impulses based on heuristics.' },
            { point: 'Vulnerabilities', explanation: 'Prone to anchoring, confirmation bias, halo effect, and WYSIATI illusions.' },
            { point: 'Metabolic Cost', explanation: 'Extremely energy-efficient; runs continuously in the background.' }
          ]
        },
        sideB: {
          name: 'System 2 (The Analytical Mind)',
          subtitle: 'Slow, Deliberate, Effortful & Logical',
          badge: 'Vigilant / High Energy',
          colorTheme: 'forest',
          traits: [
            { point: 'Speed & Effort', explanation: 'Requires focused attention, conscious concentration, and mental strain.' },
            { point: 'Core Function', explanation: 'Checks facts, evaluates probabilities, solves complex math, and regulates impulses.' },
            { point: 'Vulnerabilities', explanation: 'Inherently lazy; suffers from ego depletion and fatigue after intense study.' },
            { point: 'Metabolic Cost', explanation: 'High glucose and metabolic consumption; activates pupil dilation and heart rate.' }
          ]
        },
        verdict:
          'Do not rely on System 1 for complex financial, academic, or ethical decisions. Consciously induce cognitive strain to activate System 2 when the stakes are high.'
      }
    },
    {
      id: 'tfs-heuristic-flow',
      title: 'The Heuristic Substitution Process',
      format: 'flowchart',
      badge: 'Cognitive Flowchart',
      whatItRepresents:
        'How System 1 handles difficult questions by unconsciously substituting an easier emotional question in place of the complex analytical target.',
      simpleDescription:
        'When faced with an intellectually demanding question, the lazy brain rarely calculates probabilities. Instead, System 1 finds an easier, emotionally charged substitute question and answers it with unearned confidence.',
      studentExample:
        'Target Question: "Is this artificial intelligence company fairly valued at ₹10,000 Crores based on discounted cash flows?" Substitute Question: "Do I like this company’s cool product?" Result: "Yes, I will buy the stock!"',
      quickRevision:
        'Beware when a complex question feels easy: you have likely answered a simpler substitute question without realizing it.',
      flowchartData: {
        steps: [
          {
            stepNumber: 1,
            label: '1. Target Question Presented',
            description: 'A complex, statistically demanding real-world dilemma (e.g. "What is the probability this startup succeeds?").',
            tag: 'Input Phase',
            outcome: 'Requires deep statistical data'
          },
          {
            stepNumber: 2,
            label: '2. System 1 Substitution Triggered',
            description: 'Because System 2 is lazy, System 1 automatically retrieves a related, simpler emotional question (e.g. "Do the founders look charismatic and inspiring?").',
            tag: 'Mental Shortcut',
            outcome: 'Heuristic swap occurs'
          },
          {
            stepNumber: 3,
            label: '3. Easy Answer Generated',
            description: 'System 1 generates an instant emotional answer with high cognitive ease and storytelling coherence.',
            tag: 'Cognitive Ease',
            isDecision: true,
            decisionPath: {
              yesLabel: 'System 2 asleep (Ego Depleted)',
              yesOutcome: 'Flawed intuitive judgment accepted as fact',
              noLabel: 'System 2 activated (Vigilant)',
              noOutcome: 'Biased answer rejected; objective analysis run'
            },
            outcome: 'Decision finalized'
          }
        ]
      }
    },
    {
      id: 'tfs-loss-aversion',
      title: 'Prospect Theory: The Asymmetry of Loss Aversion',
      format: 'infographic',
      badge: 'Behavioral Economics Infographic',
      whatItRepresents:
        'The mathematical and psychological reality that losses hurt roughly 2 to 2.5 times more than equivalent gains feel good.',
      simpleDescription:
        'Standard economics assumed humans evaluate wealth objectively. Kahneman’s Prospect Theory proved that choices are evaluated relative to a reference point, with losses looming much larger than gains.',
      studentExample:
        'A student will celebrate getting a ₹1,000 bonus for one hour, but will obsessively agonize over losing ₹1,000 out of their wallet for three days.',
      quickRevision:
        'Evaluate decisions using expected mathematical value, not your emotional terror of experiencing a short-term loss.',
      infographicData: {
        items: [
          {
            highlight: '2.0x - 2.5x',
            title: 'Loss Aversion Ratio',
            takeaway: 'Psychological pain of losing ₹1,000 equals the joy of winning ₹2,500.',
            iconType: 'shield'
          },
          {
            highlight: 'Sunk Cost',
            title: 'The Sunk Cost Trap',
            takeaway: 'Continuing a failing major or project solely because you already invested 2 years into it.',
            iconType: 'target'
          },
          {
            highlight: 'WYSIATI',
            title: 'What You See Is All There Is',
            takeaway: 'System 1 builds stories based only on known facts, ignoring crucial missing data.',
            iconType: 'sparkles'
          },
          {
            highlight: 'Anchoring',
            title: 'Arbitrary Anchor Manipulation',
            takeaway: 'The first number introduced in a negotiation heavily influences final outcomes.',
            iconType: 'trending-up'
          }
        ]
      }
    }
  ]
};

export const the48LawsOfPowerVisuals: BookVisualGuide = {
  bookId: 'the-48-laws-of-power',
  slug: 'the-48-laws-of-power',
  bookTitle: 'The 48 Laws of Power',
  introDescription:
    'Visualise historical power dynamics, defensive social armor, hierarchy etiquette, and ethical boundaries across professional environments.',
  diagrams: [
    {
      id: 'power-law1-flow',
      title: 'Law 1: Navigating the Superior’s Ego (Defensive Flow)',
      format: 'flowchart',
      badge: 'Organizational Flowchart',
      whatItRepresents:
        'How to present talent, solutions, and corrections to superiors without triggering destructive insecurity or retaliation.',
      simpleDescription:
        'Superiors have fragile human egos. Ostentatious displays of superiority by subordinates trigger defensive hostility. Framing solutions as extensions of the master’s guidance achieves progress while preserving safety.',
      studentExample:
        'During an internship, instead of publicly correcting your manager in a team meeting, suggest the adjustment privately: "Building on your great suggestion yesterday, I ran tests on this algorithm and found an optimization."',
      quickRevision:
        'Always make those above you feel comfortably superior. Shine through competence without making superiors feel redundant.',
      flowchartData: {
        steps: [
          {
            stepNumber: 1,
            label: '1. Identifying an Improvement / Innovation',
            description: 'You spot an error, inefficiency, or major opportunity in your lab or company project.',
            tag: 'Discovery',
            outcome: 'Action required'
          },
          {
            stepNumber: 2,
            label: '2. The Presentation Decision',
            description: 'How will you present this breakthrough to your superiors and teammates?',
            tag: 'Strategic Choice',
            isDecision: true,
            decisionPath: {
              yesLabel: 'Public boast / Calling out superior',
              yesOutcome: 'Triggers Law 1 violation: superior feels threatened and retaliates',
              noLabel: 'Tactical deference / Attributing credit',
              noOutcome: 'Superior feels flattered and champions your project'
            },
            outcome: 'Social alignment'
          },
          {
            stepNumber: 3,
            label: '3. Long-term Result',
            description: 'You gain powerful mentors who advocate for your promotions while your reputation for competence grows.',
            tag: 'Elevation',
            outcome: 'Safe, sustainable rise in hierarchy'
          }
        ]
      }
    },
    {
      id: 'power-influence-mindmap',
      title: 'The Defensive Pillars of Influence',
      format: 'mindmap',
      badge: 'Influence Mind Map',
      whatItRepresents:
        'The core defensive laws that protect students and professionals from political manipulation, jealousy, and self-inflicted blunders.',
      simpleDescription:
        'Greene’s laws condensed into four defensive pillars: Emotional Mastery, Verbal Restraint, Actions over Arguments, and Tactical Fluidity.',
      studentExample:
        'Instead of engaging in shouting matches in student council debates (Law 9), quietly build a working demo that proves your concept with undeniable results.',
      quickRevision:
        'Power is built on emotional detachment and strategic patience. The person who loses their temper always loses the game.',
      mindmapData: {
        centralTheme: {
          label: 'Defensive Social Intelligence',
          description: 'Navigating human hierarchies without compromising personal ethics'
        },
        branches: [
          {
            category: 'Law 4: Say Less Than Necessary',
            color: 'forest',
            nodes: [
              { label: 'Strategic Silence', description: 'Prevents careless remarks you will later regret.' },
              { label: 'Unmasking Others', description: 'Silence makes people uncomfortable, prompting them to reveal motives.' },
              { label: 'Projecting Gravitas', description: 'Short, clear answers project quiet confidence.' }
            ]
          },
          {
            category: 'Law 5: Guard Your Reputation',
            color: 'gold',
            nodes: [
              { label: 'Single Anchor Virtue', description: 'Build a reputation for a specific quality (e.g. 100% punctuality).' },
              { label: 'Infallible Delivery', description: 'Never over-promise and under-deliver on project commitments.' },
              { label: 'Shielding from Slander', description: 'A pristine reputation neutralizes petty office rumors.' }
            ]
          },
          {
            category: 'Law 9: Win Through Actions',
            color: 'sage',
            nodes: [
              { label: 'Avoid Verbal Battles', description: 'Arguments create deep resentment even if you win the logic.' },
              { label: 'Demonstrate Tangibly', description: 'Show working code, data charts, or prototypes instead of words.' },
              { label: 'Let Others Save Face', description: 'Never humiliate colleagues in public settings.' }
            ]
          },
          {
            category: 'Law 48: Assume Formlessness',
            color: 'amber',
            nodes: [
              { label: 'Adapt Like Water', description: 'Never cling to obsolete frameworks or rigid plans.' },
              { label: 'Emotional Detachment', description: 'Treat organizational politics like chess moves, not personal slights.' },
              { label: 'Lifelong Learning', description: 'Cross-train across diverse disciplines to remain irreplaceable.' }
            ]
          }
        ]
      }
    }
  ]
};

export const theAlchemistVisuals: BookVisualGuide = {
  bookId: 'the-alchemist',
  slug: 'the-alchemist',
  bookTitle: 'The Alchemist',
  introDescription:
    'Trace Santiago’s physical and spiritual journey from the pastures of Spain to the Pyramids of Egypt, mapping literary symbolism and personal transformation.',
  diagrams: [
    {
      id: 'alchemist-journey-timeline',
      title: 'Santiago’s Journey to His Personal Legend',
      format: 'timeline',
      badge: 'Narrative & Philosophical Timeline',
      whatItRepresents:
        'The geographical and spiritual progression of Santiago through trials, betrayals, love, and ultimate self-realization.',
      simpleDescription:
        'Santiago’s quest follows the classic Hero’s Journey: from the comfortable baseline of Andalusia, through catastrophic loss in Tangier, love and intuition in the Sahara, facing death with the Alchemist, to the Pyramids and the sycamore tree.',
      studentExample:
        'College is your desert journey: leaving home comfort (Andalusia), facing academic or financial setbacks (Tangier), developing skills and discipline, to discover that your true talent was inside you all along.',
      quickRevision:
        'The journey was necessary to transform the shepherd into a master capable of holding the treasure.',
      timelineData: {
        events: [
          {
            period: 'Stage 1: Andalusia, Spain',
            title: 'The Recurring Dream & The Call',
            subtitle: 'The Ruined Church & King Melchizedek',
            description:
              'Santiago dreams of treasure at the Pyramids while sleeping under a sycamore tree. King Melchizedek urges him to sell his sheep and pursue his Personal Legend.',
            keyLearning: 'Crossing the threshold requires sacrificing comfortable familiarity for uncertain growth.'
          },
          {
            period: 'Stage 2: Tangier, Morocco',
            title: 'Betrayal, Loss & The Crystal Shop',
            subtitle: 'Catastrophe as Training Ground',
            description:
              'Robbed of all his savings on day one in Africa. Works for a fearful crystal merchant, innovates tea service in crystal glasses, and amasses wealth and business wisdom.',
            keyLearning: 'Setbacks are not endings; they provide the practical training required for higher trials.'
          },
          {
            period: 'Stage 3: Sahara Desert & Al-Fayoum',
            title: 'The Caravan & The Oasis of Love',
            subtitle: 'Meeting the Englishman & Fatima',
            description:
              'Crosses the desert, learns to read environmental omens, and falls in love with Fatima at the oasis. Fatima encourages him to continue his quest rather than staying behind.',
            keyLearning: 'Authentic love never holds a person back from fulfilling their highest destiny.'
          },
          {
            period: 'Stage 4: Desert War Zone',
            title: 'Turning Into the Wind & The Alchemist',
            subtitle: 'The Test of Spiritual Mastery',
            description:
              'Captured by warring tribes. Santiago speaks to the desert, wind, and sun, reaching the Soul of God to generate a massive sandstorm and prove his spiritual unity with creation.',
            keyLearning: 'The fear of suffering is far worse than the suffering itself.'
          },
          {
            period: 'Stage 5: The Pyramids of Giza & Return',
            title: 'The Sacred Irony of the Sycamore Tree',
            subtitle: 'Treasure Found Where It Began',
            description:
              'At the Pyramids, refugees beat Santiago and reveal their dream of treasure under a Spanish church. He returns to Andalusia to dig beneath the sycamore roots, finding gold and returning to Fatima.',
            keyLearning: 'The real treasure was the wisdom, courage, and languages developed across the journey.'
          }
        ]
      }
    },
    {
      id: 'alchemist-symbolism-concept',
      title: 'Literary Symbolism & The Alchemical Process',
      format: 'concept-diagram',
      badge: 'Literary Concept Diagram',
      whatItRepresents:
        'The deeper allegorical meaning behind Coelho’s symbols and the spiritual transmutation of the human soul.',
      simpleDescription:
        'In alchemy, transmuting lead into gold is a metaphor for spiritual purification. Life’s trials burn away ego, comfort-seeking, and fear, leaving behind the pure gold of wisdom.',
      studentExample:
        'Struggling through difficult exams and lab projects is your crucible: burning away procrastination and self-doubt to forge academic mastery.',
      quickRevision:
        'Listen to your heart, for it knows all things having come from the Soul of the World.',
      conceptData: {
        coreConcept: 'The Alchemical Transmutation of the Soul',
        feedbackLoop:
          'Purifying one’s soul aligns it with the Soul of the World, allowing one to understand the Language of Omens.',
        components: [
          {
            name: 'The Sheep (Comfort)',
            role: 'The Unexamined Life',
            details: 'Content with only food and water, trusting blindly; represents masses who abandon dreams for safety.',
            connectionToCore: 'The starting baseline of unrefined lead.'
          },
          {
            name: 'Urim & Thummim (Discernment)',
            role: 'Guidance Stones',
            details: 'White and black stones representing "Yes" and "No", given by Melchizedek to assist when in doubt.',
            connectionToCore: 'Tools to navigate early moral and directional choices.'
          },
          {
            name: 'The Desert (The Crucible)',
            role: 'Testing & Purification',
            details: 'An unforgiving expanse that strips away superficial vanity, demanding silence, patience, and vigilance.',
            connectionToCore: 'The heat of the furnace burning away impurities.'
          },
          {
            name: 'The Sycamore Tree (Roots & Return)',
            role: 'Origin & Completion',
            details: 'The abandoned church at home where treasure lay buried all along.',
            connectionToCore: 'Proves the internal nature of true wealth.'
          }
        ]
      }
    }
  ]
};

export const coreVisualGuides: Record<string, BookVisualGuide> = {
  'atomic-habits': atomicHabitsVisuals,
  'rich-dad-poor-dad': richDadPoorDadVisuals,
  'thinking-fast-and-slow': thinkingFastAndSlowVisuals,
  'the-48-laws-of-power': the48LawsOfPowerVisuals,
  'the-alchemist': theAlchemistVisuals,
};
