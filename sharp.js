/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const target = path.resolve(__dirname, 'src/styles');

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.webp
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${target}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.webp`));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.webp
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(__dirname, `${target}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.webp`));
  });