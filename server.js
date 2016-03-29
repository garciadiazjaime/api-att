var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/att', function (req, res) {
   res.status(202).send('success');
   console.log('GET hello att', new Date());
});

app.post('/att', function (req, res) {
   res.status(202).send('success');
   console.log('POST hello att', new Date());
   console.log('req.body', req.body);
});

app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);

var server = app.listen(app.get('port'), app.get('ipaddress'), function(err) {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
