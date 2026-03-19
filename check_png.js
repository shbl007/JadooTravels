const fs = require('fs');

function readPngSize(filename) {
  const buffer = fs.readFileSync(filename);
  if (buffer.toString('utf8', 1, 4) !== 'PNG') {
    return 'Not a PNG';
  }
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return `${width}x${height}`;
}

console.log('pizzatower.png:', readPngSize('public/images/pizzatower.png'));
console.log('london.png:', readPngSize('public/images/london.png'));
console.log('europe.png:', readPngSize('public/images/europe.png'));
