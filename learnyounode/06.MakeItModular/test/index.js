const fs = require('fs');
fs.readFile(process.argv[2], function(err, fileBuffer) {
    console.log(fileBuffer.toString().split('\n').length - 1);
});
