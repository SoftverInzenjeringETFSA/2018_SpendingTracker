var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

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
      kategorije: [
        { naziv: String }
      ],
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


app.use(bodyParser.json());
routerAPI.post('/dodajNovuKategoriju/:ime/:prezime/:lozinka', function(req, res) {
  var nazivKategorije = req.body.naziv;
  var ime = req.params.ime;
  var prezime = req.params.prezime;
  var lozinka = req.params.lozinka;

  korisnik.findOneAndUpdate({'ime':ime, 'prezime': prezime, 'lozinka': lozinka}, {$push:{'kategorije': {'naziv': nazivKategorije}}}, {new: true}, 
  function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
  });
});

// route middleware za validaciju :kategorija
routerAPI.param('kategorija', function(req, res, next, kategorija) {
  var ime = req.params.ime;
  var prezime = req.params.prezime;
  var lozinka = req.params.lozinka;
  //kategorija moze imati samo slova i brojeve (i _)
  if(!/^\w+$/.test(kategorija)) {
    res.status(400)       
   .send('Bad request');
  }
  //provjere
  /*korisnik.findOne({'ime':ime, 'prezime': prezime, 'lozinka': lozinka}, function (err, person) {
    if (err) return handleError(err);
    if(person.kategorije.length == 0){
      res.status(403)       
      .send('Forbidden');
    }
    else if(!person.kategorije.find(kat => {return kat.naziv == kategorija})){
      res.status(403)       
      .send('Forbidden');
    }
    else if(person.kategorije.length == 1 && person.kategorije[0].naziv == req.kategorija){
      res.status(403)       
      .send('Forbidden');
    }

  });*/
  req.kategorija = kategorija;
  next(); 
});


routerAPI.get('/ukloniKategoriju/:ime/:prezime/:lozinka/:kategorija', function(req, res) {
  var ime = req.params.ime;
  var prezime = req.params.prezime;
  var lozinka = req.params.lozinka;
  var kategorija = req.params.kategorija;

  korisnik.findOneAndUpdate({'ime':ime, 'prezime': prezime, 'lozinka': lozinka}, {$pull:{'kategorije': {'naziv': kategorija}}}, {new: true}, 
  function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
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
