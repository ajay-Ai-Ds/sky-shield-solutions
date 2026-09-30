const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      if (!name.includes('node_modules') && !name.includes('.next') && !name.includes('.git')) {
        getFiles(name, files);
      }
    } else {
      files.push(name);
    }
  }
  return files;
}

const allFiles = getFiles('.');
const imageRefs = new Set();
const imgRegex = /['"](\/images\/[^'"]+)['"]/g;

allFiles.forEach(f => {
  if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.html') || f.endsWith('.json')) {
    const content = fs.readFileSync(f, 'utf8');
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
      imageRefs.add(match[1]);
    }
  }
});

console.log('--- REFERENCED IMAGES IN CODE ---');
const missing = [];
const existing = [];
imageRefs.forEach(ref => {
  const diskPath = path.join(process.cwd(), 'public', ref.replace(/^\//, ''));
  if (fs.existsSync(diskPath)) {
    existing.push(ref);
  } else {
    missing.push(ref);
  }
});

console.log('Total referenced:', imageRefs.size);
console.log('Existing:', existing.length);
console.log('MISSING IMAGES (Count: ' + missing.length + '):');
missing.forEach(m => console.log('  MISSING:', m));

// Also list all physical images in public/images/
console.log('\n--- ALL PHYSICAL IMAGES IN PUBLIC/IMAGES ---');
const publicImgFiles = getFiles(path.join(process.cwd(), 'public', 'images'));
console.log('Total physical image files:', publicImgFiles.length);
const unreferenced = [];
publicImgFiles.forEach(imgPath => {
  const relPath = '/' + path.relative(path.join(process.cwd(), 'public'), imgPath).replace(/\\/g, '/');
  if (!imageRefs.has(relPath)) {
    unreferenced.push(relPath);
  }
});

console.log('\n--- UNREFERENCED PHYSICAL IMAGES (' + unreferenced.length + ') ---');
unreferenced.forEach(u => console.log('  UNREFERENCED:', u));
