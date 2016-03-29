var express = require('express');
var app = express();

app.get('/att', function (req, res) {
   res.send('hello att');
   console.log('hello att');
});

var server = app.listen(3030, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

