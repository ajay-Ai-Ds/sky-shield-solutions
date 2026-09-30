const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      try {
        const stats = fs.statSync(fullPath);
        if (stats.size > 50000) {
          const inputBuffer = fs.readFileSync(fullPath);
          const pipeline = sharp(inputBuffer).resize({ width: 1600, withoutEnlargement: true });
          
          if (/\.png$/i.test(entry.name)) {
            pipeline.png({ quality: 80, compressionLevel: 8 });
          } else if (/\.webp$/i.test(entry.name)) {
            pipeline.webp({ quality: 80 });
          } else {
            pipeline.jpeg({ quality: 80, mozjpeg: true });
          }

          const outputBuffer = await pipeline.toBuffer();
          fs.writeFileSync(fullPath, outputBuffer);
          const newStats = fs.statSync(fullPath);
          console.log(`Optimized ${entry.name}: ${(stats.size/1024).toFixed(0)}KB -> ${(newStats.size/1024).toFixed(0)}KB`);
        }
      } catch (err) {
        console.error(`Error processing ${entry.name}:`, err.message);
      }
    }
  }
}

const imagesDir = path.join(__dirname, '..', 'public', 'images');
processDirectory(imagesDir).then(() => console.log('Image optimization complete!'));
