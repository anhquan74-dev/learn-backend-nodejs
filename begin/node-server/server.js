const http = require("http"); // library - node.js

const hostname = "127.0.0.1"; // localhost
const port = 3000; // port (0-65535)

// create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\nLearn NodeJS Backend");
});

// server address listen on: ` http://${hostname}:${port}/`
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
