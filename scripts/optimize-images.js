import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PREVIEW_DIR = './public/books/previews';
const MAX_WIDTH = 1200; // Maximum width for preview images
const QUALITY = 80; // JPEG quality (0-100)

async function optimizeImages() {
  try {
    const files = await fs.readdir(PREVIEW_DIR);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of imageFiles) {
      const inputPath = path.join(PREVIEW_DIR, file);
      const outputPath = path.join(PREVIEW_DIR, `optimized-${file}`);

      await sharp(inputPath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);

      // Replace original with optimized version
      await fs.unlink(inputPath);
      await fs.rename(outputPath, inputPath);

      console.log(`Optimized: ${file}`);
    }

    console.log('All images have been optimized!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 