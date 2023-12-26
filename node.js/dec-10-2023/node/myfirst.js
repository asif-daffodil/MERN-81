var http = require('http');
const port = 8080;

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Md. Ashraful Islam Ibne Shirajul Islam!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});