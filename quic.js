const quic = require("quic");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/localhost.key"),
  cert: fs.readFileSync("ssl/localhost.cert")
};

const server = quic.createSocket({ port: 3000 });
server.listen(options);

server.on("session", session => {
  // A new server side session has been created

  session.on("stream", (stream, headers) => {
    // curl fails with following error
    // (56) nghttp3_conn_read_stream returned error: ERR_HTTP_FRAME_ERROR
    fs.createReadStream("./files/index.html").pipe(stream);
    stream.setEncoding("utf8");

    /* Uncomment after headers are added for stream
    if (headers[":path"] === "/") {
      stream.respondWithFile("./files/index.html");
    } else if (headers[":path"] === "/style.css") {
      stream.respondWithFile("./files/style.css");
    } else if (headers[":path"] === "/script.js") {
      stream.respondWithFile("./files/script.js");
    } else if (headers[":path"] === "/globe.png") {
      stream.respondWithFile("./files/globe.png");
    }*/
  });
});
