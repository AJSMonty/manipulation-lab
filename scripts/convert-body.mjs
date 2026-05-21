import fs from 'fs';

function parseStyle(styleStr) {
  const obj = {};
  styleStr.split(';').forEach((part) => {
    const idx = part.indexOf(':');
    if (idx === -1) return;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (!key || !value) return;
    const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[camel] = value;
  });
  return JSON.stringify(obj);
}

let html = fs.readFileSync('body.html', 'utf8');

html = html.replace(/<!--([\s\S]*?)-->/g, (_, c) => `{/* ${c.trim()} */}`);

html = html.replace(/\bclass=/g, 'className=');

html = html.replace(/\sstyle="([^"]*)"/g, (_, s) => ` style={${parseStyle(s)}}`);

const onclickMap = [
  [/onclick="scrollToChapter\((\d+)\)"/g, 'onClick={() => scrollToChapter($1)}'],
  [/onclick="startFeed\(\)"/g, 'onClick={startFeed}'],
  [/onclick="showReveal\(\)"/g, 'onClick={showReveal}'],
  [/onclick="resetExperiment\(\)"/g, 'onClick={resetExperiment}'],
  [/onclick="shareThis\(\)"/g, 'onClick={shareThis}'],
  [/onclick="printThis\(\)"/g, 'onClick={printThis}'],
  [/onclick="toggleTrick\(this\)"/g, 'onClick={(e) => toggleTrick(e.currentTarget)}'],
  [/onclick="toggleEbar\(this\)"/g, 'onClick={(e) => toggleEbar(e.currentTarget)}'],
  [/onclick="quiz\(this,'([^']+)','([^']+)'\)"/g, "onClick={() => quiz('$1', '$2')}"],
  [/onclick="selectScenario\(this\)"/g, 'onClick={(e) => selectScenario(e.currentTarget)}'],
  [/oninput="updateBuildPreview\(\)"/g, 'onInput={updateBuildPreview}'],
  [/onchange="updateBuildPreview\(\)"/g, 'onChange={updateBuildPreview}'],
];

for (const [re, rep] of onclickMap) {
  html = html.replace(re, rep);
}

// Remove slider oninput handlers — handled in React
html = html.replace(/\s+oninput="document\.getElementById\('[^']+'\)\.textContent=this\.value\+'%'"/g, '');

html = html.replace(/<br>/g, '<br />');
html = html.replace(/&amp;/g, '&');

fs.writeFileSync('src/BodyContent.jsx', `/* eslint-disable */\nexport function BodyContent({ scrollToChapter, startFeed, showReveal, resetExperiment, shareThis, printThis, toggleTrick, toggleEbar, quiz, selectScenario, updateBuildPreview }) {\n  return (\n    <>\n${html}\n    </>\n  );\n}\n`);

console.log('Wrote src/BodyContent.jsx');
