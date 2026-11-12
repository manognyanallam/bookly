import { Book, Genre } from '@/types/book';

export const GENRES_LIST: Genre[] = [
  { id: 'cat-money', name: 'Money & Financial Literacy', slug: 'money-financial-literacy', category: 'nonfiction', description: 'Master budgeting, cash flow, assets, and money psychology.', iconName: 'TrendingUp', bookCount: 6 },
  { id: 'cat-investing', name: 'Investing Fundamentals', slug: 'investing-fundamentals', category: 'nonfiction', description: 'Value investing, index funds, and building durable long-term wealth.', iconName: 'Briefcase', bookCount: 5 },
  { id: 'cat-psychology', name: 'Psychology & Human Behaviour', slug: 'psychology-human-behaviour', category: 'nonfiction', description: 'Decode cognitive biases, emotional patterns, and human nature.', iconName: 'Brain', bookCount: 6 },
  { id: 'cat-communication', name: 'Communication & Relationships', slug: 'communication-relationships', category: 'nonfiction', description: 'Build deep rapport, active listening, and authentic social connection.', iconName: 'MessageSquare', bookCount: 5 },
  { id: 'cat-negotiation', name: 'Negotiation & Social Intelligence', slug: 'negotiation-social-intelligence', category: 'nonfiction', description: 'Tactical empathy, persuasion, conflict resolution, and power dynamics.', iconName: 'ShieldAlert', bookCount: 5 },
  { id: 'cat-leadership', name: 'Leadership & Personal Development', slug: 'leadership-personal-development', category: 'nonfiction', description: 'Habits of effectiveness, character ethics, and inspiring teams.', iconName: 'Award', bookCount: 7 },
  { id: 'cat-entrepreneurship', name: 'Entrepreneurship & Wealth Creation', slug: 'entrepreneurship-wealth-creation', category: 'nonfiction', description: 'From zero to one monopolies, startups, and high-leverage judgment.', iconName: 'Zap', bookCount: 6 },
  { id: '1', name: 'Personal Growth', slug: 'personal-growth', category: 'nonfiction', description: 'Transform your habits, mindset, and daily routines.', iconName: 'Sparkles', bookCount: 14 },
  { id: '2', name: 'Productivity', slug: 'productivity', category: 'nonfiction', description: 'Master deep focus, time management, and effectiveness.', iconName: 'Zap', bookCount: 12 },
  { id: '3', name: 'Business', slug: 'business', category: 'nonfiction', description: 'Strategies from world-class founders and executives.', iconName: 'Briefcase', bookCount: 15 },
  { id: '4', name: 'Finance', slug: 'finance', category: 'nonfiction', description: 'Build wealth, understand risk, and master money.', iconName: 'TrendingUp', bookCount: 10 },
  { id: '5', name: 'Psychology', slug: 'psychology', category: 'nonfiction', description: 'Decode human behaviour, decisions, and emotions.', iconName: 'Brain', bookCount: 11 },
  { id: '6', name: 'Self-Discipline', slug: 'self-discipline', category: 'nonfiction', description: 'Build unbreakable willpower and grit.', iconName: 'Target', bookCount: 8 },
  { id: '7', name: 'Leadership', slug: 'leadership', category: 'nonfiction', description: 'Inspire teams, make decisions, and lead with purpose.', iconName: 'Award', bookCount: 9 },
  { id: '8', name: 'Communication', slug: 'communication', category: 'nonfiction', description: 'Influence, negotiate, and connect deeply.', iconName: 'MessageSquare', bookCount: 8 },
  { id: '9', name: 'Biography', slug: 'biography', category: 'nonfiction', description: 'Remarkable lives of visionaries and leaders.', iconName: 'UserCheck', bookCount: 7 },
  { id: '10', name: 'History', slug: 'history', category: 'nonfiction', description: 'Sweeping narratives that shaped our modern world.', iconName: 'Compass', bookCount: 9 },
  { id: '11', name: 'Philosophy', slug: 'philosophy', category: 'nonfiction', description: 'Timeless wisdom on ethics, stoicism, and meaning.', iconName: 'BookOpen', bookCount: 8 },
  { id: '12', name: 'Science', slug: 'science', category: 'nonfiction', description: 'Explore the universe, biology, and physics.', iconName: 'Microscope', bookCount: 6 },
  { id: '13', name: 'Technology', slug: 'technology', category: 'nonfiction', description: 'AI, innovation, and the digital future.', iconName: 'Cpu', bookCount: 7 },
  { id: '14', name: 'Novels - Fantasy', slug: 'fantasy', category: 'fiction', description: 'Epic realms, magic, and legendary quests.', iconName: 'Flame', bookCount: 10 },
  { id: '15', name: 'Novels - Sci-Fi', slug: 'sci-fi', category: 'fiction', description: 'Futuristic worlds, space exploration, and AI.', iconName: 'Rocket', bookCount: 8 },
  { id: '16', name: 'Novels - Mystery & Crime', slug: 'mystery', category: 'fiction', description: 'Thrilling whodunits and gripping investigations.', iconName: 'Search', bookCount: 7 },
  { id: '17', name: 'Novels - Thriller', slug: 'thriller', category: 'fiction', description: 'Pulse-pounding suspense and unexpected twists.', iconName: 'ShieldAlert', bookCount: 6 },
  { id: '18', name: 'Novels - Adventure', slug: 'adventure', category: 'fiction', description: 'Daring journeys into the unknown.', iconName: 'Map', bookCount: 8 },
  { id: '19', name: 'Novels - Romance', slug: 'romance', category: 'fiction', description: 'Heartfelt journeys of connection and love.', iconName: 'Heart', bookCount: 6 },
  { id: '20', name: 'Novels - Drama & YA', slug: 'drama', category: 'fiction', description: 'Deeply emotional stories of coming of age.', iconName: 'Users', bookCount: 7 },
];

