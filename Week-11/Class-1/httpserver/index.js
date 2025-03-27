const http = require('http');

const server = http.createServer(function (req,res) {
    console.log('Incoming req aya....');
    res.end('Ye lo ji response');
});

server.listen(8000,function () {
    console.log(`Server Started`);
});