const http2 = require("http2");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/localhost.key"),
  cert: fs.readFileSync("ssl/localhost.cert")
};

const server = http2.createSecureServer(options).listen(3000);

server.on("stream", (stream, headers) => {
  // regular expression for filename requested
  const re = /\/(\w+)*/;
  const filename = headers[":path"].replace(re, "$1");

  if (headers[":path"] === "/") {
    stream.respondWithFile("./files/index.html");
  } else {
    stream.respondWithFile(`./files/${filename}`);
  }
});