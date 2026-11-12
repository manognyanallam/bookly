import { BookVisualGuide } from '@/types/visuals';

export const productivityBusinessVisualGuides: Record<string, BookVisualGuide> = {
  'deep-work': {
    bookId: 'deep-work',
    slug: 'deep-work',
    bookTitle: 'Deep Work',
    introDescription: 'Master distraction-free cognitive performance, understand attention residue, and structure your study schedule using Cal Newport’s tested frameworks.',
    diagrams: [
      {
        id: 'deep-vs-shallow-work',
        title: 'Deep Work vs Shallow Work Comparison',
        format: 'comparison',
        badge: 'Core Productivity Matrix',
        whatItRepresents: 'Contrasts cognitively demanding, high-value problem solving with low-cognitive-demand logistical churn and distraction.',
        simpleDescription: 'Deep work produces rare skills, breakthrough solutions, and durable career capital. Shallow work creates the illusion of productivity while keeping you vulnerable to automation and outsourcing.',
        studentExample: 'A computer science student spends 90 uninterrupted minutes designing an algorithm from scratch (Deep Work) versus spending 3 hours toggling between WhatsApp group chats, replying to campus emails, and formatting slide borders (Shallow Work).',
        quickRevision: 'High-Value Output = (Time Spent) x (Intensity of Concentration). Eliminating attention switches is the only way to maximize intensity.',
        comparisonData: {
          sideA: {
            name: 'Deep Work',
            subtitle: 'High Cognitive Intensity & Flow',
            badge: 'Elite Performance',
            colorTheme: 'forest',
            traits: [
              { point: 'Cognitive Demand', explanation: 'Pushes intellectual capacity to the absolute edge of current ability.' },
              { point: 'Distraction Level', explanation: 'Zero multitasking, zero tab-switching, device notifications disabled.' },
              { point: 'Value Created', explanation: 'Generates non-replicable value, solves novel problems, masters complex subjects.' },
              { point: 'Replicability', explanation: 'Extremely difficult to replicate or automate with software/AI.' },
              { point: 'Mental State', explanation: 'True psychological flow state, rapid neuro-myelination of relevant synapses.' }
            ]
          },
          sideB: {
            name: 'Shallow Work',
            subtitle: 'Logistical Busywork & Fragmented Focus',
            badge: 'Replaceable Effort',
            colorTheme: 'amber',
            traits: [
              { point: 'Cognitive Demand', explanation: 'Minor, repetitive cognitive effort that can be executed while distracted.' },
              { point: 'Distraction Level', explanation: 'Frequent notification checks, fragmented attention, constant tab juggling.' },
              { point: 'Value Created', explanation: 'Logistical progress (clearing inboxes, formatting documents, scheduling).' },
              { point: 'Replicability', explanation: 'Easily automated, outsourced, or executed by anyone without domain mastery.' },
              { point: 'Mental State', explanation: 'Scattered attention residue, cognitive fatigue without meaningful intellectual output.' }
            ]
          },
          verdict: 'Students who build a 2 to 3 hour daily deep work fortress achieve superior grades and portfolio projects in half the total study hours of chronic shallow multitaskers.'
        }
      },
      {
        id: 'attention-residue-cascade',
        title: 'The Attention Residue Cascade',
        format: 'flowchart',
        badge: 'Cognitive Science Flowchart',
        whatItRepresents: 'Dr. Sophie Leroy’s cognitive psychology discovery showing how brief "quick checks" of your phone or inbox cripple complex thinking for up to 20 minutes.',
        simpleDescription: 'Every time you glance at a notification while studying, a thick residue of attention remains stuck on that secondary stimulus, degrading your working memory capacity.',
        studentExample: 'While writing an essay, you quickly check an Instagram notification for 15 seconds. Even after you return to your essay, 30% of your cognitive bandwidth remains trapped wondering who liked your photo, doubling grammar mistakes and slowing sentence structure.',
        quickRevision: 'Never multitask sequentially. Every context switch levies a heavy cognitive tax that takes 15–20 minutes to clear.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Primary Deep Task Engaged',
              description: 'You are working deeply on a difficult engineering proof or coding assignment for 30 uninterrupted minutes.',
              tag: 'Peak Focus'
            },
            {
              stepNumber: 2,
              label: 'The "Quick Check" Temptation',
              description: 'A momentary impulse or notification prompts you to glance at your phone screen or inbox for just 10 seconds.',
              tag: 'Critical Vulnerability',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Ignore / Keep Phone in Other Room',
                yesOutcome: 'Focus stays unbroken; myelination and rapid progress continue.',
                noLabel: 'Give In & Check Screen',
                noOutcome: 'Attention splits immediately into fragmented threads.'
              }
            },
            {
              stepNumber: 3,
              label: 'Attention Residue Trapped',
              description: 'Your prefrontal cortex remains partially activated by the social text, email demand, or alert you just viewed.',
              tag: 'Mental Friction'
            },
            {
              stepNumber: 4,
              label: 'Impaired Working Memory',
              description: 'Back on your study task, your working memory capacity drops by 20–40%. Reading requires re-reading, and logical synthesis halts.',
              tag: 'Degraded Performance',
              outcome: '15 to 25 minutes of subpar cognitive output before original focus level is restored.'
            }
          ]
        }
      },
      {
        id: 'four-scheduling-philosophies',
        title: 'Cal Newport’s 4 Deep Work Scheduling Philosophies',
        format: 'mindmap',
        badge: 'Strategic Mind Map',
        whatItRepresents: 'The four viable operational architectures for integrating focused deep work into real-world calendars and commitments.',
        simpleDescription: 'Deep work cannot occur by random inspiration. You must consciously select a scheduling philosophy that matches your external lifestyle and degree of autonomy.',
        studentExample: 'A medical student with daily clinics adopts the Rhythmic philosophy (booking 6:00 AM – 8:00 AM every single morning for USMLE prep), whereas a college professor on summer sabbatical adopts the Bimodal philosophy (weeks of total isolation in a cabin).',
        quickRevision: 'Most students fail with the Monastic or Journalistic models. The Rhythmic (daily fixed block) is the most sustainable and bulletproof architecture for college life.',
        mindmapData: {
          centralTheme: {
            label: 'Deep Work Scheduling Architectures',
            description: 'Structured methodologies to protect cognitive depth against modern distraction.'
          },
          branches: [
            {
              category: 'Rhythmic Philosophy (Recommended for Students)',
              color: 'forest',
              nodes: [
                { label: 'Daily Fixed Slot', description: 'Dedicate the same 2–3 hours every day (e.g. 7 AM – 9:30 AM) exclusively to your highest priority study task.' },
                { label: 'Eliminates Willpower Churn', description: 'Habitual cadence removes the daily decision fatigue of "when should I study today?".' },
                { label: 'Chain Method Tracking', description: 'Mark an X on a physical wall calendar for every completed block to preserve visual momentum.' }
              ]
            },
            {
              category: 'Bimodal Philosophy',
              color: 'sage',
              nodes: [
                { label: 'Divided Calendar Blocks', description: 'Divide time into large chunks: several days or weeks of pure isolation, followed by open availability.' },
                { label: 'Minimum 1-Day Threshold', description: 'Requires at least 24 hours of uninterrupted deep work to overcome context switching.' },
                { label: 'Ideal for Semester Breaks', description: 'Perfect for students completing capstone projects or intensive exam cram periods over holidays.' }
              ]
            },
            {
              category: 'Monastic Philosophy',
              color: 'gold',
              nodes: [
                { label: 'Radical Isolation', description: 'Eliminate or radically minimize all shallow obligations permanently (e.g. Neal Stephenson, Donald Knuth).' },
                { label: 'Zero Public Inbox', description: 'No social media, no instant messaging, extreme boundaries on accessibility.' },
                { label: 'High Specialization Requirement', description: 'Only feasible for rare specialists whose contribution depends 100% on one breakthrough output.' }
              ]
            },
            {
              category: 'Journalistic Philosophy',
              color: 'amber',
              nodes: [
                { label: 'On-Demand Shift', description: 'Ability to switch into deep work instantly whenever an unexpected 30–60 minute window opens.' },
                { label: 'Advanced Willpower Required', description: 'Requires years of training; novice students easily succumb to social media during unexpected gaps.' },
                { label: 'Mental Switch Mastery', description: 'Requires total control of cognitive gear shifting without warming up.' }
              ]
            }
          ]
        }
      }
    ]
  },

  'zero-to-one': {
    bookId: 'zero-to-one',
    slug: 'zero-to-one',
    bookTitle: 'Zero to One',
    introDescription: 'Understand Peter Thiel’s contrarian startup philosophy, power law economics, monopoly vs perfect competition, and building revolutionary new technology.',
    diagrams: [
      {
        id: 'zero-to-one-vs-one-to-n',
        title: 'Zero to One (Vertical) vs One to N (Horizontal) Progress',
        format: 'comparison',
        badge: 'Foundational Innovation Matrix',
        whatItRepresents: 'Distinguishes between creating genuinely novel technology (vertical progress) and copying existing models to scale globally (horizontal progress).',
        simpleDescription: 'Horizontal progress takes something that already works and copies it (globalization: going from 1 to n). Vertical progress does something completely new (technology: going from 0 to 1). Only 0 to 1 creates immense durable value.',
        studentExample: 'Building yet another food delivery mobile app for your campus is 1 to n (horizontal copying in a brutal red-ocean market). Designing a novel room-temperature microbial water filter from scratch is 0 to 1 (vertical leap creating new technological value).',
        quickRevision: 'Doing what someone else already knows how to do takes the world from 1 to n. Doing something novel takes the world from 0 to 1.',
        comparisonData: {
          sideA: {
            name: 'Zero to One (Technology)',
            subtitle: 'Vertical Breakthrough Innovation',
            badge: 'Creative Monopoly',
            colorTheme: 'forest',
            traits: [
              { point: 'Direction of Motion', explanation: 'Vertical progress: doing something brand new that has never existed before.' },
              { point: 'Primary Engine', explanation: 'Novel technology, deep technical secrets, and breakthrough proprietary engineering.' },
              { point: 'Market Structure', explanation: 'Creative monopoly: captures durable cash flows because no direct substitute exists.' },
              { point: 'Historical Exemplar', explanation: 'Typewriter to Word Processor; Horse-and-carriage to Automobile; Desktop to iPhone.' },
              { point: 'Societal Impact', explanation: 'Expands the human frontier and creates massive positive-sum abundance.' }
            ]
          },
          sideB: {
            name: 'One to N (Globalization)',
            subtitle: 'Horizontal Copying & Scaling',
            badge: 'Brutal Competition',
            colorTheme: 'amber',
            traits: [
              { point: 'Direction of Motion', explanation: 'Horizontal progress: copying things that work and distributing them to other markets.' },
              { point: 'Primary Engine', explanation: 'Arbitrage, cheap labor, local adaptation, marketing spend, and operational replication.' },
              { point: 'Market Structure', explanation: 'Perfect competition: commoditized margins driven down to near zero by endless rivals.' },
              { point: 'Historical Exemplar', explanation: 'Opening 500 fast-food franchises or launching the 15th clone of Uber in another city.' },
              { point: 'Societal Impact', explanation: 'Spreads existing capabilities but faces ultimate resource limits without new tech.' }
            ]
          },
          verdict: 'Students aiming to build long-term impactful careers must cultivate proprietary depth and discover hidden secrets rather than racing in overcrowded copycat markets.'
        }
      },
      {
        id: 'four-foundations-of-monopoly',
        title: 'The 4 Foundations of a Creative Monopoly',
        format: 'concept-diagram',
        badge: 'Defensibility Architecture',
        whatItRepresents: 'Thiel’s four structural moats that allow a company to escape destructive competition and generate decades of economic profit.',
        simpleDescription: 'Every monopoly combines proprietary technology (at least 10x better), network effects, massive economies of scale, and branding into an impregnable competitive moat.',
        studentExample: 'Google in 2000 was 10x faster and more accurate than Yahoo (Proprietary Tech), grew stronger with every query indexed (Scale & Data), and became a default verb (Branding), creating a fortress that has endured for decades.',
        quickRevision: 'To escape competition, a company must possess: (1) 10x Proprietary Tech, (2) Network Effects, (3) Economies of Scale, and (4) Branding.',
        conceptData: {
          coreConcept: 'Creative Monopoly Defensibility Matrix',
          components: [
            {
              name: '1. Proprietary Technology (10x Rule)',
              role: 'The Ultimate Defensive Engine',
              details: 'Must be at least 10 times better than its closest substitute in some important dimension (e.g. Google search page speed, Amazon book selection). Incremental 10% gains are easily swallowed by switching costs.',
              connectionToCore: 'Forms the bedrock entry barrier that prevents established incumbents from easily copying your product.'
            },
            {
              name: '2. Network Effects',
              role: 'Viral Compounding Moat',
              details: 'A product becomes inherently more valuable as more people use it (e.g. WhatsApp, eBay, Facebook). But it must start by offering radical utility to a tiny initial niche.',
              connectionToCore: 'Makes customer acquisition exponential while driving rivals’ churn rates through the roof.'
            },
            {
              name: '3. Economies of Scale',
              role: 'Fixed-Cost Amortization',
              details: 'The marginal cost of producing an extra unit approaches zero as scale grows (especially in software). Fixed developmental costs are distributed across hundreds of millions of users.',
              connectionToCore: 'Ensures that any new entrant operating at smaller scale operates at massive unit-loss disadvantage.'
            },
            {
              name: '4. Branding & Cultural Affinity',
              role: 'Psychological Moat',
              details: 'A powerful brand conveys trust, premium quality, and emotional identity (e.g. Apple). But branding without proprietary substance is a hollow facade that quickly collapses.',
              connectionToCore: 'Protects customer loyalty and allows premium pricing even when competitors attempt price wars.'
            }
          ],
          feedbackLoop: 'Start by dominating a tiny, specific niche market (100% of a small circle). Then scale sequentially into adjacent markets while compounding all four moats.'
        }
      },
      {
        id: 'venture-capital-power-law',
        title: 'The Venture Capital Power Law & Contrarian Truth',
        format: 'infographic',
        badge: 'Statistical Distribution Infographic',
        whatItRepresents: 'Why returns in tech, careers, and skills follow a Pareto/Power Law distribution rather than a normal bell curve.',
        simpleDescription: 'The biggest secret in venture capital is that the single best investment in a successful fund equals or outperforms the entire rest of the fund combined. In life and learning, a few vital decisions outweigh hundreds of ordinary ones.',
        studentExample: 'In college, mastering one high-leverage skill (e.g. full-stack system architecture or machine learning model training) opens 10x more opportunities than having a shallow, average familiarity with 15 different hobby topics.',
        quickRevision: 'We don’t live in a normal distribution world; we live under a power law. Focus obsessively on the one or two activities that have uncapped compounding upside.',
        infographicData: {
          items: [
            {
              highlight: '1 Company = Entire Fund',
              title: 'The Power Law of Portfolios',
              takeaway: 'In a portfolio of 30 startups, 1 winner generates 70–80% of all profits. The rest either fail or return baseline capital. Diversification cannot cure mediocrity.',
              iconType: 'trending-up'
            },
            {
              highlight: 'The Contrarian Question',
              title: '"What important truth do very few people agree with you on?"',
              takeaway: 'Brilliant answers are not simply contrarian for the sake of rebellion; they reveal hidden secrets about the physical world or human nature that consensus ignores.',
              iconType: 'target'
            },
            {
              highlight: 'Competition is for Losers',
              title: 'The War of Attrition Paradox',
              takeaway: 'In perfect competition, all surplus value is competed away into thin air. Monopolists can afford to think about ethics, long-term research, and staff welfare.',
              iconType: 'shield'
            },
            {
              highlight: 'Last Mover Advantage',
              title: 'Durability Over First-Mover Hype',
              takeaway: 'It is far better to be the last mover—making the final great development in a specific market and enjoying years of monopoly profits (like Apple did with the smartphone).',
              iconType: 'award'
            }
          ]
        }
      }
    ]
  },

  'the-7-habits-of-highly-effective-people': {
    bookId: 'the-7-habits-of-highly-effective-people',
    slug: 'the-7-habits-of-highly-effective-people',
    bookTitle: 'The 7 Habits of Highly Effective People',
    introDescription: 'Master Stephen Covey’s timeless maturity continuum, shift from dependence to interdependence, and align your life with universal principles.',
    diagrams: [
      {
        id: 'maturity-continuum',
        title: 'The Covey Maturity Continuum',
        format: 'flowchart',
        badge: 'Character Growth Architecture',
        whatItRepresents: 'The progressive psychological evolution from Dependence (Victim mindset) to Independence (Personal Victory) to Interdependence (Public Victory).',
        simpleDescription: 'True effectiveness requires mastering yourself first (Habits 1, 2, 3) before you can build enduring win-win partnerships with others (Habits 4, 5, 6).',
        studentExample: 'A student who blames professors for poor grades is in Dependence ("You ruined my GPA"). After adopting Habits 1–3, they take ownership and build disciplined study habits ("I am responsible for my mastery"). Reaching Interdependence, they form a collaborative peer study lab where everyone teaches each other to excel together.',
        quickRevision: 'Private Victory precedes Public Victory. You cannot run collaborative marathons with others until you have learned to walk on your own two feet.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Dependence ("The Paradigm of You")',
              description: 'External locus of control. You rely on others to validate, take care of, and motivate you. Blame and excuses dominate.',
              tag: 'Starting Point'
            },
            {
              stepNumber: 2,
              label: 'Private Victory (Habits 1, 2, 3)',
              description: 'Habit 1: Be Proactive. Habit 2: Begin with the End in Mind. Habit 3: Put First Things First. Building self-mastery, personal mission, and daily integrity.',
              tag: 'Self-Mastery Core',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Master Personal Disciplines First',
                yesOutcome: 'Reach genuine Independence and self-reliance.',
                noLabel: 'Attempt Teamwork Without Self-Control',
                noOutcome: 'Manipulative, co-dependent, fragile relationships.'
              }
            },
            {
              stepNumber: 3,
              label: 'Independence ("The Paradigm of I")',
              description: 'Inner strength, deep self-reliance, and autonomous capability. You can produce results on your own merit without hand-holding.',
              tag: 'Personal Victory'
            },
            {
              stepNumber: 4,
              label: 'Public Victory (Habits 4, 5, 6)',
              description: 'Habit 4: Think Win-Win. Habit 5: Seek First to Understand, Then to Be Understood. Habit 6: Synergize. Creating multiplicative team breakthroughs.',
              tag: 'Collaborative Multiplier'
            },
            {
              stepNumber: 5,
              label: 'Interdependence ("The Paradigm of We")',
              description: 'The highest stage of human maturity: combining individual talents to create outcomes vastly greater than the sum of separate parts (Habit 7: Sharpen the Saw).',
              tag: 'Peak Maturity',
              outcome: 'Sustained, continuous renewal across physical, mental, emotional, and spiritual dimensions.'
            }
          ]
        }
      },
      {
        id: 'time-management-matrix',
        title: 'The Time Management Matrix (Quadrants I–IV)',
        format: 'comparison',
        badge: 'Priority Optimization Grid',
        whatItRepresents: 'Categorizes all human activity by Urgency (demands immediate reaction) versus Importance (contributes to long-term mission and core values).',
        simpleDescription: 'High performers live in Quadrant II (Important, Not Urgent). Reactive people live in Quadrants I and III, burning out on urgent crises and trivia.',
        studentExample: 'Studying for finals 3 weeks in advance, exercising daily, and learning new programming libraries is Quadrant II. Pulling an all-nighter at 4 AM because you procrastinated until the deadline is Quadrant I.',
        quickRevision: 'The key is not to prioritize what’s on your schedule, but to schedule your priorities. Cultivate Quadrant II to eliminate recurring Quadrant I crises.',
        comparisonData: {
          sideA: {
            name: 'Quadrant II (The Quadrant of Quality & Mastery)',
            subtitle: 'Important, But Not Urgent',
            badge: 'High-Impact Focus',
            colorTheme: 'forest',
            traits: [
              { point: 'Core Activities', explanation: 'Proactive planning, deep studying, physical exercise, relationship building, long-term project prep.' },
              { point: 'Temporal Nature', explanation: 'No immediate deadline screaming at you; requires conscious proactive initiative to execute.' },
              { point: 'Mental State', explanation: 'Calm, focused, purposeful, in control of your destiny, minimal emergency stress.' },
              { point: 'Compounding Effect', explanation: 'Systematically prevents crises before they emerge; builds permanent cognitive and physical capacity.' },
              { point: 'Optimal Allocation', explanation: 'Aim to spend 65% to 80% of your waking energy in this quadrant.' }
            ]
          },
          sideB: {
            name: 'Quadrant III (The Quadrant of Deception)',
            subtitle: 'Urgent, But Not Important',
            badge: 'Counterfeit Priority',
            colorTheme: 'amber',
            traits: [
              { point: 'Core Activities', explanation: 'Immediate message pings, other people’s non-essential favors, noisy notifications, irrelevant meetings.' },
              { point: 'Temporal Nature', explanation: 'Feels critical because the buzzer is ringing right now, but serves someone else’s agenda.' },
              { point: 'Mental State', explanation: 'Frenetic, anxious, fragmented, high adrenaline with zero durable accomplishment at day’s end.' },
              { point: 'Compounding Effect', explanation: 'Drains energy, breeds chronic resentment, and leaves core life goals completely neglected.' },
              { point: 'Optimal Allocation', explanation: 'Say a respectful "No", automate, delegate, or fiercely eliminate.' }
            ]
          },
          verdict: 'Quadrant I (Crises) shrinks dramatically when you invest daily in Quadrant II preparation. Stop allowing Quadrant III trivia to masquerade as real emergencies.'
        }
      },
      {
        id: 'circle-of-concern-vs-influence',
        title: 'Circle of Concern vs Circle of Influence',
        format: 'concept-diagram',
        badge: 'Proactivity Geometry',
        whatItRepresents: 'Visualizes where your mental focus goes: reactive energy spent on things you cannot control vs proactive energy on things you can directly change.',
        simpleDescription: 'Proactive people focus their efforts on the Circle of Influence (their habits, attitudes, study hours). By doing so, their influence expands. Reactive people obsess over the Circle of Concern (politics, weather, other people’s flaws), shrinking their influence.',
        studentExample: 'Instead of complaining about a difficult professor or unfair grading curve (Circle of Concern), a proactive student focuses on mastering the syllabus topics, attending office hours, and forming a study group (Circle of Influence).',
        quickRevision: 'Proactive people work from the inside out: by improving themselves, they gradually influence the entire environment around them.',
        conceptData: {
          coreConcept: 'The Proactive Influence Expansion Dynamic',
          components: [
            {
              name: 'Circle of Concern (Outer Circle)',
              role: 'Things You Cannot Directly Control',
              details: 'Encompasses national politics, economic inflation, other people’s moods, weather, past mistakes, and campus administrative policy.',
              connectionToCore: 'Focusing emotional energy here produces toxic victimhood, blame, chronic helplessness, and negative emotional charge.'
            },
            {
              name: 'Circle of Influence (Inner Circle)',
              role: 'Things You Have Total Power Over',
              details: 'Encompasses your daily study schedule, how you respond to criticism, how many hours you sleep, what books you read, and your personal integrity.',
              connectionToCore: 'Focusing constructive energy here produces tangible improvements, building personal power that naturally expands outward.'
            },
            {
              name: 'The Reactive Shrinking Dynamic',
              role: 'The Atrophy of Power',
              details: 'When you obsess over what is wrong with external circumstances, you neglect the daily actions within your power, causing your Circle of Influence to shrivel.',
              connectionToCore: 'Turns individuals into passive victims waiting to be acted upon by external forces.'
            },
            {
              name: 'The Proactive Expansion Dynamic',
              role: 'The Magnification of Impact',
              details: 'Every time you keep a small promise to yourself or solve a problem within your grasp, your credibility and actual reach expand into the larger world.',
              connectionToCore: 'Gradually brings more external problems under your indirect or direct leadership.'
            }
          ],
          feedbackLoop: 'Look at where you spend 80% of your emotional worry. If it sits in your Circle of Concern without an immediate action step, drop it and redirect that energy to your Circle of Influence.'
        }
      }
    ]
  }
};
