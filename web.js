/* Module Dependencies
*/

var PORT, app, express;

express = require('express');

app = express();

PORT = process.env.PORT | 5000;

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static("" + __dirname + "/app"));
  console.log('static is on ' + ("" + __dirname + "/app"));
  return app.use(app.router);
});

/* Routes
*/


app.get('/test', function(req, res) {
  return res.send(200);
});

app.get('*', function(req, res) {
  return res.sendfile(__dirname + ("" + __dirname + "/app/index.html"));
});

app.listen(PORT, function() {
  return console.log("Server started and listening on " + PORT);
});
