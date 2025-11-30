import sharp from "sharp";

const inputPath = "./assets/cardTexture.jpg";
const outputPath = "./assets/cardTexture.webp";

sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(() => console.log("Conversion complete!"))
  .catch(err => console.error(err));
