const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("ssl/localhost.key"),
  cert: fs.readFileSync("ssl/localhost.cert")
};

https
  .createServer(options, (req, res) => {
    if (req.url === "/") {
      fs.createReadStream("./files/index.html").pipe(res);
    } else if (req.url === "/style.css") {
      fs.createReadStream("./files/style.css").pipe(res);
    } else if (req.url === "/script.js") {
      fs.createReadStream("./files/script.js").pipe(res);
    } else if (req.url === "/globe.png") {
      fs.createReadStream("./files/globe.png").pipe(res);
    }
  })
  .listen(3000);
