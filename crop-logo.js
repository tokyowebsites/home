import sharp from 'sharp';
import { renameSync } from 'fs';

async function cropLogo() {
  const inputPath = 'public/images/tokyo-websites-logo.png';
  const tempPath = 'public/images/tokyo-websites-logo-temp.png';
  
  try {
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width;
    const height = metadata.height;
    
    // Remove top 10% and bottom 20%
    const top = Math.floor(height * 0.1);      // Start at 10% from top
    const bottom = Math.floor(height * 0.8);  // End at 80% (removes bottom 20%)
    const cropHeight = bottom - top;
    
    await sharp(inputPath)
      .extract({ left: 0, top: top, width: width, height: cropHeight })
      .toFile(tempPath);
    
    // Replace original with cropped version
    renameSync(tempPath, inputPath);
    
    console.log(`✓ Cropped logo: ${width}x${height} -> ${width}x${cropHeight} pixels`);
    console.log(`  Removed top ${top}px (10%) and bottom ${height - bottom}px (20%)`);
  } catch (error) {
    console.error('Error cropping logo:', error);
    process.exit(1);
  }
}

cropLogo();
