const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/localhost.key"),
  cert: fs.readFileSync("ssl/localhost.cert")
};

https
  .createServer(options, (req, res) => {
    if (req.url === "/") {
      fs.createReadStream(`./files/index.html`).pipe(res);
    } else {
      // regular expression for filename requested
      const re = /\/(\w+)*/;
      const filename = req.url.replace(re, "$1");
      fs.createReadStream(`./files/${filename}`).pipe(res);
    }
  })
  .listen(3000);