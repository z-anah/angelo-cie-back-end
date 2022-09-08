var http = require("http");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var message = "En cours de développement, revenez demain!\n",
    version = "NodeJS " + process.versions.node + "\n",
    response = [message].join("\n");
  res.end(response);
});
server.listen();
