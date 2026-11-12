import { BookVisualGuide } from '@/types/visuals';

export const communicationNegotiationVisualGuides: Record<string, BookVisualGuide> = {
  'how-to-win-friends-and-influence-people': {
    bookId: 'how-to-win-friends-and-influence-people',
    slug: 'how-to-win-friends-and-influence-people',
    bookTitle: 'How to Win Friends and Influence People',
    introDescription: 'Dale Carnegie’s timeless human relations classic on sincere appreciation, active listening, winning willing cooperation, and preserving other people’s dignity.',
    diagrams: [
      {
        id: 'criticism-vs-appreciation-loop',
        title: 'The Defensiveness Trap vs The Appreciation Bridge',
        format: 'comparison',
        badge: 'Interpersonal Dynamics Matrix',
        whatItRepresents: 'Why blunt criticism inevitably provokes defensive justification, while sincere appreciation unlocks genuine human cooperation.',
        simpleDescription: 'Criticism is a boomerang: it wounds a person’s precious pride, triggers emotional armor, and always flies back to hit you. Sincere appreciation feeds the deepest hunger of the human heart: the desire to feel important.',
        studentExample: 'A project leader publicly tells a team member: "Your code is full of bugs and sloppy." The member becomes defensive and hostile. Instead, the leader says: "I love the clean modular architecture you built. Let’s pair-program to tighten up the edge-case error handling." The teammate works with enthusiasm.',
        quickRevision: 'Any fool can criticize, condemn, and complain—and most fools do. It takes character and self-control to be understanding and forgiving.',
        comparisonData: {
          sideA: {
            name: 'The Appreciation Bridge',
            subtitle: 'Honest Validation & Dignity',
            badge: 'Willing Cooperation',
            colorTheme: 'forest',
            traits: [
              { point: 'Approach to Mistakes', explanation: 'Call attention to errors indirectly; praise the slightest improvement and praise every improvement.' },
              { point: 'Effect on Self-Esteem', explanation: 'Nourishes the universal craving to feel valued and respected as a unique human being.' },
              { point: 'Emotional Response', explanation: 'Lowers defensive walls, generates genuine loyalty, and sparks internal motivation.' },
              { point: 'Durability of Change', explanation: 'The person strives willingly to live up to the high reputation you have bestowed upon them.' },
              { point: 'Long-Term Impact', explanation: 'Builds lifelong allies and collaborative goodwill across diverse teams.' }
            ]
          },
          sideB: {
            name: 'The Defensiveness Trap',
            subtitle: 'Blunt Criticism & Condemnation',
            badge: 'Resentment Spiral',
            colorTheme: 'amber',
            traits: [
              { point: 'Approach to Mistakes', explanation: 'Publicly calls out flaws, uses accusatory "you" language, and demands submissive apologies.' },
              { point: 'Effect on Self-Esteem', explanation: 'Inflicts psychological wounds on personal pride and triggers acute cognitive dissonance.' },
              { point: 'Emotional Response', explanation: 'Triggers instant rationalization, counter-accusations, and lingering resentment.' },
              { point: 'Durability of Change', explanation: 'Produces superficial compliance when watched, but passive resistance behind your back.' },
              { point: 'Long-Term Impact', explanation: 'Poisons group culture, suffocates initiative, and makes future collaboration toxic.' }
            ]
          },
          verdict: 'Begin with praise and honest appreciation. Talk about your own mistakes before criticizing the other person. Give them a fine reputation to live up to.'
        }
      },
      {
        id: 'six-ways-to-make-people-like-you',
        title: 'Carnegie’s 6 Pillars of Instant Human Connection',
        format: 'mindmap',
        badge: 'Social Magnetism Mind Map',
        whatItRepresents: 'The fundamental psychological behaviors that make people feel comfortable, safe, and authentically valued in your presence.',
        simpleDescription: 'You can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get other people interested in you.',
        studentExample: 'In college networking sessions, instead of bragging about your resume, remember the other student’s name, smile warmly, ask about their research passion, and listen with 100% focused attention.',
        quickRevision: 'Be a good listener. Encourage others to talk about themselves. The sweetest sound in any language to any human being is their own name.',
        mindmapData: {
          centralTheme: {
            label: 'The 6 Ways to Make People Like You',
            description: 'Unlocking instant warmth, trust, and connection with any individual.'
          },
          branches: [
            {
              category: '1. Genuine Interest & Warmth',
              color: 'forest',
              nodes: [
                { label: 'Become Genuinely Interested', description: 'Curiosity about others’ lives, hobbies, challenges, and worldviews.' },
                { label: 'Smile Authentically', description: 'A sincere smile says: "I am happy to see you. You make my day brighter."' }
              ]
            },
            {
              category: '2. The Magic of Names',
              color: 'gold',
              nodes: [
                { label: 'Remember Their Name', description: 'A person’s name is the sweetest and most important sound in their vocabulary.' },
                { label: 'Repeat & Use It Respectfully', description: 'Anchor the name immediately in your memory upon meeting and use it naturally.' }
              ]
            },
            {
              category: '3. Visceral Listening',
              color: 'sage',
              nodes: [
                { label: 'Be a Good Listener', description: 'Stop rehearsing your answer; encourage the other person to talk about themselves.' },
                { label: 'Talk in Terms of Their Interests', description: 'Frame your ideas around what matters to them, not what matters to you.' }
              ]
            },
            {
              category: '4. Importance & Dignity',
              color: 'amber',
              nodes: [
                { label: 'Make Them Feel Important', description: 'Do it sincerely without cheap flattery. Acknowledge their quiet contributions.' },
                { label: 'Always Save Their Face', description: 'Never humiliate someone publicly; give them a graceful exit to preserve their honor.' }
              ]
            }
          ]
        }
      },
      {
        id: 'save-face-conflict-resolution',
        title: 'The 4-Step "Save Face" Conflict Resolution Sequence',
        format: 'flowchart',
        badge: 'Conflict De-Escalation Flowchart',
        whatItRepresents: 'How to correct mistakes or resolve sharp disagreements without bruising the other person’s ego or destroying the relationship.',
        simpleDescription: 'When someone makes an error, crushing their pride makes them an enemy forever. Guiding them through a dignified correction preserves their self-respect and inspires future excellence.',
        studentExample: 'A club treasurer miscalculates the annual budget by ₹10,000. Instead of accusing them of incompetence in front of the club, the president sits down privately, recounts their own past budgeting blunder, praises their hard work, and together they balance the sheet.',
        quickRevision: 'The only way to get the best of an argument is to avoid it. Show respect for the other person’s opinions. Never say: "You are wrong."',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Step 1: Private Encounter & Honest Praise',
              description: 'Never call someone out in front of peers. Open the conversation by highlighting something they genuinely did well recently.',
              tag: 'Dignity Protection'
            },
            {
              stepNumber: 2,
              label: 'Step 2: Admit Your Own Past Mistakes First',
              description: 'Level the playing field by recounting a time you made an identical blunder: "When I started out, I made this exact miscalculation..."',
              tag: 'Vulnerability Bridge',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Share Personal Flaw to Build Empathy',
                yesOutcome: 'The other person lowers their defensive armor and breathes a sigh of relief.',
                noLabel: 'Act Morally Superior & Harsh',
                noOutcome: 'The person shuts down emotionally and seeks revenge.'
              }
            },
            {
              stepNumber: 3,
              label: 'Step 3: Ask Guiding Questions Instead of Direct Orders',
              description: 'Ask: "What do you think would happen if we tried this alternative approach?" Let them discover and state the solution themselves.',
              tag: 'Collaborative Problem-Solving'
            },
            {
              stepNumber: 4,
              label: 'Step 4: Bestow a Fine Reputation to Live Up To',
              description: 'Conclude with unwavering confidence: "I know how meticulous you are. I have zero doubt this next version will be flawless."',
              tag: 'Empowering Resolution',
              outcome: 'The person works double-time with renewed energy and eternal loyalty to your leadership.'
            }
          ]
        }
      }
    ]
  },

  'never-split-the-difference': {
    bookId: 'never-split-the-difference',
    slug: 'never-split-the-difference',
    bookTitle: 'Never Split the Difference',
    introDescription: 'Former FBI lead international kidnapping negotiator Chris Voss reveals high-stakes tactical empathy, calibrated questions, and psychological anchoring.',
    diagrams: [
      {
        id: 'tactical-empathy-loop',
        title: 'The Tactical Empathy Loop: Mirroring & Labeling',
        format: 'flowchart',
        badge: 'Negotiation Engine Flowchart',
        whatItRepresents: 'Chris Voss’s core conversational loop that disarms defensive counterparties, uncovers hidden black swans, and reaches "That’s Right!".',
        simpleDescription: 'Negotiation is not a battle of arguments; it is a process of emotional discovery. Mirroring the last 1–3 words and labeling negative emotions deactivates amygdala fear circuits in the other party.',
        studentExample: 'Your landlord announces a ₹3,000 rent hike. Instead of yelling, you mirror: "Rent hike?" and label: "It sounds like property maintenance costs have risen and you feel under pressure to balance expenses." The landlord sighs, feels understood, and offers a compromise.',
        quickRevision: 'The sweet spot in negotiation is not getting a polite "Yes", but hearing the heartfelt words: "That’s right!" Once they feel completely understood, resistance melts.',
        flowchartData: {
          steps: [
            {
              stepNumber: 1,
              label: 'Step 1: Adopt Late-Night FM DJ Voice',
              description: 'Speak in a calm, slow, downward-inflecting tone. This neurochemically slows the other person’s heartbeat and signals total composure.',
              tag: 'Tone Foundation'
            },
            {
              stepNumber: 2,
              label: 'Step 2: Mirror the Last 1 to 3 Words',
              description: 'Repeat the last 1–3 critical words they just said with an upward inquisitive inflection, then pause in absolute silence for 4 full seconds.',
              tag: 'Eliciting Information'
            },
            {
              stepNumber: 3,
              label: 'Step 3: Label the Unspoken Emotion',
              description: 'Identify the underlying fear: "It seems like you’re worried about being taken advantage of" or "It sounds like this project is behind schedule."',
              tag: 'Amygdala Diffusal',
              isDecision: true,
              decisionPath: {
                yesLabel: 'Label Their Negative Emotion Sincerly',
                yesOutcome: 'Their brain feels acknowledged, tension dissipates, and they reveal hidden facts.',
                noLabel: 'Argue Against Their Emotion Logically',
                noOutcome: 'Their amygdala escalates into full defensive hostility.'
              }
            },
            {
              stepNumber: 4,
              label: 'Step 4: The Epiphany Moment: "That’s Right!"',
              description: 'Summarize their world so accurately that they say: "That’s right!" This represents total psychological alignment, clearing the path to agreement.',
              tag: 'Breakthrough Anchor',
              outcome: 'They view you not as an adversary, but as a trusted partner solving a mutual problem.'
            }
          ]
        }
      },
      {
        id: 'three-types-of-yes-power-of-no',
        title: 'The 3 Types of "Yes" & The Power of "No"',
        format: 'comparison',
        badge: 'Verbal Dynamics Matrix',
        whatItRepresents: 'Why forcing a "Yes" makes people feel cornered and leads to counterfeit agreements, while allowing "No" gives them safety and control.',
        simpleDescription: 'Salesmen push for "Yes", making counterparties cautious and deceptive. Voss shows that "No" provides psychological autonomy. Great negotiators intentionally aim for "No" to start the real negotiation.',
        studentExample: 'Instead of asking a busy professor: "Do you have 15 minutes to review my thesis?" (which triggers a hesitant yes or ghosted email), ask: "Is it a bad time to discuss my thesis for 5 minutes?" It is far easier for them to say "No, not at all, come in!"',
        quickRevision: '"No" is not the end of a negotiation; it is the beginning. "Yes" is often counterfeit. Protect the other person’s right to say "No" to build authentic trust.',
        comparisonData: {
          sideA: {
            name: 'The Power of "No" (Autonomy & Safety)',
            subtitle: 'Starts the Real Negotiation',
            badge: 'Safe & In Control',
            colorTheme: 'forest',
            traits: [
              { point: 'Psychological State', explanation: 'Saying "No" makes the speaker feel protected, autonomous, and in total command of the interaction.' },
              { point: 'Question Formulation', explanation: '"Have you given up on this project?", "Is it ridiculous to suggest...", "Is now a bad time to talk?"' },
              { point: 'Authenticity Level', explanation: '100% authentic: eliminates fake politeness and allows honest discussion of genuine constraints.' },
              { point: 'Defensive Walls', explanation: 'Lowers defensive armor immediately because they know you aren’t trapping them into a commitment.' },
              { point: 'Execution Follow-Through', explanation: 'Agreements built after a "No" foundation result in ironclad, reliable follow-through.' }
            ]
          },
          sideB: {
            name: 'The Trap of "Yes" (Counterfeit Agreements)',
            subtitle: 'The 3 Types: Counterfeit, Confirmation, Commitment',
            badge: 'Fragile Illusion',
            colorTheme: 'amber',
            traits: [
              { point: 'Psychological State', explanation: 'Saying "Yes" triggers anxiety of being trapped, pressured, or signed up for unwanted work.' },
              { point: 'The Counterfeit "Yes"', explanation: 'Said purely to make you shut up and leave the room, with zero intention of taking action.' },
              { point: 'The Confirmation "Yes"', explanation: 'Simple reflexive agreement to an obvious factual statement; carries no emotional buy-in.' },
              { point: 'The Commitment "Yes"', explanation: 'Extremely rare and difficult to achieve through direct badgering without mutual empathy.' },
              { point: 'Execution Follow-Through', explanation: 'Dismal: counterparties ghost, provide excuses, or deliver half-hearted, substandard results.' }
            ]
          },
          verdict: 'Never push for a shallow "Yes". Give people permission to say "No", and use calibrated questions to let them outline how the solution will work.'
        }
      },
      {
        id: 'calibrated-questions-decision-tree',
        title: 'Calibrated "How" & "What" Questions: Bending Reality',
        format: 'concept-diagram',
        badge: 'Strategic Questioning Grid',
        whatItRepresents: 'How replacing aggressive "Why" questions with calibrated "What" and "How" questions forces the counterparty to solve your problem for you.',
        simpleDescription: 'Avoid "Why" because it accuses and triggers defensiveness in every culture. Use "How am I supposed to do that?" to gracefully push back on impossible demands without being confrontational.',
        studentExample: 'A client demands an entire mobile app redesign over a holiday weekend without extra budget. Instead of saying "That is completely impossible!", ask calmly: "How am I supposed to deliver the code quality you deserve in that timeframe without risking server stability?"',
        quickRevision: 'The secret to gaining the upper hand in a negotiation is giving the other party the illusion of control. Calibrated questions achieve this effortlessly.',
        conceptData: {
          coreConcept: 'Calibrated Questioning Framework',
          components: [
            {
              name: 'The "How" Calibration',
              role: 'The Gentle Reality-Bend',
              details: '"How am I supposed to do that?" or "How does this fit into our broader timeline?" forces them to confront the logistical impossibility of their request.',
              connectionToCore: 'Transfers the mental burden of problem-solving back onto their shoulders while keeping you polite and composed.'
            },
            {
              name: 'The "What" Exploration',
              role: 'Black Swan Hunter',
              details: '"What is the biggest challenge you are facing here?" or "What happens if we can’t make this deadline?" uncovers hidden constraints.',
              connectionToCore: 'Reveals unknown information (Black Swans) that completely changes the negotiation landscape.'
            },
            {
              name: 'Eliminating the Toxic "Why"',
              role: 'Defense Prevention',
              details: '"Why did you do that?" sounds like an angry parent scolding a child. Reframe it into: "What led you to make that particular choice?"',
              connectionToCore: 'Prevents the counterparty’s brain from going into fight-or-flight rationalization mode.'
            },
            {
              name: 'The 7-38-55 Rule of Communication',
              role: 'Holistic Decoding',
              details: 'Only 7% of emotional meaning is in the words; 38% is in tone of voice, and 55% is in body language and facial micro-expressions.',
              connectionToCore: 'Always cross-reference spoken words with posture and tone to detect insincerity.'
            }
          ],
          feedbackLoop: 'Whenever you hit an impasse, ask a calibrated "How" question with gentle curiosity. Let them speak until they realize their proposal needs revision.'
        }
      }
    ]
  }
};
