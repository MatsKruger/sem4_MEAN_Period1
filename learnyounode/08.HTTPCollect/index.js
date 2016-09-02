const http = require('http');

http.get(process.argv[2], response => {
    let fullData = '';
    response.on('data', data => {
        fullData += data.toString();
    });
    response.on('end', evt => {
        console.log(fullData.length);
        console.log(fullData);
    });
});
