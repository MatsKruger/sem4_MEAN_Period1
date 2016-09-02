const net = require('net')
const server = net.createServer(function (socket) {
    // socket handling logic
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    socket.write(`${date.getFullYear()}-${month}-${day} ${hours}:${minutes}\n`);
    socket.end();
})
server.listen(process.argv[2])
