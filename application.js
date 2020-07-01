var express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');

var app = express();
app.disable('etag');
app.use(express.static('views'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  return res.render(200, 'index.html');
});

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});