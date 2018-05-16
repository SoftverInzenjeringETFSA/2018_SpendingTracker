var express = require('express');
var mongoose = require('mongoose');
var app = express();

var routerAPI = express.Router();

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

//primjer api rute, vraca korisnika s poslanim imenom, prezimenom i lozinkom (u JSON formatu vraćeni podaci)
//ruta je localhost:8081/api/vratiKorisnika/:ime/:prezime/:lozinka
routerAPI.get('/vratiKorisnika/:ime/:prezime/:lozinka', function(req, res) {
  //ovako uzimate parametre iz rute
  var ime = req.params.ime;
  var prezime = req.params.prezime;
  var lozinka = req.params.lozinka;
  
  //query
  korisnik.findOne({'ime':ime, 'prezime': prezime, 'lozinka': lozinka}, function (err, person) {
    if (err) return handleError(err);
    res.send(person);
  });
  
});


app.get('/', function (req, res) {

    //ovako pravite query
    korisnik.find({}, function (err, person) {
        if (err) return handleError(err);
        console.log(person);
        res.send(person);
      });
  

})

app.use('/api', routerAPI);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
})
