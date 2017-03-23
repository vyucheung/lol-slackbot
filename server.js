'use strict';

var express = require('express')
	, app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(require('./controllers'));

app.listen(8680, function() {
	console.log('Server is Up and Running at Port 8680');
}
