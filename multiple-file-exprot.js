let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.method === "GET" && req.url === "/") {
    let myData = fs.readFileSync("./index.html", "utf-8");
    res.end(myData);
  }

  if (req.url == "/style.css") {
    const data = fs.readFileSync("./style.css", "utf-8");
    res.end(data);
  }
});
module.exports = server;
