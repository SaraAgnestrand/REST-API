const playersContainer = document.querySelector(".playersContainer");
const deletePlayerBtn = document.querySelector(".deletePlayerBtn");
const addNewPlayerBtn = document.querySelector(".addNewPlayerBtn");
const getPlayersBtn = document.querySelector(".getPlayersBtn");
const inpFirstName = document.querySelector(".inpFirstName");
const inpLastName = document.querySelector(".inpLastName")
const inpSide = document.querySelector(".inpSide");
const inpGender = document.querySelector(".inpGender");
const inpLevel = document.querySelector(".inpLevel");
const changesForm = document.querySelector(".changesForm");
const saveBtn = document.querySelector(".saveBtn");
const formContainer = document.querySelector(".formContainer");
const onePlayerContainer = document.querySelector(".onePlayerContainer");

changesForm.style.display = "none";

let players = [];

initSite();
function initSite() {
  loadPlayers();
}

function loadPlayers() {
  fetch("http://localhost:3000/api/players")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      printPlayers(data);
    });
}

//Function for printing out all players on the webpage
function printPlayers(data) {
  players = data;
  for (const player of data) {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("playerDiv");
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
    const changesBtn = document.createElement("button");
    changesBtn.innerHTML = "Make changes";
    playerDiv.appendChild(changesBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    playerDiv.appendChild(deleteBtn);
    const showThisPlayerBtn = document.createElement("button");
    showThisPlayerBtn.innerHTML = "Show this player";
    playerDiv.appendChild(showThisPlayerBtn);
    //Eventlisteners for the buttons created in the playerDiv
    changesBtn.addEventListener("click", () => makeChanges(player.id));
    deleteBtn.addEventListener("click", () => deletePlayer(player.id));
    showThisPlayerBtn.addEventListener("click", () => printPlayerById(player.id));
  }
}

//Eventlistener for addNewPlayerBtn and function for adding newPlayer/member
addNewPlayerBtn.addEventListener("click", addNewMember);
function addNewMember() {
  const player = {
    firstname: inpFirstName.value,
    lastname: inpLastName.value,
    side: inpSide.value,
    gender: inpGender.value,
    level: inpLevel.value
  };

  fetch("http://localhost:3000/api/players", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  })
    .then((response) => response.json())
    .then((player) => {
      console.log('Success:', player);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

//Function for making changes on one of the members 
function makeChanges(id) {
  changesForm.style.display = "inline";
  const player = players.find(player => player.id === id);
  const changeFirstName = document.querySelector(".changeFirstName");
  const changeLastName = document.querySelector(".changeLastName")
  const changeSide = document.querySelector(".changeSide");
  const changeGender = document.querySelector(".changeGender");
  const changeLevel = document.querySelector(".changeLevel");

  changeFirstName.value = player.firstname;
  changeLastName.value = player.lastname;
  changeSide.value = player.side;
  changeGender.value = player.gender;
  changeLevel.value = player.level;
  //Eventlistener for clicking the save-button at the makingchanges-form
  saveBtn.addEventListener("click", () => saveChanges(id));
}

//Function for saving changes
function saveChanges(id) {
  const changeFirstName = document.querySelector(".changeFirstName");
  const changeLastName = document.querySelector(".changeLastName")
  const changeSide = document.querySelector(".changeSide");
  const changeGender = document.querySelector(".changeGender");
  const changeLevel = document.querySelector(".changeLevel");

  const newPlayerInput = {
    firstname: changeFirstName.value,
    lastname: changeLastName.value,
    side: changeSide.value,
    gender: changeGender.value,
    level: changeLevel.value
  };

  fetch(`http://localhost:3000/api/players/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPlayerInput),
  })
    .then((response) => response.json())
    .then((player) => {
      console.log('Success:', player);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

//Function for deleteing one of the members/players
function deletePlayer(id) {
  fetch(`http://localhost:3000/api/players/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((player) => {
      console.log('Success:', player);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

//Function for showing data on one of the players by id
function printPlayerById(id) {
  fetch(`http://localhost:3000/api/players/${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((player) => {
      onePlayerContainer.style.display = "block";
      console.log('Success:', player);
      playersContainer.style.display = "none";
      const onePlayerDiv = document.createElement("div");
      onePlayerDiv.classList.add("onePlayerDiv");
      onePlayerContainer.appendChild(onePlayerDiv);
      const p1 = document.createElement("p");
      p1.innerText = "Namn: " + player.firstname + " " + player.lastname;
      onePlayerDiv.appendChild(p1);
      const p2 = document.createElement("p");
      p2.innerText = "Side: " + player.side;
      onePlayerDiv.appendChild(p2);
      const p3 = document.createElement("p");
      p3.innerText = "Gender: " + player.gender;
      onePlayerDiv.appendChild(p3);
      const p4 = document.createElement("p");
      p4.innerText = "Level: " + player.level;
      onePlayerDiv.appendChild(p4);
      const p5 = document.createElement("p");
      p5.innerText = "Id: " + player.id;
      onePlayerDiv.appendChild(p5);
      const closeBtn = document.createElement("button");
      closeBtn.classList.add("closeBtn");
      closeBtn.innerText = "Close window";
      onePlayerDiv.appendChild(closeBtn);
      closeBtn.addEventListener("click", returnToAllPlayers);

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

//Function for closing the data-window with one player and returning to seeing all the players on the page
function returnToAllPlayers() {
  playersContainer.style.display = "flex";
  onePlayerContainer.innerHTML = '';
}