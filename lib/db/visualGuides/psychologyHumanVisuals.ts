import { BookVisualGuide } from '@/types/visuals';

export const psychologyHumanVisualGuides: Record<string, BookVisualGuide> = {
  'the-psychology-of-money': {
    bookId: 'the-psychology-of-money',
    slug: 'the-psychology-of-money',
    bookTitle: 'The Psychology of Money',
    introDescription: 'Understand Morgan Housel’s behavioral finance insights, the compounding nature of time, the psychology of staying wealthy, and defining what is "enough".',
    diagrams: [
      {
        id: 'getting-vs-staying-wealthy',
        title: 'Getting Wealthy vs Staying Wealthy',
        format: 'comparison',
        badge: 'Behavioral Finance Matrix',
        whatItRepresents: 'Highlights the opposing psychological skill sets required to accumulate capital versus the paranoia and humility required to keep it.',
        simpleDescription: 'Getting money requires taking calculated risks, optimistic optimism, and aggressive pursuit. Staying wealthy requires the exact opposite: paranoia, humility, frugality, and the understanding that luck played a massive role.',
        studentExample: 'A young crypto trader makes 10x returns by taking excessive leverage on meme tokens (Getting Wealthy tactics). Because they lack the paranoia and risk management of Staying Wealthy, they double down on the next cycle and lose 100% of their net worth.',
        quickRevision: 'Getting wealthy is about ambition and risk; staying wealthy is about survival, patience, and avoiding ruinous downside.',
        comparisonData: {
          sideA: {
            name: 'Getting Wealthy',
            subtitle: 'Risk-Taking, Optimism & Upside',
            badge: 'Offensive Play',
            colorTheme: 'sage',
            traits: [
              { point: 'Primary Mindset', explanation: 'Bold optimism, embracing variance, and seeking positive asymmetry.' },
              { point: 'Core Behavior', explanation: 'High savings rate, career advancement, launching ventures, investing early.' },
              { point: 'Attitude to Risk', explanation: 'Takes calculated chances because the cost of remaining at zero is high.' },
              { point: 'Vulnerability', explanation: 'Can easily be confused with pure luck or a speculative bull market.' },
              { point: 'Time Horizon', explanation: 'Focuses on the sprint of capital accumulation and career velocity.' }
            ]
          },
          sideB: {
            name: 'Staying Wealthy',
            subtitle: 'Humility, Paranoia & Survival',
            badge: 'Defensive Fortitude',
            colorTheme: 'forest',
            traits: [
              { point: 'Primary Mindset', explanation: 'Humility and healthy paranoia: knowing that what went up can evaporate overnight.' },
              { point: 'Core Behavior', explanation: 'Living below your means, holding ample cash reserves, avoiding toxic leverage.' },
              { point: 'Attitude to Risk', explanation: 'Treats ruinous risk as fatal. Protects the principle that survival compounds.' },
              { point: 'Resilience', explanation: 'Survives market panics, health crises, and economic crashes without panic-selling.' },
              { point: 'Time Horizon', explanation: 'Multi-decade endurance. Uninterrupted compounding is the eighth wonder of the world.' }
            ]
          },
          verdict: 'The world is filled with brilliant people who got rich once and lost it all. True financial independence comes from mastering the quiet defense of staying wealthy.'
        }
      },
      {
        id: 'compounding-time-multiplier',
        title: 'The Warren Buffett Compounding Multiplier',
        format: 'infographic',
        badge: 'Exponential Math Infographic',
        whatItRepresents: 'Demonstrates that the overwhelming majority of Warren Buffett’s fortune came from longevity and time in the market, not just abnormal annual returns.',
        simpleDescription: 'Over 99% of Warren Buffett’s net worth was accumulated after his 50th birthday, and 95% came after his 65th. The real secret of wealth is not chasing 50% returns, but letting 10% returns compound uninterrupted for 50 years.',
        studentExample: 'If a 20-year-old student invests ₹2,000 every month in an index fund yielding 12% annually, they accumulate over ₹2.4 Crores by retirement. If they wait until age 35 to start, they must invest four times as much every month to reach that same balance.',
        quickRevision: 'Compounding is not intuitive to the human brain because we think linearly. Time is the heavyweight champion of financial freedom.',
        infographicData: {
          items: [
            {
              highlight: '99% Post-50',
              title: 'The Longevity Secret',
              takeaway: 'Buffett began serious investing at age 10. His skill is investing, but his secret is time. If he retired at 60 like normal workers, nobody would know his name.',
              iconType: 'clock'
            },
            {
              highlight: 'The Man in the Car Paradox',
              title: 'Admiration vs Asset Illusion',
              takeaway: 'When people see a luxury sports car, they rarely admire the driver; they imagine themselves being admired in that car. Spending money to show how much money you have is the fastest way to have less money.',
              iconType: 'sparkles'
            },
            {
              highlight: 'Freedom Over Ferraris',
              title: 'The Highest Dividend of Cash',
              takeaway: 'The greatest intangible value money can purchase is sovereignty over your own time: the ability to wake up every morning and say, "I can do whatever I want today."',
              iconType: 'shield'
            },
            {
              highlight: 'The Room for Error Buffer',
              title: 'Plan on Your Plan Not Going to Plan',
              takeaway: 'A margin of safety allows you to endure inevitable market downturns and personal hardships without being forced to sell your long-term assets at the worst possible time.',
              iconType: 'award'
            }
          ]
        }
      },
      {
        id: 'man-in-the-car-decision-loop',
        title: 'The Social Status Trap & Defining "Enough"',
        format: 'flowchart',
        badge: 'Psychological Decision Loop',
        whatItRepresents: 'The perpetual hedonic treadmill where increasing income triggers escalating lifestyle inflation unless a conscious ceiling of "Enough" is installed.',
        simpleDescription: 'When your goalposts keep moving every time your income rises, you are trapped in a status game you can never win. True financial peace requires defining your own baseline.',
        studentExample: 'A graduate lands an ₹8 LPA job and celebrates, but immediately feels poor after looking at a peer who earns ₹15 LPA. They buy an expensive watch on credit to keep up, restarting the cycle of anxiety.',
        quickRevision: 'Rich is having cash in the bank; wealth is the options you don’t spend to show off. Never risk what you need for what you only desire.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Income & Capital Growth',
              description: 'You work hard, graduate college, land a promotion, and see your bank balance expand.',
              tag: 'Financial Progress'
            },
            {
              stepNumber: 2,
              label: 'The Social Comparison Trigger',
              description: 'You observe peers purchasing designer clothes, luxury vacations, and brand-new cars on social media.',
              tag: 'Status Trap',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Adopt Conscious Definition of "Enough"',
                yesOutcome: 'Surplus cash is invested into financial independence and peace of mind.',
                noLabel: 'Upgrade Lifestyle to Match Peers',
                noOutcome: 'Monthly burn rate spikes, creating golden handcuffs and career trap.'
              }
            },
            {
              stepNumber: 3,
              label: 'Moving Goalposts',
              description: 'As soon as you reach the new lifestyle tier, you encounter an even wealthier cohort to compare yourself against.',
              tag: 'Hedonic Treadmill'
            },
            {
              stepNumber: 4,
              label: 'Financial Fragility',
              description: 'Despite earning 3x your student income, you live paycheck to paycheck with zero margin for error or emergency.',
              tag: 'Vulnerable State',
              outcome: 'Permanent financial anxiety disguised as an affluent lifestyle.'
            }
          ]
        }
      }
    ]
  },

  'sapiens': {
    bookId: 'sapiens',
    slug: 'sapiens',
    bookTitle: 'Sapiens: A Brief History of Humankind',
    introDescription: 'Trace Yuval Noah Harari’s epic narrative of how an insignificant ape became the master of planet Earth through collective fiction, agriculture, and science.',
    diagrams: [
      {
        id: 'three-great-revolutions-timeline',
        title: 'The Three Great Revolutions of Humankind',
        format: 'timeline',
        badge: 'Macro-Historical Timeline',
        whatItRepresents: 'The three pivotal inflection points that transformed Homo sapiens from a vulnerable savannah mammal into the dominant force on Earth.',
        simpleDescription: 'History was shaped by three transformative leaps: the Cognitive Revolution (fictional language), the Agricultural Revolution (the farming trap), and the Scientific Revolution (the admission of ignorance).',
        studentExample: 'Just as our ancestors learned to unite thousands of strangers behind the shared story of a tribal spirit 70,000 years ago, modern college students and professionals coordinate globally across borders under the shared myth of the United States Dollar and corporate legal entities.',
        quickRevision: 'Sapiens rules the planet because we are the only animal that can cooperate flexibly in large numbers by believing in shared fictions.',
        timelineData: {
          events: [
            {
              period: '70,000 Years Ago',
              title: 'The Cognitive Revolution',
              subtitle: 'The Emergence of Fictional Language',
              description: 'Genetic mutations allowed Sapiens to communicate not merely about trees and lions, but about things that do not physically exist: spirits, myths, tribal laws, and shared beliefs.',
              keyLearning: 'Enabled flexible cooperation between hundreds of unrelated individuals, completely shattering the Dunbar number limit of typical primates.'
            },
            {
              period: '12,000 Years Ago',
              title: 'The Agricultural Revolution',
              subtitle: 'History’s Biggest Fraud',
              description: 'Sapiens domesticated wheat, rice, and livestock. While population exploded, the average individual worked longer hours, suffered poorer nutrition, and faced chronic vulnerability to drought and plague.',
              keyLearning: 'The species succeeded in genetic multiplication, but individual well-being deteriorated—a classic example of the "Luxury Trap".'
            },
            {
              period: '500 Years Ago',
              title: 'The Scientific Revolution',
              subtitle: 'The Discovery of Ignorance (Ignoramus)',
              description: 'Humanity made the revolutionary mental leap of admitting: "We do not know everything." Combining scientific empirical observation with imperial conquest and capitalist credit created modern technology.',
              keyLearning: 'Progress accelerated exponentially once human curiosity was tied to financial investment and technological power.'
            },
            {
              period: 'Present to Future',
              title: 'The Bio-Technological Threshold',
              subtitle: 'From Sapiens to Homo Deus',
              description: 'Genetic engineering, artificial intelligence, and cyborg interfaces begin overriding the laws of natural selection with intelligent design.',
              keyLearning: 'For the first time in 4 billion years, life is no longer constrained by organic chemistry and biological evolution.'
            }
          ]
        }
      },
      {
        id: 'intersubjective-myths-mindmap',
        title: 'Intersubjective Reality: The Architecture of Shared Fiction',
        format: 'mindmap',
        badge: 'Anthropological Mind Map',
        whatItRepresents: 'Harari’s division of reality into Objective, Subjective, and Intersubjective domains, explaining how human society coordinates at global scale.',
        simpleDescription: 'Mountains and viruses exist objectively. Pain and joy exist subjectively. But money, human rights, nations, and corporations exist intersubjectively: they exist purely because millions of minds agree to believe in them simultaneously.',
        studentExample: 'A 500-rupee note is physically just a dyed piece of cotton paper with no intrinsic nutritional value. It buys you a hot meal solely because the cashier, the restaurant owner, and the government all share the exact same belief in the Reserve Bank of India’s credit.',
        quickRevision: 'The power of Sapiens lies in intersubjective networks: systems of belief that persist across generations as long as the collective story remains believed.',
        mindmapData: {
          centralTheme: {
            label: 'The Three Orders of Reality',
            description: 'How humans perceive the physical universe versus collective mental constructs.'
          },
          branches: [
            {
              category: '1. Objective Reality',
              color: 'forest',
              nodes: [
                { label: 'Physical Universe', description: 'Radioactivity, gravity, DNA molecules, oceans, and sunlight.' },
                { label: 'Independent of Belief', description: 'Even if all humans stop believing in gravity or viruses, they will still kill you if you jump off a cliff.' }
              ]
            },
            {
              category: '2. Subjective Reality',
              color: 'sage',
              nodes: [
                { label: 'Internal Consciousness', description: 'Individual toothaches, personal fears, grief, private daydreams, and aesthetic tastes.' },
                { label: 'Single-Mind Scope', description: 'Exists solely inside the neural wiring of one individual; dies when that individual sleeps or dies.' }
              ]
            },
            {
              category: '3. Intersubjective Reality (The Superpower)',
              color: 'gold',
              nodes: [
                { label: 'Shared Collective Fictions', description: 'Money (currencies), corporations (LLCs), laws, human rights, borders, and religions.' },
                { label: 'Network Dependent', description: 'Cannot be changed by one lone rebel; requires transforming the collective consciousness of millions.' },
                { label: 'Global Coordination Engine', description: 'Allows 100,000 strangers to build an airport or fight a war under a single banner.' }
              ]
            }
          ]
        }
      },
      {
        id: 'the-agricultural-luxury-trap',
        title: 'The Agricultural Trap: How Comfort Becomes a Cage',
        format: 'flowchart',
        badge: 'Evolutionary Dynamic Flowchart',
        whatItRepresents: 'How technological conveniences designed to make life easier end up multiplying obligations, increasing population pressure, and trapping humanity in a more stressful existence.',
        simpleDescription: 'Every time humans adopt a new luxury to save labor, it quickly becomes an indispensable necessity, creating new burdens that make retreat impossible.',
        studentExample: 'Smartphones and messaging apps were introduced to save time. Instead of giving students more leisure, they led to 24/7 expectations of instant replies from group projects, teachers, and bosses, creating constant ambient stress.',
        quickRevision: 'Luxuries tend to become necessities and to spawn new obligations. Once you step into the trap, population and commitments make stepping back impossible.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Invention of a Convenience',
              description: 'Foraging bands discover that sowing wheat seeds near riverbeds yields extra calories with less roaming.',
              tag: 'New Tool'
            },
            {
              stepNumber: 2,
              label: 'Population Expansion',
              description: 'With more calories available, infant mortality drops and the community population doubles within a few generations.',
              tag: 'Demographic Shift'
            },
            {
              stepNumber: 3,
              label: 'The Trap Closes',
              description: 'The swollen population can no longer survive by foraging wild roots if wheat crops fail. Reverting to hunting-gathering means mass starvation.',
              tag: 'Irreversible Commitment',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Double Down on Farming & Irrigation',
                yesOutcome: 'More intensive labor required: weeding, pest defense, backbreaking toil.',
                noLabel: 'Attempt Return to Foraging',
                noOutcome: 'Impossible: land cannot support 10x population density with wild food.'
              }
            },
            {
              stepNumber: 4,
              label: 'The New Normalization',
              description: 'What was once an optional agricultural experiment becomes a permanent, anxious grind from dawn to dusk.',
              tag: 'Entrenched Reality',
              outcome: 'Sapiens becomes domesticated by wheat, working harder than ever before.'
            }
          ]
        }
      }
    ]
  },

  'the-laws-of-human-nature': {
    bookId: 'the-laws-of-human-nature',
    slug: 'the-laws-of-human-nature',
    bookTitle: 'The Laws of Human Nature',
    introDescription: 'Robert Greene’s masterwork on decoding human behavior, overcoming internal irrationality, seeing through social masks, and integrating the shadow self.',
    diagrams: [
      {
        id: 'law-of-irrationality-pause',
        title: 'The Law of Irrationality: Emotional Reaction vs Rational Pause',
        format: 'flowchart',
        badge: 'Emotional Regulation Flowchart',
        whatItRepresents: 'The psychological pipeline showing how unexamined emotional impulses hijack decision-making, and how the "Rational Pause" restores objective clarity.',
        simpleDescription: 'Most humans believe they act logically, but in reality, emotions trigger instant biases, and reason is merely summoned afterward to justify the feeling. True rationality requires intercepting this circuit.',
        studentExample: 'A classmate receives critical feedback on their presentation from a professor. Their knee-jerk reaction is anger and claiming the professor is biased. A rational student pauses for 24 hours, lets the emotional spike subside, and extracts the genuine technical critique.',
        quickRevision: 'You do not possess rationality as an innate birthright; it is an acquired power built by holding emotional reactions in check until cool logic can analyze the facts.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'External Trigger / Provocation',
              description: 'You encounter a sharp insult, an unexpected academic setback, or a sudden disagreement in a team project.',
              tag: 'Stimulus'
            },
            {
              stepNumber: 2,
              label: 'Subconscious Emotional Surge',
              description: 'The ancient limbic brain floods your system with cortisol and adrenaline. Primitive instincts (defensiveness, tribal pride, revenge) flare up.',
              tag: 'Biological Reaction'
            },
            {
              stepNumber: 3,
              label: 'The Critical Crossroads: The Rational Pause',
              description: 'Will you react instantly to discharge the tension, or step back and create a deliberate cognitive buffer?',
              tag: 'Crucial Choice',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Deploy the 24-Hour Rational Pause',
                yesOutcome: 'Examine personal bias, analyze motives of the other party, draft objective response.',
                noLabel: 'React Instantly on Emotion',
                noOutcome: 'Send heated message, escalate conflict, inflict long-term reputational damage.'
              }
            },
            {
              stepNumber: 4,
              label: 'Rational Strategy Execution',
              description: 'Calmly identify the underlying root cause, detach your fragile ego, and respond with strategic precision rather than defensive panic.',
              tag: 'Mastery Outcome',
              outcome: 'You maintain emotional sovereignty and command the respect of everyone in the room.'
            }
          ]
        }
      },
      {
        id: 'deep-empathy-vs-narcissism',
        title: 'Deep Empathy vs Self-Absorbed Narcissism',
        format: 'comparison',
        badge: 'Social Intelligence Matrix',
        whatItRepresents: 'Contrasts the inward-turning, fragile state of egocentrism with the outward-focused power of transformative deep empathy.',
        simpleDescription: 'Narcissism traps you in your own internal drama, projecting your insecurities onto others. Deep empathy turns your attention outward like a high-powered radar, decoding the genuine desires and fears of other people.',
        studentExample: 'In a college group meeting, a self-absorbed student talks continuously about their ideas and gets offended when challenged. An empathetic student asks curious questions, notices who feels sidelined, and unites the group behind a collaborative vision.',
        quickRevision: 'The most magnetic social skill is shifting focus from "What do they think of me?" to "What makes this person tick and what do they deeply value?"',
        comparisonData: {
          sideA: {
            name: 'Deep Empathy (Outward Focus)',
            subtitle: 'Curious, Objective & Magnetic',
            badge: 'Master Communicator',
            colorTheme: 'forest',
            traits: [
              { point: 'Primary Attention', explanation: 'Aimed 100% outward at the body language, tone, and unstated emotional needs of others.' },
              { point: 'Listening Quality', explanation: 'Visceral listening: suspends judgment and listens for what is left unsaid.' },
              { point: 'Handling Criticism', explanation: 'Views critique as data about the other person’s perspective rather than an attack on self-worth.' },
              { point: 'Social Magnetism', explanation: 'People feel genuinely understood and safe in their presence, lowering defensive barriers.' },
              { point: 'Influence Power', explanation: 'Can motivate and inspire teams effortlessly because they know what truly drives each member.' }
            ]
          },
          sideB: {
            name: 'Deep Narcissism (Inward Focus)',
            subtitle: 'Hypersensitive, Reactive & Fragile',
            badge: 'Fragile Ego Trap',
            colorTheme: 'amber',
            traits: [
              { point: 'Primary Attention', explanation: 'Constantly turned inward: worrying about status, appearance, and perceived slights.' },
              { point: 'Listening Quality', explanation: 'Counterfeit listening: merely waiting for their turn to speak or validate their own opinions.' },
              { point: 'Handling Criticism', explanation: 'Experiences even mild feedback as a catastrophic wound, triggering bitter vindictiveness.' },
              { point: 'Social Magnetism', explanation: 'Drains energy from groups; treats interactions as a stage for personal validation.' },
              { point: 'Influence Power', explanation: 'Relies on brute manipulation, guilt, or demands, which breed quiet rebellion.' }
            ]
          },
          verdict: 'Cultivating deep empathy makes you nearly impervious to social manipulation while giving you the extraordinary ability to unlock human potential.'
        }
      },
      {
        id: 'six-hidden-shadows',
        title: 'The Shadow Self & Repressed Drives',
        format: 'mindmap',
        badge: 'Jungian Depth Psychology',
        whatItRepresents: 'Greene’s adaptation of Carl Jung’s shadow: the unacknowledged, repressed aspects of our personality that secretly dictate our behavior.',
        simpleDescription: 'Every human wears an idealized public persona. The desires, aggressions, and vulnerabilities we hide from society gather in the subconscious shadow, leaking out as passive aggression, arrogance, or sudden overreactions.',
        studentExample: 'A student who prides themselves on being "hyper-humble and selfless" secretly harbors intense resentment when a peer receives a scholarship, manifesting as sarcastic humor and subtle undermining.',
        quickRevision: 'You cannot eliminate your shadow; you can only integrate it. Bringing your dark impulses into conscious light transforms them into raw creative energy and assertiveness.',
        mindmapData: {
          centralTheme: {
            label: 'The Anatomy of the Shadow',
            description: 'The hidden psychological drives repressed beneath our public persona.'
          },
          branches: [
            {
              category: 'Aggressive Drive',
              color: 'amber',
              nodes: [
                { label: 'Repressed Hostility', description: 'Hidden anger disguised as moral outrage or passive-aggressive sarcasm.' },
                { label: 'Healthy Integration', description: 'Harnessing the drive into relentless athletic, academic, or entrepreneurial grit.' }
              ]
            },
            {
              category: 'Envy & Status Drive',
              color: 'gold',
              nodes: [
                { label: 'Hidden Comparison', description: 'Secret pleasure when an admired rival stumbles, masking feelings of personal inadequacy.' },
                { label: 'Healthy Integration', description: 'Reframing envy into admiration and reverse-engineering the skills you desire to learn.' }
              ]
            },
            {
              category: 'Superiority Complex',
              color: 'sage',
              nodes: [
                { label: 'Virtue Signaling', description: 'Over-compensating for internal insecurity by broadcasting excessive moral purity or intellect.' },
                { label: 'Healthy Integration', description: 'Genuine self-acceptance: recognizing that everyone is flawed, imperfect, and human.' }
              ]
            },
            {
              category: 'The Creative Shadow',
              color: 'forest',
              nodes: [
                { label: 'Repressed Uniqueness', description: 'Burying your eccentric ideas out of fear of being ostracized by the crowd.' },
                { label: 'Healthy Integration', description: 'Expressing bold, original thinking in your writing, research, and artistic creations.' }
              ]
            }
          ]
        }
      }
    ]
  },

  'emotional-intelligence': {
    bookId: 'emotional-intelligence',
    slug: 'emotional-intelligence',
    bookTitle: 'Emotional Intelligence',
    introDescription: 'Daniel Goleman’s groundbreaking research revealing why EQ matters more than IQ for career success, relationship longevity, and emotional resilience.',
    diagrams: [
      {
        id: 'amygdala-hijack-circuit',
        title: 'The Amygdala Hijack vs Prefrontal Cortex',
        format: 'flowchart',
        badge: 'Neuroscience Architecture',
        whatItRepresents: 'The biological battle between the fast, primitive amygdala and the slower, analytical prefrontal cortex during acute stress.',
        simpleDescription: 'Sensory signals reach the amygdala milliseconds before they reach the rational neocortex. Without conscious self-awareness, this evolutionary emergency shortcut causes explosive, irrational emotional outbursts before you have time to think.',
        studentExample: 'During a heated hostel debate, an argument strikes a sensitive nerve. Before your rational brain can process the conversation, your heart races and you scream an insulting comment you regret 5 seconds later: a textbook amygdala hijack.',
        quickRevision: 'The emotional brain responds in milliseconds; the thinking brain takes seconds. Counting to ten gives your prefrontal cortex time to take the steering wheel.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Sensory Input Enters Thalamus',
              description: 'Your eyes and ears take in an external threat: a harsh critique, a sudden confrontation, or public embarrassment.',
              tag: 'Raw Sensory Signal'
            },
            {
              stepNumber: 2,
              label: 'The Low Road (The Amygdala Short Circuit)',
              description: 'A portion of the signal bypasses the thinking neocortex entirely, traveling directly to the amygdala in milliseconds.',
              tag: 'Primitive Fast Path',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Breathe Deeply & Count (Engage Prefrontal Cortex)',
                yesOutcome: 'High road activates: logic, empathy, and calibrated response.',
                noLabel: 'Allow Unchecked Neural Surge (Amygdala Hijack)',
                noOutcome: 'Adrenaline flood, tunnel vision, fight-or-flight aggression.'
              }
            },
            {
              stepNumber: 3,
              label: 'The High Road (Prefrontal Neocortex)',
              description: 'The rational brain receives the signal, evaluates context, weighs consequences, and asks: "Is this truly a life-or-death emergency?"',
              tag: 'Analytical Processing'
            },
            {
              stepNumber: 4,
              label: 'Executive Mastery Output',
              description: 'The prefrontal cortex sends inhibitory neurochemical signals to quiet the amygdala, enabling composed, graceful leadership.',
              tag: 'Equanimity',
              outcome: 'Calm, thoughtful conflict resolution that preserves relationships and trust.'
            }
          ]
        }
      },
      {
        id: 'five-domains-of-eq',
        title: 'The 5 Core Competencies of Emotional Intelligence',
        format: 'mindmap',
        badge: 'Psychological Competency Map',
        whatItRepresents: 'Goleman’s five structural pillars of EQ: Self-Awareness, Self-Regulation, Motivation, Empathy, and Social Skills.',
        simpleDescription: 'IQ may get you into college or land your first interview, but EQ determines who gets promoted to lead teams, resolve crises, and navigate complex human systems.',
        studentExample: 'Two engineering students have identical 4.0 GPAs. The first has high EQ: they listen well, stay calm during software crashes, and motivate the group. The second has low EQ: they blame teammates and meltdown under pressure. The first is recruited for leadership within 2 years.',
        quickRevision: 'EQ is not about being "nice"; it is about being acutely aware of your emotions, managing your impulses, and attuning to others to achieve collaborative excellence.',
        mindmapData: {
          centralTheme: {
            label: 'The 5 Pillars of Emotional Intelligence',
            description: 'The bedrock emotional skills that account for 85% of star leadership performance.'
          },
          branches: [
            {
              category: '1. Self-Awareness (The Bedrock)',
              color: 'forest',
              nodes: [
                { label: 'Emotional Literacy', description: 'Accurately naming what you are feeling in real time (e.g. distinguishing fear from fatigue).' },
                { label: 'Realistic Self-Assessment', description: 'Knowing your blind spots, triggers, and authentic strengths without defensive delusions.' }
              ]
            },
            {
              category: '2. Self-Regulation',
              color: 'sage',
              nodes: [
                { label: 'Impulse Control', description: 'Withstanding emotional storms without lashing out or making catastrophic impulsive choices.' },
                { label: 'Adaptability', description: 'Pivoting gracefully when circumstances change, exams are delayed, or plans fall apart.' }
              ]
            },
            {
              category: '3. Internal Motivation',
              color: 'gold',
              nodes: [
                { label: 'Passion Beyond Paychecks', description: 'A relentless drive to achieve for the joy of craft mastery rather than external applause.' },
                { label: 'Optimism in Failure', description: 'Viewing setbacks as temporary educational feedback rather than permanent personal defeats.' }
              ]
            },
            {
              category: '4. Empathy & 5. Social Skills',
              color: 'amber',
              nodes: [
                { label: 'Social Attunement', description: 'Sensing unspoken group dynamics, power structures, and emotional undercurrents.' },
                { label: 'Inspirational Influence', description: 'The ability to resolve bitter conflicts, persuade ethically, and bring diverse people together.' }
              ]
            }
          ]
        }
      },
      {
        id: 'marshmallow-test-delay-gratification',
        title: 'Delayed Gratification: The Marshmallow Test Matrix',
        format: 'comparison',
        badge: 'Longitudinal Research Matrix',
        whatItRepresents: 'Walter Mischel’s landmark Stanford Marshmallow Study comparing the long-term life outcomes of impulse-driven vs delayed-gratification children.',
        simpleDescription: 'Children who could resist eating one marshmallow immediately to receive two later demonstrated dramatically higher SAT scores, lower addiction rates, and greater career stability 30 years later.',
        studentExample: 'Resisting the urge to binge-watch web series on Friday night in order to finish your semester coding assignment allows you to enjoy a completely stress-free weekend and ace the course evaluation.',
        quickRevision: 'The ability to delay short-term gratification in service of long-term vision is the single strongest psychological predictor of adult life success.',
        comparisonData: {
          sideA: {
            name: 'Delayed Gratification (Two Marshmallows)',
            subtitle: 'Strategic Long-Term Investment',
            badge: 'Compound Character',
            colorTheme: 'forest',
            traits: [
              { point: 'Impulse Management', explanation: 'Consciously uses cognitive reframing and distraction techniques to override primitive craving.' },
              { point: 'Academic Trajectory', explanation: 'Averages 210+ points higher on standardized admissions tests (SAT/GRE/GATE).' },
              { point: 'Stress Resilience', explanation: 'Demonstrates superior prefrontal cortex inhibition during high-pressure adult scenarios.' },
              { point: 'Financial Health', explanation: 'Consistently saves 20%+ of earnings, avoids credit card debt, and reaps the power of compounding.' },
              { point: 'Career Velocity', explanation: 'Tolerates years of apprenticeships and deep training to master high-barrier professional domains.' }
            ]
          },
          sideB: {
            name: 'Instant Gratification (One Marshmallow)',
            subtitle: 'Immediate Dopamine Consumption',
            badge: 'Vulnerable Instinct',
            colorTheme: 'amber',
            traits: [
              { point: 'Impulse Management', explanation: 'Surrenders immediately to sensory stimuli; relies on willpower alone which quickly fatigues.' },
              { point: 'Academic Trajectory', explanation: 'Struggles with chronic procrastination, cramming at the final hour, and exam anxiety.' },
              { point: 'Stress Resilience', explanation: 'Prone to emotional deregulation, conflict, and behavioral frustration under duress.' },
              { point: 'Financial Health', explanation: 'Spends future income on present luxuries, accumulating consumer debt and chronic financial dread.' },
              { point: 'Career Velocity', explanation: 'Job-hops frequently out of boredom when initial novelty wears off before mastery is achieved.' }
            ]
          },
          verdict: 'Willpower is like a muscle: every time you resist a trivial dopamine hit today for a larger goal tomorrow, you rewire your brain for lifelong achievement.'
        }
      }
    ]
  }
};
