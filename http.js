const { createServer } = require("https");
const { readFileSync, createReadStream } = require("fs");
const { pipeline } = require("stream");

const options = {
  key: readFileSync("ssl/localhost.key"),
  cert: readFileSync("ssl/localhost.cert")
};

const errCallback = err => {
  if (err) console.log(err);
};

createServer(options, (req, res) => {
  if (req.url === "/") {
    pipeline(createReadStream(`./files/index.html`), res, errCallback);
  } else {
    // regular expression for filename requested
    const re = /\/(\w+)*/;
    const filename = req.url.replace(re, "$1");
    pipeline(createReadStream(`./files/${filename}`), res, errCallback);
  }
}).listen(3000);