export const INITIAL_BOOKS: Book[] = [
  {
    id: 'atomic-habits',
    slug: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy & proven way to build good habits & break bad ones. Learn how tiny 1% changes can compound into extraordinary results.',
    coverImage: '/covers/books/atomic-habits.jpg',
    genre: 'Personal Growth',
    subgenre: 'Self-Discipline',
    category: 'nonfiction',
    publishedYear: 2018,
    rating: 4.9,
    popularityScore: 99,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-atomic-habits',
      bookId: 'atomic-habits',
      audioUrl: '/audio/atomic-habits.mp3',
      duration: 865, // 15:12
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Math of 1% Improvements', timestamp: 0, duration: 133 },
        { id: 'c2', title: 'Chapter 2: Goals, Systems, and Identity', timestamp: 133, duration: 136 },
        { id: 'c3', title: 'Chapter 3: The First Law: Make It Obvious', timestamp: 269, duration: 129 },
        { id: 'c4', title: 'Chapter 4: The Second Law: Make It Attractive', timestamp: 398, duration: 112 },
        { id: 'c5', title: 'Chapter 5: The Third Law: Make It Easy', timestamp: 511, duration: 129 },
        { id: 'c6', title: 'Chapter 6: The Fourth Law: Make It Satisfying', timestamp: 640, duration: 121 },
        { id: 'c7', title: 'Chapter 7: The Master Takeaway and Action Blueprint', timestamp: 761, duration: 104 },
      ]
    },
    summary: {
      id: 'sum-atomic-habits',
      bookId: 'atomic-habits',
      keyTakeaway: 'You do not rise to the level of your goals. You fall to the level of your systems. Focus on identity-based habits rather than outcome goals.',
      quickLearn: {
        biggestIdeas: [
          'Habits compound over time like financial interest — 1% better every day yields 37x improvement in a year.',
          'Focus on your identity: who do you want to become, rather than what you want to achieve.',
          'Environment design is more powerful than willpower in driving long-term behavior.'
        ],
        keyLessons: [
          'Use Habit Stacking: "After [Current Habit], I will [New Habit]".',
          'Optimize your environment to make cues for good habits obvious.',
          'Apply the 2-Minute Rule: downscale new habits until they take less than 2 minutes to start.',
          'Never miss twice — if you break a habit loop once, recover immediately on the next instance.',
          'Track your habits visually to gain immediate psychological satisfaction.'
        ],
        whoShouldListen: 'Anyone looking to build consistent morning routines, break unproductive addictions, or achieve compounding personal growth.',
        mainTopics: ['Behavioral Psychology', 'Habit Stacking', 'Environment Design', 'Systemic Productivity']
      },
      fullText: {
        introduction: 'Atomic Habits by James Clear provides a framework for improving every day through tiny, incremental adjustments. Clear argues that monumental success does not require dramatic transformation, but rather consistent adherence to small daily systems.',
        coreIdea: 'Real change comes from the compounding effect of hundreds of small decisions. Small habits may seem insignificant in isolation, but over months and years, they build the trajectory of your entire life.',
        majorConcepts: [
          {
            title: 'The 4 Laws of Behavior Change',
            content: 'Every habit is governed by a 4-step loop: Cue, Craving, Response, and Reward. To build a good habit: (1) Make it obvious, (2) Make it attractive, (3) Make it easy, and (4) Make it satisfying.'
          },
          {
            title: 'Identity-Based Habits',
            content: 'Instead of saying "I want to run a marathon" (outcome), say "I am a runner" (identity). Every action you take is a vote for the type of person you wish to become.'
          },
          {
            title: 'The 2-Minute Rule',
            content: 'When starting a new habit, it should take less than two minutes to execute. Read one page. Put on running shoes. Fold one pair of socks. Master the art of showing up first.'
          }
        ],
        examples: [
          'The British Cycling team went from decades of mediocrity to dominant Olympic victory by searching for 1% margin of improvement in every single detail, from pillow quality to handwashing techniques.'
        ],
        practicalApplications: [
          'Design your room so that positive cues (water bottle, book, workout mat) are visible and friction is high for negative habits (unplug television, hide junk food).'
        ],
        keyLessonsSummary: [
          'Small habits add up.',
          'Optimize systems, not goals.',
          'Change your identity, change your life.'
        ],
        finalTakeaway: 'The secret to getting results that last is to never stop making 1% improvements. Small atomic habits form the bedrock of extraordinary success.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'deep-work',
    slug: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    description: 'Rules for focused success in a distracted world. Master the cognitive skill of intense, uninterrupted concentration.',
    coverImage: '/covers/books/deep-work.jpg',
    genre: 'Productivity',
    category: 'nonfiction',
    publishedYear: 2016,
    rating: 4.8,
    popularityScore: 96,
    estimatedDurationMinutes: 14,
    audio: {
      id: 'audio-deep-work',
      bookId: 'deep-work',
      audioUrl: '/audio/deep-work.mp3',
      duration: 832, // 14:40
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Deep Work Hypothesis and the Cost of Distraction', timestamp: 0, duration: 126 },
        { id: 'c2', title: 'Chapter 2: Attention Residue and the Cognitive Economics of Focus', timestamp: 126, duration: 118 },
        { id: 'c3', title: 'Chapter 3: The Four Philosophies of Deep Scheduling', timestamp: 244, duration: 132 },
        { id: 'c4', title: 'Chapter 4: Rituals, Environments, and the Grand Gesture', timestamp: 376, duration: 128 },
        { id: 'c5', title: 'Chapter 5: Training Your Brain to Embrace Boredom', timestamp: 504, duration: 108 },
        { id: 'c6', title: 'Chapter 6: The Craftsman Approach to Digital Tools', timestamp: 612, duration: 99 },
        { id: 'c7', title: 'Chapter 7: Draining the Shallows and the Hard Shutdown', timestamp: 711, duration: 121 },
      ]
    },
    summary: {
      id: 'sum-deep-work',
      bookId: 'deep-work',
      keyTakeaway: 'Deep work is the superpower of the 21st century. The ability to perform deep work is becoming increasingly rare at the exact same time it is becoming increasingly valuable.',
      quickLearn: {
        biggestIdeas: [
          'Deep work is professional activity performed in a state of distraction-free concentration that pushes cognitive capabilities to their limit.',
          'Shallow work (emails, meetings, slack notifications) creates residual attention fragmentation.',
          'High quality work produced = (Time Spent) x (Intensity of Focus).'
        ],
        keyLessons: [
          'Schedule specific blocks of uninterrupted deep work in your calendar.',
          'Train your mind to tolerate boredom without reaching for your phone.',
          'Embrace a grand gesture (e.g. booked cabin, dedicated study space) to signal importance.',
          'Establish a strict shutdown ritual at the end of every workday.',
          'Measure your deep work hours as your primary lead metric.'
        ],
        whoShouldListen: 'Knowledge workers, software developers, researchers, writers, and entrepreneurs striving to produce elite results.',
        mainTopics: ['Focus Architecture', 'Cognitive Economics', 'Digital Minimalism']
      },
      fullText: {
        introduction: 'Cal Newport defines deep work as focused professional efforts that create new value, improve skills, and are hard to replicate.',
        coreIdea: 'In an economy dominated by distraction, those who cultivate deep focus will dominate their field.',
        majorConcepts: [
          {
            title: 'Attention Residue',
            content: 'When switching tasks, your attention does not transition immediately. A residual fragment remains focused on the previous task, reducing cognitive efficiency.'
          },
          {
            title: '4 Deep Work Philosophies',
            content: 'Monastic (complete isolation), Bimodal (allocating specific seasons/weeks), Rhythmic (daily scheduled blocks), or Journalistic (fitting focus into spare hours).'
          }
        ],
        examples: [
          'Carl Jung built a stone tower in Bollingen with no electricity or telephone to write his breakthrough analytical psychology papers.'
        ],
        practicalApplications: [
          'Block 90-minute distraction-free deep work sessions every morning before opening email or social channels.'
        ],
        keyLessonsSummary: [
          'Work deeply, embrace solitude.',
          'Minimize shallow logistics.',
          'Shutdown completely at day end.'
        ],
        finalTakeaway: 'A deep life is a good life. Prioritize intensity of focus over superficial busyness.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'psychology-of-money',
    slug: 'psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    description: 'Timeless lessons on wealth, greed, and happiness. Doing well with money has a little to do with how smart you are and a lot to do with how you behave.',
    coverImage: '/covers/books/psychology-of-money.jpg',
    genre: 'Finance',
    category: 'nonfiction',
    publishedYear: 2020,
    rating: 4.9,
    popularityScore: 98,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-psychology-of-money',
      bookId: 'psychology-of-money',
      audioUrl: '/audio/psychology-of-money.mp3',
      duration: 872, // 15:40
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Soft Skill of Wealth and Why No One Is Crazy', timestamp: 0, duration: 134 },
        { id: 'c2', title: 'Chapter 2: Luck, Risk, and the Seduction of Pessimism', timestamp: 134, duration: 111 },
        { id: 'c3', title: 'Chapter 3: Never Enough and The Danger of Moving Goalposts', timestamp: 245, duration: 103 },
        { id: 'c4', title: 'Chapter 4: Confounding Compounding: The Warren Buffett Miracle', timestamp: 348, duration: 147 },
        { id: 'c5', title: 'Chapter 5: Tails, You Win: Getting Wealthy vs. Staying Wealthy', timestamp: 495, duration: 143 },
        { id: 'c6', title: 'Chapter 6: The Man in the Car Paradox and Unseen Freedom', timestamp: 637, duration: 125 },
        { id: 'c7', title: 'Chapter 7: Reasonable Over Rational: The Master Takeaway', timestamp: 762, duration: 110 },
      ]
    },
    summary: {
      id: 'sum-psychology-of-money',
      bookId: 'psychology-of-money',
      keyTakeaway: 'The highest form of wealth is the ability to wake up every morning and say, "I can do whatever I want today." Financial independence is about autonomy, not status symbols.',
      quickLearn: {
        biggestIdeas: [
          'Financial success is not a hard science; it is a soft skill where behavior matters more than technical knowledge.',
          'Compounding is counterintuitive: Warren Buffett’s wealth came from being a consistent investor for over 75 years.',
          'Spending money to show people how much money you have is the fastest way to have less money.'
        ],
        keyLessons: [
          'Define "Enough": avoid moving the goalposts as your income grows.',
          'Save money unconditionally without needing a specific purchase goal.',
          'Build room for error into your financial plans.',
          'Opt for being reasonable rather than purely rational.',
          'True wealth is the cars not purchased, the watches not worn, and the freedom retained.'
        ],
        whoShouldListen: 'Anyone who wants to build long-term wealth, manage financial stress, and understand behavioral economics.',
        mainTopics: ['Behavioral Finance', 'Compounding', 'Financial Freedom', 'Risk Management']
      },
      fullText: {
        introduction: 'Morgan Housel explores 19 short stories demonstrating how personal experiences, ego, pride, and psychology shape financial decisions far more than mathematical formulas.',
        coreIdea: 'Wealth is what you don’t see. It is options, flexibility, and growth preserved for the future.',
        majorConcepts: [
          {
            title: 'Freedom Dividend',
            content: 'Money’s greatest intrinsic value is giving you control over your time. Having a financial cushion lets you take jobs with lower pay but higher joy or handle unexpected crises smoothly.'
          },
          {
            title: 'Staying Wealthy vs Getting Wealthy',
            content: 'Getting wealthy requires optimism, risk-taking, and putting yourself out there. Staying wealthy requires paranoia, humility, and accepting that what you made can be taken away just as fast.'
          }
        ],
        examples: [
          'Ronald Read, a humble janitor, quietly accumulated $8 million by living frugally and investing in basic stocks for 60 years, outperforming wall street executives.'
        ],
        practicalApplications: [
          'Maintain a high savings rate regardless of your income level, and invest regularly without attempting to market-time short fluctuations.'
        ],
        keyLessonsSummary: [
          'Wealth is unseen flexibility.',
          'Compounding takes patience.',
          'Control over time is true happiness.'
        ],
        finalTakeaway: 'Manage your money in a way that lets you sleep peacefully at night.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'the-alchemist',
    slug: 'the-alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A magical fable about following your dream. Follow Santiago, an Andalusian shepherd boy, as he journeys to find his Personal Legend.',
    coverImage: '/covers/books/the-alchemist.jpg',
    genre: 'Novels - Fantasy',
    subgenre: 'Adventure',
    category: 'fiction',
    publishedYear: 1988,
    rating: 4.9,
    popularityScore: 97,
    estimatedDurationMinutes: 14,
    audio: {
      id: 'audio-the-alchemist',
      bookId: 'the-alchemist',
      audioUrl: '/audio/the-alchemist.mp3',
      duration: 861, // 15:00
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Shepherd and the Recurring Dream', timestamp: 0, duration: 111 },
        { id: 'c2', title: 'Chapter 2: The King of Salem and the Personal Legend', timestamp: 111, duration: 111 },
        { id: 'c3', title: 'Chapter 3: Tangier, Betrayal, and the Crystal Merchant', timestamp: 221, duration: 128 },
        { id: 'c4', title: 'Chapter 4: The Sahara Caravan and the Englishman', timestamp: 349, duration: 101 },
        { id: 'c5', title: 'Chapter 5: The Oasis of Al-Fayoum and Fatima', timestamp: 451, duration: 133 },
        { id: 'c6', title: 'Chapter 6: The Alchemist, the Desert Wind, and the Pyramids', timestamp: 584, duration: 104 },
        { id: 'c7', title: 'Chapter 7: The True Treasure and the Master Lesson', timestamp: 687, duration: 173 },
      ]
    },
    summary: {
      id: 'sum-the-alchemist',
      bookId: 'the-alchemist',
      isSpoiler: true,
      keyTakeaway: 'When you genuinely want something, all the universe conspires in helping you to achieve it. The journey and transformation of self is the true treasure.',
      quickLearn: {
        biggestIdeas: [
          'Everyone has a Personal Legend — their true destiny or life mission.',
          'Fear of suffering is worse than the suffering itself.',
          'Omens and the Soul of the World guide those who pay attention to their intuition.'
        ],
        keyLessons: [
          'Listen to your heart — it knows where your treasure lies.',
          'Embrace failure as a necessary alchemical test.',
          'Love does not hold someone back from pursuing their Personal Legend.',
          'The treasure is often right where you started, but you had to travel to become the person capable of seeing it.'
        ],
        whoShouldListen: 'Seekers, dreamers, travelers, and fiction lovers looking for inspiration on finding purpose.',
        mainTopics: ['Destiny', 'Perseverance', 'Intuition', 'Universal Language']
      },
      fullText: {
        introduction: 'SPOILER SUMMARY: The Alchemist tells the story of Santiago, a young shepherd who leaves his comfortable life in Spain to pursue a recurring dream of treasure near the Egyptian Pyramids.',
        coreIdea: 'Pursuing one’s Personal Legend requires courage to trust omens, overcome setback after setback, and listen to the language of the universe.',
        majorConcepts: [
          {
            title: 'The Personal Legend',
            content: 'The King of Salem, Melchizedek, tells Santiago that a Personal Legend is what you have always wanted to accomplish. As people grow older, a mysterious force convinces them it is impossible.'
          },
          {
            title: 'The Soul of the World',
            content: 'Everything in nature is interconnected. When Santiago learns to speak with the wind and the desert, he taps into the fundamental energy that binds all living things.'
          }
        ],
        examples: [
          'Santiago loses all his money in Tangier on his first day, yet chooses to work at a crystal shop, revitalizing the business and earning enough to continue his desert trek.'
        ],
        practicalApplications: [
          'Do not let fear of failure prevent you from pursuing your deepest life calling.'
        ],
        keyLessonsSummary: [
          'Trust your journey.',
          'Overcome fear of failure.',
          'Transform through experience.'
        ],
        finalTakeaway: 'Your treasure lies where your heart is.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'sapiens',
    slug: 'sapiens',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'How an insignificant ape became the ruler of planet Earth. Explore the Cognitive, Agricultural, and Scientific Revolutions.',
    coverImage: '/covers/books/sapiens.jpg',
    genre: 'History',
    subgenre: 'Science',
    category: 'nonfiction',
    publishedYear: 2014,
    rating: 4.9,
    popularityScore: 95,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-sapiens',
      bookId: 'sapiens',
      audioUrl: '/audio/sapiens.mp3',
      duration: 890, // 17:00
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: An Animal of No Significance and the Cognitive Revolution', timestamp: 0, duration: 119 },
        { id: 'c2', title: 'Chapter 2: The Superpower of Shared Fictions', timestamp: 119, duration: 141 },
        { id: 'c3', title: "Chapter 3: The Agricultural Revolution: History's Biggest Fraud", timestamp: 260, duration: 132 },
        { id: 'c4', title: 'Chapter 4: The Architecture of Imagined Order', timestamp: 392, duration: 126 },
        { id: 'c5', title: 'Chapter 5: The Three Great Unifiers of Humankind', timestamp: 518, duration: 125 },
        { id: 'c6', title: 'Chapter 6: The Scientific Revolution and the Discovery of Ignorance', timestamp: 644, duration: 127 },
        { id: 'c7', title: 'Chapter 7: The Master Takeaway: The Animal That Became a God', timestamp: 771, duration: 119 },
      ]
    },
    summary: {
      id: 'sum-sapiens',
      bookId: 'sapiens',
      keyTakeaway: 'Homo sapiens rule the world because we are the only animal that can cooperate flexibly in large numbers, enabled by our unique ability to believe in shared fictions like nations, money, and human rights.',
      quickLearn: {
        biggestIdeas: [
          'The Cognitive Revolution allowed humans to speak about things that do not exist physically (myths, gods, corporations).',
          'Money is the most universal and efficient system of mutual trust ever created.',
          'We domesticated plants, but wheat domesticated Homo sapiens by anchoring us to hard labor.'
        ],
        keyLessons: [
          'Recognize how shared imagined realities shape modern society.',
          'Understand that economic growth relies on belief in an unseen future.',
          'Reflect on whether technological advancement translates into individual happiness.'
        ],
        whoShouldListen: 'History buffs, anthropologists, thinkers, and anyone curious about how human civilization evolved.',
        mainTopics: ['Evolutionary Biology', 'Cognitive History', 'Macro-Sociology']
      },
      fullText: {
        introduction: 'Yuval Noah Harari spans 70,000 years of human history to explain how Homo sapiens conquered the globe through three major revolutions.',
        coreIdea: 'Imagined order — religions, laws, currencies, companies — forms the backbone of human civilization.',
        majorConcepts: [
          {
            title: 'Shared Myths',
            content: 'Large-scale human cooperation is rooted in shared belief. 10,000 chimps cannot organize a rally because they cannot believe in an abstract ideal; 100,000 humans will march for a flag.'
          }
        ],
        examples: [
          'Peugeot is not a physical car; it is a legal construct (a fiction) created by paperwork that thousands of employees work for.'
        ],
        practicalApplications: [
          'Critically analyze the invisible social myths governing daily behavior and economic choices.'
        ],
        keyLessonsSummary: ['Stories unify species.', 'Money is built on trust.', 'Question progress.'],
        finalTakeaway: 'We are self-made gods with unimaginable power, yet often unsure of our desires.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'thinking-fast-and-slow',
    slug: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'Nobel laureate Daniel Kahneman explains the two systems that drive the way we think: System 1 (fast, emotional) and System 2 (slow, logical).',
    coverImage: '/covers/books/thinking-fast-and-slow.jpg',
    genre: 'Psychology',
    category: 'nonfiction',
    publishedYear: 2011,
    rating: 4.7,
    popularityScore: 94,
    estimatedDurationMinutes: 14,
    audio: {
      id: 'audio-thinking-fast-and-slow',
      bookId: 'thinking-fast-and-slow',
      audioUrl: '/audio/thinking-fast-and-slow.mp3',
      duration: 823,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Two Characters of the Mind: System 1 and System 2', timestamp: 0, duration: 111 },
        { id: 'c2', title: 'Chapter 2: The Machine for Jumping to Conclusions: Heuristics and Biases', timestamp: 111, duration: 137 },
        { id: 'c3', title: 'Chapter 3: What You See Is All There Is and The Anchoring Effect', timestamp: 248, duration: 116 },
        { id: 'c4', title: 'Chapter 4: Overconfidence and the Illusion of Validity', timestamp: 364, duration: 113 },
        { id: 'c5', title: 'Chapter 5: Prospect Theory and Loss Aversion', timestamp: 477, duration: 107 },
        { id: 'c6', title: 'Chapter 6: Framing Effects and Choice Architecture', timestamp: 584, duration: 92 },
        { id: 'c7', title: 'Chapter 7: The Experiencing Self vs. The Remembering Self', timestamp: 676, duration: 147 },
      ]
    },
    summary: {
      id: 'sum-thinking-fast-and-slow',
      bookId: 'thinking-fast-and-slow',
      keyTakeaway: 'Our minds are prone to systematic cognitive biases because System 1 relies on shortcuts while System 2 is lazy. Learn to spot mental traps before making critical decisions.',
      quickLearn: {
        biggestIdeas: [
          'System 1 operates automatically and quickly with little effort; System 2 allocates attention to effortful mental operations.',
          'Loss Aversion: the pain of losing $100 is psychologically twice as intense as the pleasure of gaining $100.',
          'What You See Is All There Is (WYSIATI): we draw conclusions based only on available evidence.'
        ],
        keyLessons: [
          'Slow down when evaluating high-stakes financial or personal choices.',
          'Beware of the Anchoring Effect in sales and negotiations.',
          'Differentiate between actual risk and emotional risk perception.'
        ],
        whoShouldListen: 'Leaders, investors, managers, and anyone interested in decision-making psychology.',
        mainTopics: ['Behavioral Economics', 'Cognitive Biases', 'Decision Theory']
      },
      fullText: {
        introduction: 'Daniel Kahneman synthesizes decades of groundbreaking research into human irrationality.',
        coreIdea: 'We overestimate our logical control and under-recognize subconscious heuristics.',
        majorConcepts: [
          {
            title: 'Prospect Theory',
            content: 'People evaluate gains and losses relative to a reference point rather than absolute net wealth.'
          }
        ],
        examples: ['Judges give harsher parole sentences right before lunch when cognitive energy is depleted.'],
        practicalApplications: ['Conduct a premortem before launching major initiatives to uncover blind spots.'],
        keyLessonsSummary: ['Recognize System 1 shortcuts.', 'Engage System 2 intentionally.'],
        finalTakeaway: 'Awareness of cognitive biases leads to better decisions.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'zero-to-one',
    slug: 'zero-to-one',
    title: 'Zero to One',
    author: 'Peter Thiel',
    description: 'Notes on startups, or how to build the future. The next Bill Gates will not build an operating system; true innovation goes from 0 to 1.',
    coverImage: '/covers/books/zero-to-one.jpg',
    genre: 'Business',
    subgenre: 'Technology',
    category: 'nonfiction',
    publishedYear: 2014,
    rating: 4.8,
    popularityScore: 93,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-zero-to-one',
      bookId: 'zero-to-one',
      audioUrl: '/audio/zero-to-one.mp3',
      duration: 917,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Challenge of the Future: Zero to One vs. One to N', timestamp: 0, duration: 138 },
        { id: 'c2', title: 'Chapter 2: All Happy Companies Are Different: The Monopoly Truth', timestamp: 138, duration: 147 },
        { id: 'c3', title: 'Chapter 3: The Four Characteristics of Monopoly Defensibility', timestamp: 284, duration: 137 },
        { id: 'c4', title: 'Chapter 4: The Power Law of Venture Capital and Secrets', timestamp: 421, duration: 143 },
        { id: 'c5', title: 'Chapter 5: Distribution Is the Hidden Bottleneck', timestamp: 564, duration: 114 },
        { id: 'c6', title: 'Chapter 6: Man and Machine: Complementarity over Replacement', timestamp: 678, duration: 129 },
        { id: 'c7', title: 'Chapter 7: The Seven Questions and The Master Takeaway', timestamp: 807, duration: 110 },
      ]
    },
    summary: {
      id: 'sum-zero-to-one',
      bookId: 'zero-to-one',
      keyTakeaway: 'Monopoly is the condition of every successful business. Don’t compete in crowded red oceans; build something unique that dominates a small niche first.',
      quickLearn: {
        biggestIdeas: [
          'Vertical progress (0 to 1) means doing something new; horizontal progress (1 to n) means copying what already works.',
          'Competition is for losers — it destroys profits and forces price wars.',
          'Great companies are built on secrets: truths that few people agree with you on.'
        ],
        keyLessons: [
          'Start small and dominate a tiny market before scaling.',
          'Build proprietary technology that is 10x better than the nearest substitute.',
          'Leverage network effects and economies of scale.'
        ],
        whoShouldListen: 'Startup founders, venture capitalists, innovators, and ambitious product managers.',
        mainTopics: ['Entrepreneurship', 'Monopoly Strategy', 'Venture Capital']
      },
      fullText: {
        introduction: 'Peter Thiel outlines his philosophy on building transformative companies.',
        coreIdea: 'Progress comes from creating new monopolies through unique technology and long-term planning.',
        majorConcepts: [
          {
            title: 'The Contrarian Question',
            content: 'What important truth do very few people agree with you on?'
          }
        ],
        examples: ['PayPal started by dominating a tiny niche: power sellers on eBay.'],
        practicalApplications: ['Focus on 10x differentiation instead of incremental features.'],
        keyLessonsSummary: ['Create 0 to 1 monopolies.', 'Focus on unique secrets.'],
        finalTakeaway: 'The future will be shaped by those who create new things.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'the-7-habits',
    slug: 'the-7-habits',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    description: 'Powerful lessons in personal change. Align yourself with timeless principles of character ethic and personal responsibility.',
    coverImage: '/covers/books/the-7-habits.jpg',
    genre: 'Leadership & Personal Development',
    subgenre: 'Personal Effectiveness',
    category: 'nonfiction',
    publishedYear: 1989,
    rating: 4.9,
    popularityScore: 95,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-7-habits',
      bookId: 'the-7-habits',
      audioUrl: '/audio/the-7-habits.mp3', // Audio coming soon placeholder
      duration: 887,
      hasAudio: true, // Explicitly false for "Audio coming soon" test
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Character Ethic and Inside-Out Transformation', timestamp: 0, duration: 149 },
        { id: 'c2', title: 'Chapter 2: Habit 1: Be Proactive and The Circle of Influence', timestamp: 149, duration: 141 },
        { id: 'c3', title: 'Chapter 3: Habit 2: Begin with the End in Mind: Personal Leadership', timestamp: 290, duration: 119 },
        { id: 'c4', title: 'Chapter 4: Habit 3: Put First Things First: The Time Management Matrix', timestamp: 409, duration: 122 },
        { id: 'c5', title: 'Chapter 5: Habit 4 & 5: Think Win-Win and Seek First to Understand', timestamp: 531, duration: 117 },
        { id: 'c6', title: 'Chapter 6: Habit 6: Synergize: The Power of Valuing Differences', timestamp: 647, duration: 86 },
        { id: 'c7', title: 'Chapter 7: Habit 7: Sharpen the Saw: The Four Dimensions of Renewal', timestamp: 733, duration: 153 },
      ]
    },
    summary: {
      id: 'sum-7-habits',
      bookId: 'the-7-habits',
      keyTakeaway: 'Private victory precedes public victory. Real success starts with self-mastery, proactive choice, and vision.',
      quickLearn: {
        biggestIdeas: [
          'Be Proactive: focus on your Circle of Influence rather than your Circle of Concern.',
          'Begin with the End in Mind: clarify your core mission and values.',
          'Put First Things First: prioritize important but non-urgent activities.'
        ],
        keyLessons: [
          'Think Win-Win in all personal and business relationships.',
          'Seek First to Understand, Then to Be Understood.',
          'Synergize: combine strengths of team members.',
          'Sharpen the Saw: continuous renewal of body, mind, heart, and spirit.'
        ],
        whoShouldListen: 'Professionals, team leaders, and individuals seeking principle-centered growth.',
        mainTopics: ['Character Ethic', 'Interpersonal Synergy', 'Self-Renewal']
      },
      fullText: {
        introduction: 'Stephen Covey presents a holistic approach for solving personal and professional problems.',
        coreIdea: 'True effectiveness comes from aligning character with universal principles.',
        majorConcepts: [{ title: 'Paradigms', content: 'We see the world not as it is, but as we are.' }],
        examples: ['Eisenhower Matrix categorizing tasks by urgency vs importance.'],
        practicalApplications: ['Schedule weekly time for Quadrant II non-urgent planning.'],
        keyLessonsSummary: ['Proactivity', 'Mission alignment', 'Sharpening the saw'],
        finalTakeaway: 'Inside-out transformation creates lasting leadership.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'rich-dad-poor-dad',
    slug: 'rich-dad-poor-dad',
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    description: 'What the rich teach their kids about money that the poor and middle class do not. Master cash flow, assets, and escape the Rat Race.',
    coverImage: '/covers/books/rich-dad-poor-dad.jpg',
    genre: 'Money & Financial Literacy',
    subgenre: 'Personal Finance',
    category: 'nonfiction',
    publishedYear: 1997,
    rating: 4.8,
    popularityScore: 97,
    estimatedDurationMinutes: 14,
    audio: {
      id: 'audio-rich-dad-poor-dad',
      bookId: 'rich-dad-poor-dad',
      audioUrl: '/audio/rich-dad-poor-dad.mp3',
      duration: 847,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Tale of Two Fathers: Financial Literacy vs. Traditional Schooling', timestamp: 0, duration: 130 },
        { id: 'c2', title: 'Chapter 2: The Core Rule: Assets Put Money in Your Pocket, Liabilities Take It Out', timestamp: 130, duration: 126 },
        { id: 'c3', title: 'Chapter 3: Mind Your Own Business: The Cash Flow Quadrant Mindset', timestamp: 255, duration: 131 },
        { id: 'c4', title: 'Chapter 4: The History of Taxes and the Power of Corporations', timestamp: 387, duration: 100 },
        { id: 'c5', title: 'Chapter 5: The Rich Invent Money: Financial Intelligence and Overcoming Fear', timestamp: 487, duration: 115 },
        { id: 'c6', title: 'Chapter 6: Critical Perspective: Debt, Risk, Diversification, and Nuance', timestamp: 602, duration: 138 },
        { id: 'c7', title: 'Chapter 7: The Master Takeaway and Action Blueprint for Students', timestamp: 741, duration: 107 },
      ]
    },
    summary: {
      id: 'sum-rich-dad-poor-dad',
      bookId: 'rich-dad-poor-dad',
      keyTakeaway: 'The rich do not work for money; they acquire assets that put money into their pockets. Financial literacy and independent thinking are the keys to escaping the Rat Race.',
      quickLearn: {
        biggestIdeas: [
          'Assets put money in your pocket; liabilities take money out of your pocket.',
          'Your primary residence is a cash-flow liability, not an asset.',
          'Mind your own business: build your asset column while maintaining your profession.'
        ],
        keyLessons: [
          'Pay yourself first before paying expenses.',
          'Work to learn high-income skills (sales, management, accounting), not just to earn a salary.',
          'Understand the tax advantages of corporations and legal business entities.',
          'Exercise caution with high debt, real estate leverage, and lack of diversification.'
        ],
        whoShouldListen: 'Students, young professionals, entrepreneurs, and anyone looking to understand cash flow and build financial independence.',
        mainTopics: ['Cash Flow', 'Assets vs Liabilities', 'Financial Literacy', 'Tax Strategy']
      },
      fullText: {
        introduction: 'Robert Kiyosaki contrasts the money mindsets of his highly educated biological father (Poor Dad) and his entrepreneur mentor (Rich Dad).',
        coreIdea: 'Financial freedom comes from acquiring income-generating assets rather than relying entirely on a paycheck.',
        majorConcepts: [
          { title: 'The Cash Flow Quadrant', content: 'Shifting from Employee and Self-Employed to Business Owner and Investor.' },
          { title: 'Assets vs Liabilities', content: 'Assets generate positive cash flow; liabilities create recurring expenses.' }
        ],
        examples: ['Corporations spending pre-tax revenue before calculating tax obligations.'],
        practicalApplications: ['Reinvest savings into compounding assets and acquire high-income sales skills.'],
        keyLessonsSummary: ['Acquire assets.', 'Pay yourself first.', 'Study tax and market systems.'],
        finalTakeaway: 'Don’t work for money; make money work for you.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'the-48-laws-of-power',
    slug: 'the-48-laws-of-power',
    title: 'The 48 Laws of Power',
    author: 'Robert Greene',
    description: 'Three thousand years of statecraft and psychology distilled into timeless laws of power, strategy, reputation, and self-defense.',
    coverImage: '/covers/books/the-48-laws-of-power.jpg',
    genre: 'Negotiation & Social Intelligence',
    subgenre: 'Strategy',
    category: 'nonfiction',
    publishedYear: 1998,
    rating: 4.8,
    popularityScore: 98,
    estimatedDurationMinutes: 14,
    audio: {
      id: 'audio-the-48-laws-of-power',
      bookId: 'the-48-laws-of-power',
      audioUrl: '/audio/the-48-laws-of-power.mp3',
      duration: 833,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Amoral Reality of Power Dynamics', timestamp: 0, duration: 104 },
        { id: 'c2', title: 'Chapter 2: The Foundational Laws: The Master, The Words, and The Actions', timestamp: 104, duration: 156 },
        { id: 'c3', title: 'Chapter 3: Reputation, Attention, and Mystique', timestamp: 260, duration: 138 },
        { id: 'c4', title: 'Chapter 4: Tactical Concealment, Emotional Poise, and the Thumbscrew', timestamp: 399, duration: 71 },
        { id: 'c5', title: 'Chapter 5: Dependence, Alliances, and Mutual Self-Interest', timestamp: 470, duration: 146 },
        { id: 'c6', title: 'Chapter 6: The Darker Laws: Critical Analysis of Ruthlessness', timestamp: 616, duration: 104 },
        { id: 'c7', title: 'Chapter 7: Law 48: Assume Formlessness and The Master Takeaway', timestamp: 720, duration: 113 },
      ]
    },
    summary: {
      id: 'sum-the-48-laws-of-power',
      bookId: 'the-48-laws-of-power',
      keyTakeaway: 'Power dynamics exist in every human institution. Master emotional self-control, protect your reputation, and understand power to defend yourself against manipulation and lead with wisdom.',
      quickLearn: {
        biggestIdeas: [
          'Never outshine the master: making superiors feel insecure invites swift retaliation.',
          'Always say less than necessary: silence preserves mystique and prevents unforced errors.',
          'Guard your reputation with your life; it precedes you and magnifies your presence.'
        ],
        keyLessons: [
          'Win through your actions, never through argument.',
          'Appeal to people\'s self-interest, never to their mercy or gratitude.',
          'Assume formlessness: remain adaptable like water in changing conditions.',
          'Distinguish recognizing manipulation from practicing predatory behavior.'
        ],
        whoShouldListen: 'Aspiring leaders, strategists, students, and professionals navigating corporate and organizational politics.',
        mainTopics: ['Power Dynamics', 'Reputation', 'Strategic Influence', 'Emotional Self-Control']
      },
      fullText: {
        introduction: 'Robert Greene synthesizes historical statecraft from Sun Tzu, Machiavelli, and Bismarck into laws of influence.',
        coreIdea: 'Power is an amoral science; understanding its mechanics allows ethical navigation and defense.',
        majorConcepts: [
          { title: 'Law 1: Never Outshine the Master', content: 'Fouquet vs. Louis XIV at Vaux-le-Vicomte.' },
          { title: 'Law 48: Assume Formlessness', content: 'Remaining adaptable and flexible like water in dynamic environments.' }
        ],
        examples: ['Michelangelo altering marble dust to please Soderini without arguing.'],
        practicalApplications: ['Appeal to self-interest in negotiations and maintain emotional composure in high-stakes meetings.'],
        keyLessonsSummary: ['Guard reputation.', 'Say less than necessary.', 'Be adaptable.'],
        finalTakeaway: 'Master the laws of power to lead with vision and protect yourself against deceit.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'how-to-win-friends-and-influence-people',
    slug: 'how-to-win-friends-and-influence-people',
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    description: 'The timeless guide to interpersonal connection, active listening, persuasion, and building lasting goodwill in work and life.',
    coverImage: '/covers/books/how-to-win-friends-and-influence-people.jpg',
    genre: 'Communication & Relationships',
    subgenre: 'Interpersonal Skills',
    category: 'nonfiction',
    publishedYear: 1936,
    rating: 4.9,
    popularityScore: 99,
    estimatedDurationMinutes: 13,
    audio: {
      id: 'audio-how-to-win-friends',
      bookId: 'how-to-win-friends-and-influence-people',
      audioUrl: '/audio/how-to-win-friends-and-influence-people.mp3',
      duration: 809,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: "Chapter 1: Fundamental Techniques: Don't Criticize, Condemn, or Complain", timestamp: 0, duration: 149 },
        { id: 'c2', title: 'Chapter 2: The Deepest Urge: Sincere Appreciation vs. Flattery', timestamp: 149, duration: 136 },
        { id: 'c3', title: 'Chapter 3: The Secret of Influence: Arouse in the Other Person an Eager Want', timestamp: 285, duration: 118 },
        { id: 'c4', title: 'Chapter 4: Six Ways to Make People Like You', timestamp: 403, duration: 96 },
        { id: 'c5', title: 'Chapter 5: How to Win People to Your Way of Thinking', timestamp: 499, duration: 100 },
        { id: 'c6', title: 'Chapter 6: How to Change People Without Giving Offense', timestamp: 600, duration: 107 },
        { id: 'c7', title: 'Chapter 7: Authentic Human Relations in the Digital Age', timestamp: 707, duration: 102 },
      ]
    },
    summary: {
      id: 'sum-how-to-win-friends',
      bookId: 'how-to-win-friends-and-influence-people',
      keyTakeaway: 'You can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get people interested in you. Treat others with honor, listen actively, and speak to their self-interest.',
      quickLearn: {
        biggestIdeas: [
          'Never criticize, condemn, or complain: criticism wounds pride and breeds resentment.',
          'Give honest, sincere appreciation: the deepest human hunger is the desire to feel important.',
          'Arouse in the other person an eager want: bait the hook to suit the fish.'
        ],
        keyLessons: [
          'Become genuinely interested in others and remember their names.',
          'The only way to get the best of an argument is to avoid it.',
          'If you are wrong, admit it quickly and emphatically.',
          'Call attention to mistakes indirectly, changing "but" to "and".'
        ],
        whoShouldListen: 'College students, team members, managers, sales professionals, and anyone wishing to connect deeply with others.',
        mainTopics: ['Human Relations', 'Active Listening', 'Persuasion', 'Empathy']
      },
      fullText: {
        introduction: 'Dale Carnegie outlines fundamental human relations principles for building authentic rapport and leadership.',
        coreIdea: 'Influence is rooted in empathy, appreciation, and perspective-taking rather than force or argument.',
        majorConcepts: [
          { title: 'The Craving to be Appreciated', content: 'William James on the fundamental human need for sincere importance.' },
          { title: 'Baiting the Hook', content: 'Talking in terms of what the other person wants.' }
        ],
        examples: ['Abraham Lincoln learning compassion after nearly fighting a broadsword duel with Shields.'],
        practicalApplications: ['Replace criticism with curiosity, actively listen, and praise progress in colleagues.'],
        keyLessonsSummary: ['Don’t criticize.', 'Give sincere praise.', 'Listen actively.'],
        finalTakeaway: 'Treat people with dignity, and you will unlock profound human connection and leadership.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'the-laws-of-human-nature',
    slug: 'the-laws-of-human-nature',
    title: 'The Laws of Human Nature',
    author: 'Robert Greene',
    description: 'A masterclass in decoding human irrationality, emotional masks, compulsive patterns, and social dynamics to navigate life and leadership with wisdom.',
    coverImage: '/covers/books/the-laws-of-human-nature.jpg',
    genre: 'Psychology & Human Behaviour',
    subgenre: 'Human Psychology',
    category: 'nonfiction',
    publishedYear: 2018,
    rating: 4.9,
    popularityScore: 98,
    estimatedDurationMinutes: 17,
    audio: {
      id: 'audio-the-laws-of-human-nature',
      bookId: 'the-laws-of-human-nature',
      audioUrl: '/audio/the-laws-of-human-nature.mp3',
      duration: 1040,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Law of Irrationality: Master Your Emotional Self', timestamp: 0, duration: 177 },
        { id: 'c2', title: 'Chapter 2: The Law of Narcissism: Transform Self-Absorption into Empathy', timestamp: 177, duration: 147 },
        { id: 'c3', title: "Chapter 3: The Law of Role-Playing: See Through People's Masks", timestamp: 324, duration: 138 },
        { id: 'c4', title: "Chapter 4: The Law of Compulsive Behavior: Determine the Strength of People's Character", timestamp: 462, duration: 135 },
        { id: 'c5', title: 'Chapter 5: The Law of Envy, Grandiosity, and Short-Sightedness', timestamp: 597, duration: 158 },
        { id: 'c6', title: 'Chapter 6: The Higher Laws: Hostility, Conformity, and Purpose', timestamp: 754, duration: 149 },
        { id: 'c7', title: 'Chapter 7: Confronting Mortality and The Master Takeaways', timestamp: 903, duration: 137 },
      ]
    },
    summary: {
      id: 'sum-the-laws-of-human-nature',
      bookId: 'the-laws-of-human-nature',
      keyTakeaway: 'Irrationality, narcissism, role-playing, and compulsive behavioral patterns govern human society. By mastering emotional detachment, developing athletic empathy, and observing nonverbal cues, you gain profound self-control and social wisdom.',
      quickLearn: {
        biggestIdeas: [
          'Irrationality is our default state: master the sacred pause before reacting to provocation.',
          'Transform passive self-absorption into athletic empathy: quiet your ego to decode others.',
          'Character is destiny: look past charm and evaluate people based on their compulsive behavioral loops.'
        ],
        keyLessons: [
          'See through social masks: observe involuntary micro-expressions and discrepancies.',
          'Guard against envy and grandiosity by practicing realistic humility.',
          'Cultivate your higher purpose to anchor daily discipline and dismiss petty friction.',
          'Meditate on mortality (Memento Mori) to infuse your life with urgency and moral focus.'
        ],
        whoShouldListen: 'Students, team leaders, founders, and professionals seeking emotional mastery and deep insight into human social dynamics.',
        mainTopics: ['Human Nature', 'Emotional Intelligence', 'Character Analysis', 'Empathy', 'Self-Mastery']
      },
      fullText: {
        introduction: 'Robert Greene synthesizes history, evolutionary psychology, and literature to uncover the subterranean forces driving human choices.',
        coreIdea: 'Understanding the invariant laws of human nature frees you from victimhood, emotional reactivity, and toxic manipulation.',
        majorConcepts: [
          { title: 'The Law of Irrationality', content: 'Pericles cultivating emotional detachment to guide Athens through crisis.' },
          { title: 'The Law of Role-Playing', content: 'Decoding nonverbal cues and micro-expressions beneath polite social personas.' }
        ],
        examples: ['Pericles retreating to solitude; Anton Chekhov turning difficult family dynamics into creative empathy.'],
        practicalApplications: ['Take 24-hour pauses before reacting to hostility, analyze team character under pressure, and practice outward-focused listening.'],
        keyLessonsSummary: ['Master emotional reactions.', 'Develop athletic empathy.', 'Evaluate character over charisma.'],
        finalTakeaway: 'Confront human nature with curiosity rather than indignation, turning insight into enduring wisdom.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'never-split-the-difference',
    slug: 'never-split-the-difference',
    title: 'Never Split the Difference',
    author: 'Chris Voss',
    description: 'Former FBI lead international kidnapping negotiator reveals field-tested emotional intelligence and negotiation tactics for high-stakes agreements.',
    coverImage: '/covers/books/never-split-the-difference.jpg',
    genre: 'Negotiation & Social Intelligence',
    subgenre: 'Tactical Negotiation',
    category: 'nonfiction',
    publishedYear: 2016,
    rating: 4.9,
    popularityScore: 98,
    estimatedDurationMinutes: 16,
    audio: {
      id: 'audio-never-split-the-difference',
      bookId: 'never-split-the-difference',
      audioUrl: '/audio/never-split-the-difference.mp3',
      duration: 985,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The New Rules: Tactical Empathy and Negotiating as If Life Depended on It', timestamp: 0, duration: 145 },
        { id: 'c2', title: 'Chapter 2: The Voice, The Mirror, and Emotional Labeling', timestamp: 145, duration: 183 },
        { id: 'c3', title: 'Chapter 3: Beware "Yes"—Master "No": The Psychology of Control', timestamp: 328, duration: 131 },
        { id: 'c4', title: 'Chapter 4: The Two Most Dangerous Words: Reaching "That\'s Right"', timestamp: 459, duration: 127 },
        { id: 'c5', title: 'Chapter 5: Calibrated Questions: How to Bend Reality and Diffuse Hostility', timestamp: 586, duration: 121 },
        { id: 'c6', title: 'Chapter 6: The Ackerman Bargaining System and Finding the Black Swan', timestamp: 707, duration: 123 },
        { id: 'c7', title: 'Chapter 7: Field Applications for Students and The Master Takeaways', timestamp: 830, duration: 154 },
      ]
    },
    summary: {
      id: 'sum-never-split-the-difference',
      bookId: 'never-split-the-difference',
      keyTakeaway: 'Negotiation is not a battle of logic, but the psychological art of emotional discovery. Harness tactical empathy, mirroring, emotional labeling, calibrated questions, and the power of "No" to defuse tension and achieve optimal agreements without compromising your worth.',
      quickLearn: {
        biggestIdeas: [
          'Tactical Empathy: understanding the other party’s worldview and vocalizing their emotions to disarm hostility.',
          'Never compromise for the sake of compromise: splitting the difference often produces a lose-lose result.',
          'The power of "No": "Yes" is often a counterfeit commitment; "No" provides safety and initiates genuine negotiation.'
        ],
        keyLessons: [
          'Use the late-night FM DJ voice: calm, downward-inflecting, and reassuring.',
          'Mirroring: repeat the last 1 to 3 words as a question to encourage elaboration.',
          'Labeling: name emotions directly ("It seems like you feel undervalued") to neutralize negativity.',
          'Calibrated Questions: ask "How am I supposed to do that?" or "What makes you say that?"',
          'Find the Black Swan: identify hidden, game-changing information by listening intently.'
        ],
        whoShouldListen: 'Students negotiating salaries or internships, professionals closing deals, entrepreneurs, and anyone resolving conflict.',
        mainTopics: ['Negotiation', 'Tactical Empathy', 'Persuasion', 'Active Listening', 'Conflict Resolution']
      },
      fullText: {
        introduction: 'Chris Voss translates FBI hostage negotiation methodologies into everyday business, career, and personal negotiation strategies.',
        coreIdea: 'Emotions, irrationality, and psychological needs drive human decisions; connecting with these realities produces breakthroughs.',
        majorConcepts: [
          { title: 'The Accusation Audit', content: 'Proactively listing every terrible thing the other side could say about you before they can say it.' },
          { title: 'That’s Right vs You’re Right', content: 'Reaching "That’s Right" signifies authentic breakthrough, whereas "You’re Right" is used to dismiss you.' }
        ],
        examples: ['Hostage situations in the Philippines; negotiating price reductions with aggressive contractors.'],
        practicalApplications: ['Negotiate job offers with calibrated questions; use labeling during heated team disputes.'],
        keyLessonsSummary: ['Practice tactical empathy.', 'Aim for "That’s Right".', 'Use calibrated "How" questions.'],
        finalTakeaway: 'Master tactical empathy to uncover hidden truths and negotiate win-win outcomes with confidence.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'the-richest-man-in-babylon',
    slug: 'the-richest-man-in-babylon',
    title: 'The Richest Man in Babylon',
    author: 'George S. Clason',
    description: 'Timeless parables of ancient Babylon delivering foundational rules of thrift, capital compounding, wise investing, and financial freedom.',
    coverImage: '/covers/books/the-richest-man-in-babylon.jpg',
    genre: 'Money & Financial Literacy',
    subgenre: 'Personal Finance Fundamentals',
    category: 'nonfiction',
    publishedYear: 1926,
    rating: 4.8,
    popularityScore: 97,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-the-richest-man-in-babylon',
      bookId: 'the-richest-man-in-babylon',
      audioUrl: '/audio/the-richest-man-in-babylon.mp3',
      duration: 881,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Man Who Desired Gold and The Ancient City of Babylon', timestamp: 0, duration: 152 },
        { id: 'c2', title: 'Chapter 2: The Seven Cures for a Lean Purse', timestamp: 152, duration: 164 },
        { id: 'c3', title: 'Chapter 3: Meet the Goddess of Good Luck: Opportunity Follows Preparation', timestamp: 316, duration: 91 },
        { id: 'c4', title: 'Chapter 4: The Five Laws of Gold: How Wealth Multiplies', timestamp: 408, duration: 120 },
        { id: 'c5', title: 'Chapter 5: The Gold Lender of Babylon: Prudent Lending and Security', timestamp: 528, duration: 99 },
        { id: 'c6', title: 'Chapter 6: The Ancient Clay Tablets: A Proven Blueprint for Eliminating Debt', timestamp: 627, duration: 123 },
        { id: 'c7', title: 'Chapter 7: The Master Key to Wealth and Takeaways for Modern Students', timestamp: 750, duration: 131 },
      ]
    },
    summary: {
      id: 'sum-the-richest-man-in-babylon',
      bookId: 'the-richest-man-in-babylon',
      keyTakeaway: 'A part of all you earn is yours to keep. Build wealth by paying yourself first at least 10%, controlling living expenditures, compounding capital through productive employment, and protecting your principal from speculative risk.',
      quickLearn: {
        biggestIdeas: [
          'A part of all you earn is yours to keep: save at least 10% of every dollar before paying anyone else.',
          'Control expenditures: do not confuse essential living needs with expanding lifestyle desires.',
          'Compounding gold: make your savings work like golden servants, multiplying your income river continuously.'
        ],
        keyLessons: [
          'Guard treasures from loss: avoid get-rich-quick speculation and invest only with competent practitioners.',
          'Dabasir’s debt blueprint: live on 70%, dedicate 20% to debt repayment, and retain 10% to build your future.',
          'Opportunity favors the prepared: defeat procrastination to seize advantageous investments.',
          'Work is your greatest friend: dedicated craft and industry build self-respect and lasting wealth.'
        ],
        whoShouldListen: 'Students, young earners, families eliminating debt, and anyone building foundational financial habits.',
        mainTopics: ['Personal Finance', 'Debt Elimination', 'Wealth Building', 'Compound Interest', 'Frugality']
      },
      fullText: {
        introduction: 'George S. Clason translates universal financial laws into Babylonian parables that demonstrate how ordinary workers achieve wealth.',
        coreIdea: 'Disciplined thrift, delayed gratification, and capital preservation are the eternal pillars of financial independence.',
        majorConcepts: [
          { title: 'The Seven Cures for a Lean Purse', content: 'Practical rules to fatten your purse, control desires, and multiply earnings.' },
          { title: 'The Five Laws of Gold', content: 'Immutable laws governing how capital accumulates for the wise and flees the reckless.' }
        ],
        examples: ['Arkad learning from Algamish; Dabasir restoring honor through clay tablet debt repayment.'],
        practicalApplications: ['Automate 10% transfers to savings, create strict expenditure budgets, and avoid co-signing high-risk loans.'],
        keyLessonsSummary: ['Pay yourself first.', 'Control desires.', 'Invest cautiously.', 'Eliminate debt systematically.'],
        finalTakeaway: 'Master the laws of gold to transform financial anxiety into generational prosperity and security.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'think-and-grow-rich',
    slug: 'think-and-grow-rich',
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    description: 'The monumental 13-principle philosophy of achievement, specialized knowledge, autosuggestion, persistence, and mastermind alliance.',
    coverImage: '/covers/books/think-and-grow-rich.jpg',
    genre: 'Entrepreneurship & Wealth Creation',
    subgenre: 'Mindset & Wealth Building',
    category: 'nonfiction',
    publishedYear: 1937,
    rating: 4.8,
    popularityScore: 98,
    estimatedDurationMinutes: 14,
    audio: {
      id: 'audio-think-and-grow-rich',
      bookId: 'think-and-grow-rich',
      audioUrl: '/audio/think-and-grow-rich.mp3',
      duration: 817,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: Thoughts are Things: The Philosophy of Achievement', timestamp: 0, duration: 154 },
        { id: 'c2', title: 'Chapter 2: Desire and Faith: The Starting Point of All Riches', timestamp: 154, duration: 111 },
        { id: 'c3', title: 'Chapter 3: Autosuggestion and Specialized Knowledge: Reprogramming the Mind', timestamp: 265, duration: 116 },
        { id: 'c4', title: 'Chapter 4: Imagination and Organized Planning: Turning Ideas into Reality', timestamp: 381, duration: 100 },
        { id: 'c5', title: 'Chapter 5: Decision and Persistence: The Mastery of Procrastination', timestamp: 482, duration: 107 },
        { id: 'c6', title: 'Chapter 6: The Mastermind Principle and Subconscious Alignment', timestamp: 588, duration: 92 },
        { id: 'c7', title: 'Chapter 7: Conquering the Six Ghosts of Fear and The Master Takeaways', timestamp: 680, duration: 137 },
      ]
    },
    summary: {
      id: 'sum-think-and-grow-rich',
      bookId: 'think-and-grow-rich',
      keyTakeaway: 'All achievement originates from a burning desire backed by definiteness of purpose, autosuggestion, organized planning, persistence, and a harmonious Mastermind alliance. Conquering inner fear unleashes the power to transmute intangible vision into tangible riches.',
      quickLearn: {
        biggestIdeas: [
          'Thoughts are things: definite purpose combined with intense persistence translates thought impulses into material wealth.',
          'The 6 steps of desire transmutation: define the exact amount, sacrifice, timeline, plan, and daily affirmation.',
          'Knowledge is only potential power: it becomes actual power when organized into definite, actionable plans.'
        ],
        keyLessons: [
          'Reprogram your subconscious mind through emotionally charged autosuggestion and unshakeable faith.',
          'Reaching decisions promptly and changing them slowly separates leaders from failures.',
          'Build a Mastermind group: coordinate knowledge and effort with trusted partners in a spirit of harmony.',
          'Conquer the Six Ghosts of Fear: banish poverty, criticism, ill health, loss of love, old age, and death.'
        ],
        whoShouldListen: 'Aspiring founders, creatives, students, and ambitious professionals seeking a proven mindset formula for achievement.',
        mainTopics: ['Mindset', 'Goal Achievement', 'Persistence', 'Mastermind Alliances', 'Wealth Creation']
      },
      fullText: {
        introduction: 'Napoleon Hill synthesizes a quarter-century of research into the habits of America’s industrial titans into thirteen principles.',
        coreIdea: 'The mind can achieve whatever it can conceive and believe when backed by definiteness of purpose.',
        majorConcepts: [
          { title: 'Definiteness of Purpose', content: 'Edwin C. Barnes fixing his intention to partner with Edison and burning all bridges.' },
          { title: 'The Mastermind Alliance', content: 'Harnessing collective psychic and technical power through harmonious partnerships.' }
        ],
        examples: ['Henry Ford using his push-buttons to summon specialized talent; Asa Candler applying imagination to Coca-Cola.'],
        practicalApplications: ['Recite daily written goals morning and evening, form peer Mastermind groups, and make prompt decisions.'],
        keyLessonsSummary: ['Fix definite goals.', 'Apply autosuggestion.', 'Persist through temporary defeat.', 'Form a Mastermind.'],
        finalTakeaway: 'Take full dominion over your own mind to transform ambition into enduring success.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'emotional-intelligence',
    slug: 'emotional-intelligence',
    title: 'Emotional Intelligence',
    author: 'Daniel Goleman',
    description: 'Groundbreaking neuroscience reveals why emotional self-awareness, impulse control, empathy, and social agility matter far more than IQ.',
    coverImage: '/covers/books/emotional-intelligence.jpg',
    genre: 'Psychology & Human Behaviour',
    subgenre: 'Emotional & Social Skills',
    category: 'nonfiction',
    publishedYear: 1995,
    rating: 4.9,
    popularityScore: 98,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-emotional-intelligence',
      bookId: 'emotional-intelligence',
      audioUrl: '/audio/emotional-intelligence.mp3',
      duration: 922,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: The Emotional Brain: Architecture and Amygdala Hijacking', timestamp: 0, duration: 165 },
        { id: 'c2', title: 'Chapter 2: The Five Domains of EQ: Self-Awareness and Managing Emotions', timestamp: 165, duration: 151 },
        { id: 'c3', title: 'Chapter 3: Harnessing Emotions Productively: Motivation, Flow, and Delayed Gratification', timestamp: 316, duration: 149 },
        { id: 'c4', title: 'Chapter 4: The Roots of Empathy: Decoding Social Frequencies', timestamp: 466, duration: 119 },
        { id: 'c5', title: 'Chapter 5: Social Intelligence and Interpersonal Competence', timestamp: 584, duration: 124 },
        { id: 'c6', title: 'Chapter 6: Emotional Intelligence in Medicine, Workplace, and Leadership', timestamp: 709, duration: 122 },
        { id: 'c7', title: 'Chapter 7: The Master Takeaways: Nurturing Emotional Literacy for Life', timestamp: 830, duration: 92 },
      ]
    },
    summary: {
      id: 'sum-emotional-intelligence',
      bookId: 'emotional-intelligence',
      keyTakeaway: 'Cognitive IQ gets you hired, but emotional intelligence gets you promoted. By mastering self-awareness, regulating amygdala hijackings, delaying gratification, cultivating deep empathy, and steering social contagion, you unlock peak personal and professional effectiveness.',
      quickLearn: {
        biggestIdeas: [
          'Amygdala Hijacking: primitive limbic circuits can trigger instantaneous defensive rage before the neocortex can think.',
          'Delayed Gratification: the marshmallow test proves that impulse control is the single greatest predictor of lifelong success.',
          'Emotions are biologically contagious: leaders set the emotional temperature and psychological safety of entire teams.'
        ],
        keyLessons: [
          'Practice emotional self-awareness: non-judgmentally naming emotions diminishes their neurochemical intensity.',
          'Manage anger through cognitive reappraisal: discover alternative, benign interpretations of perceived slights.',
          'Enter the psychological state of Flow by matching challenging tasks with high craft skills.',
          'Decode nonverbal cues: more than 90% of emotional communication is physical and vocal rather than verbal.',
          'Handle relationships with empathy: cultivate psychological safety to inspire collaboration and resolve conflict.'
        ],
        whoShouldListen: 'Students, educators, healthcare professionals, managers, and anyone committed to self-mastery and social grace.',
        mainTopics: ['Emotional Intelligence', 'Neuroscience', 'Self-Regulation', 'Empathy', 'Leadership']
      },
      fullText: {
        introduction: 'Daniel Goleman dismantles the myth of IQ supremacy, illustrating how emotional competencies govern human success.',
        coreIdea: 'Emotional literacy can be learned, developed, and systematically strengthened across the entire lifespan.',
        majorConcepts: [
          { title: 'The Two Minds', content: 'Balancing the emotional limbic system with the rational prefrontal cortex.' },
          { title: 'Social and Emotional Learning', content: 'Fostering emotional literacy to reduce conflict and accelerate academic achievement.' }
        ],
        examples: ['The Stanford marshmallow experiment; LeDoux’s neuroanatomical discovery of the thalamus-amygdala shortcut.'],
        practicalApplications: ['Label stress symptoms early, practice cognitive reframing during disputes, and listen to nonverbal signals.'],
        keyLessonsSummary: ['Know your triggers.', 'Regulate impulses.', 'Delay gratification.', 'Lead with empathy.'],
        finalTakeaway: 'Educate both mind and heart to achieve intellectual excellence, deep relationships, and enduring serenity.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'the-intelligent-investor',
    slug: 'the-intelligent-investor',
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    description: 'The definitive classic on value investing, the allegory of Mr. Market, portfolio balance, and the vital Margin of Safety.',
    coverImage: '/covers/books/the-intelligent-investor.jpg',
    genre: 'Investing Fundamentals',
    subgenre: 'Value Investing',
    category: 'nonfiction',
    publishedYear: 1949,
    rating: 4.9,
    popularityScore: 99,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-the-intelligent-investor',
      bookId: 'the-intelligent-investor',
      audioUrl: '/audio/the-intelligent-investor.mp3',
      duration: 917,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: Investment versus Speculation: The Foundation of Sound Finance', timestamp: 0, duration: 161 },
        { id: 'c2', title: 'Chapter 2: The Investor and Market Fluctuations: The Allegory of Mr. Market', timestamp: 161, duration: 133 },
        { id: 'c3', title: 'Chapter 3: The Defensive Investor: Portfolio Allocation and Dollar-Cost Averaging', timestamp: 293, duration: 134 },
        { id: 'c4', title: 'Chapter 4: The Enterprising Investor: Seeking Value with Rigorous Discipline', timestamp: 428, duration: 123 },
        { id: 'c5', title: 'Chapter 5: Security Analysis and Financial Statement Health for Beginners', timestamp: 551, duration: 121 },
        { id: 'c6', title: 'Chapter 6: The Margin of Safety: The Central Concept of Investment', timestamp: 672, duration: 146 },
        { id: 'c7', title: 'Chapter 7: Educational Frameworks for Students and The Master Takeaways', timestamp: 818, duration: 99 },
      ]
    },
    summary: {
      id: 'sum-the-intelligent-investor',
      bookId: 'the-intelligent-investor',
      keyTakeaway: 'Investing is not speculating. Protect your capital by insisting on a Margin of Safety, treating Mr. Market as a manic-depressive servant rather than a guide, and adopting disciplined dollar-cost averaging into productive, cash-generating businesses. (Presented strictly for educational purposes, not personal financial advice).',
      quickLearn: {
        biggestIdeas: [
          'Investment vs Speculation: investment promises safety of principal and adequate return upon thorough analysis.',
          'Mr. Market is your servant, not your master: buy when he is depressed, sell when he is euphoric, ignore daily quotes.',
          'The Margin of Safety: pay significantly less than conservative intrinsic value to absorb unforeseen future errors.'
        ],
        keyLessons: [
          'Defensive investors should use simple stock/bond allocations and automated dollar-cost averaging.',
          'Avoid IPOs, day-trading, and speculative growth stocks trading at extreme multiples.',
          'Demand 10 years of consistent earnings and conservative debt-to-equity balance sheets.',
          'Diversify across 20-30 companies across varied sectors to prevent catastrophic individual company loss.'
        ],
        whoShouldListen: 'Students, beginners in personal investing, long-term capital allocators, and anyone seeking sound financial philosophy.',
        mainTopics: ['Value Investing', 'Margin of Safety', 'Risk Management', 'Market Psychology', 'Portfolio Allocation']
      },
      fullText: {
        introduction: 'Benjamin Graham outlines timeless value investing principles, debunking speculative market frenzy.',
        coreIdea: 'Emotional discipline and a quantitative Margin of Safety protect capital from permanent loss.',
        majorConcepts: [
          { title: 'The Allegory of Mr. Market', content: 'Exploiting market volatility rather than letting emotional price swings dictate your actions.' },
          { title: 'The Margin of Safety', content: 'Engineering a substantial discount between purchase price and conservative intrinsic worth.' }
        ],
        examples: ['Net-current-asset bargains; Warren Buffett learning Graham’s principles at Columbia Business School.'],
        practicalApplications: ['Automate monthly index fund contributions, rebalance asset allocation yearly, and demand strong balance sheets.'],
        keyLessonsSummary: ['Don’t speculate.', 'Use Mr. Market.', 'Demand a Margin of Safety.', 'Diversify broadly.'],
        finalTakeaway: 'The investor’s chief problem—and even his worst enemy—is likely to be himself. Master your emotions to achieve enduring financial security.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'lets-talk-money',
    slug: 'lets-talk-money',
    title: "Let's Talk Money",
    author: 'Monika Halan',
    description: 'A practical, low-stress personal finance system for Indian earners covering the 3-account framework, emergency funds, pure term insurance, and mutual funds.',
    coverImage: '/covers/books/lets-talk-money.jpg',
    genre: 'Money & Financial Literacy',
    subgenre: 'Personal Finance System',
    category: 'nonfiction',
    publishedYear: 2018,
    rating: 4.9,
    popularityScore: 97,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-lets-talk-money',
      bookId: 'lets-talk-money',
      audioUrl: '/audio/lets-talk-money.mp3',
      duration: 929,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: You Work Hard for Money, Does Your Money Work for You?', timestamp: 0, duration: 142 },
        { id: 'c2', title: 'Chapter 2: The Three-Bank-Account System: Automating Cash Flow', timestamp: 142, duration: 147 },
        { id: 'c3', title: 'Chapter 3: The Emergency Fund: Building Your Financial Fortress', timestamp: 289, duration: 125 },
        { id: 'c4', title: 'Chapter 4: Protecting Your Life and Health: The Insurance Shield', timestamp: 414, duration: 146 },
        { id: 'c5', title: 'Chapter 5: Growing Your Wealth: The Power of Equity Mutual Funds', timestamp: 560, duration: 132 },
        { id: 'c6', title: 'Chapter 6: Retirement, Real Estate, Gold, and Indian Tax Realities', timestamp: 693, duration: 137 },
        { id: 'c7', title: 'Chapter 7: The Master Takeaways: Financial Freedom on Auto-Pilot', timestamp: 829, duration: 99 },
      ]
    },
    summary: {
      id: 'sum-lets-talk-money',
      bookId: 'lets-talk-money',
      keyTakeaway: 'Organize your money into a low-stress automated cash-flow system: separate spend, fixed obligations, and investments across three bank accounts. Secure a 6-month emergency buffer, buy pure term and health insurance without investment gimmicks, and grow wealth through automated index mutual fund SIPs.',
      quickLearn: {
        biggestIdeas: [
          'The 3-Bank-Account System: Income/Spend, Fixed Obligations, and Invest accounts automate cash flow effortlessly.',
          'Never mix insurance with investment: reject ULIPs and endowment plans; buy pure Term Insurance and Super Top-up Health cover.',
          'Beat Indian inflation through equity mutual fund SIPs: time in the market beats timing the market.'
        ],
        keyLessons: [
          'Build an emergency fortress of 6 months living costs in sweep-in FDs and liquid mutual funds.',
          'Buy term insurance equal to 10-15x annual income until age 60/65.',
          'Secure an independent family health policy with a high-deductible super top-up.',
          'Invest in low-cost Nifty 50 index funds for long-term compounding.',
          'Beware distributor commissions: seek fee-only SEBI-Registered Investment Advisors.'
        ],
        whoShouldListen: 'Indian students, graduates, working professionals, and families seeking an unshakeable, modern money management system.',
        mainTopics: ['Indian Personal Finance', 'Cash Flow Automation', 'Emergency Funds', 'Term Insurance', 'Mutual Funds']
      },
      fullText: {
        introduction: 'Monika Halan provides a bespoke, transparent financial roadmap built for Indian banking and regulatory frameworks.',
        coreIdea: 'A structured, automated system frees you from daily financial anxiety, letting your money compound in the background.',
        majorConcepts: [
          { title: 'The Three-Bank-Account System', content: 'Quarantining living expenses, fixed EMI/rent obligations, and automated SIP investments.' },
          { title: 'The Pure Insurance Shield', content: 'Protecting health and life without wasting capital on predatory endowment schemes or ULIPs.' }
        ],
        examples: ['Automating SIPs on salary day; purchasing a 1-crore term cover for under 10,000 rupees annually.'],
        practicalApplications: ['Open three dedicated bank accounts, build a 6-month liquid emergency fund, and start a Nifty 50 SIP.'],
        keyLessonsSummary: ['Separate bank accounts.', 'Insure purely.', 'Compound through SIPs.', 'Guard the emergency fund.'],
        finalTakeaway: 'You’ve worked hard for your money; build the right system, and let your money work hard for you.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  },
  {
    id: 'the-almanack-of-naval-ravikant',
    slug: 'the-almanack-of-naval-ravikant',
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    description: 'A modern operating manual for creating wealth without luck, deploying permissionless leverage, developing judgment, and cultivating inner peace.',
    coverImage: '/covers/books/the-almanack-of-naval-ravikant.jpg',
    genre: 'Entrepreneurship & Wealth Creation',
    subgenre: 'Leverage & Wisdom',
    category: 'nonfiction',
    publishedYear: 2020,
    rating: 4.9,
    popularityScore: 99,
    estimatedDurationMinutes: 15,
    audio: {
      id: 'audio-the-almanack-of-naval-ravikant',
      bookId: 'the-almanack-of-naval-ravikant',
      audioUrl: '/audio/the-almanack-of-naval-ravikant.mp3',
      duration: 911,
      hasAudio: true,
      chapters: [
        { id: 'c1', title: 'Chapter 1: Building Wealth Without Getting Lucky: Principles of Abundance', timestamp: 0, duration: 152 },
        { id: 'c2', title: 'Chapter 2: The Three Forms of Leverage: Labor, Capital, and Permissionless Media & Code', timestamp: 152, duration: 158 },
        { id: 'c3', title: 'Chapter 3: Specific Knowledge and Radical Accountability', timestamp: 309, duration: 126 },
        { id: 'c4', title: 'Chapter 4: Judgment: The Highest-Leverage Skill in the Modern World', timestamp: 435, duration: 121 },
        { id: 'c5', title: 'Chapter 5: Long-Term Compounding in Relationships, Reputation, and Capital', timestamp: 556, duration: 126 },
        { id: 'c6', title: 'Chapter 6: Happiness as a Learned Skill: Habits, Peace of Mind, and Freedom', timestamp: 682, duration: 131 },
        { id: 'c7', title: 'Chapter 7: Living with Wisdom: Core Philosophies and Takeaways for Students', timestamp: 812, duration: 99 },
      ]
    },
    summary: {
      id: 'sum-the-almanack-of-naval-ravikant',
      bookId: 'the-almanack-of-naval-ravikant',
      keyTakeaway: 'Productize yourself: combine your authentic specific knowledge with permissionless leverage (code and media) and radical accountability. Develop judgment as your highest-leverage skill, play long-term games with long-term people, and cultivate happiness as a daily internal choice.',
      quickLearn: {
        biggestIdeas: [
          'Building wealth is a learnable skill: ignore zero-sum status games and play positive-sum wealth creation games.',
          'Permissionless Leverage: code and media are modern armies of robots that work for you with zero marginal cost of replication.',
          'Specific Knowledge: pursue what feels like effortless play to you but looks like grueling work to others.'
        ],
        keyLessons: [
          'Take accountability under your own name: society rewards courage and responsibility with equity and leverage.',
          'Judgment is the highest-leverage skill: master first-principles mental models to make high-impact decisions.',
          'Compounding is universal: all real returns in life come from compound interest in wealth, reputation, and relationships.',
          'Happiness is a learned skill: tame desires, eliminate envy, and prioritize physical and mental peace of mind.'
        ],
        whoShouldListen: 'Students, software engineers, creators, founders, and anyone seeking financial sovereignty and philosophical calm.',
        mainTopics: ['Wealth Creation', 'Permissionless Leverage', 'Specific Knowledge', 'Judgment', 'Happiness']
      },
      fullText: {
        introduction: 'Eric Jorgenson curates Naval Ravikant’s wisdom on creating exponential wealth and discovering profound inner peace.',
        coreIdea: 'Disconnect your inputs from your outputs by building equity and leverage around your unique, authentic self.',
        majorConcepts: [
          { title: 'The Three Forms of Leverage', content: 'Transitioning from labor and capital to permissionless code and media.' },
          { title: 'Judgment Over Effort', content: 'In high-leverage domains, direction and strategic choices matter infinitely more than raw hours.' }
        ],
        examples: ['Writing software that runs on servers worldwide; choosing long-term partners with high intelligence, energy, and integrity.'],
        practicalApplications: ['Learn to code or create media, build a public reputation with skin in the game, and eliminate unnecessary desires.'],
        keyLessonsSummary: ['Productize yourself.', 'Use code and media.', 'Take accountability.', 'Choose peace.'],
        finalTakeaway: 'A fit body, a calm mind, a house full of love. These things cannot be bought—they must be earned.'
      }
    },
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01'
  }
];
