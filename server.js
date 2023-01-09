const express = require("express");
const cors = require("cors");
const app = express();
const { uuid } = require('uuidv4');
const fs = require('fs');
app.use(express.json());
app.use(cors());

//Get.anrop alla
app.get("/api/players", (req, res) => {

    const data = fs.readFileSync('players.json');
    const players = JSON.parse(data);

    if (players && players.length > 0) {
        res.status(200).send(players);
    } else {
        res.status(404).send();

    }
});

// Post.anrop
app.post("/api/players", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const player = req.body;
    player.id = uuid();
    players.push(player);

    fs.writeFile("players.json", JSON.stringify(players, null, 2), function (err) {
        if (err) {
            res.status(400).send();
        } else {
            res.status(201).json(player);
        }
    });

});

//Put.anrop
app.put("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const player = req.body;
    if (!player) {
        res.status(400).send("Bad request.");
        return;
    }

    const existingPlayer = players.find(player => player.id === req.params.id);
    if (existingPlayer) {
        existingPlayer.side = player.side;
        existingPlayer.gender = player.gender;
        existingPlayer.level = player.level;
        fs.writeFile("players.json", JSON.stringify(players, null, 2), function (err) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).json(player);
            }
        });
    } else if (!existingPlayer) {
        res.status(404).send("No player found.");

    }
});

//DELETE-anrop

// app.delete("/api/players/:id", (req, res) => {
//     const data = fs.readFileSync("players.json");
//     const players = JSON.parse(data);
//     const existingPlayer = players.find(player => player.id === parseInt(req.params.id));
//     const index = players.indexOf(existingPlayer);
//     if (players.find(player => player.id === parseInt(req.params.id))) {
//     players.splice(index, 1);
//     fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
//         if (err) {
//             res.status(500).send();
//         } else {
//             res.status(200).send("Player deleted");
//         }
//     });
//     } else {
//         res.status(404).send('The player with the given ID was not found.');
//     }
// });
//Delete.anrop
app.delete("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const existingPlayer = players.find(player => player.id === req.params.id);

    if (existingPlayer) {
        const index = players.indexOf(existingPlayer);
        players.splice(index, 1);
        fs.writeFile("players.json", JSON.stringify(players, null, 2), function (err) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send();
            }
        });
    } else {
        res.status(404).send('The player with the given ID was not found.');
    }
});
//Get.anrop för spelare med specifikt id 
app.get("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const getPlayerById = players.find(player => player.id === req.params.id);

    if (!getPlayerById) {
        res.status(404).send();
    } else {
        res.status(200).send(getPlayerById);
    }
});

app.listen(3000, () => console.log("Server is running"));

