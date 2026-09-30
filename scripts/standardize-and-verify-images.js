const fs = require('fs');
const path = require('path');

const publicImgDir = path.join(process.cwd(), 'public', 'images');

// Recursively rename all files in public/images to lower-case
function lowercaseDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      lowercaseDirectory(fullPath);
    } else if (entry.isFile()) {
      const lowerName = entry.name.toLowerCase();
      if (entry.name !== lowerName) {
        const tempPath = path.join(dir, `temp_${Date.now()}_${lowerName}`);
        const finalPath = path.join(dir, lowerName);
        fs.renameSync(fullPath, tempPath);
        fs.renameSync(tempPath, finalPath);
        console.log(`Renamed disk file: ${entry.name} -> ${lowerName}`);
      }
    }
  }
}

console.log('1. Standardizing all files in public/images/ to lowercase...');
lowercaseDirectory(publicImgDir);

// Now update all code files to use lowercase image paths
function getAllCodeFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      if (!name.includes('node_modules') && !name.includes('.next') && !name.includes('.git')) {
        getAllCodeFiles(name, files);
      }
    } else {
      if (/\.(ts|tsx|js|jsx|json|html|css)$/.test(name)) {
        files.push(name);
      }
    }
  });
  return files;
}

console.log('\n2. Updating all code files to lowercase image path references...');
const codeFiles = getAllCodeFiles('.');
const imgRegex = /(['"])(\/images\/[^'"]+)(['"])/g;
let totalReplaced = 0;

codeFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  const newContent = content.replace(imgRegex, (match, p1, imgPath, p3) => {
    const lowerPath = imgPath.toLowerCase();
    if (imgPath !== lowerPath) {
      modified = true;
      totalReplaced++;
      console.log(`[${path.relative(process.cwd(), file)}] ${imgPath} -> ${lowerPath}`);
    }
    return `${p1}${lowerPath}${p3}`;
  });

  if (modified) {
    fs.writeFileSync(file, newContent, 'utf8');
  }
});

console.log(`Updated ${totalReplaced} image path references across codebase.`);

// 3. Final verification step
console.log('\n3. Verifying all image references on disk...');
const missing = [];
codeFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  const regex = /['"](\/images\/[^'"]+)['"]/g;
  while ((match = regex.exec(content)) !== null) {
    const imgPath = match[1];
    const diskPath = path.join(process.cwd(), 'public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      missing.push({ file: path.relative(process.cwd(), file), imgPath });
    }
  }
});

if (missing.length === 0) {
  console.log('SUCCESS! ALL referenced images exist on disk and paths match perfectly (100% lowercase)!');
} else {
  console.log(`WARNING: Found ${missing.length} missing image references:`);
  missing.forEach(m => console.log(` - File: ${m.file} | Missing: ${m.imgPath}`));
}
