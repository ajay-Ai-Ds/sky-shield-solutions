const fs = require('fs');
const path = require('path');

function getActualCasing(requestedPath) {
  const rel = requestedPath.replace(/^\//, '');
  const parts = rel.split('/');
  let current = path.join(process.cwd(), 'public');

  for (let i = 0; i < parts.length; i++) {
    if (!fs.existsSync(current)) return null;
    const entries = fs.readdirSync(current);
    const matched = entries.find(e => e.toLowerCase() === parts[i].toLowerCase());
    if (!matched) return null;
    current = path.join(current, matched);
  }

  return '/' + path.relative(path.join(process.cwd(), 'public'), current).replace(/\\/g, '/');
}

function getAllFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      if (!name.includes('node_modules') && !name.includes('.next') && !name.includes('.git')) {
        getAllFiles(name, files);
      }
    } else {
      if (/\.(ts|tsx|js|jsx|json|html)$/.test(name)) {
        files.push(name);
      }
    }
  });
  return files;
}

const files = getAllFiles('.');
const imgRegex = /['"](\/images\/[^'"]+)['"]/g;
const mismatches = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const ref = match[1];
    const actual = getActualCasing(ref);
    if (actual && actual !== ref) {
      mismatches.push({ file: f, ref, actual });
    } else if (!actual) {
      mismatches.push({ file: f, ref, actual: 'NOT FOUND ON DISK' });
    }
  }
});

console.log('--- EXACT CASE MISMATCHES FOUND (' + mismatches.length + ') ---');
mismatches.forEach(m => {
  console.log('File:', m.file);
  console.log('  Code Ref: ', m.ref);
  console.log('  Disk Path:', m.actual);
});
