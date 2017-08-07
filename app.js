var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 5000;

var result = {};

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calc', function (req, res) {
    console.log('calc post was hit!');
    console.log(req.body);

    if (req.body.type === 'Add') {
        result.value = parseFloat(req.body.x) + parseFloat(req.body.y)
    } else if (req.body.type === 'Subtract') {
        result.value = parseFloat(req.body.x) - parseFloat(req.body.y)
    } else if (req.body.type === 'Multiply') {
        result.value = parseFloat(req.body.x) * parseFloat(req.body.y)
    } else {
        result.value = parseFloat(req.body.x) / parseFloat(req.body.y)
    }
    res.sendStatus(201);
});

app.get('/calc', function (req, res) {
    console.log(result);
    res.send(result);
});

app.listen(port, function () {
    console.log('listening on port', port);
});

