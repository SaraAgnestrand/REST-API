 const playersContainer = document.querySelector(".playersContainer");
 const deletePlayerBtn = document.querySelector(".deletePlayerBtn");
 const addNewPlayerBtn = document.querySelector(".addNewPlayerBtn");
 const getPlayersBtn = document.querySelector(".getPlayersBtn");
 
initSite();
function initSite() {
   loadPlayers();
   
}
function loadPlayers() {
    fetch("http://localhost:3000/api/players")
   .then(function(response) {
        return response.json();
    })
    .then(function(data) {
       printPlayers(data);
    });
}
// getPlayersBtn.addEventListener(click,  printPlayers());
function printPlayers(data) {
    for (const player of data) {
        const playerDiv = document.createElement("div");
        playersContainer.appendChild(playerDiv);
        const para1 = document.createElement("p");
        para1.innerText = "Namn: " + player.firstname + " " + player.lastname;
        playerDiv.appendChild(para1);
        const para2 = document.createElement("p");
        para2.innerText = "Side: " + player.side;
        playerDiv.appendChild(para2);
        const para3 = document.createElement("p");
        para3.innerText = "Gender: " + player.gender;
        playerDiv.appendChild(para3);
        const para4 = document.createElement("p");
        para4.innerText = "Level: " + player.level;
        playerDiv.appendChild(para4);
        const para5 = document.createElement("p");
        para5.innerText = "Id: " + player.id;
        playerDiv.appendChild(para5);

    }
    //console.log(data);
    // populateTable(data);
}

function addNewMember(){

}

// function printPlayerById(){

// }
// deletePlayerBtn.addEventListener(click, deletePlayer());
// function deletePlayer(){


// }

// function makeChanges(){

// }


