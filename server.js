var express = require('express');
var api = require('./app/routing/apiRoutes');
var views = require('./app/routing/htmlRoutes');

var app = express();

var PORT = process.env.PORT || 8080;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', views);
app.use('/api', api);


app.listen(PORT, function () {
    console.log('server is listening on port: ' + PORT);
});
