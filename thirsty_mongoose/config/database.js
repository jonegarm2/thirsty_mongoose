var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/thirsty_mongoose');

var db = mongoose.connection;

db.once('open', function() {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});