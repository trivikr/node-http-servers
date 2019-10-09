const quic = require("quic");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/localhost.key"),
  cert: fs.readFileSync("ssl/localhost.cert")
};

const socket = quic.createSocket({ port: 3000 });
socket.listen(options);

socket.on("session", (session) => {
  // A new server side session has been created

  session.on("stream", (stream, headers) => {
    if (headers[':path'] === "/") {
      stream.respondWithFile("./files/index.html");
    } else if (headers[':path'] === "/color.css") {
      stream.respondWithFile("./files/color.css");
    } else if (headers[':path'] === "/decor.css") {
      stream.respondWithFile("./files/decor.css");
    }
  });
});