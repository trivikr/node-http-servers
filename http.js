const { createServer } = require("https");
const { readFileSync, createReadStream } = require("fs");

const options = {
  key: readFileSync("ssl/localhost.key"),
  cert: readFileSync("ssl/localhost.cert")
};

createServer(options, (req, res) => {
  if (req.url === "/") {
    createReadStream(`./files/index.html`).pipe(res);
  } else {
    // regular expression for filename requested
    const re = /\/(\w+)*/;
    const filename = req.url.replace(re, "$1");
    createReadStream(`./files/${filename}`).pipe(res);
  }
}).listen(3000);
