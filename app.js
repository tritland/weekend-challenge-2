var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 5000;

//var messages = [];

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calc', function (req, res) {
	console.log('calc post was hit!');
	console.log(req.body);
	//console.log(messages);
	res.sendStatus(201);    
});

//app.get('/message', function(req, res) {
//	console.log(messages)
//	res.send(messages);
//});

app.listen(port, function() {
	console.log('listening on port', port);
});