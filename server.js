const express = require("express");
const app = express();

const { uuid } = require('uuidv4');

const fs = require('fs');

app.use(express.json());



app.get("/api/players", (req, res) =>{

    const data = fs.readFileSync('players.json');
    const players = JSON.parse(data);

    if (players && players.length > 0){
        res.status(200).send(players);
    }else{
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
    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err) {
        if(err){
            res.status(400).send();
            }else{
                res.status(201).json(req.body);
                
            }
    });
     
  });

//Put.anrop
app.put("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const player = req.body;
    
    const existingPlayer = players.find(player => player.id === parseInt(req.params.id));
    existingPlayer.side  = player.side;
    existingPlayer.gender = player.gender;
    existingPlayer.level =player.level;
    
    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err) {
        if(err){
            res.status(400).send();
            }else{
                res.status(200).json(req.body);
            }
    });
});

  //Delete.anrop
app.delete("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const existingPlayer = players.find(player => player.id === parseInt(req.params.id));
    const index = players.indexOf(existingPlayer);
    players.splice(index, 1);
    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err) {
        if(err){
            res.status(404).send();
            }else{
                res.status(200).send();
            }
    });

  });
//Get.anrop för spelare med specifikt id 
  app.get("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const getPlayerById = players.find(player => player.id === parseInt(req.params.id));

        if(!getPlayerById){
            res.status(404).send();
        }else{
                res.status(200).send(getPlayerById);
             }
    });
    

  app.listen(3000, () => console.log("Server is running"));

//   [
//     {
//       "id": 1,
//       "firstname": "Jenny",
//       "lastname": "Larsson",
//       "side": "Forehand",
//       "gender": "Female",
//       "level": "Initiation"
//     },
//     {
    //   "id": 2,
    //   "firstname": "Jon",
    //   "lastname": "Jonasson",
    //   "side": "Backhand",
    //   "gender": "Male",
    //   "level": "Advanced"
//     },
//     {
//       "id": 3,
//       "firstname":"Maria",
//       "lastname": "Ek",
//       "side": "Forehand",
//       "gender": "Female",
//       "level": "Advanced"
//     },
//     {
//       "id": 4,
//       "firstname": "Erik",
//       "lastname": "Johansson",
//       "side": "Forehand",
//       "gender": "Male",
//       "level": "Advanced"
//     },
//     {
//       "id": 5,
//       "firstname": "Maja",
//       "lastname": "Karlsson",
//       "side": "Forehand",
//       "gender": "Female",
//       "level": "Professional"
//     }
//   ]