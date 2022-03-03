const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");

let result = 0;
let currentTime = 150;
let position = 0;
let direction = 1;
let hitPosition;
let newTimer;
let animalTimer;
let oddsOfAnimal = 5;
let animalSpeed =23;
// animal sppeed  = 13

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function moveAnimal() {
  //hit = null;
  let animalSpeed = getRandomInt(10, 30)
  clearInterval(newTimer);
  newTimer = setInterval(function () {
    squares.forEach((className) => {
      className.classList.remove("mole");
    });
    if (position <= 8 && position >= 0) {
      squares[position].classList.add("mole");
      hit = squares[position].id;
      position = position + direction;
    }
  }, animalSpeed * 7);
}

function randomAnimal() {
  clearInterval(animalTimer);
  animalTimer = setInterval(function () {
    moveAnimal();
    let newAnimal = Math.floor(Math.random() * oddsOfAnimal);
    if (newAnimal == 1) {
      position = 0;
      direction = 1;
    } else if (newAnimal == 2) {
      position = 8;
      direction = -1;
    }
  }, 1000);
}

function caveExplorationTest() {
  let tempString = [];  
  for (var i = 0; i < caveDrawing[tempFloor].length; i++) {
    if (i == playerPosition) {
      tempString.push("I");
    } else {
      tempString.push(caveDrawing[tempFloor][i]);
    }
    fiberLine1Element.innerText = tempString.join('');
    fiberLine2Element.innerText = caveDrawing[tempFloor+1]
    fiberLine3Element.innerText = caveDrawing[tempFloor+2]
  }
}
