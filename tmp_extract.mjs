import fs from 'fs';
import path from 'path';

const srcDir = 'e:/EDU/shablons/site-architect/src';

// Regex to capture only colors (excluding CSS property names before them like "color:")
const colorRegex = /:\s*(#[a-fA-F0-9]{3,8}\b|rgba?\([^)]+\))/gi;

let colors = {};

function walkSync(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkSync(filePath);
    } else if (filePath.endsWith('.css') || filePath.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      let match;
      while ((match = colorRegex.exec(content)) !== null) {
        const color = match[1].toLowerCase().trim();
        if (!colors[color]) colors[color] = { count: 0, files: new Set() };
        colors[color].count++;
        colors[color].files.add(filePath.replace(srcDir, ''));
      }
    }
  });
}

walkSync(srcDir);

const sortedColors = Object.entries(colors)
  .map(([color, data]) => ({ color, count: data.count, files: Array.from(data.files) }))
  .sort((a, b) => b.count - a.count);

console.log(JSON.stringify(sortedColors, null, 2));
