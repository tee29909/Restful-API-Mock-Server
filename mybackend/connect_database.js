const User = require('./models/User');



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MyDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connect')
});

User.find(function (err, users) {
    if (err) return console.error(err);
    console.log(users);
})