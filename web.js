var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var filename = "index.html";
var htmltext = fs.readFileSync(filename, "utf8");

app.get('/', function(request, response) {
  
  response.send(htmltext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
