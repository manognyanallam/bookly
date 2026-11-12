import { NonFictionLearningGuide } from '@/types/learning';

export const atomicHabitsGuide: NonFictionLearningGuide = {
  id: 'guide-atomic-habits',
  bookId: 'atomic-habits',
  type: 'nonfiction',
  introduction:
    'Atomic Habits by James Clear is a globally acclaimed framework for continuous self-improvement through microscopic 1% daily adjustments. Rejecting the myth that dramatic success requires heroic overnight revolutions or superhuman willpower, Clear shows that who you become is the direct biological and cognitive outcome of your daily operational routines. For college students facing procrastination, exam burnout, distraction, or fitness goals, this guide breaks habit formation down into neuroscience, behavioural design, and practical systems.',
  overview: {
    whatItIsAbout:
      'The book examines how small, repetitive actions compound over months and years into massive divergence in life trajectories. It provides a four-step model of human behaviour (Cue, Craving, Response, Reward) and actionable strategies to build good habits while breaking harmful ones.',
    problemAddressed:
      'Most people attempt to change their lives by setting ambitious outcome goals (e.g. "Get a 4.0 GPA", "Lose 10 kg") and relying on temporary motivation. When initial willpower fades, they relapse into old routines and conclude they lack self-discipline.',
    centralArgument:
      'You do not rise to the level of your goals; you fall to the level of your systems. Long-lasting behavioural change happens not at the level of outcomes, but at the level of identity and environment design.',
    majorThemes: [
      'The Compounding Power of 1% Daily Improvements',
      'The Three Layers of Behaviour Change: Outcomes, Processes, and Identity',
      'The Four Laws of Behaviour Change (Make It Obvious, Attractive, Easy, Satisfying)',
      'Environment Architecture Over Willpower',
      'The Two-Minute Rule and The Goldilocks Principle of Optimal Challenge'
    ],
    connectionsBetweenIdeas:
      'Clear connects identity (who you believe you are) to neurological loops (Cue → Craving → Response → Reward), translates those loops into the Four Laws of Behaviour Change, and reinforces them with environment architecture and accountability systems so good habits become the path of least resistance.',
    whatStudentsUnderstand:
      'Students will understand that willpower is a scarce, easily depleted biological resource. Success is engineered by designing external environments and tiny starting rituals that make showing up effortless.'
  },
  concepts: [
    {
      name: 'The Compounding Effect of 1% Improvements',
      simpleExplanation:
        'Getting 1% better every day yields a 37-fold improvement over the course of a year (1.01^365 ≈ 37.78). Conversely, slipping 1% worse every day degrades your performance down to nearly zero (0.99^365 ≈ 0.03).',
      whyItMatters:
        'Small habits feel inconsequential in the moment. Eating one junk food meal or skipping one 20-minute study session does not ruin your life today, but repeated over hundreds of days, it determines your health, intellect, and career.',
      everydayExample:
        'Reading just 10 pages of a non-fiction or technical book each day means reading 3,650 pages a year—equivalent to approximately 15 to 18 complete books. A student who reads zero pages remains in the exact same place.',
      collegeStudentApplication:
        'Commit to studying course material for just 25 focused minutes every evening rather than cramming for 14 panicked hours the night before a midterm. The compounding retention is radically superior.',
      difficultTerms: [
        {
          term: 'Exponential Compounding',
          definition: 'Growth that becomes increasingly rapid in proportion to the growing total number or size over time.'
        },
        {
          term: 'Plateau of Latent Potential',
          definition: 'The lag time where hard work is put in but visible results have not yet broken through the surface.'
        }
      ]
    },
    {
      name: 'Identity-Based Habits',
      simpleExplanation:
        'True behavioural change is identity change. Instead of focusing on outcome goals ("I want to score an A in algorithms"), focus on identity convictions ("I am the kind of student who writes clean, tested code every day").',
      whyItMatters:
        'When your habits align with your core self-image, you no longer fight an internal battle of willpower. Every action you take is a vote for the type of person you wish to become.',
      everydayExample:
        'When offered a cigarette, Person A says: "No thanks, I’m trying to quit." Person B says: "No thanks, I’m not a smoker." Person B has shifted their identity, making relapse far less likely.',
      collegeStudentApplication:
        'Adopt the identity of an inquisitive scholar, a disciplined athlete, or a reliable teammate. When faced with an urge to scroll social media during study hours, ask yourself: "What would a top engineer / scholar do in this moment?"',
      difficultTerms: [
        {
          term: 'Cognitive Dissonance',
          definition: 'The mental discomfort experienced by someone holding contradictory beliefs or acting in contrast to their identity.'
        }
      ]
    },
    {
      name: 'The Four-Step Habit Loop & The Four Laws',
      simpleExplanation:
        'Every habit runs on a neurological loop: Cue (trigger) → Craving (motivation) → Response (action) → Reward (satisfaction). To build a good habit: 1) Make it obvious, 2) Make it attractive, 3) Make it easy, 4) Make it satisfying. To break a bad habit: invert all four.',
      whyItMatters:
        'If a habit fails to take root, you can diagnose exactly which step of the loop broke down: Was the cue hidden? Was the action too hard? Was the reward delayed?',
      everydayExample:
        'Leaving your gym clothes and shoes laid out right next to your bed the night before makes the cue obvious and the response easy.',
      collegeStudentApplication:
        'Use Habit Stacking: "After I pour my morning coffee (current habit), I will review my lecture notes for 5 minutes (new habit)". Anchor new study habits to established daily rhythms.',
      difficultTerms: [
        {
          term: 'Habit Stacking',
          definition: 'A formula where you pair a new desired habit with a current habit you already perform consistently every day.'
        }
      ]
    },
    {
      name: 'The Two-Minute Rule',
      simpleExplanation:
        'When you start a new habit, it should take less than two minutes to do. Scale down the entry point until there is zero psychological resistance.',
      whyItMatters:
        'The hardest part of any task is crossing the friction of initiation. Once you start, momentum naturally carries you forward. You must standardize before you can optimize.',
      everydayExample:
        'Instead of "Study for 3 hours", the 2-minute version is "Open my chemistry notebook and read the first summary bullet". Instead of "Run 5 miles", it is "Tie my running shoes and step outside".',
      collegeStudentApplication:
        'Whenever you feel overwhelmed by a giant term paper or coding assignment, tell yourself: "I will just open the IDE and write one function comment." Master the art of showing up.',
      difficultTerms: [
        {
          term: 'Friction of Initiation',
          definition: 'The mental resistance and emotional effort required to transition from rest or distraction into starting a task.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'Environment is the invisible hand that shapes human behaviour.',
      whatItMeans:
        'We believe we make conscious, rational decisions, but human choices are overwhelmingly dictated by the visual cues and friction in our physical and digital surroundings.',
      whyItMatters:
        'People with high "self-control" do not possess superhuman willpower—they simply design their environments so they are rarely exposed to tempting cues.',
      realisticExample:
        'Placing your smartphone in a drawer in another room while studying boosts focus by over 300% compared to having it face down on your desk buzzing with notifications.',
      howStudentAppliesIt:
        'Designate specific spaces for specific tasks: study only at a clean desk or library booth, relax in the common lounge, sleep in bed. Never study in bed.'
    },
    {
      insight: 'Never miss twice.',
      whatItMeans:
        'Missing a workout, a study session, or a diet routine once is an accident. Missing it twice is the start of a new, negative habit.',
      whyItMatters:
        'Life will inevitably disrupt your plans (illness, travel, urgent campus deadlines). The hallmark of top performers is not perfection, but rapid recovery.',
      realisticExample:
        'If a sudden project deadline forces you to skip your regular 1-hour gym workout, do 10 pushups in your dorm before bed. You preserve the identity even if the volume is reduced.',
      howStudentAppliesIt:
        'If you miss your morning study session, do 5 minutes of flashcards in the evening. Keep the streak alive in spirit.'
    },
    {
      insight: 'Immediate rewards versus delayed rewards dictate habit formation.',
      whatItMeans:
        'The human brain evolved in an immediate-return environment. Bad habits offer immediate pleasure with delayed pain (e.g. eating junk food), whereas good habits offer immediate discomfort with delayed triumph (e.g. studying, exercising).',
      whyItMatters:
        'To make good habits stick, you must attach immediate psychological gratification to the execution of the habit.',
      realisticExample:
        'Using a visual habit tracker and putting an ink "X" on a calendar immediately after finishing a study block releases a burst of dopamine that reinforces the loop.',
      howStudentAppliesIt:
        'Track your daily study blocks on a wall calendar or habit app. The visual evidence of your progress creates instant satisfaction.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Set up a consistent sleep schedule by making your evening wind-down obvious and attractive (dim room lights at 10 PM, charge your phone across the room).',
      'Create friction for bad habits: uninstall addictive social media apps from your phone during midterm exam weeks.',
      'Form or join a study group where your desired behaviour is the normal social norm of the group.'
    ],
    studyingAndLearning: [
      'Use the 3rd Law (Make It Easy): Keep your desk clear with your syllabus, notebook, and pens ready before going to bed.',
      'Apply temptation bundling: Only listen to your favourite lo-fi playlist or podcast while working on course problem sets.',
      'Practice active recall in short 25-minute Pomodoro bursts rather than marathons of passive textbook re-reading.'
    ],
    careerDevelopment: [
      'Stack a professional networking habit: "Every Friday at 4 PM, I will send one polite message or connection request on LinkedIn to an alumni working in my target field."',
      'Cast daily votes for your future career: Write 50 lines of clean code, draft one blog post, or solve one case study daily.'
    ],
    moneyManagement: [
      'Make saving obvious and automated: Set up an automated bank rule that sweeps 10% of any incoming deposit into a separate account.',
      'Increase friction for impulse spending: Remove saved credit card numbers from food delivery and e-commerce shopping apps.'
    ],
    decisionMakingAndGrowth: [
      'Recognize that progress is rarely linear. Trust the process during the "Plateau of Latent Potential" when results seem invisible.',
      'Perform a weekly habits audit: List your daily routines and tag them with + (positive), - (negative), or = (neutral) based on where they lead.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Habit formation takes exactly 21 days.',
      reality:
        'Scientific research shows habit formation varies dramatically (from 18 to 254 days, with an average of 66 days) depending on the complexity of the behaviour and personal context.',
      caution:
        'Do not abandon your routine on day 22 expecting it to run on effortless autopilot; habits require continuous maintenance.'
    },
    {
      misconception: 'Goals do not matter at all; only systems matter.',
      reality:
        'Clear states goals are essential for setting direction and clarity. However, systems are what produce actual progress. Focusing obsessively on the goal while ignoring the daily process leads to frustration.',
      caution:
        'Set your goal once to establish direction, then focus 95% of your mental energy on your daily operational system.'
    },
    {
      misconception: 'Habits restrict your freedom and make life robotic.',
      reality:
        'Building habits around basic life mechanics (finances, fitness, study routines) actually creates freedom. When fundamentals are automated, your mind is freed for creative, high-level thinking.',
      caution:
        'Do not try to habituate every single second of your day; preserve room for spontaneous play, rest, and exploration.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The neuroscience of dopamine-driven habit loops (Cue, Craving, Response, Reward).',
      'The overwhelming empirical evidence that environment architecture beats raw willpower.',
      'The compounding mathematics of small incremental improvements over extended time horizons.'
    ],
    authorOpinions: [
      'The assertion that goals should be almost entirely ignored in favour of systems is an intentional rhetorical overstatement to counteract goal obsession.',
      'The suggestion that anyone can build any habit through simple cues underestimates biological factors like ADHD, depression, or chronic physical illness.'
    ],
    anecdotesVsEvidence: [
      'The famous story of the British Cycling team under Dave Brailsford (marginal gains) is an inspiring case study, but cycling performance also involved significant budget increases and equipment innovations.',
      'Personal anecdotes of Clear’s baseball injury recovery demonstrate personal grit alongside habit formation.'
    ],
    debatedOrContextualClaims: [
      'In high-stakes, unpredictable creative fields (such as novel writing, startup innovation, or artistic breakthrough), rigid daily habits can sometimes stifle spontaneous divergent thinking if applied dogmatically.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Tiny 1% gains compound into radical differences over time.',
      'Focus on who you want to become (identity), not just what you want to achieve (outcomes).',
      'Optimize your physical and digital environments to make good habits obvious and bad habits invisible.',
      'Use the Two-Minute Rule to standardize showing up before trying to optimize performance.',
      'Never miss twice—rapid recovery is the secret of long-term consistency.'
    ],
    finalSummary:
      'Atomic Habits provides a masterclass in human operational design. By shifting your focus from vague, outcome-based resolutions to identity convictions, restructuring your environment, and applying the Four Laws of Behaviour Change, you can engineer compounding personal, academic, and professional excellence.',
    actionPlan: [
      {
        step: 'Step 1: Conduct a Habits Scorecard',
        action: 'Write down every single action you take from waking up to going to bed for one full day and tag each (+, -, =).',
        outcome: 'Unconscious daily patterns are brought into conscious awareness.'
      },
      {
        step: 'Step 2: Choose One Tiny Habit',
        action: 'Select one core study or health habit and compress it to under two minutes.',
        outcome: 'Zero friction to start each day.'
      },
      {
        step: 'Step 3: Stack It and Alter Environment',
        action: 'Pair it with an existing habit ("After [Current], I will [New]") and prepare the physical space in advance.',
        outcome: 'An automatic, visual trigger that initiates the desired behaviour.'
      },
      {
        step: 'Step 4: Establish Visual Accountability',
        action: 'Mark an X on a calendar every time you perform the habit; adhere strictly to the "Never Miss Twice" rule.',
        outcome: 'Immediate dopamine reward and unbreakable momentum.'
      }
    ],
    fivePointsToRemember: [
      '1. You do not rise to the level of your goals; you fall to the level of your systems.',
      '2. Every action you take is a vote for the type of person you wish to become.',
      '3. Make good habits obvious, attractive, easy, and satisfying.',
      '4. Reduce new habits to under two minutes until showing up is standardized.',
      '5. Environment design beats willpower every single time.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Habit Loop',
        definition: 'The four-stage feedback cycle: Cue, Craving, Response, and Reward.'
      },
      {
        term: 'Identity-Based Habit',
        definition: 'A habit formed around the core conviction of who you are, rather than an external metric you desire.'
      },
      {
        term: 'Habit Stacking',
        definition: 'The strategy of anchoring a new habit directly after an established, reliable daily routine.'
      },
      {
        term: 'The 2-Minute Rule',
        definition: 'A principle stating that any new habit should initially be scaled down to take less than two minutes to execute.'
      },
      {
        term: 'Temptation Bundling',
        definition: 'Pairing an action you need to do with an action you genuinely want to do to boost motivation.'
      }
    ],
    questions: [
      {
        question: 'What are the Four Laws of Behaviour Change?',
        answer:
          '1. Make it obvious (Cue), 2. Make it attractive (Craving), 3. Make it easy (Response), 4. Make it satisfying (Reward).'
      },
      {
        question: 'Why does James Clear argue that focusing on goals is flawed?',
        answer:
          'Winners and losers often share the exact same goals. The difference lies in the systems, routines, and processes they implement daily.'
      },
      {
        question: 'What is the purpose of the Two-Minute Rule?',
        answer:
          'To overcome the friction of starting by making the entry point so effortless that it is impossible to procrastinate, standardizing the habit before optimizing it.'
      },
      {
        question: 'What is the "Never Miss Twice" principle?',
        answer:
          'A rule stating that missing a habit once is an accident, but missing it twice begins a new bad habit. You must recover immediately on the subsequent opportunity.'
      },
      {
        question: 'How does environment design influence willpower?',
        answer:
          'Visual cues in our surroundings trigger cravings and responses automatically. Removing cues for bad habits and highlighting cues for good habits eliminates the need for exhausting mental willpower.'
      }
    ],
    oneMinuteSummary:
      'Atomic Habits proves that monumental transformations are the compounding result of small, 1% daily systems. By aligning your habits with your identity, restructuring your physical and digital environments, and following the Four Laws of Behaviour Change (Obvious, Attractive, Easy, Satisfying), students can defeat procrastination and build lifelong excellence.'
  }
};
