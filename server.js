const express = require("express");
const app = express();

app.listen(3000, () => console.log("Server is running"));

app.get("/api/players", (req, res) =>{
    req.params
});

app.get("/api/players/:id", (req, res) => {

    res.status(200).send("Här är en specifik spelare med id " + req.params.id);
    //ska vi också ha en kod för APIét ska svara med 404 om datan saknas.

});


// post.anrop

//put.anrop

//delete.anrop

//Api ska svara med 404 om datan saknas