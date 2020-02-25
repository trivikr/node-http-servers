const { createSecureServer } = require("http2");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/localhost.key"),
  cert: fs.readFileSync("ssl/localhost.cert")
};

const server = createSecureServer(options).listen(3000);

server.on("stream", (stream, headers) => {
  if (headers[":path"] === "/") {
    stream.respondWithFile("./files/index.html");
  } else {
    // regular expression for filename requested
    const re = /\/(\w+)*/;
    const filename = headers[":path"].replace(re, "$1");
    stream.respondWithFile(`./files/${filename}`);
  }
});
