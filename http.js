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
    } else if (req.url === "/color.css") {
      fs.createReadStream("./files/color.css").pipe(res);
    } else if (req.url === "/decor.css") {
      fs.createReadStream("./files/decor.css").pipe(res);
    }
  })
  .listen(3000);
