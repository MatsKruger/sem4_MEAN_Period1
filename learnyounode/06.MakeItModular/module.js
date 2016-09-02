const fs = require('fs');
const path = require('path');

module.exports = function (dirName, fileExt, callback) {
    fs.readdir(dirName, function(err, dirs) {
        if (err) {
            callback(err);
            return;
        }
        const filtered = dirs.filter(fileItem => path.extname(fileItem).substring(1) === fileExt)
        callback(null, filtered);
    });
}
