var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var result = 0;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calc', function (req, res) {
    console.log('calc post was hit!');
    console.log(req.body);
   
if (req.body.type === 'Add') {
        result = parseInt(req.body.x) + parseInt(req.body.y)
    } else if (req.body.type === 'Subtract') {
        result = parseInt(req.body.x) - parseInt(req.body.y)
    } else if (req.body.type === 'Multiply') {
        result = parseInt(req.body.x) * parseInt(req.body.y)
    } else {
        result = parseInt(req.body.x) / parseInt(req.body.y)
    }
    console.log(result);
    res.sendStatus(201);
});

//app.get('/message', function(req, res) {
//	console.log(messages)
//	res.send(messages);
//});

app.listen(port, function () {
    console.log('listening on port', port);
});

