const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git', '.vscode', '.idea'].includes(entry.name)) {
        getFiles(fullPath, files);
      }
    } else {
      if (/\.(ts|tsx|js|jsx|css|scss|html|json|md)$/.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const allSrcFiles = getFiles('.');
console.log(`Scanning ${allSrcFiles.length} source files for image references...`);

const foundRefs = [];

allSrcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, lineIdx) => {
    const matches = line.matchAll(/(['"`])(\/?(?:images\/|[^\s"'`<>]*?\/)?[^\s"'`<>]+?\.(?:jpg|jpeg|png|webp|svg|gif|avif))\1/gi);
    for (const m of matches) {
      const ref = m[2];
      if (ref.includes('.') && !ref.endsWith('.ts') && !ref.endsWith('.tsx') && !ref.endsWith('.js') && !ref.endsWith('.json') && !ref.endsWith('.css') && !ref.endsWith('.mjs')) {
        foundRefs.push({
          file,
          line: lineIdx + 1,
          ref
        });
      }
    }
  });
});

console.log(`Found ${foundRefs.length} potential image references.`);

const missing = [];
const ok = [];

foundRefs.forEach(({ file, line, ref }) => {
  let cleanRef = ref;
  if (!cleanRef.startsWith('/')) {
    cleanRef = '/' + cleanRef;
  }
  
  cleanRef = cleanRef.split('?')[0];

  const diskPath = path.join(process.cwd(), 'public', cleanRef.substring(1));
  if (fs.existsSync(diskPath)) {
    ok.push({ file, line, ref, diskPath });
  } else {
    missing.push({ file, line, ref, diskPath });
  }
});

console.log(`\n--- SUMMARY ---`);
console.log(`OK: ${ok.length}`);
console.log(`MISSING: ${missing.length}`);

if (missing.length > 0) {
  console.log('\n--- MISSING IMAGE REFERENCES ---');
  missing.forEach(m => {
    console.log(`File: ${m.file}:${m.line} -> Ref: "${m.ref}" (Disk path: ${m.diskPath})`);
  });
}
