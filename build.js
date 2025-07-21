const fs = require('fs');
const path = require('path');

// Create dist directory
const distDir = './dist';
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Read source files
const css = fs.readFileSync('./src/throne-ui.css', 'utf8');
const js = fs.readFileSync('./src/throne-ui.js', 'utf8');

// Create combined files
const combinedCSS = `/*! ThroneUi v1.0.0 | MIT License */\n${css}`;
const combinedJS = `/*! ThroneUi v1.0.0 | MIT License */\n${js}`;

// Write to dist
fs.writeFileSync('./dist/throne-ui.css', combinedCSS);
fs.writeFileSync('./dist/throne-ui.js', combinedJS);

// Create minified versions (basic minification)
const minifiedCSS = combinedCSS
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/;\s*}/g, '}') // Remove semicolon before }
    .replace(/\s*{\s*/g, '{') // Clean up braces
    .replace(/;\s*/g, ';') // Clean up semicolons
    .trim();

const minifiedJS = combinedJS
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .trim();

fs.writeFileSync('./dist/throne-ui.min.css', minifiedCSS);
fs.writeFileSync('./dist/throne-ui.min.js', minifiedJS);

console.log('✅ Build complete!');
console.log('📦 Files created:');
console.log('   - dist/throne-ui.css');
console.log('   - dist/throne-ui.js');
console.log('   - dist/throne-ui.min.css');
console.log('   - dist/throne-ui.min.js');