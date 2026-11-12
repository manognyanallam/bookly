const http = require('http');

const ALL_19_SLUGS = [
  'atomic-habits',
  'deep-work',
  'the-7-habits',
  'zero-to-one',
  'rich-dad-poor-dad',
  'the-psychology-of-money',
  'the-richest-man-in-babylon',
  'think-and-grow-rich',
  'the-intelligent-investor',
  'lets-talk-money',
  'the-almanack-of-naval-ravikant',
  'thinking-fast-and-slow',
  'sapiens',
  'the-laws-of-human-nature',
  'emotional-intelligence',
  'how-to-win-friends-and-influence-people',
  'never-split-the-difference',
  'the-48-laws-of-power',
  'the-alchemist'
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', err => reject(err));
  });
}

async function testRoutes() {
  console.log('--- TESTING BOOKLY VISUAL LEARNING ENGINE ---');
  let passed = 0;
  let failed = 0;

  for (const slug of ALL_19_SLUGS) {
    const url = `http://localhost:3000/books/${slug}`;
    try {
      const res = await fetchPage(url);
      if (res.statusCode === 200) {
        const hasVisualiseSec = res.data.includes('Visualise the Ideas') || res.data.includes('sec-visuals');
        const hasInteractiveDiagram = res.data.includes('Interactive Diagram') || res.data.includes('Text Breakdown');
        const hasStudentExample = res.data.includes('Real-Life Student Example');
        const hasQuickRevision = res.data.includes('Quick Revision Takeaway');

        console.log(`[PASS] /books/${slug} (Status 200) - Visualise: ${hasVisualiseSec}, StudentEx: ${hasStudentExample}, QuickRev: ${hasQuickRevision}`);
        passed++;
      } else {
        console.error(`[FAIL] /books/${slug} - Status ${res.statusCode}`);
        failed++;
      }
    } catch (err) {
      console.error(`[ERROR] /books/${slug} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nTEST RESULTS: ${passed} passed, ${failed} failed out of ${ALL_19_SLUGS.length} books.`);
  process.exit(failed > 0 ? 1 : 0);
}

testRoutes();
