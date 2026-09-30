const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}

const imgFiles = getFiles(path.join(process.cwd(), 'public', 'images'));

console.log(`Checking ${imgFiles.length} image files...`);

imgFiles.forEach(file => {
  const stat = fs.statSync(file);
  const rel = path.relative(process.cwd(), file);
  if (stat.size === 0) {
    console.error(`ZERO BYTE FILE FOUND: ${rel}`);
  } else if (stat.size < 1000) {
    console.warn(`VERY SMALL FILE (<1KB): ${rel} (${stat.size} bytes)`);
  } else {
    // Basic header check for image types
    const buf = Buffer.alloc(12);
    const fd = fs.openSync(file, 'r');
    fs.readSync(fd, buf, 0, 12, 0);
    fs.closeSync(fd);
    
    let type = 'unknown';
    if (buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF) type = 'JPEG';
    else if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) type = 'PNG';
    else if (buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 && buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50) type = 'WEBP';
    else if (buf.toString('utf8').includes('<svg')) type = 'SVG';

    console.log(`OK: [${type}] ${rel} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
});
