import { AudioChapter, CollegeLesson } from '@/types/book';

export interface BookDetailEnrichment {
  extendedDescription: string;
  collegeLessons: CollegeLesson[];
  teluguAudioUrl?: string;
  teluguDuration?: number;
  teluguChapters?: AudioChapter[];
}

export const BOOK_DETAILS_DATA: Record<string, BookDetailEnrichment> = {
  'rich-dad-poor-dad': {
    extendedDescription:
      'Rich Dad Poor Dad by Robert Kiyosaki revolutionized personal finance by challenging the conventional wisdom that high academic achievement and corporate employment guarantee financial freedom. Drawing upon his upbringing in Hawaii, Kiyosaki contrasts the divergent economic worldviews of his biological father—a highly educated state superintendent who struggled perpetually with debt—and his best friend\'s father, an eighth-grade dropout entrepreneur who built Hawaii\'s largest private financial empire. The book dismantles accounting jargon to establish a functional cash-flow reality: true assets put recurring money into your pocket, while liabilities continuously extract cash. By demystifying taxation, corporate structures, and cash flow quadrant dynamics, Kiyosaki presents an empowering roadmap to break free from the paycheck-to-paycheck Rat Race through financial education and disciplined asset accumulation.',
    collegeLessons: [
      {
        title: 'Pay Yourself First on Campus',
        takeaway: 'Before allocating your student stipend, part-time paycheck, or allowance to dining out and weekend entertainment, automatically reserve 15% to 20% for savings and index investing.',
        studentContext: 'Students often spend all discretionary funds first and attempt to save whatever remains—which is usually zero. Invert this habit by setting up an automatic recurring bank transfer on the day your money arrives.'
      },
      {
        title: 'Acquire High-Income Sales & Communication Skills',
        takeaway: 'Work during university to acquire essential skills—public speaking, sales negotiation, basic accounting, and management—rather than merely chasing the highest immediate hourly wage.',
        studentContext: 'Taking an internship or campus organization role where you must pitch sponsors, lead meetings, or organize events will yield 100x more lifetime return than a passive data entry job.'
      },
      {
        title: 'Differentiate College Assets from Lifestyle Liabilities',
        takeaway: 'Recognize that expensive consumer items purchased on credit or financed through debt (like new cars, gaming rigs, or luxury electronics) drain your limited student cash flow with ongoing costs.',
        studentContext: 'Prioritize building an emergency fund and learning tax-advantaged compounding accounts before upgrading your lifestyle to match your peers.'
      }
    ],
                    teluguAudioUrl: '/audio/te/rich-dad-poor-dad.mp3',
    teluguDuration: 572,
    teluguChapters: [
      { id: 'te-c1', title: 'అధ్యాయం 1: ఇద్దరు తండ్రుల కథ: ఆర్థిక అక్షరాస్యత మరియు సంప్రదాయ విద్య', timestamp: 0, duration: 124 },
      { id: 'te-c2', title: 'అధ్యాయం 2: ప్రాథమిక సూత్రం: ఆస్తులు డబ్బును తెస్తాయి, అప్పులు డబ్బును తీసేస్తాయి', timestamp: 124, duration: 88 },
      { id: 'te-c3', title: 'అధ్యాయం 3: మీ వ్యాపారం పై దృష్టి పెట్టండి: క్యాష్ ఫ్లో క్వాడ్రంట్ మైండ్‌సెట్', timestamp: 212, duration: 95 },
      { id: 'te-c4', title: 'అధ్యాయం 4: పన్నుల చరిత్ర మరియు కార్పొరేషన్ల శక్తి', timestamp: 307, duration: 65 },
      { id: 'te-c5', title: 'అధ్యాయం 5: ధనవంతులు డబ్బును సృష్టిస్తారు: ఫైనాన్షియల్ ఇంటెలిజెన్స్ మరియు భయాన్ని జయించడం', timestamp: 372, duration: 57 },
      { id: 'te-c6', title: 'అధ్యాయం 6: రుణ నిర్వహణ, రిస్క్ మరియు విమర్శనాత్మక దృక్పథం', timestamp: 429, duration: 64 },
      { id: 'te-c7', title: 'అధ్యాయం 7: కాలేజ్ విద్యార్థులకు మరియు యువతకు కార్యాచరణ బ్లూప్రింట్', timestamp: 493, duration: 79 },
    ]
},

  'psychology-of-money': {
    extendedDescription:
      'The Psychology of Money by Morgan Housel offers nineteen timeless parables examining how human emotions, historical upbringing, ego, and cognitive biases dictate financial outcomes far more than mathematical intellect. Through vivid contrasts—such as a humble rural janitor who quietly amassed an $8 million fortune through patient compounding versus a Harvard-educated executive who went bankrupt through reckless leverage—Housel demonstrates that managing money is a soft behavioral skill. Real-world financial decisions are rarely calculated on spotless spreadsheets; they are made around dinner tables where envy, fear, and pride collide. By unpacking the hidden forces of luck and risk, the critical importance of defining "enough," and the quiet dividend of personal autonomy, Housel provides an essential antidote to modern consumer anxiety and speculative mania.',
    collegeLessons: [
      {
        title: 'Harness the Exponential Magic of Time',
        takeaway: 'Compounding works primarily through endurance, not market timing. Investing small sums in your early twenties yields radically more wealth than investing much larger sums starting in your forties.',
        studentContext: 'Investing even ₹1,000 or $50 each month during your university years gives your capital 40+ years of undisturbed compounding, turning modest pocket money into substantial financial security.'
      },
      {
        title: 'Avoid the Campus "Man in the Car" Paradox',
        takeaway: 'Spending scarce money on flashy clothes, luxury gadgets, or status symbols to impress college peers is an illusion: people rarely admire the spender; they only imagine themselves possessing the status.',
        studentContext: 'Focus on cultivating genuine competence, deep friendships, and inner confidence rather than accumulating debt to showcase an artificial aesthetic on campus.'
      },
      {
        title: 'Build a Personal Sleep-Well-at-Night Emergency Buffer',
        takeaway: 'Financial resilience is measured by how long you can survive without panicking when an unexpected emergency strikes.',
        studentContext: 'Before entering risky investments or speculative crypto trades, build a liquid 3-to-6 month living fund to handle laptop repairs, medical emergencies, or gap months between internships.'
      }
    ],
                    teluguAudioUrl: '/audio/te/psychology-of-money.mp3',
    teluguDuration: 494,
    teluguChapters: [
      { id: 'te-c1', title: 'అధ్యాయం 1: సంపద అనేది ఒక సాఫ్ట్ స్కిల్: ఎవరూ పిచ్చివారు కాదు', timestamp: 0, duration: 127 },
      { id: 'te-c2', title: 'అధ్యాయం 2: అదృష్టం, రిస్క్ మరియు పెసిమిజం ఆకర్షణ', timestamp: 127, duration: 74 },
      { id: 'te-c3', title: 'అధ్యాయం 3: ఎంత ఉంటే చాలు: సరిపోవడం అనే భావన యొక్క ప్రాముఖ్యత', timestamp: 201, duration: 74 },
      { id: 'te-c4', title: 'అధ్యాయం 4: కాంపౌండింగ్ అద్భుతం: వారెన్ బఫెట్ విజయం వెనుక రహస్యం', timestamp: 275, duration: 60 },
      { id: 'te-c5', title: 'అధ్యాయం 5: ధనవంతులు కావడం మరియు ధనవంతులుగా కొనసాగడం', timestamp: 335, duration: 47 },
      { id: 'te-c6', title: 'అధ్యాయం 6: స్వేచ్ఛ యొక్క డివిడెండ్: కారులో ఉన్న వ్యక్తి పారడాక్స్', timestamp: 382, duration: 67 },
      { id: 'te-c7', title: 'అధ్యాయం 7: యువతకు మరియు విద్యార్థులకు మార్గదర్శనం', timestamp: 449, duration: 46 },
    ]
},

  'atomic-habits': {
    extendedDescription:
      'Atomic Habits by James Clear provides a comprehensive, scientifically validated framework for systematic personal evolution through microscopic 1% behavioral increments. Dismissing the prevailing cultural myth that extraordinary success requires drastic overnight transformations or heroic willpower, Clear argues that lasting change is the direct byproduct of daily operational systems. Grounded in cognitive psychology, the book breaks habit formation into a neurological four-stage feedback loop—Cue, Craving, Response, and Reward—and introduces the Four Laws of Behavior Change. By teaching readers how to redesign their physical environments, stack complementary routines, embrace the Two-Minute Rule, and shift their personal self-image from outcome goals to identity-based conviction, Clear delivers an indispensable blueprint for peak productivity and character formation.',
    collegeLessons: [
      {
        title: 'Master the 2-Minute Rule to Beat Semester Procrastination',
        takeaway: 'When facing an intimidating assignment, research paper, or coding project, scale the initial action down so it takes less than 120 seconds to begin.',
        studentContext: 'Commit only to opening your laptop and typing the title and one sentence, or opening textbook Chapter 4. Once you cross the friction of initiation, momentum takes over naturally.'
      },
      {
        title: 'Engineer a High-Focus Campus Study Environment',
        takeaway: 'Environment design is far more effective than willpower. Make cues for productive studying obvious and visual temptations completely invisible.',
        studentContext: 'Leave your study desk clean with only your syllabus and notes open. Place your smartphone in another room or out of arm\'s reach inside your backpack during deep work study blocks.'
      },
      {
        title: 'Identity-Based Student Mindset & The "Never Miss Twice" Rule',
        takeaway: 'Every action is a vote for the type of person you are becoming. Never let an inevitable missed study session or workout turn into a spiral.',
        studentContext: 'Do not tell yourself "I am trying to study for this exam." Say "I am a disciplined scholar and engineer." If a busy college day derails your study routine, recover immediately the next morning.'
      }
    ],
                    teluguAudioUrl: '/audio/te/atomic-habits.mp3',
    teluguDuration: 518,
    teluguChapters: [
      { id: 'te-c1', title: 'అధ్యాయం 1: ఒక శాతం మెరుగుదల గణితం: అలవాట్ల శక్తి', timestamp: 0, duration: 120 },
      { id: 'te-c2', title: 'అధ్యాయం 2: లక్ష్యాలు, వ్యవస్థలు మరియు గుర్తింపు మార్పు', timestamp: 120, duration: 88 },
      { id: 'te-c3', title: 'అధ్యాయం 3: మొదటి నియమం: అలవాటును స్పష్టంగా కనిపించేలా చేయండి', timestamp: 208, duration: 78 },
      { id: 'te-c4', title: 'అధ్యాయం 4: రెండవ నియమం: అలవాటును ఆకర్షణీయంగా మార్చండి', timestamp: 286, duration: 57 },
      { id: 'te-c5', title: 'అధ్యాయం 5: మూడవ నియమం: అలవాటును సులభతరం చేయండి మరియు రెండు నిమిషాల సూత్రం', timestamp: 343, duration: 69 },
      { id: 'te-c6', title: 'అధ్యాయం 6: నాల్గవ నియమం: అలవాటును తక్షణ సంతృప్తినిచ్చేలా చేయండి', timestamp: 412, duration: 61 },
      { id: 'te-c7', title: 'అధ్యాయం 7: విద్యార్థులకు ఆచరణాత్మక కార్యాచరణ ప్రణాళిక', timestamp: 473, duration: 44 },
    ]
},

  'the-richest-man-in-babylon': {
    extendedDescription:
      'The Richest Man in Babylon by George S. Clason is an enduring financial classic that distills eternal monetary wisdom through evocative parables set in antiquity\'s wealthiest metropolis. Originally published as banking educational pamphlets in the 1920s, the narratives follow Arkad, a humble scribe who discovered the seven cures for an impoverished purse and mastered the five fundamental laws of gold. Clason\'s core doctrine—that at least one-tenth of all you earn belongs to you to keep and put to productive work—strikes at the root of modern paycheck dependency. By elucidating principles of budgeting without austerity, safeguarding capital against speculative traps, seeking counsel from proven practitioners, and relentlessly upgrading one\'s earning craft, Clason equips listeners with an unshakeable philosophy of durable wealth creation.',
    collegeLessons: [
      {
        title: 'Retain One-Tenth as Your Irrevocable Seed Capital',
        takeaway: 'Before paying expenses, keep 10% of every rupee or dollar earned as permanent wealth-building capital.',
        studentContext: 'Whether from part-time work, freelancing, or family allowances, immediately preserve 10% in a separate untouchable account rather than spending 100% and waiting for a future salary.'
      },
      {
        title: 'Dodge Get-Rich-Quick Traps and High-Return Fads',
        takeaway: 'Gold flees anyone who demands impossible speculative profits or listens to enticing tricks of promoters.',
        studentContext: 'College campuses are rife with speculative crypto schemes, day-trading groups, and MLM promises. Guard your modest savings by sticking to reliable, proven index compounding.'
      },
      {
        title: 'Cultivate Your Earning Craft Every Single Semester',
        takeaway: 'The seventh cure is to continually expand your ability to earn by mastering specialized, valuable skills.',
        studentContext: 'Take online certifications, master modern software tools, and read industry literature outside your standard college syllabus to increase your market value before graduation.'
      }
    ],
                    teluguAudioUrl: '/audio/te/the-richest-man-in-babylon.mp3',
    teluguDuration: 437,
    teluguChapters: [
      { id: 'te-c1', title: 'అధ్యాయం 1: సంపదను కోరుకున్న శ్రామికుడు మరియు బాబిలోన్ నగరం', timestamp: 0, duration: 103 },
      { id: 'te-c2', title: 'అధ్యాయం 2: ఖాళీ పర్సును నింపే ఏడు నివారణోపాయాలు', timestamp: 103, duration: 102 },
      { id: 'te-c3', title: 'అధ్యాయం 3: అదృష్ట దేవతను కలుసుకోవడం: అవకాశాలను సద్వినియోగం చేసుకోవడం', timestamp: 205, duration: 39 },
      { id: 'te-c4', title: 'అధ్యాయం 4: బంగారం యొక్క ఐదు సూత్రాలు', timestamp: 244, duration: 77 },
      { id: 'te-c5', title: 'అధ్యాయం 5: బాబిలోన్ వడ్డీ వ్యాపారి: జ్ఞానంతో కూడిన నిర్ణయాలు', timestamp: 321, duration: 34 },
      { id: 'te-c6', title: 'అధ్యాయం 6: బాబిలోన్ కోట గోడలు: పూర్తి భద్రత యొక్క ప్రాముఖ్యత', timestamp: 355, duration: 40 },
      { id: 'te-c7', title: 'అధ్యాయం 7: విద్యార్థులకు మరియు యువతకు స్వర్ణ నియమాలు', timestamp: 395, duration: 42 },
    ]
},

  'the-almanack-of-naval-ravikant': {
    extendedDescription:
      'The Almanack of Naval Ravikant, curated and edited by Eric Jorgenson, offers a profound modern operating manual for wealth creation and psychological sovereignty. Naval Ravikant, iconic co-founder of AngelList and early Silicon Valley investor in Uber, Twitter, and Notion, deconstructs the mechanisms of modern leverage, specific knowledge, and judgment. Naval challenges listeners to discard zero-sum status games in favor of positive-sum wealth creation through "Productizing Yourself." By examining the four forms of leverage—labor, capital, and permissionless code and media—Naval demonstrates how ambitious knowledge workers can disconnect their economic returns from their physical hours. Concurrently, Naval unpacks the mental discipline required for unconditional inner peace, showing that happiness is not an accidental mood, but a cultivated daily skill.',
    collegeLessons: [
      {
        title: 'Deploy Permissionless Leverage (Code & Media) in College',
        takeaway: 'Leverage code, open-source projects, writing, or podcasts to broadcast your ideas globally with zero marginal replication cost.',
        studentContext: 'Build small software tools, publish technical articles, or share project breakdowns on GitHub/LinkedIn while in college. Your work works for you 24/7 across the globe.'
      },
      {
        title: 'Discover Your Specific Knowledge in Genuine Play',
        takeaway: 'Specific knowledge cannot be trained in a standardized curriculum; it feels like effortless play to you but looks like hard work to others.',
        studentContext: 'Notice what topics you obsessively research late at night when no professor is grading you. Lean deeply into that unique curiosity instead of copying popular career trends.'
      },
      {
        title: 'Opt Out of Campus Status Games',
        takeaway: 'Status games are zero-sum hierarchies that breed anxiety and envy. Wealth creation is positive-sum abundance that buys personal freedom.',
        studentContext: 'Ignore social media validation, superficial popularity contests, or brand-name bragging. Invest your energy into high-integrity relationships and building tangible projects.'
      }
    ],
                    teluguAudioUrl: '/audio/te/the-almanack-of-naval-ravikant.mp3',
    teluguDuration: 430,
    teluguChapters: [
      { id: 'te-c1', title: 'అధ్యాయం 1: అదృష్టం లేకుండా సంపదను సృష్టించడం: సంపద సూత్రాలు', timestamp: 0, duration: 109 },
      { id: 'te-c2', title: 'అధ్యాయం 2: మూడు రకాల లెవరేజ్: శ్రమ, మూలధనం మరియు కోడ్ & మీడియా', timestamp: 109, duration: 84 },
      { id: 'te-c3', title: 'అధ్యాయం 3: నిర్దిష్ట జ్ఞానం మరియు జవాబుదారీతనం', timestamp: 193, duration: 62 },
      { id: 'te-c4', title: 'అధ్యాయం 4: జడ్జిమెంట్ లేదా సరైన నిర్ణయాధికారం', timestamp: 255, duration: 54 },
      { id: 'te-c5', title: 'అధ్యాయం 5: దీర్ఘకాలిక కాంపౌండింగ్: వ్యాపారం, స్నేహం మరియు ఆరోగ్యం', timestamp: 309, duration: 43 },
      { id: 'te-c6', title: 'అధ్యాయం 6: ఆనందం మరియు అంతర్గత శాంతి ఒక నైపుణ్యం', timestamp: 352, duration: 43 },
      { id: 'te-c7', title: 'అధ్యాయం 7: యువతకు మరియు విద్యార్థులకు మార్గదర్శనం', timestamp: 395, duration: 34 },
    ]
},


  'deep-work': {
    extendedDescription:
      'Deep Work: Rules for Focused Success in a Distracted World by Cal Newport establishes that the ability to perform deep, cognitively demanding tasks without distraction is becoming increasingly rare at the exact moment it is becoming intensely valuable in our knowledge economy. Newport contrasts deep work—distraction-free concentration that pushes cognitive capabilities to their limit—with shallow work: logistical, fragmented tasks like responding to emails, checking notifications, and attending low-leverage meetings. Through compelling case studies of historic innovators, philosophers, and high-performing computer scientists, Newport unpacks the neurological cost of "attention residue" caused by task switching. He presents four actionable operational philosophies, the crafts of digital minimalism, and rigorous shutdown rituals to construct an unbreakable sanctuary of intellectual focus.',
    collegeLessons: [
      {
        title: 'Schedule Sacred 90-Minute Phone-Free Study Blocks',
        takeaway: 'Attention residue ruins cognitive depth whenever you glance at notifications or social feeds while studying.',
        studentContext: 'Set your smartphone to Do Not Disturb and place it across the room. Execute three focused 90-minute blocks per day to complete twice as much college coursework in half the time.'
      },
      {
        title: 'Embrace Boredom Instead of Reaching for Dopamine',
        takeaway: 'If your brain is conditioned to escape even ten seconds of boredom by unlocking your phone, you lose the neurological capacity for deep focus.',
        studentContext: 'While waiting for college lectures to begin or standing in campus cafeteria lines, resist opening social feeds. Practice allowing your mind to rest and observe.'
      },
      {
        title: 'Implement a Strict Daily Evening Shutdown Ritual',
        takeaway: 'At the end of your study day, explicitly terminate work with a clear cognitive shutdown to prevent anxiety and allow deep mental recovery.',
        studentContext: 'Close all course tabs, record tomorrow’s top three priorities on paper, and declare "Shutdown complete." Your brain consolidates complex learning during restful sleep.'
      }
    ]
  ,
                teluguAudioUrl: '/audio/te/deep-work.mp3',
    teluguDuration: 724,
    teluguChapters: [
      { id: 'te-c1', title: 'అధ్యాయం 1: డీప్ వర్క్ సిద్ధాంతం మరియు దృష్టి మరల్చే ప్రపంచం', timestamp: 0, duration: 144 },
      { id: 'te-c2', title: 'అధ్యాయం 2: అటెన్షన్ రెసిడ్యూ మరియు ఏకాగ్రత యొక్క సైన్స్', timestamp: 144, duration: 119 },
      { id: 'te-c3', title: 'అధ్యాయం 3: డీప్ షెడ్యూలింగ్ నాలుగు విధానాలు', timestamp: 263, duration: 117 },
      { id: 'te-c4', title: 'అధ్యాయం 4: డీప్ వర్క్ ఆచారాలు మరియు పర్యావరణ నిర్మాణం', timestamp: 380, duration: 91 },
      { id: 'te-c5', title: 'అధ్యాయం 5: బోర్ కొట్టడాన్ని ఆలింగనం చేసుకోవడం: మెదడుకు రీవైరింగ్', timestamp: 472, duration: 86 },
      { id: 'te-c6', title: 'అధ్యాయం 6: సోషల్ మీడియా క్విట్ చేయడం మరియు నిస్సారమైన పనుల నియంత్రణ', timestamp: 558, duration: 83 },
      { id: 'te-c7', title: 'అధ్యాయం 7: కాలేజ్ విద్యార్థులకు ప్రాక్టికల్ యాక్షన్ బ్లూప్రింట్', timestamp: 641, duration: 84 },
    ]
},

  'the-alchemist': {
    extendedDescription:
      'The Alchemist by Paulo Coelho is an evocative allegorical masterpiece that has inspired millions worldwide to pursue their deepest purpose, or "Personal Legend." Following Santiago, an Andalusian shepherd boy who embarks on a transformative odyssey from the hills of Spain through the bustling markets of Tangier and the perilous expanses of the Sahara Desert to the Egyptian pyramids, the novel explores the mystical interconnectedness of all existence—the "Soul of the World." Coelho reminds readers that the greatest treasures are not material hoards waiting at distant horizons, but the self-realization, resilience, and spiritual awakening forged throughout the journey. By listening to omens, overcoming paralyzing fear of failure, and trusting one\'s heart, one discovers that the universe conspires in favor of those who courageously align their lives with their authentic calling.',
    collegeLessons: [
      {
        title: 'Pursue Your Personal Legend over Conformity',
        takeaway: 'Do not choose an academic degree or career path merely to satisfy familial expectations or societal conventions.',
        studentContext: 'Evaluate what truly ignites your curiosity. Taking calculated risks while young in college allows you to build a career aligned with your authentic calling.'
      },
      {
        title: 'Overcome the Fear of Failure in New Ventures',
        takeaway: 'Fear of suffering is often far worse than the suffering itself. Failure is merely an instructor on the road to mastery.',
        studentContext: 'Do not hesitate to apply for competitive research fellowships, launch a campus initiative, or audition for opportunities out of fear of rejection.'
      },
      {
        title: 'Observe Omens and Adapt to Unforeseen Detours',
        takeaway: 'When plans are disrupted, look for the lesson and pivot with optimism rather than succumbing to despair.',
        studentContext: 'A rejected internship or disappointing exam grade is not the end of your journey; it is an omen redirecting your preparation toward a higher path.'
      }
    ]
  },

  'sapiens': {
    extendedDescription:
      'Sapiens: A Brief History of Humankind by Yuval Noah Harari takes readers on an exhilarating, sweeping tour of human evolution, examining how an insignificant ape on the African savanna conquered planet Earth. Harari structures our history around three pivotal milestones: the Cognitive Revolution, the Agricultural Revolution, and the Scientific Revolution. The book’s most profound revelation is that human beings dominate not because of individual strength or intelligence, but because Homo sapiens is the only species capable of flexible cooperation in numbers through shared imagined fictions—myths, religions, nations, legal systems, and money. Harari provocatively questions whether historical progress has genuinely elevated individual subjective well-being and challenges readers to consider the ethical and existential destiny of humankind in an age of biotechnology and artificial intelligence.',
    collegeLessons: [
      {
        title: 'Understand the Architecture of Shared Fictions',
        takeaway: 'Money, corporate brands, and legal frameworks are shared social contracts sustained entirely by collective belief.',
        studentContext: 'Understanding how social myths operate enables students to analyze market economies, build compelling brand narratives, and lead team projects effectively.'
      },
      {
        title: 'Critically Question Societal Progress Traps',
        takeaway: 'Just as the Agricultural Revolution bound humans to harder labor under the promise of future abundance, modern convenience can create new traps.',
        studentContext: 'Be mindful of lifestyle traps: working exhausting hours to purchase items that require more work to maintain. Prioritize genuine health and freedom.'
      },
      {
        title: 'Adopt the Scientific Revolution\'s "Discovery of Ignorance"',
        takeaway: 'True intellectual progress begins with the humble admission: "I do not know."',
        studentContext: 'In university seminars and team research, never pretend to understand concepts you don\'t. Asking fearless questions leads to genuine breakthrough understanding.'
      }
    ]
  },

  'thinking-fast-and-slow': {
    extendedDescription:
      'Thinking, Fast and Slow by Nobel laureate Daniel Kahneman synthesizes decades of ground-breaking behavioral economics and cognitive psychology into a profound portrait of human rationality. Kahneman delineates the mind into two distinct modes: System 1 (fast, automatic, intuitive, and effortlessly emotional) and System 2 (slow, deliberate, analytical, and cognitively effortful). The book exposes the myriad systematic heuristics and biases that corrupt human judgment—such as anchoring, loss aversion, hindsight bias, overconfidence, and the availability heuristic. By demonstrating how our intuitive minds substitute simple questions for complex ones without our awareness, Kahneman equips thinkers with the intellectual toolkit to recognize cognitive traps, calibrate uncertainty, and make significantly more rational decisions in business, finance, and daily life.',
    collegeLessons: [
      {
        title: 'Engage System 2 for High-Stakes College Decisions',
        takeaway: 'System 1 relies on emotional shortcuts that produce systematic biases in career, financial, and relational choices.',
        studentContext: 'Before signing student leases, selecting degree specializations, or accepting job offers, pause for 48 hours to engage deliberate System 2 analytical thinking.'
      },
      {
        title: 'Beware of the Availability Heuristic & Campus Gossip',
        takeaway: 'We assess the frequency or risk of an event based on how easily recent, vivid examples spring to mind.',
        studentContext: 'Do not evaluate the difficulty of a professor or course based solely on one vocal peer\'s dramatic story. Look for objective data and broader feedback.'
      },
      {
        title: 'Calibrate Loss Aversion in Learning & Exams',
        takeaway: 'The psychological pain of a loss is twice as intense as the joy of an equivalent gain, causing irrational risk aversion.',
        studentContext: 'Don\'t let the fear of a poor grade keep you from taking intellectually challenging courses that expand your abilities and horizons.'
      }
    ]
  },

  'zero-to-one': {
    extendedDescription:
      'Zero to One: Notes on Startups, or How to Build the Future by Peter Thiel with Blake Masters presents a provocative, contrarian philosophy for technological innovation and venture creation. Thiel asserts that true progress is vertical (going from "0 to 1"—creating entirely new technology) rather than horizontal (going from "1 to n"—copying what already works). Dismissing the traditional idolization of perfect competition, Thiel boldly argues that creative monopolies are the true drivers of technological abundance, as they generate enduring profits that allow founders to pursue long-term research. By exploring secrets that nobody else sees, the power law distribution of venture returns, and the indispensability of sales and distribution, Thiel provides ambitious founders and builders with an unvarnished manual for shaping the future.',
    collegeLessons: [
      {
        title: 'Cultivate a Contrarian Secret in Your Studies',
        takeaway: 'Ask Thiel\'s foundational interview question: "What important truth do very few people agree with you on?"',
        studentContext: 'Rather than following crowded career tracks like everyone else in your batch, identify overlooked niches where technological shifts create uncontested opportunities.'
      },
      {
        title: 'Focus on Monopolizing a Small Niche First',
        takeaway: 'Every successful tech company started by dominating an ultra-specific initial market before expanding outwards.',
        studentContext: 'If building a student project or campus venture, solve an intense problem for 100 dedicated users on your campus before attempting to appeal to the whole world.'
      },
      {
        title: 'Respect Sales and Distribution as Equal to Technical Engineering',
        takeaway: 'Even the most brilliant product fails without a clear, repeatable distribution channel.',
        studentContext: 'Engineering and science students must learn how to present, pitch, and distribute their creations to stakeholders and users.'
      }
    ]
  },

  'the-7-habits': {
    extendedDescription:
      'The 7 Habits of Highly Effective People by Stephen R. Covey has served as the foundational bedrock of personal leadership for over three decades. Covey rejects superficial "Personality Ethic" techniques—such as image management and charm—in favor of a principled "Character Ethic" rooted in integrity, humility, and human dignity. The framework guides individuals through a transformative continuum from Dependence to Independence (the Private Victory: Be Proactive, Begin with the End in Mind, Put First Things First) and onward to Interdependence (the Public Victory: Think Win-Win, Seek First to Understand, Synergize) before concluding with continuous renewal (Sharpen the Saw). Covey’s timeless paradigm shifts empower leaders to align their lives with universal natural laws of personal effectiveness.',
    collegeLessons: [
      {
        title: 'Operate Resolutely in Your Circle of Influence',
        takeaway: 'Proactive individuals focus their time and energy on things they can control, rather than complaining about things in their Circle of Concern.',
        studentContext: 'Instead of complaining about difficult exams, professor quirks, or university bureaucracy, focus on your preparation, sleep, and collaborative study groups.'
      },
      {
        title: 'Apply the Time Management Matrix (Quadrant II Focus)',
        takeaway: 'True effectiveness requires spending significant time on activities that are Important but Not Urgent (planning, relationship building, deep studying).',
        studentContext: 'Stop living in constant crisis mode cramming the night before. Dedicate 2 hours every afternoon to non-urgent deep preparation to prevent panic.'
      },
      {
        title: 'Practice Empathic Listening in Campus Teams',
        takeaway: 'Seek first to understand, then to be understood. Most people listen with the intent to reply rather than understand.',
        studentContext: 'In group projects and student organizations, listen deeply to teammates\' perspectives before pushing your own ideas. You will earn immense trust and leadership.'
      }
    ]
  },

  'the-48-laws-of-power': {
    extendedDescription:
      'The 48 Laws of Power by Robert Greene is an unvarnished, Machiavellian treatise on the dynamics of influence, reputation, strategy, and human self-interest. Drawing from over three thousand years of global history—spanning Sun Tzu, Niccolò Machiavelli, Queen Elizabeth I, Talleyrand, and Casanova—Greene synthesizes the timeless laws that govern power struggles within courts, corporations, and political hierarchies. While frequently controversial for its ruthless realism, the book serves as an indispensable defensive shield against manipulative predators, gaslighting, and organizational betrayals. By illustrating laws such as "Never Outshine the Master," "Conceal Your Intentions," "So Much Depends on Reputation—Guard It with Your Life," and "Master the Art of Timing," Greene equips leaders with tactical discernment in competitive environments.',
    collegeLessons: [
      {
        title: 'Master Tact and Never Inadvertently Threaten Mentors',
        takeaway: 'Always make those above you feel comfortably superior in expertise and status (Law 1).',
        studentContext: 'When working with professors or internship supervisors, showcase competence while expressing genuine deference. Humility opens doors to elite recommendations.'
      },
      {
        title: 'Protect Your Professional & Academic Reputation Ferociously',
        takeaway: 'Reputation is the cornerstone of power. Once stained, it is exceptionally arduous to restore (Law 5).',
        studentContext: 'Avoid campus drama, dishonest shortcuts, or sloppy commitments. A reputation for unyielding reliability and discretion will distinguish you in every internship.'
      },
      {
        title: 'Say Less Than Necessary in Public Discussions',
        takeaway: 'When attempting to impress people with words, the more you speak, the more common you appear and the more vulnerable you become (Law 4).',
        studentContext: 'In interviews, presentations, and team debates, state your points with concise clarity and then pause. Restraint conveys authority and deep confidence.'
      }
    ]
  },

  'how-to-win-friends-and-influence-people': {
    extendedDescription:
      'How to Win Friends and Influence People by Dale Carnegie remains the gold standard in interpersonal communication, emotional connection, and authentic leadership since its publication in 1936. Carnegie’s timeless premise is that technical ability accounts for only fifteen percent of financial and personal success, while eighty-five percent is determined by human engineering—the skill to express ideas, assume leadership, and arouse enthusiasm among people. By presenting fundamental techniques in handling people (never criticize, condemn, or complain; give honest appreciation), six ways to make people like you (become genuinely interested in others; remember names; be a good listener), and strategies for winning people to your way of thinking, Carnegie offers a warm, empathetic masterclass in social intelligence.',
    collegeLessons: [
      {
        title: 'Remember and Use Peer Names Consistently',
        takeaway: 'Remember that a person\'s name is to that person the sweetest and most important sound in any language.',
        studentContext: 'When meeting classmates, professors, or guest speakers, consciously repeat their name twice and note it down. Using people\'s names creates instant rapport.'
      },
      {
        title: 'Cultivate Genuine Curiosity in Other Students',
        takeaway: 'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.',
        studentContext: 'At college events and networking mixers, ask thoughtful open-ended questions about their projects and hometowns rather than talking only about yourself.'
      },
      {
        title: 'Avoid Direct Criticism and Public Shaming',
        takeaway: 'Any fool can criticize and complain—and most fools do. Understanding and forgiveness require character and self-control.',
        studentContext: 'When collaborating on frustrating group assignments, praise what was done well first before offering constructive, gentle adjustments.'
      }
    ]
  },

  'the-laws-of-human-nature': {
    extendedDescription:
      'The Laws of Human Nature by Robert Greene is a monumental psychological guide that decodes the subconscious drives, irrational passions, and shadow impulses that govern human behavior. Greene urges readers to transcend their own emotional illusions and develop "radical empathy" and psychological detachment. Through illuminating historical profiles—including Pericles, Anton Chekhov, Mary Shelley, and Lyndon B. Johnson—Greene reveals eighteen laws of human nature, addressing narcissism, grandiosity, compulsive role-playing, envy, aggression, and mortality awareness. By shedding our defensive egoism and learning to dispassionately read social signals and underlying motivations, we liberate ourselves from toxic relationships and unlock our highest creative potential.',
    collegeLessons: [
      {
        title: 'Cultivate Emotional Self-Awareness (Master Your Emotional Self)',
        takeaway: 'We are all driven by unconscious biases, ego defenses, and emotions that cloud rational decision-making.',
        studentContext: 'When feeling intense resentment, anger, or envy regarding a classmate\'s success or a peer\'s comment, pause and analyze your own insecurities before reacting.'
      },
      {
        title: 'See Through People’s Social Masks and Compulsive Roles',
        takeaway: 'People rarely show their true character initially; pay attention to micro-expressions, actions under stress, and recurring patterns.',
        studentContext: 'Choose your close college roommates, business partners, and romantic companions based on their demonstrated character under pressure, not their charm.'
      },
      {
        title: 'Harness Mortality Awareness (Memento Mori) for Urgency',
        takeaway: 'Confronting the reality of our finite time strips away trivial concerns and instills immense clarity and urgency.',
        studentContext: 'Remember that your university years are brief and precious. Use the reality of time\'s fleeting nature to focus on what truly matters.'
      }
    ]
  },

  'never-split-the-difference': {
    extendedDescription:
      'Never Split the Difference: Negotiating As If Your Life Depended On It by former FBI lead international kidnapping negotiator Chris Voss shatters conventional negotiation dogma with high-stakes, field-tested psychological tactics. Rejecting the old assumption that negotiation is an intellectual, rational game of compromise, Voss reveals that negotiations are overwhelmingly emotional, irrational, and primal. The book introduces "Tactical Empathy"—demonstrating deep emotional understanding to disarm adversaries and dismantle tension. Voss equips readers with potent techniques: voice modulation (the "Late-Night FM DJ Voice"), mirroring, labeling emotional subtext, triggering a clarifying "That\'s Right" rather than a polite "Yes," calibrated "How" and "What" questions, and bending perceived reality to achieve extraordinary outcomes.',
    collegeLessons: [
      {
        title: 'Use Mirroring & Labeling in Academic & Salary Discussions',
        takeaway: 'Repeat the last three words of what the other person said with an inquisitive tone to encourage them to elaborate and reveal key information.',
        studentContext: 'When discussing project requirements with a demanding professor or discussing internship stipends, mirror their key statements to clarify expectations without confrontation.'
      },
      {
        title: 'Calibrate Open-Ended "How" and "What" Questions',
        takeaway: 'Avoid asking "Why" (which triggers defensive hostility). Ask: "How am I supposed to do that?" or "What about this is most important to you?"',
        studentContext: 'When faced with unreasonable assignment deadlines or team disputes, ask calibrated "How" questions that gently place the burden of solving the dilemma on the other party.'
      },
      {
        title: 'Trigger a Genuine "That\'s Right" for True Alignment',
        takeaway: 'A superficial "yes" is often a quick defense mechanism to dismiss you. A sincere "That\'s right" signals that the other person feels fully heard.',
        studentContext: 'Summarize your project partner\'s perspective accurately until they agree "That\'s right." Only then are they psychologically receptive to your proposals.'
      }
    ]
  },

  'think-and-grow-rich': {
    extendedDescription:
      'Think and Grow Rich by Napoleon Hill, published in 1937 following twenty years of interviews with five hundred of the era\'s most triumphant industrial titans—including Andrew Carnegie, Thomas Edison, Henry Ford, and Alexander Graham Bell—is the seminal foundation of the modern personal achievement movement. Hill’s central philosophy is encapsulated in his famous dictum: "Whatever the mind can conceive and believe, it can achieve." The book outlines thirteen proven steps to riches, including Definite Major Purpose, unyielding Faith, Auto-suggestion, Specialized Knowledge, Organized Planning, and the synergy of the Master Mind alliance. Far from being a mere manual for monetary gain, Hill’s work emphasizes that true riches encompass mental peace, deep friendships, enduring health, and a spirit of contribution.',
    collegeLessons: [
      {
        title: 'Form a Student "Master Mind" Study & Venture Alliance',
        takeaway: 'The Master Mind is the coordination of knowledge and effort between two or more people who work toward a definite purpose in a spirit of harmony.',
        studentContext: 'Form a tight circle of 3 to 4 ambitious, ethical college peers who meet weekly to review academic goals, critique projects, and support each other\'s career milestones.'
      },
      {
        title: 'Write Down a Definite Major Purpose with a Deadline',
        takeaway: 'Vague wishes bring vague results. Write down the exact goal, the exact timeline, and the value you will deliver in return.',
        studentContext: 'Draft your post-graduation career mission on an index card and review it morning and night to keep your actions aligned throughout the semester.'
      },
      {
        title: 'Cultivate Unwavering Persistence Through Inevitable Failures',
        takeaway: 'Temporary defeat is not failure; it is merely a sign that your plans are unsound. Rebuild and persevere.',
        studentContext: 'When facing rejected applications or difficult exam results, treat the setback as critical feedback to refine your preparation strategy.'
      }
    ]
  },

  'emotional-intelligence': {
    extendedDescription:
      'Emotional Intelligence: Why It Can Matter More Than IQ by psychologist Daniel Goleman revolutionized our understanding of human potential and workplace effectiveness. Challenging the narrow, traditional dogma that high academic IQ guarantees life success, Goleman marshals groundbreaking neuroscience and behavioral research to demonstrate that Emotional Quotient (EQ) is the decisive factor in leadership, mental well-being, and marital harmony. The book identifies five core domains of emotional intelligence: Self-awareness (recognizing emotions as they happen), Self-regulation (managing disruptive impulses), Motivation (persevering through setbacks), Empathy (attuning to the feelings of others), and Social Skill (navigating relationships smoothly). Goleman shows that unlike static IQ, emotional intelligence can be cultivated throughout our entire lives.',
    collegeLessons: [
      {
        title: 'Prevent Amygdala Hijacking During Exam Stress',
        takeaway: 'Under acute threat or panic, the emotional amygdala overrides the rational prefrontal cortex, causing mental paralysis.',
        studentContext: 'When feeling sudden panic during a major exam or presentation, take three slow deep breaths to activate the parasympathetic nervous system and restore cognitive clarity.'
      },
      {
        title: 'Develop Granular Emotional Self-Awareness',
        takeaway: 'Naming your specific emotional state (e.g. "I am feeling fatigued and overwhelmed" rather than "I am angry") reduces its neurological grip.',
        studentContext: 'Check in with your feelings daily in a personal journal to recognize early signs of academic burnout before it impacts your health.'
      },
      {
        title: 'Cultivate Empathy in Diverse Campus Environments',
        takeaway: 'Empathy is the fundamental basis of rapport and cross-cultural understanding in global organizations.',
        studentContext: 'Actively engage with students from different socioeconomic and cultural backgrounds to broaden your worldview and leadership sensitivity.'
      }
    ]
  },

  'the-intelligent-investor': {
    extendedDescription:
      'The Intelligent Investor by Benjamin Graham, revered by Warren Buffett as "by far the best book on investing ever written," is the definitive holy scripture of value investing. First published in 1949, Graham’s core framework separates the prudent investor from the reckless speculator. Graham introduces unforgettable allegorical concepts, notably "Mr. Market"—an emotional, manic-depressive business partner whose volatile daily price quotes should be taken advantage of, rather than dictate your emotional state. Central to Graham’s doctrine is the concept of "Margin of Safety"—buying securities at a substantial discount to their conservative intrinsic value to insulate capital against human error and economic adversity. Graham champions disciplined, unemotional dollar-cost averaging into diversified index funds for defensive investors.',
    collegeLessons: [
      {
        title: 'Anchor Your Strategy in the "Margin of Safety" Principle',
        takeaway: 'Never invest without a buffer that protects your capital against human error, unexpected bad luck, or recessions.',
        studentContext: 'Apply the margin of safety to your college life: always leave extra buffer time before assignment deadlines and maintain cash reserves for unforeseen expenses.'
      },
      {
        title: 'Master the "Mr. Market" Allegory to Avoid Market Panic',
        takeaway: 'Market price fluctuations reflect manic emotional sentiment, not intrinsic business value. Never let market moods dictate your actions.',
        studentContext: 'When headlines proclaim market crashes, do not panic-sell your long-term student index investments. View downturns as opportunities to accumulate assets at a discount.'
      },
      {
        title: 'Adopt the Disciplined Defensive Investor Model',
        takeaway: 'Trying to beat Wall Street experts through stock picking and market timing is a fool\'s errand for most individuals.',
        studentContext: 'Automate low-cost index fund investments every month throughout your college years rather than wasting time day-trading on phone apps.'
      }
    ]
  },

  'lets-talk-money': {
    extendedDescription:
      'Let\'s Talk Money: You\'ve Worked Hard for It, Now Make It Work for You by prominent financial expert Monika Halan provides a crystal-clear, zero-jargon roadmap to financial security tailored specifically for early and mid-career earners navigating modern banking and investment options. Halan cuts through misleading insurance-investment hybrids, mutual fund noise, and predatory sales pitches with her elegant "Three-Jar Financial Framework": an Income Jar for essential recurring expenses, a Security Jar for emergency protection and insurance, and a Growth Jar for compounding long-term equity wealth. By emphasizing term life insurance, standalone health coverage, low-cost index investing, and transparent asset allocation, Halan equips readers with an actionable, resilient financial architecture for life.',
    collegeLessons: [
      {
        title: 'Build the 3-Jar Financial Architecture Early',
        takeaway: 'Separate your money into three clear buckets: Cash Flow for daily needs, Emergency Protection, and Long-Term Equity Compounding.',
        studentContext: 'Set up distinct sub-accounts or digital wallets for your college expenses so you never accidentally spend emergency savings on weekend social outings.'
      },
      {
        title: 'Say No to Misleading "Investment-Insurance" Hybrids',
        takeaway: 'Never mix insurance with investments. Pure term life and pure health insurance offer maximum protection at a fraction of the cost.',
        studentContext: 'When financial agents or family acquaintances pitch traditional endowment plans or ULIPs, politely decline and invest your growth capital in transparent index funds.'
      },
      {
        title: 'Establish a Standalone Health Insurance Policy',
        takeaway: 'A single unforeseen medical emergency can wipe out years of disciplined savings without adequate health coverage.',
        studentContext: 'Verify your coverage under family or university health plans, and ensure you understand basic deductible and claim procedures before entering the workforce.'
      }
    ]
  ,
                                                                                                                                    teluguAudioUrl: '/audio/te/zero-to-one.mp3',
    teluguDuration: 707,
    teluguChapters: [
      { id: 'te-c1', title: 'అధ్యాయం 1: భవిష్యత్తు సవాలు: జీరో టు వన్ వర్సెస్ వన్ టు ఎన్', timestamp: 0, duration: 144 },
      { id: 'te-c2', title: 'అధ్యాయం 2: పోటీ కేవలం ఓడిపోయేవారి కోసమే: సృజనాత్మక గుత్తాధిపత్యం', timestamp: 144, duration: 143 },
      { id: 'te-c3', title: 'అధ్యాయం 3: మోనోపోలీ వ్యాపారం నిర్మించే నాలుగు స్తంభాలు', timestamp: 288, duration: 114 },
      { id: 'te-c4', title: 'అధ్యాయం 4: పవర్ లా సూత్రం: వెంచర్ క్యాపిటల్ మరియు జీవిత నిర్ణయాలు', timestamp: 402, duration: 89 },
      { id: 'te-c5', title: 'అధ్యాయం 5: చివరిగా వచ్చే కంపెనీలే గెలుస్తాయి: లాస్ట్ మూవర్ అడ్వాంటేజ్', timestamp: 491, duration: 78 },
      { id: 'te-c6', title: 'అధ్యాయం 6: ఫౌండర్స్ పారడాక్స్ మరియు సేల్స్ ప్రాముఖ్యత', timestamp: 569, duration: 66 },
      { id: 'te-c7', title: 'అధ్యాయం 7: కాలేజ్ విద్యార్థులకు మరియు ఆస్పిరింగ్ ఎంట్రప్రెన్యూర్లకు సందేశం', timestamp: 635, duration: 72 },
    ]
}
};
