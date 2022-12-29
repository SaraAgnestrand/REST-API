# REST-API
Inlämningsuppgift 

Titel:
<br>
Beskrivning:
<br>
Krav som är uppfyllda:
<br>
Info om hur projektet byggs och körs:
<br>


Inlämningsuppgift
REST-API

 

I den här laborationen ska du individuellt skapa ett enklare REST-API i NodeJS med express. Då API:et skall har funktionalitet för CRUD skall det finnas 4 st endpoints inkluderat GET, DELETE, PUT och POST för en resurs. Varje endpoint skall utföra vad dess anropsmetod ämnar att utföra, dvs. POST för att lägga till, PUT för att uppdatera, GET för att hämta osv. GET anropet skall hämta alla objekt. Vad API:et hanterar för typ av resurs väljer du själva, det viktiga är att det finns minst 4 st egenskaper för ett objekt varav en egenskap är id. Projektet skall inte ha någon databas utan istället ha all data sparad i en JSON-fil. För att testa ert API rekommenderas du att använda VS Code tilläget REST Client.

 

Generera inte någon start-kod med någon form av generator (express-generator). Utan skriv all kod själva.

 

Läs noga igenom hela uppgiftsbeskrivningen innan du börjar.

Inlämning

För att bli godkänd på den här uppgiften MÅSTE du använda GIT och GitHub. Inlämningen sker som vanligt via läroplattformen där du ska zippa ihop din projektmapp. I din projektmapp ska det finnas (utöver all kod) en README.md fil. Den ska innehålla en titel, beskrivning av projektet, vilka krav som är uppfyllda, info om hur projektet byggs och körs. Kom ihåg att ta bort node_modules!!!

Krav för godkänt:

Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
All data skall vara sparad i en JSON-fil
Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
APIét ska svara med 404 om datan saknas.
Git & GitHub har använts
Projektmappen innehåller en README.md fil - (läs ovan för mer info)
Uppgiften lämnas in i tid!
Krav för väl godkänt:

Alla punkter för godkänt är uppfyllda
Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
 

Tänk på innan du startar: Ska din resurs kunna hantera bilder? Ska du i så fall använda bilder som finns online eller ska användaren kunna ladda upp bilder?

<!-- 1.1 Level 1 and 2: Initiation.<br>
1.2 Level 3 and 4: Intermediate.<br>
1.3 Level 5: Advanced.<br>
1.4 Level 6 and 7: Professional.<br>
-->
