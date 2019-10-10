const http2 = require("http2");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/localhost.key"),
  cert: fs.readFileSync("ssl/localhost.cert")
};

const server = http2.createSecureServer(options).listen(3000);

server.on("stream", (stream, headers) => {
  if (headers[":path"] === "/") {
    stream.respondWithFile("./files/index.html");
  } else if (headers[":path"] === "/style.css") {
    stream.respondWithFile("./files/style.css");
  } else if (headers[":path"] === "/script.js") {
    stream.respondWithFile("./files/script.js");
  } else if (headers[":path"] === "/globe.png") {
    stream.respondWithFile("./files/globe.png");
  }
});
