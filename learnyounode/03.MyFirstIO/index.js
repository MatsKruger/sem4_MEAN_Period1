const fs = require('fs');
const fileBuffer = fs.readFileSync(process.argv[2]);

console.log(fileBuffer.toString().split('\n').length - 1);
