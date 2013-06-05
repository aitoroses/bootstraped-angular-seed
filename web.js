/**
 * Module Dependencies
 */

 var express = require('express');
 var path = require('path');


 var app = express();

 // Configuration

 var PORT = process.env.PORT | 5000;

 app.configure(function(){
 	app.use(express.bodyParser());
 	app.use(express.methodOverride());
 	app.use(express.static(path.join(__dirname, 'app')));
 	app.use(app.router);
 });

 app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Route

app.get('/', function(req, res){
	res.sendfile(__dirname + 'app/index.html');
});

app.listen(PORT, function(){
	console.log("Server started and listening on " + PORT);
});