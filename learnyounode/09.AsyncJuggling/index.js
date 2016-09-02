const http = require('http');

let callbackCount = 0;

let strings = [];

get(process.argv[2], 0);
get(process.argv[3], 1);
get(process.argv[4], 2);

function get(url, index) {
    callbackCount++;
    http.get(url, response => {
        let fullData = '';
        response.on('data', data => {
            fullData += data.toString();
        });
        response.on('end', evt => {
            strings[index] = fullData;
            callbackCount--;
            if (callbackCount === 0) {
                printStrings();
            }
        });
    });
}

function printStrings() {
    strings.forEach(string => console.log(string));
}
