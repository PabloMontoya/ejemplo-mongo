const mongoose = require('mongoose');
const Pruebas = require('./schemas/Pruebas');
mongoose.connect('mongodb://localhost:27017/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected!');

//     var Person = mongoose.model('Person', Pruebas, 'pruebas');

    var juan = new Pruebas({name:'manuel', age:68, gender:'male'});
    juan.save();

    // Person.find({}, (err, data) => {
    //     if (err) {console.log(err)}
    //     console.log(data, data.length);
    // });

    // var silence = new Kitten({ name: 'Silence' });
    // console.log(silence.name); // 'Silence'

    // silence.save((err, fluffy) => {
    //     if (err) return console.error(err);
    //     console.log(silence);
    // });
});