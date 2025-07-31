import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';

const dev = 'http://localhost:5173';
const preview = 'http://localhost:4173';
const staging = 'https://brdsa.teauxfu.dev'
const prod = 'https://brdsa.org'

// UPDATE THIS LINE AS NEEDED
const domain = preview;

const URLS_TO_TEST =  {
  'Homepage': `${domain}`,
  'About': `${domain}/about`,
  'Donate': `${domain}/donate`,
  'FITE': `${domain}/fite`,
  'Get Involved': `${domain}/get-involved`,
  'Our work': `${domain}/our-work`,
};

async function runLighthouse(url, name) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options);
  
  // Save HTML report
  const reportHtml = runnerResult.report;
  const filename = `./reports/${sanitizeUrl(domain)}-${name.toLowerCase().replace(/\s+/g, '-')}.html`;
  fs.writeFileSync(filename, reportHtml);
  
  console.log(`${name} report saved to ${filename}`);
  console.log('Scores:', {
    performance: runnerResult.lhr.categories.performance.score * 100,
    accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    bestPractices: runnerResult.lhr.categories['best-practices'].score * 100,
    seo: runnerResult.lhr.categories.seo.score * 100,
  });

  chrome.kill();
}

function sanitizeUrl(url) {
  return url
    .replace(/^https?:\/\//, '')  // Remove http:// or https://
    .replace(/:/g, '.');          // Replace all colons with dots
}


(async () => {
  for (const [name, url] of Object.entries(URLS_TO_TEST)) {
    try {
      console.log(`\nTesting ${name}: ${url}`);
      await runLighthouse(url, name);
    } catch (err) {
      console.error(`Error testing ${url}:`, err);
    }
  }
})();