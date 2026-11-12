import { BookVisualGuide } from '@/types/visuals';

export const wealthInvestingVisualGuides: Record<string, BookVisualGuide> = {
  'the-richest-man-in-babylon': {
    bookId: 'the-richest-man-in-babylon',
    slug: 'the-richest-man-in-babylon',
    bookTitle: 'The Richest Man in Babylon',
    introDescription: 'George S. Clason’s legendary parabolic financial wisdom from ancient Babylon: keeping a tenth of all you earn, putting gold to work, and guarding your principal.',
    diagrams: [
      {
        id: 'ten-percent-tithe-cashflow',
        title: 'The 10% Gold Rule: "A Part of All You Earn is Yours to Keep"',
        format: 'flowchart',
        badge: 'Ancient Wealth Flowchart',
        whatItRepresents: 'The fundamental cash flow distinction between paying everyone else first (landlords, cafes, merchants) versus retaining 10% of your earnings forever.',
        simpleDescription: 'Most people treat their entire paycheck as money to be handed over to others for living expenses. Wealth begins the exact day you decide that at least one-tenth of every rupee earned belongs to your future self.',
        studentExample: 'From an internship stipend of ₹15,000, immediately transfer ₹1,500 into an untouchable investment account before paying for food, rent, or weekend movies. Live on the remaining ₹13,500 without feeling deprived.',
        quickRevision: 'Pay yourself first. If you earn ten copper coins and spend only nine, your purse will immediately begin to fatten and attract more wealth.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Step 1: Gross Earnings Arrive',
              description: 'Whether it is a student stipend, freelancing gig, or salary, income enters your account.',
              tag: 'Inflow'
            },
            {
              stepNumber: 2,
              label: 'Step 2: The 10% Golden Tithe Deduction',
              description: 'Before paying any rent, subscriptions, or food bills, immediately skim 10% into a separate wealth accumulation fund.',
              tag: 'Non-Negotiable',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Automate 10% Transfer First',
                yesOutcome: 'Capital builds automatically; expenses naturally adjust to the remaining 90%.',
                noLabel: 'Attempt to Save Whatever is Left at Month-End',
                noOutcome: 'Parkinson’s Law strikes: expenses expand to consume 100% of income; savings = zero.'
              }
            },
            {
              stepNumber: 3,
              label: 'Step 3: Live Richly on the Remaining 90%',
              description: 'Control your necessary expenditures. Do not confuse essential needs with discretionary desires.',
              tag: 'Prudent Budgeting'
            },
            {
              stepNumber: 4,
              label: 'Step 4: Put Your Golden Slaves to Work',
              description: 'Invest your accumulated tenths into productive assets that produce golden offspring (compounding interest and dividends).',
              tag: 'Compounding Dynasty',
              outcome: 'Every coin becomes a golden worker laboring 24/7 to produce more wealth for your family.'
            }
          ]
        }
      },
      {
        id: 'seven-cures-for-lean-purse',
        title: 'The 7 Cures for a Lean Purse',
        format: 'mindmap',
        badge: 'Babylonian Principles Mind Map',
        whatItRepresents: 'Arkad’s seven core financial disciplines delivered to the impoverished citizens of Babylon to build enduring generational wealth.',
        simpleDescription: 'Enduring financial independence rests on seven simple, unwavering laws: saving 10%, budgeting, investing, guarding capital, owning a home, insuring the future, and increasing earning power.',
        studentExample: 'Instead of seeking get-rich-quick crypto schemes, a student saves 10% of their pocket money, takes free online certifications to increase earning ability (Cure 7), and consults seasoned mentors before investing (Cure 4).',
        quickRevision: 'Gold fleeth from him who would force it to impossible earnings or who followeth the alluring advice of tricksters and schemers.',
        mindmapData: {
          centralTheme: {
            label: 'The 7 Cures for a Lean Purse',
            description: 'Timeless principles to transform poverty into compounding wealth.'
          },
          branches: [
            {
              category: 'Accumulation & Budgeting',
              color: 'gold',
              nodes: [
                { label: 'Cure 1: Start Thy Purse to Fattening', description: 'Retain at least one-tenth of all you earn for your own future.' },
                { label: 'Cure 2: Control Thy Expenditures', description: 'Budget so that you have money to pay for necessities without touching your 10% gold.' }
              ]
            },
            {
              category: 'Multiplication & Defense',
              color: 'forest',
              nodes: [
                { label: 'Cure 3: Make Thy Gold Multiply', description: 'Put every coin to work so it may reproduce its kind and build an army of golden slaves.' },
                { label: 'Cure 4: Guard Thy Treasures from Loss', description: 'Invest only where the principal is safe and where wise mentors recommend.' }
              ]
            },
            {
              category: 'Security & Shelter',
              color: 'sage',
              nodes: [
                { label: 'Cure 5: Make of Thy Dwelling a Profitable Investment', description: 'Own the roof over your head to foster pride and reduce ongoing living expenses.' },
                { label: 'Cure 6: Insure a Future Income', description: 'Provide in advance for your family and your own old age when strength fails.' }
              ]
            },
            {
              category: 'Self-Mastery',
              color: 'amber',
              nodes: [
                { label: 'Cure 7: Increase Thy Ability to Earn', description: 'Cultivate your craft, study, master new skills, and act with integrity and self-respect.' }
              ]
            }
          ]
        }
      },
      {
        id: 'seventy-twenty-ten-debt-elimination',
        title: 'The 70 / 20 / 10 Debt Elimination System',
        format: 'comparison',
        badge: 'Financial Restructuring Matrix',
        whatItRepresents: 'Arkad’s ancient Babylonian debt recovery formula inscribed on clay tablets: live on 70%, pay down debts with 20%, and keep 10% for wealth.',
        simpleDescription: 'Most indebted people make the mistake of using all surplus money to pay off debt, leaving zero savings and feeling like slaves. The 70/20/10 rule builds self-worth while steadily extinguishing all debts.',
        studentExample: 'A graduate with education loans earning ₹30,000/mo budgets ₹21,000 (70%) for food/rent, uses ₹6,000 (20%) to pay down the bank loan systematically, and keeps ₹3,000 (10%) in their compounding wealth account.',
        quickRevision: 'Never stop paying yourself first, even in debt. Retaining 10% maintains your dignity and dignity breaks the psychology of poverty.',
        comparisonData: {
          sideA: {
            name: 'The 70/20/10 Babylonian Architecture',
            subtitle: 'Honorable Repayment & Simultaneous Growth',
            badge: 'Sovereign Path',
            colorTheme: 'forest',
            traits: [
              { point: '70% Allocation', explanation: 'Supports a dignified, frugal lifestyle: food, shelter, clothing, and simple comforts.' },
              { point: '20% Allocation', explanation: 'Divided among all creditors proportionally to systematically eliminate liabilities.' },
              { point: '10% Allocation', explanation: 'Retained 100% in gold/investments: builds an indestructible safety cushion from Day 1.' },
              { point: 'Psychological State', explanation: 'You feel wealthy and proud because your savings account is growing while debt shrinks.' },
              { point: 'End Outcome', explanation: 'Zero debt and a substantial mountain of compounding gold waiting when debt is cleared.' }
            ]
          },
          sideB: {
            name: 'The Desperation Debt Cycle',
            subtitle: '100% Squeeze & Zero Personal Savings',
            badge: 'Defeated Mindset',
            colorTheme: 'amber',
            traits: [
              { point: '70% Allocation', explanation: 'Erratic spending without a defined budget, leading to constant cash shortfalls.' },
              { point: '20% Allocation', explanation: 'Random payments to whoever screams the loudest, leaving other creditors furious.' },
              { point: '10% Allocation', explanation: 'Zero saved. "I can’t save until all debts are paid off" mindset.' },
              { point: 'Psychological State', explanation: 'Feels like an indentured servant; zero emergency cushion leads to taking new high-interest debt.' },
              { point: 'End Outcome', explanation: 'Years of suffering end with zero assets; any minor emergency plunges you straight back into debt.' }
            ]
          },
          verdict: 'The 70/20/10 plan proves that an honorable plan and self-respect can dissolve any mountain of debt while establishing a wealthy foundation.'
        }
      }
    ]
  },

  'think-and-grow-rich': {
    bookId: 'think-and-grow-rich',
    slug: 'think-and-grow-rich',
    bookTitle: 'Think and Grow Rich',
    introDescription: 'Napoleon Hill’s 20-year study of 500 self-made magnates, distilling the philosophy of burning desire, autosuggestion, the Mastermind, and overcoming fear.',
    diagrams: [
      {
        id: 'six-steps-burning-desire',
        title: 'The 6 Steps from Burning Desire to Physical Reality',
        format: 'flowchart',
        badge: 'Transmutation Flowchart',
        whatItRepresents: 'Hill’s exact formula for transmuting a definite mental desire for wealth into its physical and financial equivalent.',
        simpleDescription: 'Wishing for riches brings no fortune. Only a definite purpose backed by a burning obsession, clear deadlines, concrete value creation, and daily autosuggestion produces tangible results.',
        studentExample: 'A student does not say "I want to be rich." They write: "By December 2027, I will accumulate ₹10,00,000 by building high-ticket AI automation workflows for local businesses. I will work 15 hours every week and read my statement aloud twice daily."',
        quickRevision: 'Definiteness of purpose is the starting point of all achievement. Weak desires bring weak results, just as a small fire creates little heat.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Step 1: Fix the Exact Amount',
              description: 'Fix in your mind the exact amount of money or academic goal you desire. It is not sufficient merely to say "I want plenty of money."',
              tag: 'Definiteness'
            },
            {
              stepNumber: 2,
              label: 'Step 2: Determine What You Will Give in Return',
              description: 'Realize there is no such reality as "something for nothing." Exactly what service, skill, or value will you deliver in exchange?',
              tag: 'Value Exchange'
            },
            {
              stepNumber: 3,
              label: 'Step 3: Establish a Definite Calendar Deadline',
              description: 'Set a precise date when you intend to possess the money or achieve the objective.',
              tag: 'Time Anchor',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Commit to Written Plan & Daily Action',
                yesOutcome: 'Subconscious mind accepts the reality and generates breakthrough intuitive ideas.',
                noLabel: 'Leave Plan Vague & Undated',
                noOutcome: 'Remains an idle daydream with zero real-world execution.'
              }
            },
            {
              stepNumber: 4,
              label: 'Step 4 & 5: Create a Practical Plan & Write Clear Statement',
              description: 'Begin at once, whether you feel ready or not, to put this plan into action. Write out a concise statement of the entire vision.',
              tag: 'Written Blueprint'
            },
            {
              stepNumber: 5,
              label: 'Step 6: Read Aloud Twice Daily (Autosuggestion)',
              description: 'Read your written statement aloud night and morning. See, feel, and believe yourself already in possession of the achievement.',
              tag: 'Subconscious Reprogramming',
              outcome: 'Faith and obsessive focus align your conscious and subconscious actions to attract necessary resources.'
            }
          ]
        }
      },
      {
        id: 'mastermind-alliance-synergy',
        title: 'The Mastermind Alliance Synergy Concept',
        format: 'concept-diagram',
        badge: 'Synergy Architecture',
        whatItRepresents: 'Hill’s principle that two or more minds harmoniously working toward a definite purpose create a psychic third mind of superhuman power.',
        simpleDescription: 'No single human possesses sufficient experience, education, and native ability to achieve great wealth alone. Surrounding yourself with a complementary mastermind alliance multiplies creative capacity exponentially.',
        studentExample: 'Instead of studying alone in isolation, four students form a mastermind: one excels at system math, one is an expert coder, one understands UI design, and one is great at pitching. Together they build an award-winning hackathon venture.',
        quickRevision: 'Coordination of knowledge and effort in a spirit of harmony between two or more people creates power that no isolated individual can match.',
        conceptData: {
          coreConcept: 'The Mastermind Multiplier Principle',
          components: [
            {
              name: 'Complementary Skill Diversity',
              role: 'The Intellectual Bedrock',
              details: 'Assemble individuals who possess the exact technical, creative, and financial skills that you lack.',
              connectionToCore: 'Fills personal blind spots and eliminates operational bottlenecks.'
            },
            {
              name: 'Absolute Spirit of Harmony',
              role: 'The Psychological Catalyst',
              details: 'The alliance cannot function under ego rivalry or jealousy; all members must genuinely want each other to win.',
              connectionToCore: 'Prevents emotional friction from dissipating collective creative energy.'
            },
            {
              name: 'The "Third Mind" Phenomenon',
              role: 'Collective Intelligence',
              details: 'Just as a collection of electric batteries provides more power than a single cell, merged minds generate ideas none could produce alone.',
              connectionToCore: 'Sparks intuitive breakthroughs and rapid problem-solving.'
            },
            {
              name: 'Strict Accountability & Regular Rhythm',
              role: 'The Execution Engine',
              details: 'Meet at least once or twice weekly to review goals, discuss obstacles, and assign concrete commitments.',
              connectionToCore: 'Maintains unstoppable momentum and mutual integrity.'
            }
          ],
          feedbackLoop: 'Audit your closest 5 associations. If they drain your ambition or indulge in cynicism, deliberately form a new Mastermind circle of high-character, driven peers.'
        }
      },
      {
        id: 'conquering-six-ghosts-of-fear',
        title: 'Conquering the 6 Ghosts of Fear',
        format: 'mindmap',
        badge: 'Mental Fortress Mind Map',
        whatItRepresents: 'Hill’s identification of the six fundamental fears that paralyze human initiative and how to systematically eliminate them.',
        simpleDescription: 'Fears are nothing more than states of mind. Before you can achieve lasting success, you must clear your mental channel of the six basic phobias: Poverty, Criticism, Ill Health, Loss of Love, Old Age, and Death.',
        studentExample: 'The fear of criticism prevents most students from asking questions in class or launching their creative projects. Recognizing that criticism is inevitable frees you to build in public and learn rapidly.',
        quickRevision: 'Fear is the parent of indecision, doubt, and procrastination. Replace fear with definite, immediate physical action.',
        mindmapData: {
          centralTheme: {
            label: 'The 6 Ghosts of Fear',
            description: 'The psychological gatekeepers that prevent human greatness.'
          },
          branches: [
            {
              category: 'Fear of Poverty & Failure',
              color: 'amber',
              nodes: [
                { label: 'Symptoms', description: 'Chronic procrastination, risk aversion, pessimism, and envy of others.' },
                { label: 'The Antidote', description: 'Reach a firm decision that whatever hardships life brings, you can earn your bread through honest effort.' }
              ]
            },
            {
              category: 'Fear of Criticism',
              color: 'forest',
              nodes: [
                { label: 'Symptoms', description: 'Worrying what peers/family think, suppressing bold ideas, conforming to the crowd.' },
                { label: 'The Antidote', description: 'Recognize that critics never build monuments; execute your vision with relentless conviction.' }
              ]
            },
            {
              category: 'Fear of Ill Health & Old Age',
              color: 'sage',
              nodes: [
                { label: 'Symptoms', description: 'Hypochondria, imagining ailments, worrying about diminishing faculties.' },
                { label: 'The Antidote', description: 'Maintain daily physical fitness, clean nutrition, and view maturity as wisdom.' }
              ]
            },
            {
              category: 'Fear of Loss of Love & Death',
              color: 'gold',
              nodes: [
                { label: 'Symptoms', description: 'Jealousy, suspicion of loved ones, paralyzing dread of the inevitable end.' },
                { label: 'The Antidote', description: 'Love freely without possessiveness, accept death as a natural law, and live fully today.' }
              ]
            }
          ]
        }
      }
    ]
  },

  'the-intelligent-investor': {
    bookId: 'the-intelligent-investor',
    slug: 'the-intelligent-investor',
    bookTitle: 'The Intelligent Investor',
    introDescription: 'Benjamin Graham’s definitive value investing treatise: distinguishing investment from speculation, mastering Mr. Market, and enforcing a margin of safety.',
    diagrams: [
      {
        id: 'investor-vs-speculator-matrix',
        title: 'The Intelligent Investor vs The Speculator',
        format: 'comparison',
        badge: 'Fundamental Philosophy Matrix',
        whatItRepresents: 'Graham’s foundational definition of an investment operation versus reckless market gambling.',
        simpleDescription: 'An investment operation is one which, upon thorough analysis, promises safety of principal and an adequate return. Operations not meeting these requirements are speculative.',
        studentExample: 'Analyzing a blue-chip company’s 10-year cash flows, balance sheet debt, and dividend consistency is an investment operation. Buying an unproven stock because an influencer on Twitter said it’s going to "10x next week" is pure speculation.',
        quickRevision: 'The intelligent investor looks at a stock as a fractional ownership in an operating business. The speculator looks at a ticker symbol hoping someone will pay more for it tomorrow.',
        comparisonData: {
          sideA: {
            name: 'The Intelligent Investor',
            subtitle: 'Business Ownership & Intrinsic Value',
            badge: 'Calculated Value',
            colorTheme: 'forest',
            traits: [
              { point: 'Primary Focus', explanation: 'Underlying business economics: earnings, cash flow, debt-to-equity ratio, and competitive moats.' },
              { point: 'View of Price Swings', explanation: 'Market volatility is a servant, not a master: buys when prices are depressed, ignores panic.' },
              { point: 'Safety Requirement', explanation: 'Demands an ironclad Margin of Safety: purchasing assets at a steep discount to intrinsic value.' },
              { point: 'Time Horizon', explanation: 'Multi-year to multi-decade holding periods; lets the business compounding engine do the work.' },
              { point: 'Emotional State', explanation: 'Patient, emotionally detached, calm during crashes, disciplined during market manias.' }
            ]
          },
          sideB: {
            name: 'The Speculator / Trader',
            subtitle: 'Price Action & Greater Fool Theory',
            badge: 'High-Risk Gambling',
            colorTheme: 'amber',
            traits: [
              { point: 'Primary Focus', explanation: 'Short-term price charts, breaking news headlines, social media sentiment, and hype.' },
              { point: 'View of Price Swings', explanation: 'Addicted to daily fluctuations; suffers intense dopamine spikes and paralyzing dread.' },
              { point: 'Safety Requirement', explanation: 'Zero margin of safety; relies on finding a "greater fool" to buy at an even higher valuation.' },
              { point: 'Time Horizon', explanation: 'Minutes, days, or weeks; high portfolio turnover with excessive transaction fees and taxes.' },
              { point: 'Emotional State', explanation: 'Euphoric during bull runs, completely devastated during inevitable crashes.' }
            ]
          },
          verdict: 'Speculation is exciting, but investing should be like watching paint dry or watching grass grow. If you want excitement, take ₹5,000 to a casino.'
        }
      },
      {
        id: 'mr-market-mood-swings',
        title: 'The Allegory of Mr. Market: Servant, Not Master',
        format: 'flowchart',
        badge: 'Market Psychology Flowchart',
        whatItRepresents: 'Graham’s famous allegory of Mr. Market, the manic-depressive business partner who knocks on your door every day offering to buy or sell shares.',
        simpleDescription: 'Mr. Market’s quotes are not a measure of what your business is truly worth; they are merely an emotional offer. When he is manic, sell to him; when he is depressed, buy from him; otherwise, ignore him completely.',
        studentExample: 'During a market crash, quality stocks drop 30% along with garbage stocks. The emotional student panic-sells at the bottom. The intelligent investor recognizes that Mr. Market is having an irrational tantrum and happily buys excellent companies at a deep discount.',
        quickRevision: 'Price is what you pay; value is what you get. You are neither right nor wrong because the crowd disagrees with you. You are right because your data and reasoning are right.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Step 1: Mr. Market Knocks Daily',
              description: 'The stock exchange opens every weekday morning, quoting instantaneous prices for thousands of businesses.',
              tag: 'Market Mechanism'
            },
            {
              stepNumber: 2,
              label: 'Step 2: Euphoric Mood Swing (Bull Market Mania)',
              description: 'Mr. Market is ecstatic: he quotes insanely high prices, ignoring risks, balance sheet debt, and economic reality.',
              tag: 'Greed Extreme',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Sell Overvalued Holdings to Him or Hold Cash',
                yesOutcome: 'Lock in extraordinary gains and build dry powder for future crashes.',
                noLabel: 'Buy at the Peak Out of FOMO',
                noOutcome: 'Become the last buyer holding overvalued assets before the crash.'
              }
            },
            {
              stepNumber: 3,
              label: 'Step 3: Depressive Mood Swing (Bear Market Panic)',
              description: 'A crisis hits. Mr. Market is paralyzed with terror, quoting ridiculously low prices for profitable, cash-flowing companies.',
              tag: 'Fear Extreme'
            },
            {
              stepNumber: 4,
              label: 'Step 4: Exploit His Desperation with Margin of Safety',
              description: 'Step up and purchase rock-solid businesses for 50 cents on the dollar, holding them calmly until sanity returns.',
              tag: 'Value Capture',
              outcome: 'Superior long-term compounding achieved by treating the market as your servant, never your master.'
            }
          ]
        }
      },
      {
        id: 'margin-of-safety-infographic',
        title: 'The Margin of Safety: The Central Secret of Value',
        format: 'infographic',
        badge: 'Risk Engineering Infographic',
        whatItRepresents: 'Graham’s core concept: buying an asset at a substantial discount below its conservative intrinsic value to absorb unexpected disasters.',
        simpleDescription: 'Just as civil engineers build a bridge capable of carrying 30,000 pounds even though only 10,000-pound trucks will drive over it, intelligent investors insist on a wide safety margin against errors in judgment and unpredictable future shocks.',
        studentExample: 'If a company’s conservative liquidation value of land, inventory, and cash is ₹100 per share, purchasing it at ₹60 provides a 40% Margin of Safety. Even if future business slows down, your downside is strictly protected.',
        quickRevision: 'The function of the margin of safety is, in essence, that of rendering unnecessary an accurate estimate of the future.',
        infographicData: {
          items: [
            {
              highlight: 'Discount to Intrinsic Value',
              title: 'The Bridge Buffer Principle',
              takeaway: 'Never pay 100% of fair value. Buying at a 30% discount guarantees that even if your cash-flow projections are 20% too optimistic, you still do not lose principal.',
              iconType: 'shield'
            },
            {
              highlight: 'Safety of Principal First',
              title: 'Rule 1: Never Lose Capital',
              takeaway: 'A 50% loss requires a 100% gain just to get back to even. Protecting capital from catastrophic permanent loss is the prerequisite to all compounding.',
              iconType: 'target'
            },
            {
              highlight: 'Dollar-Cost Averaging',
              title: 'Automated Humility',
              takeaway: 'Investing a fixed sum regularly into broad market index funds removes human emotional timing, buying more shares when prices are cheap and fewer when high.',
              iconType: 'trending-up'
            },
            {
              highlight: 'The Defensive Portfolio',
              title: 'Equities & High-Grade Bonds',
              takeaway: 'Graham recommended keeping 25% to 75% in safe fixed income and the balance in equities, rebalancing when market swings shift the proportions.',
              iconType: 'award'
            }
          ]
        }
      }
    ]
  },

  'lets-talk-money': {
    bookId: 'lets-talk-money',
    slug: 'lets-talk-money',
    bookTitle: "Let's Talk Money",
    introDescription: 'Monika Halan’s practical financial roadmap tailored for the Indian landscape: building your three-bank-account fortress, unmasking toxic insurance products, and creating wealth without stress.',
    diagrams: [
      {
        id: 'three-bank-account-system',
        title: 'Monika Halan’s Three-Bank-Account System',
        format: 'flowchart',
        badge: 'Cash Flow Architecture',
        whatItRepresents: 'The elegant cash-flow piping system that automates savings, isolates living expenses, and creates guilt-free spending without endless spreadsheets.',
        simpleDescription: 'Never keep all your money in a single savings account where it gets mindlessly spent. Split your financial life into: (1) Income & Bill Account, (2) Spend / Enjoy Account, and (3) Invest Account.',
        studentExample: 'A graduate receives ₹40,000 in Account 1 (Income). On the 1st of the month, ₹10,000 flows automatically to Account 3 (Mutual Fund SIPs) and ₹15,000 flows to Account 2 (Debit card for food, cafes, and personal outings). Fixed rent of ₹15,000 is auto-debited from Account 1.',
        quickRevision: 'Automate your financial plumbing on salary day. Once investments and bills are paid, you can spend every rupee in your Spend Account with zero guilt.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Account 1: The Income & Fixed Bills Account',
              description: 'All salary, stipends, and gig payments land here. All non-negotiable fixed bills (rent, utilities, phone bills, loan EMIs) are auto-debited here.',
              tag: 'The Inflow Hub'
            },
            {
              stepNumber: 2,
              label: 'Automated 1st-of-Month Transfers',
              description: 'Before you can touch a single rupee, automated Standing Instructions (SIs) execute simultaneously.',
              tag: 'Automated Piping',
              isDecision: true,
              decisionPath: {
                yesLabel: 'SIPs & Spend Transfers Execute Automatically',
                yesOutcome: 'Savings are secured first; personal spending has a strict physical ceiling.',
                noLabel: 'Rely on Manual Discipline at Month End',
                noOutcome: 'Money evaporates into dining out and online shopping; zero savings.'
              }
            },
            {
              stepNumber: 3,
              label: 'Account 2: The Spend / Enjoy Account (Debit Card Only)',
              description: 'A fixed monthly allowance transferred for groceries, movies, dining out, and shopping. When the balance hits zero, you stop spending until next month.',
              tag: 'Guilt-Free Life'
            },
            {
              stepNumber: 4,
              label: 'Account 3: The Invest Account (Wealth Engine)',
              description: 'Feeds your emergency liquid fund, equity mutual fund SIPs, PPF, and long-term retirement accounts. Completely detached from daily debit cards.',
              tag: 'Compounding Fortress',
              outcome: 'Effortless financial discipline without micromanaging daily receipts.'
            }
          ]
        }
      },
      {
        id: 'term-insurance-vs-endowment-ulip',
        title: 'Pure Term Insurance vs Toxic Endowment / ULIP Plans',
        format: 'comparison',
        badge: 'Indian Financial Literacy Matrix',
        whatItRepresents: 'Exposes why mixing insurance with investment in traditional endowment and ULIP policies yields dismal 4–5% returns while leaving families dangerously underinsured.',
        simpleDescription: 'Never mix insurance with investment. Buy pure term life insurance to get massive ₹1 Crore+ cover at tiny premiums, and invest the difference directly into low-cost equity index mutual funds.',
        studentExample: 'An insurance agent pitches an endowment policy: pay ₹50,000/yr for 20 years to get ₹15 Lakh life cover and ₹20 Lakh payout at maturity (a terrible 5% return). Instead: buy a ₹1 Crore pure term policy for just ₹8,000/yr, and invest the remaining ₹42,000/yr in an index fund yielding ₹1.5 Crores at 12%!',
        quickRevision: 'Insurance is for risk protection; mutual funds are for wealth generation. Mixing them gives you inadequate protection and pitiful returns.',
        comparisonData: {
          sideA: {
            name: 'Pure Term Insurance + Mutual Fund SIP',
            subtitle: 'Clear Separation of Protection & Growth',
            badge: 'Smart Financial Architecture',
            colorTheme: 'forest',
            traits: [
              { point: 'Life Cover Provided', explanation: 'Massive coverage: ₹1 Crore to ₹2 Crore cover for your family at young age.' },
              { point: 'Annual Premium Cost', explanation: 'Extremely affordable: only ₹8,000 to ₹12,000 per year for a healthy 25-year-old.' },
              { point: 'Investment Return', explanation: 'The remaining surplus invested in diversified index funds earns 11–13% historically.' },
              { point: 'Transparency & Liquidity', explanation: '100% transparent: zero lock-in on investments, daily NAV tracking, withdraw anytime.' },
              { point: 'Net Wealth after 25 Years', explanation: 'Creates multi-crore generational corpus while keeping family completely protected.' }
            ]
          },
          sideB: {
            name: 'Endowment Policies / Traditional ULIPs',
            subtitle: 'Toxic Blend of Low Cover & Low Returns',
            badge: 'Agent Commission Trap',
            colorTheme: 'amber',
            traits: [
              { point: 'Life Cover Provided', explanation: 'Grossly inadequate: usually only 10 times the annual premium (e.g. ₹5 Lakh cover for ₹50k premium).' },
              { point: 'Annual Premium Cost', explanation: 'Heavy burden: ₹50,000 to ₹1,00,000 every year locked in for 15–20 years.' },
              { point: 'Investment Return', explanation: 'Dismal 4% to 5.5% annual return, barely beating bank savings and eaten alive by inflation.' },
              { point: 'Transparency & Liquidity', explanation: 'Opaque bonus calculations, high hidden agent commissions, massive penalties for early surrender.' },
              { point: 'Net Wealth after 25 Years', explanation: 'Maturity payout buys far less than expected due to decades of unchecked inflation.' }
            ]
          },
          verdict: 'Buy term insurance for pure peace of mind. Invest in equity index funds for wealth. Keep the two strictly segregated for life.'
        }
      },
      {
        id: 'financial-fortress-pyramid',
        title: 'The Indian Financial Fortress Hierarchy',
        format: 'infographic',
        badge: 'Financial Health Hierarchy',
        whatItRepresents: 'Halan’s step-by-step structural order of building financial security before taking risk in stock markets.',
        simpleDescription: 'You cannot build a sturdy house on quicksand. Establish your emergency liquid fund and medical insurance before you invest a single rupee into stocks or crypto.',
        studentExample: 'Before investing in mid-cap stocks, a college graduate saves ₹1,00,000 in an emergency sweep-in fixed deposit and purchases a ₹5 Lakh standalone health insurance policy. When sudden hospitalization strikes, their investments remain 100% untouched.',
        quickRevision: 'Emergency fund and health insurance are your financial seatbelt. Only when the seatbelt is clicked should you step on the gas pedal of equity investing.',
        infographicData: {
          items: [
            {
              highlight: '6 Months Expenses',
              title: 'Foundation: Emergency Liquid Fund',
              takeaway: 'Keep 6 months of living expenses parked in a safe combination of high-interest savings accounts and sweep-in fixed deposits. Never touch this for vacations or gadgets.',
              iconType: 'shield'
            },
            {
              highlight: 'Standalone Health Cover',
              title: 'Protection: Medical Insurance',
              takeaway: 'A single hospital stay can wipe out years of stock market savings. Do not rely solely on corporate employer cover; buy an independent ₹5L–₹10L personal health policy early.',
              iconType: 'target'
            },
            {
              highlight: 'Pure Term Cover',
              title: 'Family Defense: Life Insurance',
              takeaway: 'If anyone financially depends on your earnings (parents, spouse, children), buy a pure term cover equal to 10–15 times your annual income.',
              iconType: 'award'
            },
            {
              highlight: 'Equities & PPF',
              title: 'The Peak: Long-Term Compounding',
              takeaway: 'Only after the foundation and defense layers are solidly built should you channel surplus cash into broad-market index funds, PPF, and long-term equities.',
              iconType: 'trending-up'
            }
          ]
        }
      }
    ]
  },

  'the-almanack-of-naval-ravikant': {
    bookId: 'the-almanack-of-naval-ravikant',
    slug: 'the-almanack-of-naval-ravikant',
    bookTitle: 'The Almanack of Naval Ravikant',
    introDescription: 'Naval Ravikant’s modern guide to wealth creation without luck, permissionless leverage, building specific knowledge, and inner peace as an unconditioned skill.',
    diagrams: [
      {
        id: 'four-forms-of-leverage',
        title: 'The 4 Forms of Leverage: Permissioned vs Permissionless',
        format: 'comparison',
        badge: 'Modern Leverage Matrix',
        whatItRepresents: 'The evolution of human leverage from old permissioned forms (labor, capital) to modern permissionless forms (code, media).',
        simpleDescription: 'You’re not going to get rich renting out your time. You must own equity and apply leverage. The newest and greatest forms of leverage—code and media—require zero permission from gatekeepers and work for you while you sleep.',
        studentExample: 'Instead of tutoring students 1-on-1 for ₹500/hour (zero leverage), a student records a comprehensive online video masterclass on YouTube (Media leverage) and builds an automated practice quiz web app (Code leverage), serving 50,000 learners simultaneously with zero incremental cost.',
        quickRevision: 'Code and media are permissionless leverage. They are the leverage behind the newly rich. You can write software and create content that works for you while you sleep.',
        comparisonData: {
          sideA: {
            name: 'Permissionless Leverage (Code & Media)',
            subtitle: 'Products with Zero Marginal Cost of Replication',
            badge: 'Infinite Asymmetry',
            colorTheme: 'forest',
            traits: [
              { point: 'Permission Required', explanation: 'Zero permission needed: anyone with a laptop and internet connection can publish code or content.' },
              { point: 'Cost of Extra Unit', explanation: 'Zero marginal cost: whether 10 people or 10 million people download your app or read your essay, your cost is the same.' },
              { point: 'Distribution Reach', explanation: 'Global instant distribution 24/7 across the internet.' },
              { point: 'Gatekeepers', explanation: 'No banks, bosses, or television studio executives can block you from uploading.' },
              { point: 'Historical Exemplar', explanation: 'Software developers (Satoshi Nakamoto, Linus Torvalds), digital creators, podcasters, authors.' }
            ]
          },
          sideB: {
            name: 'Permissioned Leverage (Labor & Capital)',
            subtitle: 'Old-School Industrial Leverage',
            badge: 'High-Friction Coordination',
            colorTheme: 'amber',
            traits: [
              { point: 'Permission Required', explanation: 'High permission: people must choose to follow you; investors/banks must approve funding.' },
              { point: 'Cost of Extra Unit', explanation: 'Linear cost: managing 500 employees requires immense HR bureaucracy, payroll, and political overhead.' },
              { point: 'Distribution Reach', explanation: 'Limited by physical geography, legal jurisdictions, and human management capacity.' },
              { point: 'Gatekeepers', explanation: 'Venture capitalists, commercial banks, regulatory boards, and corporate hierarchies.' },
              { point: 'Historical Exemplar', explanation: 'Factory owners, corporate CEOs, private equity financiers, commercial real estate developers.' }
            ]
          },
          verdict: 'Students should master code or media. An army of software code and digital content works tirelessly for you around the globe while you sleep.'
        }
      },
      {
        id: 'specific-knowledge-intersection',
        title: 'Specific Knowledge: The Intersection of Curiosity and Obsession',
        format: 'concept-diagram',
        badge: 'Career Moat Architecture',
        whatItRepresents: 'Naval’s definition of specific knowledge: skills that cannot be taught in a standard school curriculum, but can only be learned through apprenticeship and genuine obsession.',
        simpleDescription: 'If society can train someone to do your job, society will train someone and replace you, or automate you. Specific knowledge is found by following your genuine intellectual curiosity and passion rather than whatever is currently lucrative.',
        studentExample: 'A student who has been obsessively tinkering with synthesizer audio synthesis, reverse-engineering vintage game audio, and writing digital signal processing code since age 14 has specific knowledge that no 6-week boot camp can mass-produce.',
        quickRevision: 'Building specific knowledge will feel like play to you, but will look like work to others. When you love the craft itself, nobody can compete with you.',
        conceptData: {
          coreConcept: 'The Anatomy of Specific Knowledge',
          components: [
            {
              name: '1. Genuine Intellectual Obsession',
              role: 'The Authentic Spark',
              details: 'Skills and topics you naturally pursued as a teenager without anyone forcing you: tinkering with electronics, writing, storytelling, community building.',
              connectionToCore: 'Because it feels like effortless play to you, you can out-practice and out-endure anyone doing it purely for a paycheck.'
            },
            {
              name: '2. High Technical / Creative Complexity',
              role: 'The Automation Entry Barrier',
              details: 'Combines deep technical capability, artistic sensibility, and edge-case judgment that cannot be distilled into a standard training manual.',
              connectionToCore: 'Protects you from being commoditized or easily replaced by entry-level labor or standard AI scripts.'
            },
            {
              name: '3. Personal Accountability (Your Name)',
              role: 'The Trust Multiplier',
              details: 'Embrace accountability and take business risks under your own name. Society rewards you with responsibility, equity, and leverage.',
              connectionToCore: 'Builds a durable personal reputation that attracts high-value co-founders and investors.'
            },
            {
              name: '4. Combining with Leverage',
              role: 'The Scale Engine',
              details: 'Apply code, media, or capital to your specific knowledge to distribute your unique solution to the entire planet.',
              connectionToCore: 'Transforms personal craft into uncapped financial freedom.'
            }
          ],
          feedbackLoop: 'Stop asking: "What job pays the most right now?" Ask: "What feels like effortless play to me that creates genuine value for others?"'
        }
      },
      {
        id: 'the-happiness-equation',
        title: 'The Happiness Equation: Peace as an Internal Discipline',
        format: 'flowchart',
        badge: 'Philosophical Blueprint Flowchart',
        whatItRepresents: 'Naval’s insight that happiness is not something you acquire or achieve, but the absence of internal desire and mental chatter.',
        simpleDescription: 'Desire is a contract that you make with yourself to be unhappy until you get what you want. True peace is the state when nothing is missing, achieved by being present in the moment.',
        studentExample: 'Instead of thinking: "I will finally be happy once I graduate, get that tech job, and buy that apartment," a student practices being fully present with their current textbook and cup of tea, realizing peace is available right now.',
        quickRevision: 'Happiness is a choice you make and a skill you develop. You can choose to be happy today by recognizing that the present moment is all there ever is.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Step 1: The Emergence of a Desire',
              description: 'A thought arises: "I need this new gadget, this validation, or this status to finally be complete and satisfied."',
              tag: 'Mental Craving'
            },
            {
              stepNumber: 2,
              label: 'Step 2: The Unconscious Contract',
              description: 'You silently sign a psychological contract guaranteeing dissatisfaction, restlessness, and anxiety until that external condition is fulfilled.',
              tag: 'Internal Friction',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Select Only 1 Overriding Desire at a Time',
                yesOutcome: 'Focus energy without cluttering mind with 50 competing neurotic wants.',
                noLabel: 'Harbor Endless Unchecked Desires',
                noOutcome: 'Permanent mental chatter, chronic anxiety, and never feeling content.'
              }
            },
            {
              stepNumber: 3,
              label: 'Step 3: The Illusory Payoff',
              description: 'You acquire the object or achieve the milestone. For 10 minutes you feel relief—not because of the object, but because the nagging desire momentarily shut off.',
              tag: 'Hedonic Reset'
            },
            {
              stepNumber: 4,
              label: 'Step 4: Cultivating Unconditional Presence',
              description: 'Realize that happiness is the natural default baseline of the mind when you remove the feeling that something is missing.',
              tag: 'Sovereign Peace',
              outcome: 'A calm, clear mind that enjoys high performance in the world without being emotionally chained to outcomes.'
            }
          ]
        }
      }
    ]
  }
};
