const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;
/*global html*/

// New code
app.get('/test', function (req, res) {
    res.send('the REST endpoint test run!');
});


app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:%s', port);
});
