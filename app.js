const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      const MAIN_PAGE = fs.readFileSync("index.html");
      response.writeHead(200, { "content-type": "utf-8; text/html" });
      response.end(MAIN_PAGE);
    } else if (request.url === "/style.css") {
      const style = fs.readFileSync("style.css", "utf-8");

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css");
      response.end(style);
    }
  }
});

server.listen(3000, function () {
  console.log("서버 도는중 http://localhost:3000");
});
