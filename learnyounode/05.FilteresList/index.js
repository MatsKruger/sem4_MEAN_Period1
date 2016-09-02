const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], function(err, dirs) {
    console.log(dirs.filter(fileItem => path.extname(fileItem).substring(1) === process.argv[3]).reduce((prev, curr) => prev + '\n' + curr));
});
