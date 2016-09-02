const fs = require('fs');
const url = require('url');
const http = require('http');
const map = require('through2-map');
const server = http.createServer(function (req, res) {
    // console.log(url.parse(req.url));
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (req.method === 'GET') {
        const urlObj = url.parse(req.url);
        if ('/api/parsetime' === urlObj.pathname) {
            const queryObj = urlObj.query.split('=');
            if (queryObj[0] === 'iso') {
                const date = new Date(queryObj[1]);
                res.write(JSON.stringify({
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }));
            }
        } else if ('/api/unixtime' === urlObj.pathname) {
            const queryObj = urlObj.query.split('=');
            if (queryObj[0] === 'iso') {
                const date = new Date(queryObj[1]);
                res.write(JSON.stringify({
                    unixtime: date.getTime()
                }));
            }
        }
    }

    res.end();
});
server.listen(process.argv[2]);
