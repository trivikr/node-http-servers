const http = require("http");

const getStyle = (location) => `<link rel='stylesheet' type='text/css' href='./${location}' />`;

http.createServer((req, res) => {
  if(req.url === "/") {
    res.setHeader('content-type', 'text/html');
    res.write(getStyle("color.css"));
    res.write(getStyle("underline.css"));
    res.end("<div>Hello World!</div>");
  } else if (req.url === "/color.css") {
    res.end("div { color: green; }");
  } else if (req.url === "/underline.css") {
    res.end("div { text-decoration: underline; }");
  }
}).listen(3000);