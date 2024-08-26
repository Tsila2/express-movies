const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello <b>world</b>');
})

app.listen(3000, function(){
    console.log('listening in port 3000');
})