# 2018_SpendingTracker

## Pokretanje klijentske aplikacije lokalno

1. unutar STreact-native foldera pokrenuti komandu npm install
2. unutar STreact-native foldera pokrenuti komantu npm start android

Ukoliko se koristi mobilni uređaj:

3. na mobilnom uređaju instalirati expo aplikaciju
4. preko expo aplikacije skenirati QR kod dobijen naredbom npm start android

Ukoliko se koristi emulator:

3. u komandnoj liniji unijeti "a"

 **Napomena:**
 Mobilni uređaj mora biti na istoj mreži kao i IP na kojem je pokrenuta aplikacija.

## Pokretanje aplikacije preko online expo repozitorija

1. Preko mobilnog uređaja otići na link: https://exp.host/@wetania/streact-native
2. Odabrati opciju otvaranja aplikacije preko expo uređaja

## Pokretanje servera lokalno

Ukoliko klijent aplikacija ne može da napravi vezu sa serverom moguće je pokrenuti server lokalno:
1. unutar STserver foldera pokrenuti komandu npm start (ovim će server biti pokrenut na localhostu na portu 8081)
2. unutar config.json file-a promijeniti vrijednost na "http://<IP adresa računara na kojem je pokrenut server>:8081"
3. ponoviti korake za pokretanje klijentske aplikacije u lokalnoj mreži

 **Napomena:**
 I server i mobilni uređaj i aplikacija moraju biti u istoj mreži.

