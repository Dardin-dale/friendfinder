var express = require('express');
var path = require('path');
var api = require('./app/routing/apiRoutes');
var views = require('./app/routing/htmlRoutes');

var app = express();

var PORT = process.env.PORT || 8080;

app.use('/', views);
app.use('/api', api);


app.listen(PORT, function () {
    console.log('server is listening on port: ' + PORT);
});
