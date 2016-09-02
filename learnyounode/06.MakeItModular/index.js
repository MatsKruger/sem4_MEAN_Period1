const myModule = require('./module');

myModule(process.argv[2], process.argv[3], function(err, data) {
    if (err) return;
    data.forEach(item => {
        console.log(item);
    })
})
