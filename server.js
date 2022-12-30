const express = require("express");
const app = express();
const fs = require('fs');


app.get("/api/players", (req, res) =>{

    const data = fs.readFileSync('players.json');
    const players = JSON.parse(data);
    if (players && players.length > 0){
        res.status(200).send(players);
    }else{
        res.status(404).send();
    }
});

app.get("/api/players/:id", (req, res) => {

    res.status(200).send("Här är en specifik spelare med id " + req.params.id);


});

app.listen(3000, () => console.log("Server is running"));
// post.anrop
app.post('/api/players', (req, res) => {
    res.status(201).json(req.body);
  });

//put.anrop
app.put('/api/players/:id', (req, res) => {
    res.status(200).json(req.body);
  });

  //delete.anrop
app.delete('/api/players/:id', (req, res) => {
    res.status(200).json(req.body);
  });





//Api ska svara med 404 om datan saknas