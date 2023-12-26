/* const fs = require('fs');
const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    fs.readFile('./akash.html', "utf8", (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
}); */

const url = require('url');
const myUrl = 'http://mywebsite.com:8080/hello.html?id=100&status=active&name=Akash';
const purl = url.parse(myUrl, true);
console.log(purl.query.id);
