const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname);
const PORT = 8001;

const server = http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url === '/' ? '/index.html' : req.url);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  }[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, '127.0.0.1', async () => {
  console.log('server started');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'networkidle' });
    console.log('loaded main page');
    await page.keyboard.press("'");
    let url = page.url();
    console.log('after pressing quote on main page, url=', url);
    if (!url.includes('launchpad.classlink.com/olentangy')) {
      throw new Error('Quote did not redirect on main page');
    }
  } catch (e) {
    console.error('main page test failed:', e);
    await browser.close();
    server.close();
    process.exit(1);
  }
  await browser.close();

  const browser2 = await chromium.launch({ headless: true });
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();
  try {
    await page2.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'networkidle' });
    console.log('loaded page for iframe test');
    await page2.evaluate(() => launchGame('https://example.com'));
    console.log('iframe launched');
    const frameHandle = await page2.waitForSelector('#game-frame');
    await frameHandle.click({ position: { x: 10, y: 10 } });
    await page2.keyboard.press("'");
    await page2.waitForTimeout(2000);
    let url2 = page2.url();
    console.log('after pressing quote with iframe focused, url=', url2);
    if (!url2.includes('launchpad.classlink.com/olentangy')) {
      throw new Error('Quote did not redirect while iframe active');
    }
    console.log('iframe test passed');
  } catch (e) {
    console.error('iframe test failed:', e);
    await browser2.close();
    server.close();
    process.exit(1);
  }
  await browser2.close();
  server.close();
  process.exit(0);
});
