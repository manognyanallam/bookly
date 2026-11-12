import { NonFictionLearningGuide } from '@/types/learning';

export const deepWorkGuide: NonFictionLearningGuide = {
  id: 'guide-deep-work',
  bookId: 'deep-work',
  type: 'nonfiction',
  introduction:
    'Deep Work by Cal Newport, MIT-trained computer science professor at Georgetown University, argues that the ability to concentrate without distraction on cognitively demanding tasks is rapidly becoming the ultimate superpower in the modern information economy. As open offices, Slack channels, and smartphone notifications fragment our attention into shallow bursts, those who cultivate deep work habits will produce rare, high-value output and accelerate their learning curves.',
  overview: {
    whatItIsAbout:
      'The book establishes that professional activities fall into two categories: "Deep Work" (cognitively demanding efforts executed in prolonged distraction-free focus that stretch your abilities) and "Shallow Work" (non-cognitively demanding, logistical tasks often performed while distracted).',
    problemAddressed:
      'Constant digital connectivity and multitasking create "attention residue"—where fragments of your mental capacity remain stuck on previous tasks, severely degrading intellectual performance and problem-solving depth.',
    centralArgument:
      'The Deep Work Hypothesis: The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our knowledge economy. The few who cultivate this skill will dominate their respective fields.',
    majorThemes: [
      'The High Value of Deep Work in Knowledge Economies',
      'The Cognitive Cost of Attention Residue and Multitasking',
      'The 4 Deep Work Scheduling Philosophies (Monastic, Bimodal, Rhythmic, Journalistic)',
      'The Grand Gesture and Ritualization of Deep Work',
      'Embracing Boredom, Quitting Social Media, and Draining the Shallows'
    ],
    connectionsBetweenIdeas:
      'Newport first proves the economic and neurological necessity of deep work, deconstructs the structural flaws of modern workplaces, presents four actionable scheduling models to integrate deep sessions into daily life, and finishes with radical lifestyle rules to prune shallow distractions.',
    whatStudentsUnderstand:
      'Students will realize that spending 8 hours with their textbook open while checking phone notifications produces far less learning than 2 hours of ruthless, distraction-free immersion.'
  },
  concepts: [
    {
      name: 'Attention Residue',
      simpleExplanation:
        'When you switch from Task A to Task B, your attention does not immediately follow. A residue of your mental focus remains stuck thinking about Task A, reducing your cognitive capacity for Task B.',
      whyItMatters:
        'Checking an email or Instagram message for "just 10 seconds" during a coding or math study session contaminates your focus for up to 20 minutes with attention residue.',
      everydayExample:
        'Glancing at a WhatsApp notification while writing a history term paper. Even if you reply in 15 seconds, your brain keeps wondering who replied, leaving you mentally sluggish.',
      collegeStudentApplication:
        'Group communication checks into strict 10-minute batches (e.g. at 12 PM and 6 PM) rather than keeping chat apps running in the background while studying.',
      difficultTerms: [
        {
          term: 'Attention Residue',
          definition: 'A lingering cognitive tax that occurs when shifting between tasks, leaving mental bandwidth temporarily impaired.'
        }
      ]
    },
    {
      name: 'The 4 Deep Work Scheduling Philosophies',
      simpleExplanation:
        'Different ways to structure focus: 1. Monastic (eliminate shallow work completely), 2. Bimodal (divide time into multi-day deep retreats and normal periods), 3. Rhythmic (daily recurring fixed focus blocks at the same time, e.g. 7-9 AM), 4. Journalistic (dropping into deep work on demand whenever free time appears).',
      whyItMatters:
        'Different career stages and personality types require different structures. For most college students, the Rhythmic philosophy is the most sustainable and realistic.',
      everydayExample:
        'Scheduling an uncompromised 90-minute block from 8:00 AM to 9:30 AM every weekday morning in the college library before lectures start.',
      collegeStudentApplication:
        'Adopt the Rhythmic schedule: Protect your first 90 minutes of the day for your most difficult academic challenge before checking social media or messages.',
      difficultTerms: [
        {
          term: 'Rhythmic Scheduling',
          definition: 'Transforming deep work into a steady, daily habit by executing sessions at identical times each day.'
        }
      ]
    },
    {
      name: 'Drain the Shallows',
      simpleExplanation:
        'Ruthlessly auditing, reducing, and batching non-cognitively demanding tasks (meetings, basic administrative emails, filing, casual messages) so they do not crowd out deep work.',
      whyItMatters:
        'Shallow work gives the illusion of productivity because you feel "busy", but it creates virtually zero lasting intellectual or career value.',
      everydayExample:
        'Spending three hours organizing desktop folders and formatting color-coded notes instead of actually solving difficult past exam problem sets.',
      collegeStudentApplication:
        'Cap your shallow academic tasks (filling forms, formatting slides, checking class boards) to a 45-minute window in the late afternoon when your cognitive energy is already lower.',
      difficultTerms: [
        {
          term: 'Metric Black Hole',
          definition: 'The inability of companies and individuals to measure the massive hidden productivity costs of shallow distraction.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'High-Quality Work Produced = (Time Spent) × (Intensity of Focus).',
      whatItMeans:
        'Doubling your focus intensity allows you to produce the same quality of work in half the time. Diluted focus takes twice as long and yields mediocre output.',
      whyItMatters:
        'Students who claim they studied for 10 hours often operated at an intensity of 2/10. Studying at 9/10 intensity for 3 hours frees up the entire rest of the day for health and social life.',
      realisticExample:
        'Studying in a silent library basement with no phone for 2 hours versus studying in a loud dorm room with Netflix on for 6 hours.',
      howStudentAppliesIt:
        'Set a timer for 50 minutes of single-tasking with zero browser tabs open other than your current project.'
    },
    {
      insight: 'Embrace boredom; don’t reach for a screen the moment stimulation drops.',
      whatItMeans:
        'If every time you stand in an elevator or wait in a grocery line you immediately pull out your smartphone, your brain becomes hardwired to crave constant novelty and loses the neurological capacity to tolerate sustained focus.',
      whyItMatters:
        'Deep work requires mental stamina to sit with confusion and boredom. Training yourself to tolerate brief periods of under-stimulation restores cognitive depth.',
      realisticExample:
        'Standing in line for campus lunch without looking at your phone; simply observing your surroundings or thinking through an essay premise.',
      howStudentAppliesIt:
        'Practice taking daily screen-free walks and resisting phone checks during brief transitional pauses.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Create a shutdown ritual: At 6 PM or 7 PM, close all study books, review tomorrow’s plan, say a mental shutdown phrase, and disconnect from academic stress for the evening.',
      'Treat the campus library as a sacred sanctuary of focus, not a social lounge.'
    ],
    studyingAndLearning: [
      'Prepare for exams with active, high-intensity problem solving rather than passive highlighting of lecture slides.',
      'Schedule deep work sessions in your calendar just like you schedule laboratory classes or doctor appointments.'
    ],
    careerDevelopment: [
      'Learn hard things quickly: The two abilities required to thrive in the new economy are the ability to quickly master hard things and the ability to produce at an elite level in terms of quality and speed.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Deep work means working 14 hours a day without sleeping.',
      reality:
        'Newport notes that human cognitive limits cap deep work at roughly 4 hours per day for experts and 1 to 2 hours for beginners. The rest of the day is for shallow tasks, rest, and exercise.',
      caution:
        'Do not burn out attempting 8 hours of uninterrupted deep focus; aim for 90 to 120 minutes of true depth.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The neuroscience of attention residue and cognitive switching penalties.',
      'The economic reality that easily replicable shallow work gets automated or outsourced, while deep expertise commands high value.'
    ],
    authorOpinions: [
      'Newport’s strict recommendation that everyone should delete all social media accounts may be overly restrictive for students entering fields like digital journalism, community building, or modern startup marketing.'
    ],
    anecdotesVsEvidence: [
      'Historical examples of Jung, Bill Gates, and Mark Twain illustrate the power of deep focus, but their unique wealth and domestic support enabled them to isolate in ways an ordinary student cannot.'
    ],
    debatedOrContextualClaims: [
      'Some collaborative roles require rapid, synchronous communication; deep work must be balanced against collaborative responsiveness.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Deep work is rare, valuable, and trainable.',
      'Attention residue severely degrades intellectual performance.',
      'Rhythmic daily scheduling beats erratic bursts of inspiration.',
      'Protect your focus by establishing a clear daily shutdown ritual.'
    ],
    finalSummary:
      'Deep Work equips students with the blueprint to master demanding subjects in less time. By eliminating multitasking, training the brain to tolerate boredom, and fiercely protecting blocks of single-task immersion, you can outlearn and outproduce in any competitive field.',
    actionPlan: [
      {
        step: 'Step 1: Choose a Deep Work Ritual',
        action: 'Designate a specific desk in the library, a set time (e.g. 8:00 AM), and a specific coffee/water preparation.',
        outcome: 'A cognitive cue that signals the brain to enter intense focus.'
      },
      {
        step: 'Step 2: Eliminate Digital Notifications',
        action: 'Turn on Do Not Disturb and place your phone inside your backpack out of sight.',
        outcome: 'Zero attention residue from alerts.'
      },
      {
        step: 'Step 3: Define Output Metrics',
        action: 'Track deep work hours completed per week on a physical whiteboard.',
        outcome: 'Accountability and visual motivation.'
      }
    ],
    fivePointsToRemember: [
      '1. Deep work is the ability to focus without distraction on cognitively demanding tasks.',
      '2. High-quality output is time spent multiplied by intensity of focus.',
      '3. Multitasking leaves attention residue that damages thinking.',
      '4. The human brain can realistically sustain 2 to 4 hours of true deep work daily.',
      '5. Cultivate a clear end-of-day shutdown ritual to recharge your cognitive reserves.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Deep Work',
        definition: 'Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.'
      },
      {
        term: 'Shallow Work',
        definition: 'Non-cognitively demanding, logistical tasks often performed while distracted.'
      },
      {
        term: 'Attention Residue',
        definition: 'The lingering mental distraction remaining from a previous task when switching rapidly between activities.'
      },
      {
        term: 'Rhythmic Scheduling',
        definition: 'Establishing a regular daily habit of deep work at identical times.'
      }
    ],
    questions: [
      {
        question: 'What is the Deep Work Hypothesis?',
        answer:
          'That the ability to perform deep work is becoming increasingly rare at the exact time it is becoming increasingly valuable in our modern economy.'
      },
      {
        question: 'Why does Cal Newport discourage quickly checking an email while studying?',
        answer:
          'Because even a 10-second glance leaves attention residue that impairs problem-solving depth for up to 20 minutes.'
      },
      {
        question: 'What is a shutdown ritual?',
        answer:
          'A defined series of actions at the end of the workday to review unfinished tasks, confirm plans for tomorrow, and cleanly disconnect from work stress.'
      }
    ],
    oneMinuteSummary:
      'Deep Work proves that uninterrupted focus is the decisive competitive edge in knowledge work. By eliminating distractions, scheduling daily rhythmic deep blocks, and rejecting the constant urge to check screens, students can master complex topics rapidly and produce high-caliber work.'
  }
};

export const zeroToOneGuide: NonFictionLearningGuide = {
  id: 'guide-zero-to-one',
  bookId: 'zero-to-one',
  type: 'nonfiction',
  introduction:
    'Zero to One by legendary investor and PayPal co-founder Peter Thiel (with Blake Masters) is a provocative manifesto on innovation, technology, and building the future. Thiel challenges conventional business school dogmas, arguing that copycats merely take the world from 1 to n (globalization), whereas true breakthroughs move the world from 0 to 1 (technology). For students aspiring to build startups, lead engineering breakthroughs, or cultivate independent judgment, this book is an essential mental model toolkit for identifying unexamined truths and creating durable value.',
  overview: {
    whatItIsAbout:
      'The book explains how to build companies that create entirely new things. It analyzes the anatomy of creative monopolies, contrarian thinking, power law distributions in venture capital, and the critical importance of founding teams and sales.',
    problemAddressed:
      'Most businesses blindly mimic existing models, competing fiercely in crowded commodity markets where profits are erased by cutthroat price wars. They confuse incremental competition with genuine value creation.',
    centralArgument:
      'Competition is for losers. Creative monopolies—companies that invent entirely new categories or technology so vastly superior that no competitor comes close—are the sole creators of long-term economic and civilizational progress.',
    majorThemes: [
      'The Contrarian Question: Finding Secrets in Plain Sight',
      '0 to 1 (Technology) versus 1 to n (Globalization)',
      'Creative Monopolies versus Perfect Competition',
      'The Power Law of Returns in Career and Capital',
      'The Seven Questions Every Business Must Answer'
    ],
    connectionsBetweenIdeas:
      'Thiel starts with contrarian thinking (what valuable truth nobody agrees with you on), establishes the economic superiority of monopolies, explains how to build one (start small and monopolize a niche), analyzes power laws in investments, and examines the psychology of founding visionaries.',
    whatStudentsUnderstand:
      'Students will understand that striving to be the best at what everyone else is already doing leads to exhausting competition; finding an overlooked, unique intersection of skills allows you to create non-zero-sum value.'
  },
  concepts: [
    {
      name: 'The Contrarian Question',
      simpleExplanation:
        '"What important truth do very few people agree with you on?" A good answer identifies an overlooked reality about human nature, technology, or business that conventional wisdom denies.',
      whyItMatters:
        'If you believe only what everyone else believes, you will only build what everyone else is building. Breakthrough innovation requires finding "secrets"—truths about the world that are hidden but discoverable.',
      everydayExample:
        'In 2008, conventional wisdom said: "Strangers will never sleep in other strangers’ spare bedrooms." Airbnb proved the contrarian truth that people would, creating a $100 billion hospitality empire.',
      collegeStudentApplication:
        'Ask yourself: What do all your classmates assume is essential for a career (e.g. collecting generic resume certificates) that is actually low value compared to building an independent public portfolio?',
      difficultTerms: [
        {
          term: 'Contrarian Thinking',
          definition: 'Developing well-grounded independent views that diverge sharply from popular consensus.'
        }
      ]
    },
    {
      name: 'Competition is for Losers',
      simpleExplanation:
        'Under perfect competition, no company makes an economic profit; all margin is eaten up by price battles and marketing spend. In contrast, a creative monopoly invents a unique value proposition, earning durable profits it can reinvest into long-term R&D.',
      whyItMatters:
        'Students are conditioned by school rankings, sports, and contests to obsess over beating rivals in existing games rather than inventing new games where they face zero competition.',
      everydayExample:
        'Google makes massive profits because it has virtually monopolized general web search. Airline companies compete fiercely with one another on ticket prices and collectively lose money or operate on razor-thin margins.',
      collegeStudentApplication:
        'Don’t try to be the 10,000th generic software engineer applying for the exact same standardized campus recruitment role. Combine two distinct domains (e.g. computer science + environmental agriculture) to become a category of one.',
      difficultTerms: [
        {
          term: 'Creative Monopoly',
          definition: 'A business so significantly better at what it does that no other firm can offer a close substitute.'
        }
      ]
    },
    {
      name: 'The Power Law',
      simpleExplanation:
        'In venture capital and life, distributions are not normal bell curves. A tiny handful of outcomes (the top 1%) generate more return than all the other 99% combined.',
      whyItMatters:
        'Diversifying mindlessly across 50 mediocre activities guarantees mediocrity. You should focus intensely on the single highest-leverage opportunity that has exponential upside potential.',
      everydayExample:
        'In a top venture fund with 40 startup investments, one company (like Facebook) returns more money than the other 39 combined, covering all fund losses.',
      collegeStudentApplication:
        'Do not join 12 different campus clubs just to fill lines on a CV. Dedicate your energy to mastering one exceptional project or skill that creates outsized leverage.',
      difficultTerms: [
        {
          term: 'Power Law (Pareto Distribution)',
          definition: 'A relationship where a small percentage of inputs accounts for a vastly disproportionate percentage of total outputs.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'Start small and monopolize a specific niche first.',
      whatItMeans:
        'Every great monopoly began by dominating an extremely small, concentrated target market, then scaling out to adjacent markets. It is vastly easier to dominate a small market than a large one.',
      whyItMatters:
        'Startups fail when they target "1% of a $100 billion market" because they have no focused customer segment and burn cash competing against giants.',
      realisticExample:
        'Amazon started exclusively selling books online before expanding to music, electronics, and everything else. PayPal started exclusively serving eBay power sellers.',
      howStudentAppliesIt:
        'When building a project or campus app, solve an urgent problem for 50 specific college students completely, rather than trying to build a generic platform for all students globally.'
    },
    {
      insight: 'Superior technology is not enough; distribution matters just as much.',
      whatItMeans:
        'Engineers often assume that if you build a brilliant product, users will naturally come. Thiel emphasizes that distribution, sales, and marketing are built into the DNA of every successful company.',
      whyItMatters:
        'Poor distribution—not poor product—is the number one cause of company failure.',
      realisticExample:
        'Brilliant open-source libraries that nobody ever uses because the creator never wrote documentation or built an onboarding pipeline.',
      howStudentAppliesIt:
        'Learn sales, marketing, and storytelling alongside your technical engineering skills.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Resist mimetic competition: Just because all your friends are flocking to one specific trend does not mean it is right for your unique strengths.',
      'Build long-term partnerships: Find fellow students who share complementary technical and operational skills to collaborate with across decades.'
    ],
    studyingAndLearning: [
      'Focus on first-principles thinking rather than copying solutions from previous exam batches.'
    ],
    careerDevelopment: [
      'Evaluate company trajectories using the power law: Working for an explosive breakout company (growing 100% year over year) offers 10x the career acceleration of a stagnant legacy conglomerate.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Thiel is defending predatory, illegal cartels that gouge consumers.',
      reality:
        'Thiel explicitly distinguishes between predatory government-backed rent-seeking monopolies and "creative monopolies" that achieve dominance by inventing something so useful and superior that customers happily choose them.',
      caution:
        'Monopolies that stop innovating and exploit customers inevitably face disruption or antitrust action.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The reality of power laws in venture capital, media, and technology returns.',
      'The strategic advantage of starting in a concentrated niche before expanding to broader markets.'
    ],
    authorOpinions: [
      'Thiel’s dismissive view of higher education and his promotion of the Thiel Fellowship (paying students to drop out) ignores the critical foundational and networking role universities provide for most students.'
    ],
    anecdotesVsEvidence: [
      'Thiel’s examples are drawn heavily from Silicon Valley software outliers (PayPal, Facebook, Palantir), where marginal cost of distribution is near zero, which does not apply identically to hardware or capital-intensive manufacturing.'
    ],
    debatedOrContextualClaims: [
      'Thiel’s critique of lean, incremental iteration ("lean startup") in favour of bold, multi-decade design planning works well for rockets (SpaceX), but lean experimentation remains vital for uncertain digital products.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Going from 0 to 1 creates new categories; going from 1 to n merely copies.',
      'Creative monopolies drive civilizational progress.',
      'Power law distributions govern outsized returns in life and business.',
      'Master sales and distribution—great products do not sell themselves.'
    ],
    finalSummary:
      'Zero to One urges students to stop competing blindly in standardized games. By asking contrarian questions, searching for unexamined secrets, dominating tight niches, and respecting the power law, you can build meaningful technology and steer your own distinct future.',
    actionPlan: [
      {
        step: 'Step 1: Identify Your Contrarian Truth',
        action: 'Write down three beliefs you hold deeply about your domain that industry consensus rejects.',
        outcome: 'Clarity on unique project and career angles.'
      },
      {
        step: 'Step 2: Define a Micro-Market',
        action: 'Focus your next project on serving 100 passionate users exceptionally well.',
        outcome: 'Rapid validation and category dominance in a niche.'
      },
      {
        step: 'Step 3: Build Distribution First',
        action: 'Plan how users will discover your product before writing the first line of production code.',
        outcome: 'Guaranteed customer feedback pipeline.'
      }
    ],
    fivePointsToRemember: [
      '1. 0 to 1 is vertical progress (technology); 1 to n is horizontal progress (globalization).',
      '2. In free markets, cutthroat competition destroys economic profit.',
      '3. Creative monopolies generate lasting value by inventing new categories.',
      '4. The power law rules outcomes: focus on the few things that matter exponentially.',
      '5. Great sales is invisible—never neglect distribution.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: '0 to 1',
        definition: 'Creating something fundamentally new (technology and invention).'
      },
      {
        term: '1 to n',
        definition: 'Copying things that already work and spreading them globally.'
      },
      {
        term: 'Creative Monopoly',
        definition: 'A company whose product is so far superior that it has no meaningful direct competition.'
      },
      {
        term: 'Contrarian Question',
        definition: '"What important truth do very few people agree with you on?"'
      }
    ],
    questions: [
      {
        question: 'Why does Peter Thiel say "Competition is for losers"?',
        answer:
          'Because in perfect competition, intense rivalry erodes profit margins to zero, leaving companies fighting for survival rather than innovating.'
      },
      {
        question: 'How should a startup begin market expansion?',
        answer:
          'By dominating an extremely small, concentrated niche market first, and then systematically expanding into adjacent markets.'
      },
      {
        question: 'What is the Power Law in career and investments?',
        answer:
          'The mathematical reality that a tiny percentage of top opportunities will return exponentially more value than all others combined.'
      }
    ],
    oneMinuteSummary:
      'Zero to One teaches that authentic innovation comes from creating something entirely new (0 to 1) rather than copying existing formulas. By uncovering contrarian truths, dominating focused niches, understanding power law dynamics, and pairing brilliant engineering with distribution, students can build lasting value.'
  }
};

export const the7HabitsGuide: NonFictionLearningGuide = {
  id: 'guide-the-7-habits',
  bookId: 'the-7-habits',
  type: 'nonfiction',
  introduction:
    'The 7 Habits of Highly Effective People by Dr. Stephen R. Covey is one of the most transformative leadership and character development books of the modern era. Selling over 40 million copies, Covey contrasts the superficial "Personality Ethic" (tricks, quick charm, and public image manipulation) with the enduring "Character Ethic" (integrity, humility, fidelity, and justice). Moving students from dependence to independence, and ultimately to interdependence, Covey delivers a principled blueprint for personal and interpersonal mastery.',
  overview: {
    whatItIsAbout:
      'The book presents an integrated, character-based operating system for life. It traces personal growth through three developmental stages: Private Victory (Habits 1-3: Independence), Public Victory (Habits 4-6: Interdependence), and Continuous Renewal (Habits 7: Sharpening the Saw).',
    problemAddressed:
      'Modern self-help frequently promotes quick-fix personality hacks, superficial social techniques, and reactive crisis-management that fail to address fundamental character, core values, and life purpose.',
    centralArgument:
      'True effectiveness is governed by timeless natural laws and principles. You cannot achieve lasting interpersonal success with others (Public Victory) without first establishing self-mastery, discipline, and integrity inside yourself (Private Victory).',
    majorThemes: [
      'The Character Ethic versus The Personality Ethic',
      'The Maturity Continuum: Dependence → Independence → Interdependence',
      'Private Victory: Proactivity, Beginning with the End in Mind, Putting First Things First',
      'Public Victory: Think Win-Win, Seek First to Understand, Synergize',
      'Continuous Renewal: Sharpening the Saw Across Mind, Body, Heart, and Soul'
    ],
    connectionsBetweenIdeas:
      'Habit 1 gives you personal responsibility; Habit 2 provides vision and direction; Habit 3 organizes execution. Together, they form independence. From independence, Habit 4 sets mutual respect; Habit 5 enables deep communication; Habit 6 creates team synergy. Habit 7 renews the entire cycle.',
    whatStudentsUnderstand:
      'Students will realize that lasting success is not about looking impressive on the surface, but about aligning your inner principles with your daily actions.'
  },
  concepts: [
    {
      name: 'The Maturity Continuum',
      simpleExplanation:
        'Human growth proceeds in three stages: 1. Dependence ("You take care of me; it’s your fault"), 2. Independence ("I can do it myself; I am responsible"), 3. Interdependence ("We can cooperate to achieve something greater than either of us could alone").',
      whyItMatters:
        'Many people get stuck in dependence (blaming circumstances) or stop at rugged independence. The real world of science, business, and relationships is deeply interdependent; the highest achievements require collaborative trust.',
      everydayExample:
        'A student who blames the professor for a bad grade is dependent. A student who studies hard alone is independent. A student who organizes a collaborative study group where members teach each other complex concepts is interdependent.',
      collegeStudentApplication:
        'Move past blaming parents, teachers, or circumstances for academic struggles. Take full responsibility (independence), then build productive collaborative networks (interdependence).',
      difficultTerms: [
        {
          term: 'Interdependence',
          definition: 'The mature understanding that cooperative collaboration produces far greater results than individual isolation.'
        }
      ]
    },
    {
      name: 'Circle of Concern vs. Circle of Influence (Habit 1: Be Proactive)',
      simpleExplanation:
        'Your Circle of Concern contains everything you care about (national politics, the weather, other people’s opinions). Your Circle of Influence contains only the things you can actually control (your habits, your effort, your attitude).',
      whyItMatters:
        'Proactive people focus their energy on their Circle of Influence, causing it to expand. Reactive people focus on the Circle of Concern, venting and feeling helpless, which causes their influence to shrink.',
      everydayExample:
        'Complaining for two hours about a difficult exam grading curve versus spending two hours mastering the problem types you missed.',
      collegeStudentApplication:
        'Whenever you feel stressed, write two lists: "Things I can control right now" and "Things I cannot control." Put 100% of your energy into the first list and release the second.',
      difficultTerms: [
        {
          term: 'Proactivity',
          definition: 'Recognizing that between stimulus and response lies the human freedom to choose your reaction based on values rather than mood.'
        }
      ]
    },
    {
      name: 'The Time Management Matrix (Habit 3: Put First Things First)',
      simpleExplanation:
        'Tasks fall into four quadrants based on Urgency and Importance. Quadrant I: Urgent & Important (Crises). Quadrant II: Not Urgent, but Important (Planning, skill-building, relationship-building, health). Quadrant III: Urgent, Not Important (Interruptions). Quadrant IV: Not Urgent, Not Important (Mindless scrolling).',
      whyItMatters:
        'Highly effective people live in Quadrant II. By investing in planning, exercise, and proactive learning before they become urgent emergencies, they prevent crises.',
      everydayExample:
        'Studying course concepts weekly (Quadrant II) eliminates the panicked, all-night cramming crisis before the final exam (Quadrant I).',
      collegeStudentApplication:
        'Schedule Quadrant II deep work blocks into your weekly calendar before the week begins, protecting them like non-negotiable appointments.',
      difficultTerms: [
        {
          term: 'Quadrant II Living',
          definition: 'Focusing on high-leverage activities that build capacity and prevent crises rather than perpetually firefighting emergencies.'
        }
      ]
    },
    {
      name: 'Seek First to Understand, Then to Be Understood (Habit 5)',
      simpleExplanation:
        'Most people listen not with the intent to understand, but with the intent to reply. Empathetic listening means stepping inside another person’s perspective to understand their feelings and paradigm before offering advice.',
      whyItMatters:
        'Prescribing a medical cure before diagnosing the disease is malpractice. In communication, giving advice before deeply understanding someone’s situation destroys credibility.',
      everydayExample:
        'A teammate struggles with their code. Instead of interrupting with "You’re doing it wrong, do this," you ask: "Walk me through how your function is interpreting the input data?"',
      collegeStudentApplication:
        'In team projects, practice summarizing the other person’s point of view to their satisfaction before stating your own opinion.',
      difficultTerms: [
        {
          term: 'Empathetic Listening',
          definition: 'Listening with the ears, eyes, and heart to fully comprehend the other person’s intellectual and emotional perspective.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'Private Victory must precede Public Victory.',
      whatItMeans:
        'You cannot make genuine promises to others if you cannot keep promises to yourself. Character and self-mastery are the bedrock of interpersonal trust.',
      whyItMatters:
        'Trying to use charm or communication techniques without personal integrity is like putting a shiny coat of paint on a rotting wooden structure.',
      realisticExample:
        'A leader who preaches punctuality to their student club but regularly arrives 20 minutes late loses all moral authority.',
      howStudentAppliesIt:
        'Make small promises to yourself (e.g. "I will read 20 pages tonight") and keep them religiously to build an inner reserve of self-trust.'
    },
    {
      insight: 'The Emotional Bank Account dictates relationship strength.',
      whatItMeans:
        'Every interaction is a deposit (kindness, keeping commitments, active listening) or a withdrawal (breaking promises, arrogance, dishonesty). When the account balance is high, communication is effortless and trust is deep.',
      whyItMatters:
        'When the emotional bank account is overdrawn, even well-intentioned words are viewed with suspicion and defensiveness.',
      realisticExample:
        'Apologizing sincerely when you make an error is a massive deposit; pretending you did nothing wrong is an even bigger withdrawal.',
      howStudentAppliesIt:
        'Make daily deposits with your roommates, lab partners, and professors through basic courtesy, punctuality, and follow-through.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Write a Personal Mission Statement (Habit 2): Define your core principles, desired legacy, and non-negotiable ethical boundaries.',
      'Sharpen the Saw (Habit 7): Balance academic rigor with physical exercise, sufficient sleep, reading great literature, and authentic friendships.'
    ],
    studyingAndLearning: [
      'Apply Habit 6 (Synergize): Form study cohorts where members bring diverse strengths (one excels in math, one in conceptual writing, one in coding) to create synergistic exam prep.'
    ],
    careerDevelopment: [
      'Think Win-Win (Habit 4): In career networking and interviews, seek solutions where both you and the organization mutually prosper.'
    ]
  },
  misconceptions: [
    {
      misconception: 'The 7 Habits are just a checklist of 7 quick productivity tips.',
      reality:
        'Covey emphasizes that these habits represent a holistic character philosophy that takes years to embody, not a simple mechanical checklist.',
      caution:
        'Do not treat the habits as superficial tricks; focus on the internal paradigm shift.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The power of proactive mindset and focusing on what is within your control.',
      'The time management matrix and the high leverage of Quadrant II non-urgent planning.',
      'Empathetic listening as the foundation of interpersonal influence.'
    ],
    authorOpinions: [
      'Covey frames effectiveness through a distinctly moralistic and traditional ethical framework that reflects his personal philosophical background.',
      'The assertion that Win-Win is always possible can be difficult in strict zero-sum competitive legal or market situations, though Covey suggests "Win-Win or No Deal" as an alternative.'
    ],
    anecdotesVsEvidence: [
      'The book uses parables and personal consulting stories with corporate executives rather than statistical psychological trials, though its principles align closely with modern self-determination theory.'
    ],
    debatedOrContextualClaims: [
      'In high-pressure toxic workplaces where other parties act in bad faith, unconditional empathy can sometimes be exploited unless backed by firm boundaries.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'True effectiveness begins with character, not personality tricks.',
      'Focus relentlessly on your Circle of Influence.',
      'Put first things first by living in Quadrant II.',
      'Seek first to understand before trying to be understood.',
      'Regularly sharpen the saw to sustain long-term excellence.'
    ],
    finalSummary:
      'The 7 Habits provides students with an enduring moral compass and operational blueprint. By moving from reactive dependence to disciplined independence, and graduating to synergistic interdependence, you build a life of profound purpose, integrity, and leadership.',
    actionPlan: [
      {
        step: 'Step 1: Draft a Personal Mission Statement',
        action: 'Spend one hour in quiet reflection answering: What do I want my character and contributions to stand for?',
        outcome: 'A personal constitution to guide career and life choices.'
      },
      {
        step: 'Step 2: Schedule Quadrant II Weekly Blocks',
        action: 'Block out 3 hours every Sunday to review your mission, plan your week, and protect deep learning time.',
        outcome: 'Shift from reactive crisis-fighting to proactive mastery.'
      },
      {
        step: 'Step 3: Practice Empathetic Listening',
        action: 'In your next conversation, listen completely without interrupting or formulating your rebuttal until the speaker finishes.',
        outcome: 'Immediate deepening of interpersonal trust.'
      }
    ],
    fivePointsToRemember: [
      '1. Be Proactive: Between stimulus and response lies your freedom to choose.',
      '2. Begin with the End in Mind: Define your personal mission before climbing the ladder.',
      '3. Put First Things First: Prioritize non-urgent, important Quadrant II activities.',
      '4. Seek First to Understand, Then to Be Understood: Diagnose before you prescribe.',
      '5. Sharpen the Saw: Continuously renew your physical, mental, emotional, and spiritual faculties.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Character Ethic',
        definition: 'Success built on foundational virtues like integrity, humility, fidelity, temperance, and courage.'
      },
      {
        term: 'Circle of Influence',
        definition: 'The subset of concerns over which you have direct, actionable control.'
      },
      {
        term: 'Quadrant II',
        definition: 'Activities that are important for long-term growth but not urgently pressing (planning, health, learning).'
      },
      {
        term: 'Synergy',
        definition: 'When the whole is greater than the sum of its parts through creative, trust-based collaboration.'
      }
    ],
    questions: [
      {
        question: 'What is the difference between the Character Ethic and the Personality Ethic?',
        answer:
          'The Personality Ethic focuses on superficial charm, public relations, and quick-fix techniques, while the Character Ethic is rooted in deep principles of integrity, responsibility, and discipline.'
      },
      {
        question: 'Why should people spend more time in Quadrant II?',
        answer:
          'Because Quadrant II contains high-leverage activities (planning, preparation, health, relationship building) that build long-term capacity and prevent crises from developing in Quadrant I.'
      },
      {
        question: 'What does "Begin with the End in Mind" mean for a college student?',
        answer:
          'Defining your ultimate personal values, career goals, and character ideals before making academic and life commitments, ensuring you do not climb a ladder leaning against the wrong wall.'
      }
    ],
    oneMinuteSummary:
      'The 7 Habits of Highly Effective People offers a principled path from dependence to independence and collaborative interdependence. By taking proactive responsibility, living by a personal mission, focusing on Quadrant II priorities, listening with deep empathy, and continually renewing your faculties, students can build lasting personal and academic greatness.'
  }
};
