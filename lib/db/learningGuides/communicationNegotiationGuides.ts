import { NonFictionLearningGuide } from '@/types/learning';

export const howToWinFriendsGuide: NonFictionLearningGuide = {
  id: 'guide-how-to-win-friends-and-influence-people',
  bookId: 'how-to-win-friends-and-influence-people',
  type: 'nonfiction',
  introduction:
    'How to Win Friends and Influence People by Dale Carnegie, published in 1936, remains the undisputed classic of interpersonal relationships and social intelligence. Based on timeless observations of human psychology, Carnegie’s core insight is that human beings are not creatures of logic, but creatures of emotion—bristling with prejudices, motivated by pride, and hungry for appreciation. For college students entering team projects, internships, campus leadership, and job interviews, this guide provides the foundational etiquette to connect warmly, persuade gracefully, and lead without provoking resentment.',
  overview: {
    whatItIsAbout:
      'The book provides practical principles across four domains: 1. Fundamental techniques in handling people, 2. Six ways to make people like you, 3. How to win people to your way of thinking, and 4. How to be a leader who changes attitudes without giving offense.',
    problemAddressed:
      'Most people interact defensively: they criticize, complain, condemn, argue, and boast about their own achievements. This triggers defensiveness in others, alienating colleagues and killing cooperation.',
    centralArgument:
      'The deepest craving in human nature is the craving to be appreciated. When you stop obsessing over your own ego and genuinely focus on making others feel important and understood, they will eagerly help, support, and collaborate with you.',
    majorThemes: [
      'Don’t Criticize, Condemn, or Complain: The Futility of Blame',
      'Give Honest and Sincere Appreciation versus Cheap Flattery',
      'Arouse in the Other Person an Eager Want (Baiting the Hook)',
      'Become Genuinely Interested in Other People',
      'The Only Way to Get the Best of an Argument Is to Avoid It',
      'Let the Other Person Save Face and Feel the Idea Is Theirs'
    ],
    connectionsBetweenIdeas:
      'Carnegie starts with emotional safety (never humiliate or criticize), builds into authentic warmth (smiling, remembering names, active listening), progresses to intellectual persuasion (seeing from their angle, avoiding arguments), and concludes with compassionate leadership.',
    whatStudentsUnderstand:
      'Students will understand that winning a social argument by crushing someone logically is a total failure; true influence means leaving the other person feeling respected and inspired to partner with you.'
  },
  concepts: [
    {
      name: 'Don’t Criticize, Condemn, or Complain',
      simpleExplanation:
        'Criticism is futile because it puts a person on the defensive and usually makes them strive to justify themselves. Criticism wounds a person’s precious pride, hurts their sense of importance, and arouses resentment.',
      whyItMatters:
        'Even notorious criminals (like Al Capone) rationalized their actions as misunderstood public service. If criminals justify themselves, your roommates, group partners, and colleagues certainly will when attacked.',
      everydayExample:
        'Telling a group partner publicly: "Your slides look awful and you’re dragging our grade down" makes them hostile and uncooperative. Saying: "You did great research on section 2; let’s polish the layout together to make the data pop" inspires improvement.',
      collegeStudentApplication:
        'When a classmate makes an error in a team project, resist the urge to deliver a sharp rebuke. Address the issue privately, highlight what they did well first, and focus on collaborative solutions.',
      difficultTerms: [
        {
          term: 'Defensive Rationalization',
          definition: 'The psychological instinct to invent logical excuses to defend one’s actions when feeling attacked or criticized.'
        }
      ]
    },
    {
      name: 'Become Genuinely Interested in Other People',
      simpleExplanation:
        'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.',
      whyItMatters:
        'People are not interested in you; they are interested in themselves—morning, noon, and night. When you show genuine curiosity about their life, passions, and background, their defenses melt completely.',
      everydayExample:
        'At a campus networking mixer, while others boast about their GPAs and internships, you ask the alumnus about the biggest unexpected challenge they faced in their first year on the job, listening attentively.',
      collegeStudentApplication:
        'In job interviews and campus events, ask thoughtful questions and listen with rapt attention. People always remember the person who made them feel fascinating.',
      difficultTerms: [
        {
          term: 'Egocentrism',
          definition: 'The natural human tendency to view the world predominantly from the perspective of one’s own self-interest.'
        }
      ]
    },
    {
      name: 'A Name is the Sweetest Sound',
      simpleExplanation:
        'Remember that a person’s name is to that person the sweetest and most important sound in any language. Remembering and using someone’s name pays them a subtle and very effective compliment.',
      whyItMatters:
        'Forgetting or misspelling a name signals carelessness or disrespect. Remembering it signals that the individual is valued and recognized.',
      everydayExample:
        'Greeting your campus dining staff, librarian, or junior lab assistant by their first name with a smile instantly creates warmth and extraordinary service.',
      collegeStudentApplication:
        'When introduced to someone, repeat their name immediately: "Nice to meet you, Rahul." Associate it with a mental image and write it in your notes if necessary.',
      difficultTerms: [
        {
          term: 'Social Validation',
          definition: 'The recognition and affirmation of an individual’s personal worth and identity within a group.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'The only way to get the best of an argument is to avoid it.',
      whatItMeans:
        'Nine times out of ten, an argument ends with each of the contestants more firmly convinced than ever that he is absolutely right. You cannot win an argument: if you lose it, you lose it; and if you win it by humiliating your opponent, you lose their goodwill forever.',
      whyItMatters:
        'Intellectual dominance does not equal agreement. A person convinced against their will is of the same opinion still.',
      realisticExample:
        'Debating politics or framework choices on social media: no one ever says "Thank you for insulting my intellect; I now change my worldview."',
      howStudentAppliesIt:
        'When disagreements arise, look for areas of agreement first. Say: "I understand why you see it that way; let’s explore the trade-offs of both approaches."'
    },
    {
      insight: 'Let the other person feel that the idea is theirs.',
      whatItMeans:
        'People have vastly more faith in ideas that they discover themselves than in ideas that are handed to them on a platter. Make suggestions and let the other person formulate the conclusion.',
      whyItMatters:
        'When people feel ownership over an idea, they work passionately to execute it rather than resisting it as an external command.',
      realisticExample:
        'Instead of ordering your team: "We must use React for this hackathon," ask: "What framework allows us to prototype the UI fastest within our 24-hour limit?" and guide them to suggest React.',
      howStudentAppliesIt:
        'In group brainstorming, plant seeds through questions and celebrate when teammates embrace and flesh out the concept.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Smile warmly: An authentic smile radiates acceptance and says: "I like you; I am glad to see you."',
      'Be a good listener: Encourage friends to talk about their achievements, challenges, and aspirations without cutting in to share your own story.'
    ],
    studyingAndLearning: [
      'Engage professors respectfully: Ask for guidance on specific topics that the professor specializes in; academic scholars love sharing their passion with engaged students.'
    ],
    careerDevelopment: [
      'Praise the slightest improvement and praise every improvement: Be hearty in your approbation and lavish in your praise when leading student clubs or intern teams.',
      'Call attention to mistakes indirectly: Start with sincere praise before mentioning an area for refinement.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Carnegie is teaching fake, insincere manipulation and kissing up to people.',
      reality:
        'Carnegie explicitly condemns flattery as selfish, shallow, and false. He demands sincere appreciation: "Flattery is from the teeth out; sincere appreciation is from the heart out."',
      caution:
        'Never offer compliments you do not genuinely believe; people detect phoniness instantly.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The psychological power of positive reinforcement over punishment and criticism.',
      'The importance of active listening and remembering names in relationship formation.',
      'The reality that wounded pride breeds stubborn defensiveness.'
    ],
    authorOpinions: [
      'Carnegie’s extreme insistence on avoiding all direct confrontation can lead to passive-aggressive conflict avoidance in high-stakes situations where boundary-setting is urgently required.',
      'Some principles reflect mid-20th century corporate sales culture and require adjustment for direct, high-candor modern engineering cultures.'
    ],
    anecdotesVsEvidence: [
      'The book relies heavily on historical parables (Abraham Lincoln, Charles Schwab, Benjamin Franklin) rather than laboratory experiments, though its psychology is universally affirmed.'
    ],
    debatedOrContextualClaims: [
      'In cultures that value direct, unvarnished debate (such as Dutch, German, or Israeli tech culture), Carnegie’s gentle indirectness may be misinterpreted as evasive or lacking clarity.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Never criticize, condemn, or complain—appeal to pride and dignity.',
      'Give honest, sincere appreciation—make people feel important.',
      'Become genuinely interested in other people.',
      'Avoid arguments; you cannot win by crushing someone’s pride.',
      'Let others save face and feel ownership over collaborative ideas.'
    ],
    finalSummary:
      'How to Win Friends and Influence People provides an enduring masterclass in human dignity and social grace. By trading self-centered boasting for genuine curiosity, active listening, and sincere appreciation, students can win hearts, inspire collaboration, and lead with lasting warmth.',
    actionPlan: [
      {
        step: 'Step 1: Eliminate Criticism for 7 Days',
        action: 'Commit to spending one full week without criticizing, condemning, or complaining about anyone.',
        outcome: 'Immediate defusal of social friction.'
      },
      {
        step: 'Step 2: Give Three Sincere Compliments Daily',
        action: 'Find three specific, genuine virtues in friends, family, or colleagues and express appreciation directly.',
        outcome: 'Deposits into the social goodwill account.'
      },
      {
        step: 'Step 3: Master the Art of Asking Questions',
        action: 'In your next social interaction, ask at least three open-ended questions about the other person’s interests before talking about yourself.',
        outcome: 'Instant rapport and lasting positive impression.'
      }
    ],
    fivePointsToRemember: [
      '1. People crave the feeling of importance above almost all else.',
      '2. Criticism hurts pride and provokes defensive resistance.',
      '3. Sincere appreciation inspires; cheap flattery repels.',
      '4. Listening actively is the greatest compliment you can pay another human.',
      '5. The only way to win an argument is to avoid it entirely.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Sincere Appreciation',
        definition: 'Genuine, heartfelt acknowledgment of another person’s positive qualities and efforts.'
      },
      {
        term: 'Flattery',
        definition: 'Insincere praise spoken to manipulate or gain personal advantage.'
      },
      {
        term: 'Saving Face',
        definition: 'Preserving a person’s dignity and self-esteem during a mistake or critique.'
      },
      {
        term: 'Baiting the Hook',
        definition: 'Framing proposals around what the other person wants rather than what you need.'
      }
    ],
    questions: [
      {
        question: 'Why does Dale Carnegie strongly advise against direct criticism?',
        answer:
          'Because criticism wounds a person’s pride, triggers defensiveness, and provokes resentment without motivating positive change.'
      },
      {
        question: 'What is the difference between appreciation and flattery?',
        answer:
          'Appreciation is sincere, unselfish, and comes from the heart; flattery is insincere, selfish, and comes from the teeth out.'
      },
      {
        question: 'How do you convince someone to adopt your idea?',
        answer:
          'By guiding them through questions so that they arrive at the conclusion themselves, giving them full ownership of the idea.'
      }
    ],
    oneMinuteSummary:
      'How to Win Friends and Influence People teaches that social intelligence is built on empathy, respect, and sincere appreciation. By avoiding criticism, remembering names, listening intently, and letting others feel ownership of ideas, students build magnetic personal relationships and collaborative influence.'
  }
};

export const neverSplitTheDifferenceGuide: NonFictionLearningGuide = {
  id: 'guide-never-split-the-difference',
  bookId: 'never-split-the-difference',
  type: 'nonfiction',
  introduction:
    'Never Split the Difference: Negotiating As If Your Life Depended On It by Chris Voss, former lead international kidnapping negotiator for the FBI, dismantles academic, rational-bargaining negotiation theories. Voss argues that traditional models (like Harvard’s "Getting to Yes") treat humans like rational computers, ignoring that negotiation is deeply emotional, irrational, and fear-driven. For college students negotiating job offers, rent agreements, project deadlines, or grade disputes, this book provides the field-tested tools of "Tactical Empathy" to disarm hostility, build deep rapport, and uncover hidden leverage.',
  overview: {
    whatItIsAbout:
      'The book provides high-stakes crisis negotiation strategies adapted for everyday business and personal life. It introduces tactical tools: mirroring, labeling emotions, the accusation audit, triggering "That’s Right", the power of "No", calibrated "How" and "What" questions, and finding hidden "Black Swans".',
    problemAddressed:
      'Most people negotiate from a posture of combative compromise ("splitting the difference"), which produces lose-lose compromises. Alternatively, people fear negotiation and accept lowball offers out of conflict avoidance.',
    centralArgument:
      'Negotiation is not a battle of logic, but a process of emotional discovery. By employing Tactical Empathy—vocally recognizing and diffusing the other party’s unspoken fears and emotions—you disarm resistance and guide them to solve your problem for you.',
    majorThemes: [
      'Tactical Empathy: Emotional Intelligence on Steroids',
      'The Late-Night FM DJ Voice and Mirroring (The Rule of 3)',
      'Labeling Emotions and The Accusation Audit',
      'Beware "Yes", Master "No": Why "No" Starts the Real Negotiation',
      'The Illusion of Control: Calibrated "How" and "What" Questions',
      'Finding the Black Swan: Uncovering Unknown Unknowns'
    ],
    connectionsBetweenIdeas:
      'Voss begins with tone of voice and mirroring to establish psychological safety, introduces labeling to defuse negative emotions, explains why forcing an early "Yes" makes people defensive, teaches calibrated questions to shift the problem-solving burden, and finishes with uncovering hidden Black Swans that shift power.',
    whatStudentsUnderstand:
      'Students will understand that negotiation is not about intimidation or compromise (wearing one brown shoe and one black shoe when you disagree); it is about creating emotional safety so both sides can reach the optimal outcome.'
  },
  concepts: [
    {
      name: 'The Late-Night FM DJ Voice & Mirroring',
      simpleExplanation:
        'Use a calm, downward-inflecting, slow, and soothing tone of voice (the Late-Night FM DJ voice). To mirror, simply repeat the last 1 to 3 critical words the other person just said with a curious, upward-inflecting tone.',
      whyItMatters:
        'The FM DJ voice immediately triggers a neurochemical relaxation response in the other person’s brain. Mirroring prompts the speaker to elaborate, clarify, and reveal hidden information without feeling interrogated.',
      everydayExample:
        'Manager: "We really need you to come in and finish this database migration on Sunday." Student: "On Sunday?" (curious mirror). Manager: "Well, mostly because the client presentation is at 9 AM Monday and we haven’t verified the backup scripts." The true issue (backup scripts) is revealed.',
      collegeStudentApplication:
        'When a professor or boss makes a demanding or vague request, mirror the last three words gently. It forces them to unpack their underlying intent without creating conflict.',
      difficultTerms: [
        {
          term: 'Mirroring',
          definition: 'Repeating the last three words (or the critical one to three words) of what someone said to encourage elaboration and build subconscious rapport.'
        }
      ]
    },
    {
      name: 'Labeling & The Accusation Audit',
      simpleExplanation:
        'Labeling is vocally naming the other party’s underlying emotions: "It seems like you’re frustrated..." or "It sounds like you feel unappreciated." An Accusation Audit lists every terrible thing the other side could possibly think or say about you before they can say it.',
      whyItMatters:
        'Brain scans show that when you label a negative emotion ("It seems like you’re worried about our budget"), electrical activity in the amygdala drops instantly. The Accusation Audit takes the sting out of negative assumptions before they can be used against you.',
      everydayExample:
        'Approaching a professor for an extension: "Before you look at this, you’re probably going to think I’m disorganized, irresponsible, and taking advantage of your kindness because I’m asking for an extension at the last minute..." (Accusation Audit). The professor usually responds: "No, don’t be so hard on yourself, what’s going on?"',
      collegeStudentApplication:
        'Use an Accusation Audit whenever you must deliver bad news, ask for a difficult favor, or renegotiate a deadline.',
      difficultTerms: [
        {
          term: 'Accusation Audit',
          definition: 'Proactively identifying and voicing all the negative perceptions, complaints, and accusations the other party might hold against you.'
        }
      ]
    },
    {
      name: 'Calibrated Questions ("How am I supposed to do that?")',
      simpleExplanation:
        'Avoid questions that can be answered with a defensive "Yes" or closed response. Use open-ended questions starting with "What" or "How" (never "Why", which sounds accusatory). The master question: "How am I supposed to do that?"',
      whyItMatters:
        'A calibrated "How" question gives the other party the illusion of control while forcing them to solve your dilemma for you. It politely says "No" without using the word "No".',
      everydayExample:
        'A landlord demands a 30% rent increase on your student apartment. Instead of yelling, say with a calm voice: "I appreciate your position, but how am I supposed to afford that on a student budget and still remain here?"',
      collegeStudentApplication:
        'Use "How" and "What" questions when team members dump excessive work on you: "What should I de-prioritize to get this done by tonight?"',
      difficultTerms: [
        {
          term: 'Calibrated Question',
          definition: 'An open-ended question designed to steer conversation and force the listener to contemplate a dilemma without feeling backed into a corner.'
        }
      ]
    }
  ],
  insights: [
    {
      insight: 'Beware "Yes", master "No".',
      whatItMeans:
        'People use "Counterfeit Yes" to get you to stop talking and leave them alone. Pushing people for a "Yes" makes them feel trapped. Giving them the freedom to say "No" makes them feel safe, protected, and in total control.',
      whyItMatters:
        'Reframe your questions to solicit a "No": Instead of "Do you have five minutes to talk?" (which triggers fear of a sales pitch), ask: "Is now a bad time to talk?" When they say "No", they feel in control and ready to listen.',
      realisticExample:
        'Emailing an unresponsive interviewer: "Have you given up on this project?" triggers an instinctive "No, sorry for the delay, we were waiting for approval!" within hours.',
      howStudentAppliesIt:
        'Change closing questions from "Do you agree?" to "Is it completely ridiculous to propose...?" or "Have you given up on...?"'
    },
    {
      insight: '"That’s right" is the breakthrough moment; "You’re right" is a dismissal.',
      whatItMeans:
        'When you tell someone "You’re right", you are usually trying to shut them up so they go away. When someone says "That’s right", it signifies that you have summarized their worldview so accurately that they feel deeply understood.',
      whyItMatters:
        'Never stop probing until you hear "That’s right". Only then has psychological breakthrough occurred.',
      realisticExample:
        'Summarizing a client’s frustration: "It sounds like you felt our initial delivery missed your branding guidelines, and you’re worried this launch will reflect poorly on your leadership." Client: "That’s right!" Trust is unlocked.',
      howStudentAppliesIt:
        'Summarize your counterpart’s grievances completely before pitching your solution.'
    }
  ],
  studentApplications: {
    collegeLife: [
      'Salary and internship negotiations: Never accept the first offer immediately; label their budget constraints ("It sounds like your internship budget is fixed, but what does career progression look like for top performers?")',
      'Rent and lease agreements: Use the Ackerman bargaining framework (start at 65% of target, move to 85%, 95%, and final precise number with non-monetary concessions).'
    ],
    studyingAndLearning: [
      'Negotiating project deadlines with professors: Use the Accusation Audit and calibrated questions rather than demanding extensions.'
    ],
    careerDevelopment: [
      'Uncovering Black Swans: Every negotiation has 3 to 5 pieces of hidden information (Black Swans) that, if discovered, change everything. Ask open-ended questions about their underlying fears.'
    ]
  },
  misconceptions: [
    {
      misconception: 'Never Split the Difference means you should be a stubborn, uncompromising bully.',
      reality:
        'Voss argues that compromising down the middle (splitting the difference) is often lazy and leads to poor results for both parties. Real negotiation is about uncovering creative solutions where both parties get what they truly value.',
      caution:
        'Never act aggressive; Tactical Empathy relies on warm, calm, curious emotional regulation.'
    }
  ],
  criticalThinking: {
    wellSupportedIdeas: [
      'The neuroscience of labeling negative emotions to calm the amygdala.',
      'The psychological power of granting counterparts autonomy through "No".',
      'The effectiveness of open-ended calibrated questions in shifting cognitive burdens.'
    ],
    authorOpinions: [
      'Voss’s absolute rejection of standard win-win bargaining (such as Fisher & Ury’s principled negotiation) is sometimes intentionally dramatic; principled negotiation and tactical empathy work brilliantly when combined.'
    ],
    anecdotesVsEvidence: [
      'The book is full of heart-pounding FBI kidnapping stories (terrorists in the Philippines, bank heists in Brooklyn). While gripping, high-stakes hostage negotiations differ in power asymmetry from routine corporate procurement.'
    ],
    debatedOrContextualClaims: [
      'In highly quantitative, transparent financial auctions where decisions are automated by code or strict procurement matrices, emotional labeling plays a smaller role than objective pricing.'
    ]
  },
  finalLessons: {
    coreLessons: [
      'Negotiation is an emotional, psychological process, not a math problem.',
      'Use the Late-Night FM DJ voice to establish calm and authority.',
      'Mirror the last 3 words to draw out deeper information effortlessly.',
      'Label negative emotions and conduct an Accusation Audit to disarm resistance.',
      'Ask calibrated "How" and "What" questions to let the other side solve your problem.'
    ],
    finalSummary:
      'Never Split the Difference transforms negotiation from an anxiety-inducing clash into a psychological dance of discovery. By listening with tactical empathy, mastering the power of "No", and asking calibrated questions, students can stand up for their worth and solve complex disputes with elegance.',
    actionPlan: [
      {
        step: 'Step 1: Practice Mirroring in Daily Chats',
        action: 'In your next three casual conversations, mirror the last 3 words someone says and pause silently.',
        outcome: 'Deepening rapport and uncovering unexpected details.'
      },
      {
        step: 'Step 2: Conduct an Accusation Audit',
        action: 'Before your next difficult meeting, write down all negative assumptions the other person has and voice them first.',
        outcome: 'Disarming defensiveness before it starts.'
      },
      {
        step: 'Step 3: Replace "Why" with "What" and "How"',
        action: 'Instead of asking "Why did you do that?", ask "What caused this outcome?"',
        outcome: 'Elimination of defensive hostility.'
      }
    ],
    fivePointsToRemember: [
      '1. Tactical Empathy is hearing the emotional reality beneath the spoken words.',
      '2. Mirroring (repeating 1-3 words) forces the other person to elaborate.',
      '3. Pushing for "Yes" makes people defensive; allowing "No" makes them feel secure.',
      '4. "That’s Right" is the gold standard of mutual breakthrough.',
      '5. Use "How am I supposed to do that?" to push back gently and effectively.'
    ]
  },
  quickRevision: {
    keyTerms: [
      {
        term: 'Tactical Empathy',
        definition: 'Understanding the feelings and mindset of the other party and vocally recognizing their perspective to build leverage.'
      },
      {
        term: 'Mirroring',
        definition: 'Repeating the last one to three critical words with an inquiring tone to prompt elaboration.'
      },
      {
        term: 'Accusation Audit',
        definition: 'Proactively listing all negative criticisms and assumptions the other side could level against you.'
      },
      {
        term: 'Black Swan',
        definition: 'A hidden, unrevealed piece of critical information that, once discovered, completely alters the balance of power.'
      }
    ],
    questions: [
      {
        question: 'Why does Chris Voss discourage splitting the difference?',
        answer:
          'Because splitting the difference is often a lazy, uncreative compromise that satisfies neither party (like wearing one black shoe and one brown shoe).'
      },
      {
        question: 'What is the purpose of the Late-Night FM DJ voice?',
        answer:
          'To project calm, steady authority and trigger a soothing neurochemical response that lowers the other party’s defensive agitation.'
      },
      {
        question: 'How do you ask for a concession without sounding aggressive?',
        answer:
          'By using calibrated "How" questions, such as: "How am I supposed to do that?" which forces the other party to help solve your limitation.'
      }
    ],
    oneMinuteSummary:
      'Never Split the Difference teaches that master negotiators win through Tactical Empathy, not aggression. By adopting a calm tone, mirroring critical words, labeling underlying fears, embracing the word "No", and asking calibrated "How" questions, students can resolve high-stakes conflicts and achieve exceptional agreements.'
  }
};
