import { NonFictionLearningGuide } from '@/types/learning';

export const psychologyOfMoneyGuide: NonFictionLearningGuide = {
  id: 'guide-psychology-of-money',
  bookId: 'psychology-of-money',
  type: 'nonfiction',
  introduction:
    'The Psychology of Money by Morgan Housel delivers nineteen timeless parables examining how human emotions, historical upbringing, ego, and pride dictate financial outcomes far more than mathematical formulas. Contrasting figures like Ronald Read—a rural janitor who quietly amassed $8 million through patient compounding—with high-flying Wall Street executives who went bankrupt through reckless leverage, Housel proves that managing money is not about what you know, but how you behave. For students entering the financial world, this book provides the emotional sanity to resist consumer flexes and build enduring financial independence.',
  overview: {
    whatItIsAbout:
      'The book explores the soft psychology of financial choices. It analyzes why smart people make terrible financial decisions, the invisible forces of luck and risk, the critical concept of defining "enough", the exponential mathematics of compounding, and why personal autonomy (the ability to do what you want, when you want) is the highest dividend money pays.',
    problemAddressed:
      'Finance is traditionally taught like physics or engineering—full of clean spreadsheets, formulas, and rational rules. In reality, real people make financial choices around the dinner table where fear, envy, ego, and family history collide.',
    centralArgument:
      'Doing well with money has a little to do with how smart you are and a lot to do with how you behave. Financial success is a soft skill, where your personal behavior is more important than your technical knowledge.',
    majorThemes: [
      'No One’s Crazy: Upbringing and Lived Experience Shape Risk Perception',
      'The Role of Luck and Risk in Wealth Creation',
      'Never Enough: When Ambition Turns Destructive',
      'Confounding Compounding: Warren Buffett’s Secret Skill is Time',
      'Getting Wealthy versus Staying Wealthy: The Power of Survival',
      'The Freedom Dividend: Time Autonomy as True Wealth'
    ],
    connectionsBetweenIdeas:
      'Housel links individual psychological backgrounds to how we perceive risk, explains why people gamble with what they have and need for what they do not have and do not need, highlights the mathematics of endurance and compounding, and concludes with a philosophy of frugality and room for error.',
    whatStudentsUnderstand:
      'Students will understand that wealth is what you do not see (the unbought sports car, the unspent bonus) and that the ultimate purpose of money is to buy back your personal time and autonomy.'
  },
  concepts: [
    {
      name: 'The "Man in the Car" Paradox',
      simpleExplanation:
        'When you see someone driving a Ferrari or wearing a luxury designer watch, you rarely think: "Wow, that driver is so cool." Instead, you imagine: "If I had that car, people would think I am cool." Nobody is looking at the driver; they are only imagining themselves in the seat.',
      whyItMatters:
        'People purchase luxury items to signal status, wealth, and gain respect from others. But paradoxically, observers do not admire the owner; they only use the object as a benchmark for their own desires.',
      everydayExample:
        'Spending ₹80,000 / $1,000 on a designer jacket to impress college peers, only to realize your classmates are too busy worrying about their own outfits to care about yours.',
      collegeStudentApplication:
        'Cultivate humility, kindness, and genuine competence. These produce true respect and admiration far more reliably than expensive brand logos purchased with scarce student money.',
      difficultTerms: [
        {
          term: 'Conspicuous Consumption',
          definition: 'Spending money on luxury goods to publicly display economic power and social prestige.'
        }
      ]
    },
    {
      name: 'Getting Wealthy vs. Staying Wealthy',
      simpleExplanation:
        'Getting wealthy requires taking risks, being optimistic, and putting yourself out there. Staying wealthy requires the exact opposite: paranoia, humility, frugality, and the understanding that what you made can be taken away.',
      whyItMatters:
        'Many brilliant entrepreneurs and investors get rich quickly but end up bankrupt because they cannot switch off the aggressive risk-seeking behavior that got them rich in the first place.',
      everydayExample:
        'An investor who makes massive gains on a speculative crypto token during a bull run, but refuses to take profits or diversify, losing 95% of their net worth when the market crashes.',
      collegeStudentApplication:
        'When you achieve early success in your career or investments, do not let overconfidence convince you that you are infallible. Build an emergency fund and prioritize survival over endless greed.',
      difficultTerms: [
        {
          term: 'Margin of Safety',
          definition: 'A buffer of room for error that protects you from unexpected disasters and financial black swans.'
        }
      ]
    },
    {
      name: 'Wealth is What You Don’t See',
      simpleExplanation:
        'Rich is current income—it shows up in expensive cars, fancy vacations, and big houses. Wealth is financial options that have not been converted into stuff yet; it is money saved, invested, and kept hidden.',
      whyItMatters:
        'Judging people’s financial health by what they spend is an optical illusion. Spending money to show people how much money you have is the fastest way to have less money.',
      everydayExample:
        'A person driving a leased ₹60 Lakh BMW may have a negative net worth and high debt stress, while a quiet colleague wearing jeans has ₹2 Crore invested in index funds generating steady freedom.',
      collegeStudentApplication:
        'Do not judge your financial progress by whether you can afford to buy consumer gadgets. Measure it by how many months of freedom and living expenses you have saved.',
      difficultTerms: [
        {
          term: 'Net Worth',
          definition: 'The total value of all your assets minus all your liabilities and debts.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'The highest dividend money pays is the ability to control your time.',
      whatItMeans:
        'The ability to wake up every morning and say: "I can do whatever I want today" is the greatest lifestyle upgrade that exists.',
      whyItMatters:
        'Studies consistently show that having a high sense of control over one’s daily time is a stronger predictor of happiness than salary or house size.',
      realisticExample:
        'Having 12 months of living expenses saved allows you to walk away from a toxic boss or wait for a truly exceptional job offer rather than being forced to accept the first lowball offer out of panic.',
      howStudentAppliesIt:
        'Save money not just for a specific purchase, but for the intangible value of independence and freedom.'
    },
    {
      insight: 'Compounding is not intuitive; time does the heavy lifting.',
      whatItMeans:
        'Over 99% of Warren Buffett’s wealth was accumulated after his 50th birthday, and over 95% came after he turned 65. His skill was investing, but his secret was endurance across eight decades.',
      whyItMatters:
        'Investing small amounts early in your twenties allows compounding to work its geometric magic over 40+ years.',
      realisticExample:
        'Investing ₹2,000 or $50 a month starting at age 20 yields hundreds of thousands more at retirement than investing three times that amount starting at age 35.',
      howStudentAppliesIt:
        'Start an automated monthly index fund investment immediately, regardless of how small the initial sum is. Never interrupt compounding unnecessarily.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Avoid comparing your lifestyle with campus peers whose parents finance their luxuries.',
      'Build a "Sleep-Well-at-Night" emergency buffer: Keep ₹20,000 to ₹50,000 in a liquid bank account for laptop repairs, medical emergencies, or unexpected travel.'
    ],
    studyingAndLearning: [
      'Study historical financial panics: Understand that market crashes are not bugs in the economic system; they are features of how markets clear excess speculation.'
    ],
    careerDevelopment: [
      'Do not trade long-term reputation for quick monetary bonuses.',
      'Define your personal "Enough": Knowing when you have enough prevents you from making reckless career gambles that risk what you genuinely care about.'
    ]
  },
  misconceptions: [
    {
      misconception: 'The book says you should never spend money or enjoy nice things.',
      reality:
        'Housel encourages conscious spending on things that bring you genuine joy, while cutting out mindless spending driven by envy or social posturing.',
      caution:
        'Frugality is not about depriving yourself; it is about prioritizing freedom over temporary status symbols.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The mathematical power of long-term compounding and endurance.',
      'The psychological link between time autonomy and subjective human happiness.',
      'The historical reality that saving money provides an essential hedge against unpredictable life shocks.'
    ],
    authorOpinions: [
      'Housel’s personal investment portfolio (paying off his mortgage entirely and holding large cash balances) is mathematically sub-optimal compared to holding low-cost equities, but psychologically comforting. He emphasizes that being reasonable beats being purely rational.'
    ],
    anecdotesVsEvidence: [
      'Housel uses historical biographies and parables (Jesse Livermore, Rajat Gupta, Ronald Read) to illustrate behavioral principles rather than econometric regression tables.'
    ],
    debatedOrContextualClaims: [
      'In high-inflation economies or developing countries, simple index investing and holding cash reserves requires local adjustments for currency depreciation.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Financial success is a behavioral skill, not pure mathematical intelligence.',
      'True wealth is what you do not see—unspent capital that buys freedom.',
      'Control over your time is the highest dividend money can provide.',
      'Compounding requires uninterrupted endurance across decades.',
      'Define "enough" to prevent ambition from destroying what matters most.'
    ],
    finalSummary:
      'The Psychology of Money reminds students that true wealth is not about flaunting luxury cars or timing the stock market. It is about emotional self-regulation, patient compounding, living below your means, and securing the ultimate luxury: the freedom to own your daily time.',
    actionPlan: [
      {
        step: 'Step 1: Set Up an Automated SIP',
        action: 'Configure a recurring monthly bank transfer to a broad-market index fund.',
        outcome: 'Painless, continuous compounding from your college years.'
      },
      {
        step: 'Step 2: Define Your "Enough"',
        action: 'Write down what a comfortable, dignified life requires for you, independent of peer pressure.',
        outcome: 'Protection against infinite lifestyle inflation.'
      },
      {
        step: 'Step 3: Build a 3-Month Emergency Fund',
        action: 'Accumulate a liquid cash cushion to handle unexpected crises without taking debt.',
        outcome: 'Immunity to panic-selling during market or career downturns.'
      }
    ],
    fivePointsToRemember: [
      '1. No one is crazy: People make financial choices based on their unique life experiences.',
      '2. Wealth is the money you choose not to spend.',
      '3. Controlling your time is the greatest wealth dividend.',
      '4. The world is full of surprise; leave room for error in every plan.',
      '5. Being reasonable beats being purely rational when managing your money.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Compounding',
        definition: 'Earning returns on your initial capital as well as on previously accumulated returns over time.'
      },
      {
        term: 'Margin of Safety',
        definition: 'Having a buffer of room for error to survive unpredictable financial storms.'
      },
      {
        term: 'Man in the Car Paradox',
        definition: 'The illusion that others admire the owner of a luxury object when they are really imagining themselves owning it.'
      },
      {
        term: 'Time Autonomy',
        definition: 'The ability to control your daily schedule, projects, and life without financial coercion.'
      }
    ],
    questions: [
      {
        question: 'Why does Morgan Housel argue that managing money is a soft skill?',
        answer:
          'Because your financial outcomes depend heavily on emotional self-regulation, patience, ego management, and risk tolerance rather than mathematical genius.'
      },
      {
        question: 'What is the secret behind Warren Buffett’s vast wealth?',
        answer:
          'Longevity and endurance: he began investing as a young child and allowed compound interest to multiply his capital undisturbed for over seven decades.'
      },
      {
        question: 'What is the difference between being rich and being wealthy?',
        answer:
          'Being rich is having high current income and displaying it; being wealthy is having unspent financial assets and options that give you freedom and security.'
      }
    ],
    oneMinuteSummary:
      'The Psychology of Money demonstrates that financial freedom is driven by behavior, not spreadsheets. By avoiding status games, defining your personal "enough", letting compounding work over decades, and prizing time autonomy above all else, students can build indestructible wealth.'
  }
};

export const sapiensGuide: NonFictionLearningGuide = {
  id: 'guide-sapiens',
  bookId: 'sapiens',
  type: 'nonfiction',
  introduction:
    'Sapiens: A Brief History of Humankind by Oxford-trained historian Yuval Noah Harari is a sweeping chronicle of our species’ evolutionary and cultural ascent. Exploring how an insignificant ape on the East African savannah transformed into the master of planet Earth, Harari traces three major revolutions: the Cognitive Revolution (70,000 years ago), the Agricultural Revolution (12,000 years ago), and the Scientific Revolution (500 years ago). For students across science, humanities, and technology, Sapiens dismantles modern dogmas by revealing how shared fictional myths—money, nations, laws, and corporations—enable millions of strangers to cooperate effectively.',
  overview: {
    whatItIsAbout:
      'The book traces the biological, social, and technological journey of Homo sapiens. It explains how our species outcompeted other human species (like Neanderthals), settled into agricultural societies, developed global unifying orders (money, empires, religions), and unleashed the scientific and capitalist engines that are now poised to engineer post-human life.',
    problemAddressed:
      'Why did Homo sapiens conquer the planet while other species did not? And have modern technological advancements, industrial agriculture, and economic wealth actually made individual humans happier than our hunter-gatherer ancestors?',
    centralArgument:
      'Homo sapiens rules the world because it is the only species that can cooperate flexibly in large numbers. This unique ability stems entirely from our capacity to create, believe, and spread "intersubjective realities"—fictional myths and collective narratives that exist only in our shared imagination.',
    majorThemes: [
      'The Cognitive Revolution and the Power of Shared Fictions',
      'The Agricultural Revolution as "History’s Biggest Fraud"',
      'The Unification of Humankind: Money, Empires, and Universal Religions',
      'The Scientific Revolution and the Discovery of Ignorance',
      'The Alliance of Science, Capitalism, and Imperial Power',
      'The Enigma of Human Happiness and the Future of Intelligent Design'
    ],
    connectionsBetweenIdeas:
      'Harari links language mutation to fictional storytelling, shows how storytelling enabled tribes to expand past the 150-person Dunbar limit, demonstrates how agriculture trapped humans into harder labor, explains how collective myths like currency and legal charters enabled global trade, and shows how admitting ignorance sparked the scientific revolution.',
    whatStudentsUnderstand:
      'Students will understand that human institutions (nations, currencies, corporations, human rights) are not objective physical realities like rocks or gravity, but social constructs sustained only by shared collective belief.'
  },
  concepts: [
    {
      name: 'Intersubjective Reality (Shared Fictions)',
      simpleExplanation:
        'Things exist in three realms: 1. Objective (exists regardless of human belief, like gravity or viruses), 2. Subjective (exists inside one person’s mind, like my toothache), 3. Intersubjective (exists within the shared communication network of millions of human minds, like the United States, Google LLC, the Indian Rupee, or legal contracts).',
      whyItMatters:
        'You can never convince a chimpanzee to give you a banana by promising him twenty bananas in chimpanzee heaven after death. Only Homo sapiens can believe in abstract stories, allowing millions of unrelated strangers to build cities, fight in armies, or collaborate on open-source software.',
      everydayExample:
        'A ₹500 or $100 paper bill has zero intrinsic biological value (you cannot eat it or wear it). It holds immense value solely because millions of strangers collectively share the imaginary belief that it can be exchanged for bread and housing.',
      collegeStudentApplication:
        'When studying law, economics, or marketing, realize you are studying intersubjective systems. If you can understand and shape the narratives people collectively believe, you can influence organizations and cultures.',
      difficultTerms: [
        {
          term: 'Intersubjective',
          definition: 'Existing in the shared consciousness and mutual agreement of multiple individuals rather than physical reality.'
        }
      ]
    },
    {
      name: 'The Agricultural Trap ("History’s Biggest Fraud")',
      simpleExplanation:
        'The transition from nomadic foraging to settled farming did not make individual lives easier. Hunter-gatherers worked roughly 30 hours a week eating diverse diets; farmers worked 70 hours a week breaking their backs in fields, vulnerable to drought, plagues, and repetitive strain injuries.',
      whyItMatters:
        'Wheat domesticated humans, not the other way around. The Agricultural Revolution increased the total population of humans (species evolutionary success), but decreased individual quality of life for millennia.',
      everydayExample:
        'Modern technology: We invented email, smartphones, and laptops thinking they would save us time. Instead, they accelerated life’s pace and expanded work expectations to 24/7 availability.',
      collegeStudentApplication:
        'Be cautious of "labor-saving" technologies and career upgrades that secretly increase your stress and demands without providing genuine happiness or leisure.',
      difficultTerms: [
        {
          term: 'Luxury Trap',
          definition: 'The historical pattern where an optional luxury becomes a daily necessity and eventually spawns new, unavoidable obligations.'
        }
      ]
    },
    {
      name: 'The Discovery of Ignorance (The Scientific Revolution)',
      simpleExplanation:
        'Before 1500, ancient religions and traditions claimed that all important knowledge was already revealed in sacred texts. The Scientific Revolution began with the radical admission: "We do not know." Admitting ignorance forced humans to observe, gather data, and experiment.',
      whyItMatters:
        'Admitting ignorance is the precondition for all progress. When cultures believe they know everything, curiosity and innovation die.',
      everydayExample:
        'Ancient European world maps were filled with drawings of mythical monsters to cover blank spaces. Scientific explorers drew blank spaces labeled "Terra Incognita" (Unknown Territory), openly admitting their lack of knowledge and sailing out to explore.',
      collegeStudentApplication:
        'Embrace the courage to say "I don’t know" in seminars and research labs. Genuine intellectual curiosity begins where dogmatic certainty ends.',
      difficultTerms: [
        {
          term: 'Empiricism',
          definition: 'The philosophical theory that all knowledge is derived from sensory experience, observation, and experimentation.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'Money is the most universal and tolerant mutual trust system ever devised.',
      whatItMeans:
        'Religion and nationalism divide people along tribal lines, but money bridges all divides. People who detest each other’s gods and politics will happily accept the exact same currency notes.',
      whyItMatters:
        'Money is not a material reality; it is a psychological construct based entirely on mutual trust in future redemption.',
      realisticExample:
        'A Christian customer buying tea produced by a Hindu farmer shipped by a Muslim merchant using US dollars.',
      howStudentAppliesIt:
        'Recognize that economic systems thrive when trust and institutional credibility are high, and collapse when trust evaporates.'
    },
    {
      insight: 'Human happiness does not automatically increase with technological power.',
      whatItMeans:
        'Despite having air conditioning, antibiotics, airplanes, and supermarkets, modern humans do not report significantly higher baseline subjective well-being than ancient hunter-gatherers.',
      whyItMatters:
        'Happiness is governed by internal biochemical baselines and the ratio of expectations to reality. When comforts increase, expectations rise proportionally, leaving satisfaction unchanged.',
      realisticExample:
        'Getting a faster laptop feels thrilling for 3 days; then it becomes your normal baseline, and a 2-second delay causes irritation.',
      howStudentAppliesIt:
        'Manage your internal expectations and desires rather than assuming external consumer toys will permanently resolve your happiness.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Deconstruct social constructs: Understand that grades, social status, and campus prestige are socially constructed games; keep your inner peace separate from external metrics.',
      'Connect with biological roots: Get daily sunlight, walk in nature, and maintain deep face-to-face friendships—our biology remains that of savannah foragers.'
    ],
    studyingAndLearning: [
      'Apply multidisciplinary thinking: Connect history, biology, economics, and psychology to understand human dilemmas.',
      'Cultivate scientific humility: Challenge received wisdom and test claims against empirical data.'
    ],
    careerDevelopment: [
      'Master storytelling: Since human cooperation is powered by shared narratives, the ability to tell compelling, coherent stories is the most valuable leadership skill across business and engineering.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Harari is claiming that human rights, justice, and laws are fake and should be discarded.',
      reality:
        'Harari emphasizes that shared fictions like human rights are the most magnificent and necessary inventions of human history, enabling peaceful civilization. Calling them fictions means they are created by human culture rather than encoded in biology.',
      caution:
        'Protect human rights fiercely, recognizing they require active cultural maintenance to survive.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The role of symbolic language and collective narrative in coordinating large human groups.',
      'The brutal ecological impact of Homo sapiens on megafauna during global prehistoric migration.',
      'The discovery of ignorance as the foundational spark of the scientific revolution.'
    ],
    authorOpinions: [
      'Harari’s romanticized portrayal of hunter-gatherer life downplays high infant mortality, violence between rival bands, and vulnerability to infections.',
      'His philosophical determinism regarding future AI and biotechnology engineering away human free will represents a speculative extrapolation rather than guaranteed historical fact.'
    ],
    anecdotesVsEvidence: [
      'The book synthesizes vast sweeps of anthropological research into sweeping, witty generalizations that sometimes smooth over contentious academic debates.'
    ],
    debatedOrContextualClaims: [
      'Anthropologists debate whether agriculture was universally a "fraud" or an inevitable evolutionary response to climatic stabilization in the Holocene.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Homo sapiens rules Earth through large-scale flexible cooperation powered by shared fictions.',
      'Money, nations, laws, and corporations exist in intersubjective reality.',
      'The Scientific Revolution began by admitting ignorance.',
      'Technological power does not guarantee subjective human happiness.',
      'Our greatest ethical challenge is mastering our desires, not just our tools.'
    ],
    finalSummary:
      'Sapiens equips students with a cosmic perspective on humanity. By recognizing that civilizations run on collective stories and that modern technology has outpaced our paleolithic emotional wiring, students can navigate society with critical awareness and ethical clarity.',
    actionPlan: [
      {
        step: 'Step 1: Identify Intersubjective Narratives',
        action: 'Pick one institution or rule you take for granted (e.g. corporate hierarchy, student loans) and map its historical narrative origin.',
        outcome: 'Freedom from blind conformity to man-made social constructs.'
      },
      {
        step: 'Step 2: Practice Admitting Ignorance',
        action: 'In academic research, actively seek out questions where modern science currently has no definitive answer.',
        outcome: 'Deepening of genuine scientific curiosity and intellectual humility.'
      },
      {
        step: 'Step 3: Align with Savannah Biology',
        action: 'Reduce artificial blue light before sleep and eat unprocessed whole foods.',
        outcome: 'Optimization of your evolutionary physical hardware.'
      }
    ],
    fivePointsToRemember: [
      '1. Shared fictions allow millions of strangers to cooperate peacefully.',
      '2. Objective reality (biology, physics) differs from intersubjective reality (money, law, nations).',
      '3. The Agricultural Revolution increased population while reducing individual leisure.',
      '4. Science took off when humans dared to say "We do not know."',
      '5. Is there anything more dangerous than dissatisfied and irresponsible gods who don’t know what they want?'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Cognitive Revolution',
        definition: 'The evolutionary emergence of symbolic language and imaginative storytelling in Homo sapiens ~70,000 years ago.'
      },
      {
        term: 'Intersubjective Reality',
        definition: 'Realities that exist only within the shared communication network of many individuals (e.g. money, laws, corporations).'
      },
      {
        term: 'Discovery of Ignorance',
        definition: 'The scientific breakthrough of acknowledging that ancient texts did not contain all truths about the universe.'
      },
      {
        term: 'Dunbar’s Number (150)',
        definition: 'The natural cognitive threshold of individuals a human can maintain stable, personal relationships with without formal institutions.'
      }
    ],
    questions: [
      {
        question: 'Why could Homo sapiens cooperate in groups larger than 150 members?',
        answer:
          'Because Sapiens created shared fictional myths (gods, nations, money, totems) that bound large numbers of strangers together through common belief.'
      },
      {
        question: 'Why does Harari call the Agricultural Revolution "History’s Biggest Fraud"?',
        answer:
          'Because it promised a better life, but resulted in harder daily labor, poorer nutrition, higher vulnerability to plagues, and social inequality for the average human farmer.'
      },
      {
        question: 'What is the role of the "Discovery of Ignorance" in modern science?',
        answer:
          'It dismantled the belief that ancient traditions knew everything, driving empirical observation, exploration, and experimental discovery.'
      }
    ],
    oneMinuteSummary:
      'Sapiens reveals that humanity’s greatest superpower is our ability to believe in shared fictions like money, nations, and laws, enabling global cooperation. To build a meaningful future, students must look beyond modern illusions, align technology with genuine well-being, and remember our common evolutionary heritage.'
  }
};

export const theLawsOfHumanNatureGuide: NonFictionLearningGuide = {
  id: 'guide-the-laws-of-human-nature',
  bookId: 'the-48-laws-of-power', // slug match fallback or specific
  type: 'nonfiction',
  introduction:
    'The Laws of Human Nature by Robert Greene is a monumental examination of the psychological forces, unconscious drives, and behavioral patterns that govern all human action. Greene teaches that the greatest obstacle to our success is our profound blindness to human nature—including our own. By decoding narcissism, irrationality, emotional envy, defensive hostility, and tribal conformity, Greene transforms students into astute observers of human motives rather than bewildered victims of interpersonal conflict.',
  overview: {
    whatItIsAbout:
      'The book breaks down eighteen fundamental laws of human nature through in-depth historical profiles (Pericles, Anton Chekhov, Abraham Lincoln, Mary Shelley). It provides practical tools to detach from emotional drama, see through social masks, master inner emotions, and influence people authentically.',
    problemAddressed:
      'Most people operate under the naive assumption that humans are rational, conscious agents who mean exactly what they say. In truth, human behavior is driven by deep-seated unconscious impulses, childhood defense mechanisms, status anxiety, and tribal instincts.',
    centralArgument:
      'We are all subject to the laws of human nature. Becoming aware of these invisible forces within yourself is the first step toward self-mastery; recognizing them in others gives you the empathy and discernment required to lead and protect yourself.',
    majorThemes: [
      'The Law of Irrationality: Mastering Your Emotional Self',
      'The Law of Role-Playing: Seeing Through Social Masks',
      'The Law of Narcissism: Transforming Self-Absorption into Empathy',
      'The Law of Compulsive Behavior: Determining the Strength of People’s Character',
      'The Law of Envy: Deflecting the Subtle Sting of Jealousy',
      'The Law of Tribal Aggression: Resisting the Madness of the Crowd'
    ],
    connectionsBetweenIdeas:
      'Greene starts with personal emotional regulation (irrationality), moves to interpersonal discernment (masks and character), expands to social dynamics (envy and aggression), and culminates in cosmic perspectives on mortality and purpose.',
    whatStudentsUnderstand:
      'Students will learn to stop taking other people’s emotional outbursts personally, recognizing that hostile behavior is almost always an external projection of the other person’s internal unresolved wounds.'
  },
  concepts: [
    {
      name: 'The Law of Irrationality',
      simpleExplanation:
        'We love to imagine we are in control of our decisions, but we are continually governed by emotions we barely understand. Rationality is not an inborn trait; it is a learned skill that requires conscious effort to create space between emotional triggers and responses.',
      whyItMatters:
        'When you react immediately while feeling angry, insulted, or excessively excited, you make disastrous choices you inevitably regret.',
      everydayExample:
        'Sending an aggressive reply to a group chat after feeling disrespected, only to escalate a minor misunderstanding into a multi-week social war.',
      collegeStudentApplication:
        'Adopt the "Pericles Pause": When someone provokes or insults you, wait at least 24 hours before responding. Let the emotional chemical rush subside before writing your reply.',
      difficultTerms: [
        {
          term: 'Rationality',
          definition: 'The ability to counteract emotional biases, think calmly, and base actions on reality and long-term consequences.'
        }
      ]
    },
    {
      name: 'The Law of Role-Playing (Reading Nonverbal Cues)',
      simpleExplanation:
        'Everyone wears social masks to appear confident, friendly, and agreeable. You must never judge people by their words; observe their micro-expressions, posture, pupil dilation, foot movements, and behavioral patterns when they are tired or caught off guard.',
      whyItMatters:
        'People lie with words with ease, but their nonverbal body language leaks their true feelings of envy, resentment, or deceit.',
      everydayExample:
        'A classmate congratulates you on winning a competition with a wide verbal smile, but their eyes remain cold and unblinking, and their shoulders tense up. Their true emotion is envy, not joy.',
      collegeStudentApplication:
        'Observe teammates’ actions under pressure rather than trusting their confident verbal promises during the initial planning session.',
      difficultTerms: [
        {
          term: 'Micro-expressions',
          definition: 'Involuntary, fleeting facial expressions that expose a person’s authentic repressed emotions for a fraction of a second.'
        }
      ]
    },
    {
      name: 'Deep Empathy (The Law of Narcissism)',
      simpleExplanation:
        'Everyone is on a spectrum of self-absorption. The Deep Narcissist views others merely as instruments or audiences to validate their fragile ego. The Empathetic person trains their mind to step outside their own ego and truly see the world from another person’s perspective.',
      whyItMatters:
        'True influence and charisma do not come from talking about yourself; they come from radiating intense, non-judgmental curiosity about other people.',
      everydayExample:
        'In a meeting, instead of waiting for your turn to speak, you focus completely on understanding the fears, insecurities, and unstated hopes of your colleague.',
      collegeStudentApplication:
        'Practice visceral curiosity: When talking to professors or peers, ask open-ended questions about their journey and listen without formulating your reply.',
      difficultTerms: [
        {
          term: 'Deep Empathy',
          definition: 'The psychological ability to transcend your self-absorption and understand another person’s inner emotional landscape.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'People do not attack you because of who you are; they attack their own projections.',
      whatItMeans:
        'When someone attacks you with irrational fury or passive aggression, their reaction is usually triggered by their own unresolved insecurities, past trauma, or guilt.',
      whyItMatters:
        'Understanding this shields your self-worth. You stop agonizing: "What is wrong with me?" and begin observing: "What unresolved pain is driving their behavior?"',
      realisticExample:
        'A roommate who snaps at you for clean dishes is often reacting to stress over their own failed exam or family pressure.',
      howStudentAppliesIt:
        'Never absorb another person’s emotional poison; remain an objective, calm observer.'
    },
    {
      insight: 'Character is fate.',
      whatItMeans:
        'Talent, intelligence, and charm are meaningless if a person has weak character. A person’s character is revealed by how they handle pressure, criticism, and adversity over time.',
      whyItMatters:
        'Do not partner with people in business, projects, or marriage based on superficial charm or pedigree; partner based on proven integrity under stress.',
      realisticExample:
        'A brilliant coder who abandons the team the moment a server crashes under pressure is a liability, not an asset.',
      howStudentAppliesIt:
        'Audit your own character: Can you handle constructive feedback without becoming defensively hostile?'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Recognize envy early: When you achieve success, tone down your bragging and highlight the role of luck to avoid provoking hidden envy.',
      'Resist groupthink: Be aware of how campus crowds and social media mobs generate infectious emotional hysteria; maintain independent judgment.'
    ],
    studyingAndLearning: [
      'Overcome cognitive resistance: When learning a difficult subject feels painful, recognize your brain’s natural defensiveness and lean into the challenge.'
    ],
    careerDevelopment: [
      'Assess potential employers’ character before accepting offers: Notice how the manager treats restaurant waitstaff and receptionists during interview lunches.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Studying human nature is cynical and makes you paranoid.',
      reality:
        'Greene emphasizes that understanding human nature actually breeds compassion. When you realize everyone is fighting internal insecurities, you become gentler, wiser, and more patient with human flaws.',
      caution:
        'Use these insights to cultivate empathy and self-correction, not to manipulate others.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The power of emotional regulation and the physiological delays in rational processing.',
      'The reality of nonverbal behavioral leakage under stress.',
      'The dangers of tribal polarization and conformity bias.'
    ],
    authorOpinions: [
      'Greene’s deterministic framework ("Character is Fate") can sometimes make human personality appear more rigid and unchangeable than modern neuroplasticity research suggests.'
    ],
    anecdotesVsEvidence: [
      'The historical portraits are richly detailed and literary, but reflect selective narrative interpretations of historical figures.'
    ],
    debatedOrContextualClaims: [
      'Some psychoanalytic concepts (such as the Jungian Shadow) have diverse theoretical interpretations in contemporary cognitive psychology.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Master the Law of Irrationality: Create space between emotional impulse and action.',
      'Transform self-absorption into deep empathy.',
      'Judge people by their sustained character under pressure, not their charm.',
      'Never take hostile outbursts personally—they are internal projections.',
      'Confront your mortality (Memento Mori) to give urgency and purpose to your life.'
    ],
    finalSummary:
      'The Laws of Human Nature provides a psychological mirror and telescope. By mastering your own irrational impulses and decoding the hidden currents of human behavior, you navigate life with empathy, poise, and unshakable self-possession.',
    actionPlan: [
      {
        step: 'Step 1: Track Your Emotional Triggers',
        action: 'Keep an emotion journal for 7 days recording whenever you felt sudden anger, defensive pride, or envy.',
        outcome: 'Uncovering your unconscious emotional vulnerabilities.'
      },
      {
        step: 'Step 2: Practice Silent Observation',
        action: 'In your next team meeting, spend 10 minutes observing micro-expressions and body language without speaking.',
        outcome: 'Enhanced ability to read unspoken group dynamics.'
      },
      {
        step: 'Step 3: Shift from Judgment to Curiosity',
        action: 'Whenever someone acts irritably toward you, ask yourself: "What hidden pressure are they facing today?"',
        outcome: 'Defusal of unnecessary interpersonal drama.'
      }
    ],
    fivePointsToRemember: [
      '1. We are all deeply emotional creatures; rationality is a deliberate discipline.',
      '2. Nonverbal behavior reveals what verbal statements attempt to conceal.',
      '3. True charisma comes from genuine interest in others, not self-promotion.',
      '4. Character is demonstrated under adversity, not during smooth times.',
      '5. Memento Mori: Contemplating your mortality puts petty worries into perspective.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Law of Irrationality',
        definition: 'The human tendency to be guided by unconscious emotions while believing we are acting rationally.'
      },
      {
        term: 'Deep Empathy',
        definition: 'Connecting with other people’s perspectives and emotional experiences by suppressing your own ego.'
      },
      {
        term: 'The Shadow',
        definition: 'The repressed, unacknowledged negative impulses and insecurities inside our psyche that we project onto others.'
      },
      {
        term: 'Tribalism',
        definition: 'The instinctual drive to conform to an in-group and view out-groups with automatic suspicion.'
      }
    ],
    questions: [
      {
        question: 'Why does Robert Greene suggest the "Pericles Pause"?',
        answer:
          'To allow the physiological adrenaline of an emotional trigger to dissipate, preventing impulsive, destructive reactions.'
      },
      {
        question: 'How can you identify a person’s true character according to Greene?',
        answer:
          'By observing how they handle unexpected stress, failure, criticism, and how they treat those who have no power to help them.'
      },
      {
        question: 'What is the root cause of interpersonal envy?',
        answer:
          'A wounded ego comparing itself unfavorably to a peer’s success, which is often disguised as moral criticism or cold withdrawal.'
      }
    ],
    oneMinuteSummary:
      'The Laws of Human Nature teaches that understanding ourselves and others is the ultimate life skill. By recognizing our shared emotional vulnerabilities, curbing reactive impulses, observing behavior over words, and cultivating deep empathy, students can transform human complexity into a source of enduring wisdom.'
  }
};

export const emotionalIntelligenceGuide: NonFictionLearningGuide = {
  id: 'guide-emotional-intelligence',
  bookId: 'emotional-intelligence',
  type: 'nonfiction',
  introduction:
    'Emotional Intelligence: Why It Can Matter More Than IQ by psychologist and science journalist Daniel Goleman revolutionized our understanding of human potential. Synthesizing cutting-edge neuroscience and psychological research, Goleman demonstrated that traditional academic IQ accounts for only roughly 20% of life success; the remaining 80% is determined by Emotional Intelligence (EQ). For students preparing for careers in leadership, engineering, medicine, or entrepreneurship, this book provides the neurological blueprint to master self-awareness, emotional regulation, intrinsic motivation, and social empathy.',
  overview: {
    whatItIsAbout:
      'The book explores the architecture of the emotional brain (the limbic system and amygdala) versus the rational brain (the neocortex). It introduces the five core domains of Emotional Intelligence: 1. Self-awareness, 2. Managing emotions, 3. Self-motivation, 4. Empathy, and 5. Handling relationships.',
    problemAddressed:
      'Educational institutions obsessively prioritize academic intelligence (IQ) and standardized test scores while completely neglecting emotional literacy, leaving brilliant students emotionally brittle, prone to panic, and incapable of navigating workplace relationships.',
    centralArgument:
      'Emotional intelligence is not a fixed genetic trait; it is a flexible set of neural skills that can be cultivated and strengthened throughout life. Without emotional literacy, raw intellectual brilliance is easily hijacked and sabotaged by primitive emotional impulses.',
    majorThemes: [
      'The Architecture of the Emotional Brain: Amygdala Hijacking',
      'The Five Pillars of EQ (Self-Awareness to Social Skill)',
      'Delayed Gratification and the Famous Marshmallow Experiment',
      'Empathy: The Biological Root of Altruism and Connection',
      'Emotional Intelligence in Leadership, Health, and High Performance'
    ],
    connectionsBetweenIdeas:
      'Goleman begins with the neuroscience of the amygdala and prefrontal cortex, establishes why emotional hijacking occurs, outlines the five core competencies of EQ, demonstrates their predictive power in career and relationship longevity, and concludes with evidence-based frameworks for social and emotional learning.',
    whatStudentsUnderstand:
      'Students will understand that emotional self-regulation is the master skill that unlocks their cognitive potential; when anxiety or anger hijacks the amygdala, working memory and IQ drop dramatically.'
  },
  concepts: [
    {
      name: 'Amygdala Hijacking',
      simpleExplanation:
        'The amygdala is the ancient almond-shaped emotional alarm center of the brain. When it perceives a threat (physical danger or an ego insult), it can trigger an instant fight-or-flight emergency response milliseconds before the rational prefrontal cortex can process what is happening.',
      whyItMatters:
        'During an amygdala hijack, your thinking brain is literally bypassed. You say or do foolish, destructive things in a flash of rage or terror before logic can intervene.',
      everydayExample:
        'Snapping and yelling at a project partner or slamming your laptop shut in fury during a stressful team debug session when an unexpected bug appears.',
      collegeStudentApplication:
        'Learn your physical warning signs of a hijack (racing heartbeat, tense jaw, shallow breathing). When you feel these sensations, step away from the keyboard and take six slow, deep breaths to restore blood flow to your prefrontal cortex.',
      difficultTerms: [
        {
          term: 'Amygdala Hijack',
          definition: 'An immediate, overwhelming emotional response that triggers before the conscious rational cortex can evaluate the situation.'
        },
        {
          term: 'Prefrontal Cortex',
          definition: 'The executive center of the brain responsible for planning, impulse control, and rational decision-making.'
        }
      ]
    },
    {
      name: 'The Five Domains of Emotional Intelligence',
      simpleExplanation:
        '1. Self-Awareness: Recognizing a feeling as it happens. 2. Managing Emotions: Soothing distress, handling anxiety, and shaking off gloom. 3. Motivating Oneself: Marshalling emotions in service of a goal (delayed gratification). 4. Empathy: Recognizing emotions in others. 5. Handling Relationships: Managing interpersonal emotions and managing conflict.',
      whyItMatters:
        'Excelling in all five domains makes a student resilient, cooperative, and deeply respected by peers and supervisors.',
      everydayExample:
        'Noticing that you are feeling jealous of a friend’s job offer (Self-Awareness), soothing that feeling by reminding yourself of your own path (Managing Emotions), refocusing on preparing for your own interview (Motivating Oneself), and congratulating your friend sincerely (Empathy & Relationship Skill).',
      collegeStudentApplication:
        'Use the five domains as a personal growth scorecard during team projects and campus leadership roles.',
      difficultTerms: [
        {
          term: 'Emotional Literacy',
          definition: 'The ability to identify, understand, and communicate your feelings accurately with words.'
        }
      ]
    },
    {
      name: 'Delayed Gratification (The Marshmallow Test)',
      simpleExplanation:
        'Walter Mischel’s famous Stanford study showed that 4-year-olds who could resist eating one marshmallow immediately to receive two marshmallows 15 minutes later grew up to score significantly higher on the SAT, exhibit lower addiction rates, and achieve greater career stability.',
      whyItMatters:
        'The capacity to delay gratification—sacrificing immediate comfort for long-term compounding triumph—is the supreme predictor of academic and career accomplishment.',
      everydayExample:
        'Choosing to review lecture notes for 45 minutes on a Friday evening before heading out to a social gathering.',
      collegeStudentApplication:
        'Train your "delayed gratification muscle" daily: resist the immediate dopamine hit of smartphone notifications until your primary study task is completed.',
      difficultTerms: [
        {
          term: 'Impulse Control',
          definition: 'The cognitive ability to resist immediate temptations and emotional urges in pursuit of long-term goals.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'Working memory capacity collapses under chronic emotional anxiety.',
      whatItMeans:
        'Your prefrontal cortex holds working memory (the mental whiteboard where you solve math equations, code algorithms, and analyze literature). When you are chronically anxious, worried, or depressed, that anxiety consumes working memory space, leaving virtually no bandwidth for complex thought.',
      whyItMatters:
        'Students who freeze on exams rarely lack intelligence; their working memory has been suffocated by anxiety.',
      realisticExample:
        'Knowing all the answers during quiet dorm study sessions, but going completely blank during the timed exam because test anxiety hijacked your working memory.',
      howStudentAppliesIt:
        'Practice calming breathwork and cognitive reframing before exams: tell yourself "This nervous excitement is my body energizing me to focus," converting anxiety into productive arousal.'
    },
    {
      insight: 'Empathy requires physical stillness and listening to tone of voice.',
      whatItMeans:
        'Over 90% of emotional communication is nonverbal (tone, inflection, facial tension). If you are multi-tasking or mentally distracted, your mirror neurons cannot attune to another person’s frequency.',
      whyItMatters:
        'Great leaders and teammates connect deeply because they make people feel heard, validated, and safe.',
      realisticExample:
        'Putting down your phone, turning your entire body toward a distressed teammate, and saying: "You seem really overwhelmed right now; tell me what’s happening."',
      howStudentAppliesIt:
        'Give 100% presence in conversations with roommates, professors, and teammates.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Manage test anxiety: Use progressive muscle relaxation and positive self-talk before high-stakes exams.',
      'Defuse roommate disputes: Address irritations early using "I feel" statements rather than storing resentment until an explosive argument occurs.'
    ],
    studyingAndLearning: [
      'Enter Flow states: Goleman identifies Flow as the ultimate peak of emotional intelligence, where emotions are harnessed in effortless, joyful absorption in a challenging task.'
    ],
    careerDevelopment: [
      'Develop social radar: Read the room during corporate presentations; notice when executives are disengaged or confused and pivot your delivery.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Emotional Intelligence means being sweet, agreeable, and nice all the time.',
      reality:
        'EQ is not about perpetual niceness; it is about delivering necessary, uncomfortable truths constructively and knowing how to assert boundaries with composure and firmness.',
      caution:
        'Never suppress legitimate feedback in the name of false harmony.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The neural pathways connecting the amygdala to the prefrontal cortex in emotional regulation.',
      'The predictive validity of delayed gratification and self-regulation in life outcomes.',
      'The direct physiological link between chronic stress/anxiety and suppressed immune and cognitive function.'
    ],
    authorOpinions: [
      'Goleman’s claim that EQ matters vastly more than IQ in all domains overstates the case for highly technical, abstract fields (theoretical physics, pure mathematics) where general cognitive ability (g-factor) remains a massive predictor.',
      'Commercial EQ testing instruments vary widely in psychometric reliability compared to standardized cognitive tests.'
    ],
    anecdotesVsEvidence: [
      'The book blends rigorous neurobiology with corporate leadership consulting anecdotes that are persuasive but occasionally anecdotal.'
    ],
    debatedOrContextualClaims: [
      'Cultural definitions of emotional expression: What is considered mature emotional regulation in Western cultures may differ from norms of emotional restraint in East Asian cultures.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'IQ opens doors, but EQ determines how far you go.',
      'Beware the amygdala hijack: create a pause between trigger and action.',
      'Delayed gratification is the cornerstone of academic and career accomplishment.',
      'Empathy is a physical and neurological skill that requires total presence.',
      'Emotional skills are trainable neural pathways that strengthen with daily practice.'
    ],
    finalSummary:
      'Emotional Intelligence demonstrates that true brilliance is a balance between head and heart. By mastering self-awareness, regulating destructive impulses, cultivating relentless delayed gratification, and attuning to others with empathy, students unlock their highest potential as scholars, leaders, and human beings.',
    actionPlan: [
      {
        step: 'Step 1: Build Emotional Vocabulary',
        action: 'When feeling upset, replace vague terms like "I feel bad" with specific labels (e.g. "I feel inadequate", "I feel overwhelmed", "I feel excluded").',
        outcome: 'Activating the prefrontal cortex to soothe the amygdala through labeling.'
      },
      {
        step: 'Step 2: Master the 6-Second Pause',
        action: 'Whenever provoked, count backward from six before speaking.',
        outcome: 'Giving the rational cortex time to override a hijack.'
      },
      {
        step: 'Step 3: Practice Active Empathetic Attunement',
        action: 'In one conversation daily, reflect the other person’s emotional state back to them ("It sounds like that was really frustrating for you").',
        outcome: 'Deepening interpersonal connection and collaborative trust.'
      }
    ],
    fivePointsToRemember: [
      '1. Academic IQ accounts for only ~20% of life success; emotional literacy accounts for the rest.',
      '2. Amygdala hijacking bypasses logic in moments of anger or fear.',
      '3. Delayed gratification is the supreme predictor of long-term achievement.',
      '4. Working memory collapses under high anxiety—calm minds think faster.',
      '5. Emotional intelligence can be trained and improved at any age.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Emotional Intelligence (EQ)',
        definition: 'The capacity to recognize, understand, manage, and use emotions productively in oneself and in relationships.'
      },
      {
        term: 'Amygdala',
        definition: 'The brain’s ancient emotional alarm system responsible for fight-or-flight reactions.'
      },
      {
        term: 'Prefrontal Cortex',
        definition: 'The rational, executive center of the brain that manages planning, attention, and impulse regulation.'
      },
      {
        term: 'Flow',
        definition: 'A state of optimal cognitive absorption where emotions are fully harnessed in the service of performing and learning.'
      }
    ],
    questions: [
      {
        question: 'What is an "Amygdala Hijack"?',
        answer:
          'When an emotional trigger causes the amygdala to react impulsively with fight-or-flight emotions before the prefrontal cortex can process the situation rationally.'
      },
      {
        question: 'What are the five pillars of Emotional Intelligence?',
        answer:
          'Self-Awareness, Managing Emotions, Self-Motivation, Empathy, and Handling Relationships.'
      },
      {
        question: 'Why does chronic anxiety impair exam performance?',
        answer:
          'Because anxious thoughts occupy working memory in the prefrontal cortex, leaving insufficient mental capacity to process difficult questions.'
      }
    ],
    oneMinuteSummary:
      'Emotional Intelligence proves that self-awareness, impulse control, empathy, and relationship management are far more decisive for life success than raw IQ. By learning to tame the amygdala, practice delayed gratification, and listen with deep presence, students can navigate high-stress academic and professional environments with poise.'
  }
};
