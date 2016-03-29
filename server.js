var express = require('express');
var app = express();

app.get('/att', function (req, res) {
   res.send('hello att');
   console.log('hello att');
});

app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);

var server = app.listen(app.get('port'), app.get('ipaddress'), function(err) {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
