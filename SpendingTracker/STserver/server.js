var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb+srv://kamilica:C5iWryKT7srs1rIc@stcluster-4mwen.mongodb.net/SpendingTracker?retryWrites=true')
var db = mongoose.connection;
var Schema = mongoose.Schema;

var korisnikSchema = new Schema(
  {   ime: String, 
      prezime: String,
      lozinka: String,
      mjesecniPrihod: Number,
      troskovniLimit: Number,
      valuta: String,
      email: String,
      racuni: [
        { naziv: String, 
          trenutniIznos: Number,
          troskovi: [
            { iznos: Number,
              datum: Date,
              kategorija: {naziv: String}
            }
          ]
        }
      ]
    }
);

var korisnik = mongoose.model('korisnik', korisnikSchema, 'korisnik');

app.get('/', function (req, res) {

    korisnik.find({}, function (err, person) {
        if (err) return handleError(err);
        console.log(person);
        res.send(person);
      });
  

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
})