// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

var rn_bridge = require('rn-bridge');

// Echo every message received from react-native.
rn_bridge.channel.on('message', (msg) => {
  rn_bridge.channel.send(msg);
} );

// Inform react-native node is initialized.
rn_bridge.channel.send("Node was initialized.");

/*//dio za kreiranje baze 
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/SpendingTracker";

MongoClient.connect(url, function(err,db){
  if (err) throw err;
  console.log("Database created");
  db.close();
});

mongoose.connect("mongodb://localhost:27017/SpendingTracker");

var Schema = mongoose.Schema;

var korisnikSchema = new Schema(
  { ime: String, 
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
              kategorija: {naziv: String}
            }
          ]
        }
      ]
    }
);

var korisnik = mongoose.model('korisnik', korisnikSchema);*/