import { NonFictionLearningGuide } from '@/types/learning';

export const richDadPoorDadGuide: NonFictionLearningGuide = {
  id: 'guide-rich-dad-poor-dad',
  bookId: 'rich-dad-poor-dad',
  type: 'nonfiction',
  introduction:
    'Rich Dad Poor Dad by Robert T. Kiyosaki is one of the most influential personal finance books ever published. It challenges standard academic assumptions that high grades and corporate career ladders guarantee financial independence. Kiyosaki contrasts the mindsets of his biological father ("Poor Dad", an educated university professor and state superintendent of education who died broke) with his childhood friend’s father ("Rich Dad", an entrepreneur who never finished eighth grade yet built a Hawaiian business empire). For students, this guide strips away confusing financial jargon and equips you with the foundational rules of cash flow, asset ownership, and money psychology.',
  overview: {
    whatItIsAbout:
      'The book contrasts two opposing philosophies regarding money, work, and life choices. It demonstrates why middle-class families often struggle financially despite earning decent salaries, and outlines the specific financial education required to escape the lifelong "Rat Race".',
    problemAddressed:
      'Modern school curricula teach students how to work for money as employees or specialized professionals, but fail completely to teach how money works, how taxation operates, or how capital can be put to work independently.',
    centralArgument:
      'Financial freedom is not determined by how much money you earn, but by how much money you retain, invest in income-generating assets, and protect from taxation and inflation. Working for a paycheck is a short-term solution to a long-term problem.',
    majorThemes: [
      'The Cash Flow Quadrant & The Rat Race',
      'The Definitive Difference Between Assets and Liabilities',
      'Mind Your Own Business: Building an Asset Column',
      'The Role of Corporate Structures and Tax Intelligence',
      'Overcoming the Five Financial Roadblocks: Fear, Cynicism, Laziness, Bad Habits, and Arrogance'
    ],
    connectionsBetweenIdeas:
      'Kiyosaki begins with the emotional foundation (fear and greed driving employee dependence), shifts to accounting fundamentals (the asset/liability cash flow balance sheet), expands to legal and tax leverage (corporations protecting capital), and concludes with behavioral psychology (overcoming fear of failure to take calculated entrepreneurial risks).',
    whatStudentsUnderstand:
      'After studying this guide, students will look at every dollar not as currency to consume, but as a financial employee capable of working 24/7 to generate future freedom and resilience.'
  },
  concepts: [
    {
      name: 'Functional Definition of Assets vs. Liabilities',
      simpleExplanation:
        'Kiyosaki rejects traditional accounting definitions. In his framework: An Asset puts money into your pocket without your physical labor. A Liability takes money out of your pocket continuously.',
      whyItMatters:
        'Most people believe their primary home, new car, or smartphone are assets. In reality, mortgages, insurance, gas, and maintenance make them cash-draining liabilities unless they generate net cash flow.',
      everydayExample:
        'Buying a ₹1,00,000 / $1,200 gaming laptop that sits in your dorm room losing 40% of its resale value every year is a liability. Using that laptop to build a monetized freelance software tool or video editing service converts your equipment into a cash-generating asset.',
      collegeStudentApplication:
        'Before spending your stipend or part-time earnings on depreciating consumer electronics, ask: "Will this item generate cash or drain cash next month?" Prioritize purchasing income-producing assets (like low-cost index funds or fractional shares) first.',
      difficultTerms: [
        {
          term: 'Depreciation',
          definition: 'The reduction in the financial value of an asset over time due to wear, tear, or obsolescence.'
        },
        {
          term: 'Cash Flow',
          definition: 'The net amount of actual cash moving into and out of your bank account after all expenses are deducted.'
        }
      ]
    },
    {
      name: 'The Rat Race & Paycheck Dependency',
      simpleExplanation:
        'The cyclical trap where an employee studies hard, lands a job, earns more money, increases their lifestyle expenses proportionally (lifestyle creep), incurs higher debt and taxes, and must work even harder to service those obligations.',
      whyItMatters:
        'Without financial education, higher income does not solve financial stress—it merely amplifies expenses and locks you into career choices driven by panic rather than passion.',
      everydayExample:
        'A college graduate lands a high-paying junior analyst role earning ₹10 LPA / $80,000. Instead of investing the surplus, they immediately finance a brand new luxury sedan and lease an expensive apartment. Despite doubling their salary from student days, their monthly savings remain zero.',
      collegeStudentApplication:
        'Live below your means during your twenties. When you receive your first internship stipend or full-time sign-on bonus, maintain your student frugal baseline and route the surplus into compounding investments before upgrading your lifestyle.',
      difficultTerms: [
        {
          term: 'Lifestyle Creep',
          definition: 'The tendency to increase spending as your income increases, keeping your savings rate stagnant.'
        }
      ]
    },
    {
      name: 'Pay Yourself First',
      simpleExplanation:
        'Allocating a fixed percentage of your income to your asset/investment column before paying bills, landlords, groceries, or discretionary entertainment.',
      whyItMatters:
        'If you pay everyone else first and only invest "what is left over", there is never anything left over at the end of the month. Paying yourself first creates healthy financial pressure to control expenses or innovate new income.',
      everydayExample:
        'When ₹15,000 allowance or salary arrives on the 1st of the month, ₹3,000 (20%) is immediately routed by automated bank order into a diversified index fund. You force yourself to budget and survive on the remaining ₹12,000.',
      collegeStudentApplication:
        'Set up a recurring standing instruction or automated deposit on campus bank accounts the exact day your scholarship, allowance, or part-time paycheck drops.',
      difficultTerms: [
        {
          term: 'Standing Instruction',
          definition: 'An automated banking command to transfer a specific sum into an investment or savings account on a fixed date.'
        }
      ]
    },
    {
      name: 'The Four Cash Flow Quadrants (E, S, B, I)',
      simpleExplanation:
        'People generate money in four ways: Employee (E: trading time for money), Self-Employed (S: you own a job, if you stop working income stops), Business Owner (B: you own a system and people work for you), and Investor (I: money works for you).',
      whyItMatters:
        'True wealth and time freedom exist on the right side of the quadrant (B and I). Most educational systems train people exclusively for the left side (E and S).',
      everydayExample:
        'Tutoring college students for ₹500/hour is Self-Employed (S). Recording a comprehensive exam prep video course or hiring three junior tutors to teach your curriculum transitions you into a Business Owner (B).',
      collegeStudentApplication:
        'While starting as an Employee (E) after college is normal and practical, actively study how scalable systems and investments work so you can gradually migrate your income to the B and I quadrants.',
      difficultTerms: [
        {
          term: 'Scalability',
          definition: 'The capability of a business model or system to handle growing volume and generate revenue without a linear increase in manual labor hours.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'The rich do not work for money; they have their money work for them.',
      whatItMeans:
        'Employees exchange finite hours for an hourly or monthly wage. Wealthy individuals construct or acquire income-generating assets (equities, real estate, royalties, businesses) that produce passive cash flow around the clock.',
      whyItMatters:
        'Your physical energy and hours are strictly limited (24 hours a day). Capital has no biological constraints—it can compound exponentially across decades.',
      realisticExample:
        'An individual who saves and invests in dividend-yielding index funds receives passive income checks every quarter whether they are working, sleeping, or traveling.',
      howStudentAppliesIt:
        'Start investing early, even with micro-amounts (₹500 or $25 per month). The habit of allocating capital to work for you matters far more in college than the absolute rupee value.'
    },
    {
      insight: 'Financial literacy is understanding numbers and their cash-flow story.',
      whatItMeans:
        'You do not need an advanced accounting degree to be financially free. You only need to grasp the relationship between the Income Statement (Income & Expenses) and the Balance Sheet (Assets & Liabilities).',
      whyItMatters:
        'Many smart people fail financially because they read numbers as static amounts rather than dynamic vectors of where money flows.',
      realisticExample:
        'A consumer thinks: "This car only costs ₹12,000 a month in loan payments." A financially literate student thinks: "This car drains ₹12,000 monthly, plus insurance and depreciation, consuming money that could have bought ₹14,000 in compounding assets."',
      howStudentAppliesIt:
        'Draw a simple two-box cash flow diagram for your personal monthly finances. Track whether your cash is flowing outward to retailers or inward toward your asset column.'
    },
    {
      insight: 'Work to learn, not just to earn.',
      whatItMeans:
        'In the early stages of your career, choose internships, roles, and campus projects that teach you high-leverage skills (sales, communication, systems, negotiation, financial management) rather than chasing the highest immediate hourly stipend.',
      whyItMatters:
        'Skills compound. A high-paying dead-end clerical role teaches you little, while an unpaid or modestly paid role shadowing a successful founder equips you with lifetime wealth-generating capabilities.',
      realisticExample:
        'Choosing a summer role doing client pitches and cold outreach at an early-stage startup instead of an easy data-entry job that pays 15% more.',
      howStudentAppliesIt:
        'Join student clubs or startup incubators where you must pitch corporate sponsors, negotiate venue discounts, or lead a marketing campaign.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Resist peer-driven conspicuous consumption (expensive daily café visits, brand-name sneakers on credit).',
      'Audit your monthly subscriptions (OTT platforms, food delivery passes) and eliminate services you do not actively use.',
      'Treat textbooks and dorm essentials as operational tools—buy second-hand and resell them when the semester concludes.'
    ],
    studyingAndLearning: [
      'Dedicate 30 minutes every week to reading financial publications, business case studies, or annual reports.',
      'Learn basic spreadsheet accounting (Excel/Google Sheets) to model compound interest, budgets, and cash flows.',
      'Study taxation basics in your jurisdiction so you understand standard deductions and tax-advantaged retirement accounts.'
    ],
    careerDevelopment: [
      'Prioritize roles that teach you communication, public speaking, and sales—Kiyosaki highlights sales as the #1 skill for financial success.',
      'Do not rely solely on campus placement recruiters; cultivate an entrepreneurial portfolio of projects.',
      'Learn how businesses actually make money and solve customer bottlenecks rather than remaining siloed in academic theory.'
    ],
    moneyManagement: [
      'Establish a basic emergency cash buffer (3 months of living expenses) in a liquid savings account.',
      'Open a demat / brokerage account as soon as you turn 18 and set up an automated monthly SIP in broad-market index funds.',
      'Never borrow money or use buy-now-pay-later (BNPL) credit for non-essential lifestyle purchases.'
    ],
    decisionMakingAndGrowth: [
      'Distinguish calculated risk from foolish gambling: calculated risk involves asymmetric upside with defined downside.',
      'Surround yourself with classmates who discuss ideas, skill building, and long-term projects rather than gossip and luxury flexing.'
    ]
  },
  misconceptions: [
    {
      misconception: 'The book promises you can quit school or your job and get rich quick through real estate.',
      reality:
        'Kiyosaki explicitly emphasizes that acquiring financial intelligence and disciplined accounting habits requires years of study, emotional regulation, and persistent effort.',
      caution:
        'Do not drop out of college or quit a stable job recklessly without an emergency fund, reliable cash-flow assets, and proven business skills.'
    },
    {
      misconception: 'A primary home is a bad purchase and should never be owned.',
      reality:
        'Kiyosaki clarifies that a primary home does not provide net cash flow while you live in it—it incurs mortgage interest, property taxes, maintenance, and insurance. It is a shelter, not an income-generating asset.',
      caution:
        'Buy a home when it provides stability and fits comfortably within your budget, but do not rely on it as your sole retirement plan.'
    },
    {
      misconception: 'All debt is evil and must be eliminated immediately.',
      reality:
        'The book distinguishes between "Bad Debt" (consumer debt on credit cards used to buy liabilities) and "Good Debt" (low-interest leverage used to acquire cash-flowing assets that service the debt and leave a profit).',
      caution:
        'For college students, debt of any kind carries high risk. Avoid consumer debt entirely; mastering leverage requires advanced financial experience.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The compounding difference between assets that generate cash and liabilities that consume cash.',
      'The importance of financial literacy, basic accounting, and understanding tax laws.',
      'The psychological danger of the Rat Race and mindless consumer lifestyle inflation.'
    ],
    authorOpinions: [
      'Kiyosaki’s heavy disdain for traditional schooling and academic degrees overlooks the essential value of technical fields (medicine, structural engineering, scientific research).',
      'His preference for real estate and private placements over diversified stock market index funds reflects his personal background rather than universal financial doctrine.'
    ],
    anecdotesVsEvidence: [
      'The stories of "Rich Dad" are largely allegorical parables designed for teaching principles rather than audited historical biographies.',
      'The examples of zero-down real estate deals and bankruptcy protections are heavily rooted in specific 1980s US tax codes and regulatory environments.'
    ],
    debatedOrContextualClaims: [
      'Aggressive real estate leverage and tax maneuvers can lead to catastrophic losses during macroeconomic recessions or liquidity crises.',
      'Modern students must verify regulatory, capital gains, and taxation rules in their own countries (such as India, the UK, or the EU) rather than blindly applying Kiyosaki’s American tax suggestions.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Financial freedom is achieved through cash-flowing assets, not a large paycheck.',
      'The middle class buys liabilities thinking they are assets; the rich buy assets first.',
      'Your single greatest asset is your financial intelligence and capacity to learn.',
      'Overcome the fear of failure—in the real world, the people who succeed are often those who learn fastest from mistakes.'
    ],
    finalSummary:
      'Rich Dad Poor Dad teaches students to break free from the conventional blueprint of trading 40 years of lifetime labor for a paycheck. By mastering the fundamentals of cash flow, distinguishing assets from liabilities, prioritizing self-education, and systematically acquiring assets before luxuries, college students can engineer lasting financial independence.',
    actionPlan: [
      {
        step: 'Step 1: Track Cash Flow',
        action: 'Log every rupee or dollar earned and spent for the next 30 days to identify hidden leaks.',
        outcome: 'A clear picture of your personal income statement and spending leaks.'
      },
      {
        step: 'Step 2: Automate Pay Yourself First',
        action: 'Configure an automated bank transfer of 10%–20% of your incoming money into a low-cost index fund or savings reserve.',
        outcome: 'Continuous, frictionless growth of your asset column.'
      },
      {
        step: 'Step 3: Freeze Consumer Debt',
        action: 'Cut off high-interest personal loans, overdrafts, and buy-now-pay-later services for non-essential purchases.',
        outcome: 'Prevention of liabilities eating into your future cash flow.'
      },
      {
        step: 'Step 4: Build Marketable Skills',
        action: 'Commit 5 hours a week to learning high-income capabilities (coding, sales, content creation, copywriting, public speaking).',
        outcome: 'Increased earning power that can be channeled directly into assets.'
      }
    ],
    fivePointsToRemember: [
      '1. Assets put money in your pocket; liabilities take money out.',
      '2. It is not how much money you make, it is how much you keep and compound.',
      '3. Pay yourself first before paying your creditors or entertainment.',
      '4. Work to learn high-leverage skills, not just to collect an immediate hourly paycheck.',
      '5. Emotional discipline and overcoming fear of failure are the true roots of financial intelligence.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Asset',
        definition: 'Anything that generates ongoing positive cash flow or value without requiring your full-time manual labor.'
      },
      {
        term: 'Liability',
        definition: 'Anything that extracts money from your pocket through ongoing costs, interest, or maintenance.'
      },
      {
        term: 'The Rat Race',
        definition: 'The endless cycle of working harder to pay for lifestyle inflation, higher taxes, and accumulated debt.'
      },
      {
        term: 'Financial IQ',
        definition: 'The mastery of accounting, investing, understanding markets, and the law.'
      },
      {
        term: 'Passive Income',
        definition: 'Earnings derived from an enterprise or asset in which an individual is not actively, physically involved on a daily basis.'
      }
    ],
    questions: [
      {
        question: 'Why does Kiyosaki argue that a primary house is not an asset for most people?',
        answer:
          'Because a home extracts cash every single month for mortgage interest, property taxes, insurance, and maintenance without putting cash back into your pocket, unless rented out for net profit.'
      },
      {
        question: 'What is the fundamental difference between the Poor Dad and the Rich Dad mindsets?',
        answer:
          'Poor Dad believed "study hard to find a safe corporate job with benefits," while Rich Dad believed "study hard to acquire assets, understand money, and create systems where money works for you."'
      },
      {
        question: 'What does "Pay Yourself First" mean in everyday practice?',
        answer:
          'Automatically setting aside an agreed portion of your income for investments and savings immediately upon receiving it, before paying bills or discretionary expenses.'
      },
      {
        question: 'What are the four Cash Flow Quadrants?',
        answer:
          'E (Employee), S (Self-Employed / Small Business), B (Business Owner with a system), and I (Investor whose money works for them).'
      },
      {
        question: 'Why is learning sales and communication emphasized so heavily?',
        answer:
          'Because sales and persuasion are the master skills required to pitch ideas, attract capital, negotiate deals, and market your skills in any industry.'
      }
    ],
    oneMinuteSummary:
      'Rich Dad Poor Dad redefines financial intelligence: true wealth is measured in time freedom, not your monthly salary. Escaping the Rat Race requires living beneath your means, mastering the difference between cash-flowing assets and cash-draining liabilities, paying yourself first, and continuously learning how capital, taxes, and scalable systems operate.'
  }
};
