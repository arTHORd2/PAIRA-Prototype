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

// Index - Login page
app.get('/', function(req, res) {
  // For now, just redirect to login page.
  return res.render(200, 'login.html');
});

// Login - redirect to the dashboard page if successful
app.post('/login', function (req, res) {
  // TODO authenticate and redirect if necessary
});

// Match - return a list of users that could be a good match
app.get('/match/:id', async function(req, res) {
  // TODO Search db for matches
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});