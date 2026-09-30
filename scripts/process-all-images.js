const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

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

async function cleanAndOptimize() {
  const imgDir = path.join(process.cwd(), 'public', 'images');
  const files = getFiles(imgDir);
  console.log(`Processing ${files.length} images...`);

  let count = 0;
  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.svg') continue; // skip SVG vector files

    try {
      const inputBuffer = fs.readFileSync(filePath);
      const metadata = await sharp(inputBuffer).metadata();
      
      let pipeline = sharp(inputBuffer);

      // Ensure proper orientation based on EXIF
      pipeline.rotate();

      // Resize if exceptionally large (> 2000px)
      if (metadata.width > 2000 || metadata.height > 2000) {
        pipeline.resize({
          width: 2000,
          height: 2000,
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      let outputBuffer;
      if (ext === '.png') {
        outputBuffer = await pipeline.png({ quality: 85, compressionLevel: 8 }).toBuffer();
      } else if (ext === '.webp') {
        outputBuffer = await pipeline.webp({ quality: 85, effort: 6 }).toBuffer();
      } else {
        // .jpg or .jpeg
        outputBuffer = await pipeline.jpeg({ quality: 85, mozjpeg: true }).toBuffer();
      }

      fs.writeFileSync(filePath, outputBuffer);
      count++;
      console.log(`Cleaned & Optimized [${metadata.format} -> ${ext}]: ${path.relative(process.cwd(), filePath)} (${metadata.width}x${metadata.height}) -> ${(outputBuffer.length / 1024).toFixed(1)} KB`);
    } catch (err) {
      console.error(`FAILED processing ${path.relative(process.cwd(), filePath)}:`, err.message);
    }
  }
  console.log(`\nSuccessfully processed ${count} raster images!`);
}

cleanAndOptimize();
