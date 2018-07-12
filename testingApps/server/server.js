const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error:'Page not found'
    });
});

app.get('/user', (req, res) => {
    res.status(200).send([{
        name: 'Mike', 
        age: 23
    }, {
        name: 'Luke',
        age: 16
    }, {
        name: 'Tom',
        age: 12
    }]);
});

app.listen(3000)

//exports app to allow testing
module.exports.app = app;