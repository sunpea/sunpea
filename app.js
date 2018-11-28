const express = require('express');
var server = express();
server.listen(3001);


server.use(express.static('public'));


