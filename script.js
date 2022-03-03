let gameTitle = "Button Adventure"
// let gameTitle = "Out of the Darkness"

let counter = 0;
let interval = 1;
let multiplier = 1;

let culture = 0;
//0
let cultureSpeed = 1000;
let upgradeCost = 50;
let upgradesComplete = false;
let hungerBiomeSpeed = 500;
// 500
// 1000

let animationInterval;
let cultureInterval;

// Event Starts:
let testEvent = true;
let addEventFcn = true;
let cultureEventFcn = false;
let cultureStarted = false;
let autoClickersEnabled = false;
let hungerStart = true;
let biome = false;
let painting = false;
let hit = null;
let haveStarved = false;


// Event Variables:
let hunger = ["-", "-", "-", "-","-", "-","-"];
let hungerTimer = 0;
let hungerTimerCost = 16;
// 16   
let huntingCost = 0;
let foodStores = 12;

// Cave Exploration variables
let playerPosition = 1;
let tempFloor = 0;
let caveDrop;
let upgrade1 = false;
let upgrade2 = false;
let upgrade3 = false;
let upgrade4 = false;

let canvas;
let randomColor = 0;

const line1Element = document.getElementById("line1");
const line2Element = document.getElementById("line2");


const cultureElement = document.getElementById("cultureElement");
const hungerCountElement = document.getElementById("hungerCount");
const hungerDivElement = document.getElementById("hungerDiv");

const fiberLine1Element = document.getElementById("fiberLine1");
const fiberLine2Element = document.getElementById("fiberLine2");
const fiberLine3Element = document.getElementById("fiberLine3");

const button = document.getElementById("button");
const countElement = document.getElementById("count");
const cultureCountElement = document.getElementById("cultureCount");
const clickersParentElement = document.getElementById("clickers");
const buttonGroupElement = document.getElementById("buttonGroup");

const caveExplorationMoveLeftElement = document.getElementById(
  "caveExplorationMoveLeft"
);
const caveExplorationMoveRightElement = document.getElementById(
  "caveExplorationMoveRight"
);

button.addEventListener("click", buttonClick);

cultureCountElement.innerText = culture;

function buttonClick() {
  counter = counter + interval * multiplier;
  countElement.innerText = counter;
  disableCounterEvents() 
  if (counter >= 3 && testEvent) {
    testEvent = false;
    // click(event1);
    // click(event2, doubleClicker);
    // click(event3, trippleClicker);
    // click(event4, quadrupleClicker);
    // click(event5, squaredClicker);
    // click(event6, cubedClicker);
    // click(event7);
    // click(event8);
    // click(event9);
    // click(event10);
    // click(event11);
    // click(event12);
  }
  // if (counter >= 4 && event10.activated == false) {
  //   //400
  //   click(event10, startHunting);
  // }
  // if (counter >= 500 && cultureEventFcn == false) {
  //   cultureEventFcn = true;
  //   //500
  //   cultureEvent();
  // }
  if (counter >= 10 && event2.activated == false) {
    counterClick(event2, doubleClicker);
  }
  if (counter >= 75 && event3.activated == false) {
    counterClick(event3, trippleClicker);
  }
  if (counter >= 225 && event4.activated == false) {
    counterClick(event4, doubleClicker);
    // quad
  }
  if (counter >= 400 && event7.activated == false) {
    // AUTOCLICKER 1
    //425
    counterClick(event7, autoClicker);
    // AUTOCLICKER 1
  }
  if (counter >= 500 && event1.activated == false) {
    counterClick(event1, startCultureEvent);
  }
  if (counter >= 600 && event41.activated == false) {
    counterClick(event41, doubleClicker);
    // x5
  }
  if (counter >= 1100 && event42.activated == false) {
    counterClick(event42, doubleClicker);
    // x6
  }
  if (counter >= 800 && event8.activated == false) {
    // 800
    click(event8, autoClicker2);
    // counterClick(event12, startBiome);
  }
  if (counter >= 1600 && event43.activated == false) {
    counterClick(event43, doubleClicker);
    // x7
  }
  if (counter >= 2100 && event44.activated == false) {
    counterClick(event44, doubleClicker);
    // x8
  }
  if (counter >= 1750 && event9.activated == false) {
    click(event9, autoClicker3);
  }
  
  // if (counter >= 2500 && event12.activated == false) {
  //   // 1500
  //   counterClick(event12, startBiome);
  // }
  if (counter >= 2750 && event91.activated == false) {
    click(event91, autoClicker3);
    // auto 4
  }
  if (counter >= 6000 && event45.activated == false) {
    counterClick(event45, doubleClicker);
    // x9
  }
  if (counter >= 5000 && event14.activated == false) {
    counterClick(event14, runCaveExploration);
  }
  if (counter >= 7000 && event92.activated == false) {
    click(event92, autoClicker3);
    // auto 5
  }
  if (counter >= 9000 && event144.activated == false) {
    counterClick(event144, runCaveExploration);
  }
  if (counter >= 15000 && event93.activated == false) {
    click(event93, autoClicker3);
    // auto 6
  }
  if (counter >= 15000 && event146.activated == false) {
    counterClick(event146, runCaveExploration);
  }
  if (counter >= 12000 && event5.activated == false) {
    click(event5, squaredClicker);
  }
  if (counter >= 17500 && event94.activated == false) {
    click(event94, autoClicker3);
    // auto 7
  }
  if (counter >= 30000 && event141.activated == false) {
    counterClick(event141, runCaveExploration);
  }
  if (counter >= 35000 && event6.activated == false) {
    click(event6, cubedClicker);
  }
  if (counter >= 48000 && event95.activated == false) {
    click(event95, autoClicker3);
    // auto 8
  }
  if (counter >= 70000 && event61.activated == false) {
    click(event61, cubedClicker);
  }
  if (counter >= 90000 && event142.activated == false) {
    counterClick(event142, runCaveExploration);
  }
  if (counter >= 150000 && event62.activated == false) {
    click(event62, cubedClicker);
  }
  if (counter >= 200000 && event142.activated == false) {
    counterClick(event142, runCaveExploration);
  }
  if (counter >= 250000 && event63.activated == false) {
    click(event63, cubedClicker);
  }
  if (counter >= 300000 && event142.activated == false) {
    counterClick(event142, runCaveExploration);
  }
  if (counter >= 350000 && event64.activated == false) {
    click(event64, cubedClicker);
  }
  if (counter >= 500000 && event65.activated == false) {
    click(event65, cubedClicker);
  }
  if (counter >= 600000 && event143.activated == false) {
    counterClick(event143, runCaveExploration);
  }
  if (counter >= 800000 && event145.activated == false) {
    counterClick(event145, runCaveExploration);
  }
  if (counter >= 1000000 && event147.activated == false) {
    counterClick(event147, runCaveExploration);
  }
  if (counter >= 1100000 && event148.activated == false) {
    counterClick(event148, runCaveExploration);
  }
  if (counter >= 1200000 && event149.activated == false) {
    counterClick(event149, runCaveExploration);
  }
  // if (counter >= 6000 && event11.activated == false) {
  //   click(event11, startFiber);
  // }
  
  // if (counter >= 10000 && event15.activated == false) {
  //   click(event15, startCavePainting);
  // }  
}

function startCultureEvent() {
  cultureStarted = true;
}

function runCultureInterval() {    
  clearInterval(cultureInterval);
  cultureInterval = setInterval(function () {
    button.click();
    if (cultureStarted) {
      cultureElement.style.visibility = "visible";
      culture = culture + 1 * multiplier;
      cultureCountElement.innerText = culture;
      // Not sure if this below does anything now
      disableEvents();
    }
    }, cultureSpeed);
}

function disableEvents() {
  for (let i = 0; i < events.length; i++) {
    if (events[i].cost <= culture) {
      events[i].name.disabled = false;
    } else {
      events[i].name.disabled = true;
    }
  }
}

function disableCounterEvents() {
  for (let i = 0; i < counterEvents.length; i++) {
    if (counterEvents[i].cost <= counter) {
      counterEvents[i].name.disabled = false;
    } else {
      counterEvents[i].name.disabled = true;
    }
  }
}

function click(event, fcn) {
  event.show();
  event.activated = true;
  event.name.addEventListener("click", function () {
    var el = document.getElementById(event.id);
    el.remove();
    culture = culture - event.cost;
    cultureCountElement.innerText = culture;
    disableEvents();
    fcn();
  });
}

function counterClick(event, fcn) {
  event.show();
  event.activated = true;
  event.name.addEventListener("click", function () {
    if (counter >= event.cost) {
      var el = document.getElementById(event.id);
      el.remove();
      disableEvents();
      fcn();
    }
  });
}

function doubleClicker() {
  interval = interval + 1;
}

function trippleClicker() {
  interval = 3;
}

function quadrupleClicker() {
  interval = 4;
}

function squaredClicker() {
  multiplier = 2;
}

function cubedClicker() {
  multiplier = multiplier + 1;
}

function startHunting() {  
  button.style.visibility = "hidden";
  clearInterval(cultureInterval);
  runAnimationInterval()
  // hungerStart = true;
  randomAnimal();
  squares.forEach((id) => {
    id.addEventListener("click", () => {
      if (id.id === hit) {
        hit = null;
        clearInterval(newTimer);
        squares.forEach((className) => {
          className.classList.remove("mole");
        });
        hungerDivElement.style.color = "white";
        hunger.push('-','-','-');
        hungerCountElement.innerText = hunger.join("");        
        // result = result + 1;
        position = 0;
        direction = 1;        
        if (hunger.length >= foodStores) {
          fiberLine2Element.style.color = "white";
          if (haveStarved) {
            fiberLine2Element.innerText = ' '
            haveStarved = false;
          }
          // eliminates cave exploration!
          // fiberLine1Element.innerText = ' '
          // fiberLine2Element.innerText = ' '
          // fiberLine3Element.innerText = ' '
          countElement.style.visibility = "visible";
          // End hunting
          button.style.visibility = "visible";
          // hungerDivElement.style.color = "green";
          clearInterval(newTimer);
          clearInterval(animalTimer);
          event10.activated = false;
          if (cultureStarted == true || autoClickersEnabled == true) {
            runCultureInterval();
          }
        }        
      }
      
    });
  });
}

function runAnimationInterval() {
  clearInterval(animationInterval);
  animationInterval = setInterval(function () {
    // Hunger needs more work
    if (hungerTimer == 0) {
      hunger.pop();
      hungerCountElement.innerText = hunger.join("");
      hungerTimer = hungerTimerCost;
      if (hunger.length == 6) {
        hungerDivElement.style.color = "red";
        if(event10.activated == false) {                   
            event10.innerhtml = "Hunt";          
            click(event10, startHunting);
           }    
      }
      if (hunger.length == 0) { 
        clearInterval(animationInterval);
        clearInterval(newTimer);
        clearInterval(animalTimer);
        button.style.visibility = "hidden";
        event10.activated = false;
        haveStarved = true;
        fiberLine2Element.style.color = "red";
        fiberLine1Element.innerText = ' '
        fiberLine2Element.innerText = 'You starved'
        fiberLine3Element.innerText = ' '
        culture = 0;
        hunger = ["-", "-", "-", "-", "-", "-", "-"];
        hungerDivElement.style.color = "white";
      }   
    }
    hungerTimer--;   
    // Biome needs more work
    if (biome) {
      runBiome();
    }
    
  }, hungerBiomeSpeed);
}

function autoClicker() {
  autoClickersEnabled = true;
  runCultureInterval()
}

function autoClicker2() {
  autoClickersEnabled = true;
  cultureSpeed = Math.floor(cultureSpeed / 2);
  runCultureInterval();  
  startBiome()
  //hungerTimerCost = hungerTimerCost * 2;
}

function autoClicker3() {
  autoClickersEnabled = true;
  cultureSpeed = Math.floor(cultureSpeed / 2);
  runCultureInterval();
  console.log("autoClicker 3 enabled!!!");
  //hungerTimerCost = hungerTimerCost * 2;
}

function startFiber() {
  fiberLine1Element.innerText = fiberDrawing1;
  fiberLine2Element.innerText = 'Fiber Discovered!';
  fiberLine3Element.innerText = fiberDrawing2;
  culture = culture + 500;
}

function startBiome() {
  biome = true;
  line1Element.innerText = biomeArray1;
  line2Element.innerText = biomeArray2;
}

function runBiome() {  
    if (biomeArray3[0] === undefined) {
        biomeArray3 = biomeArray3Origional
        biomeArray4 = biomeArray4Origional
      }
    biomeArray1 = biomeArray1.substring(1);   
    biomeArray1 = biomeArray1.concat(biomeArray3[0]);
    biomeArray3 = biomeArray3.substring(1);
    line1Element.innerText = biomeArray1;
  
    biomeArray2 = biomeArray2.substring(1);
    biomeArray2 = biomeArray2.concat(biomeArray4[0]);
    biomeArray4 = biomeArray4.substring(1);
    line2Element.innerText = biomeArray2;    
    
}

caveExplorationMoveRightElement.addEventListener("click", () => {
  // treasure conditionals
  if(caveDrawing[tempFloor].charAt(playerPosition + 1) == '$') {   
    caveDrawing[tempFloor] = caveDrawing[tempFloor].replace("$"," ") 
    findTreasure()
    return;
    }
  if(caveDrawing[tempFloor].charAt(playerPosition + 1) != '|' &&
     caveDrawing[tempFloor].charAt(playerPosition + 1) != '\\' &&
     caveDrawing[tempFloor].charAt(playerPosition + 1) != '/') {
    // Drop conditionals
    if(caveDrawing[tempFloor].charAt(playerPosition + 1) === ' ') {
      tempFloor++
      if(caveDrawing[tempFloor].charAt(playerPosition + 1) === ' ') {
        tempFloor++
        if(caveDrawing[tempFloor].charAt(playerPosition+1) === ' ') {
          tempFloor++
          if(caveDrawing[tempFloor].charAt(playerPosition+1) === ' ') {
            tempFloor++
            fallToDeath()
            return;
          }
        }
      }
    }
    playerPosition++;
    caveExplorationTest();
  }  
  });

caveExplorationMoveLeftElement.addEventListener("click", () => {
  if(caveDrawing[tempFloor].charAt(playerPosition - 1) == '$') {
    caveDrawing[tempFloor] = caveDrawing[tempFloor].replace("$"," ")
    findTreasure()   
    return;
    }
  if(caveDrawing[tempFloor].charAt(playerPosition - 1) != '|'&&
     caveDrawing[tempFloor].charAt(playerPosition - 1) != '\\' &&
     caveDrawing[tempFloor].charAt(playerPosition - 1) != '/' &&
     playerPosition > 0) {
    if(caveDrawing[tempFloor].charAt(playerPosition - 1) === ' ') {
      tempFloor++
      if(caveDrawing[tempFloor].charAt(playerPosition - 1) === ' ') {
        tempFloor++
        if(caveDrawing[tempFloor].charAt(playerPosition - 1) === ' ') {
          tempFloor++
          if(caveDrawing[tempFloor].charAt(playerPosition - 1) === ' ') {
            tempFloor++
            fallToDeath()
            return;
          }
        }
      }
    }
    playerPosition--;
    caveExplorationTest();
    }
  });

function findTreasure() {
  // test stop biome
   
    // test stop biome
  if (upgrade1 == false && upgrade2 == false && upgrade3 == false && upgrade4 == false) {
    runAnimationInterval()
    upgrade1 = true;
    hungerTimerCost = 12;
    foodStores = 16
    fiberLine1Element.innerText = ' '
    fiberLine2Element.innerText = "Underground Food Storage!!!"
    fiberLine3Element.innerText = ' '
    playerPosition = 1;
    tempFloor = 0;
  }
  else if (upgrade2 == false && upgrade3 == false && upgrade4 == false) {
    runAnimationInterval()
    upgrade2 = true;
    startFiber()
    playerPosition = 1;
    tempFloor = 0;
  }
  else if (upgrade3 == false && upgrade4 == false) {
    runAnimationInterval()
    upgrade3 = true;
    fiberLine1Element.innerText = ' '
    fiberLine2Element.innerText = "Try drawing an animal on the screen";
    fiberLine3Element.innerText = ' '
    startCavePainting()
    playerPosition = 1;
    tempFloor = 0;
  }
  else if (upgrade4 == false) {
    runAnimationInterval()
    fiberLine1Element.innerText = ' '
    fiberLine2Element.innerText = gameTitle;
    fiberLine3Element.innerText = ' '
    playerPosition = 1;
    tempFloor = 0;
    if (event15.activated == false) {
     counterClick(event15, savePainting);     
    }
    else if (event151.activated == false) {
     counterClick(event151, savePainting);     
    }
    else if (event152.activated == false) {
     counterClick(event152, savePainting);     
    }
    else if (event153.activated == false) {
     counterClick(event153, savePainting);     
    }
  }
}

function fallToDeath() {
  // test stop biome
  runAnimationInterval() 
    // test stop biome
    fiberLine2Element.style.color = "red";
    fiberLine1Element.innerText = ' '
    fiberLine2Element.innerText = 'You fell from a high place'
    fiberLine3Element.innerText = ' '
    console.log('you fell to your death')
    playerPosition = 1;
    tempFloor = 0;
}

function runCaveExploration() {
  // test stop biome
  clearInterval(animationInterval);
    // test stop biome
  fiberLine2Element.style.color = "white";
  caveExplorationTest();
  caveExplorationMoveLeftElement.style.visibility = "visible";
  caveExplorationMoveRightElement.style.visibility = "visible";
}

function startCavePainting() {
  painting = true;
  setUpDraw(); //
}

// broken function: resizing the canvas restarts the drawing
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight)
// }

function setup() {
  noLoop();
}

function setUpDraw() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  background(100);
  loop();
}

function draw() {
  if (painting) {
    drawSetup();
  }
}

function touchMoved() {
  stroke(randomColor);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function drawSetup() {
  strokeWeight(0);
  fill(0);
  ellipse(25, 25, 20, 20);
  fill(50);
  ellipse(25, 50, 20, 20);
  fill(100);
  ellipse(25, 75, 20, 20);
  fill(150);
  ellipse(25, 100, 20, 20);
  fill(200);
  ellipse(25, 125, 20, 20);
  fill(250);
  ellipse(25, 150, 20, 20);
  stroke(0);
  strokeWeight(10);
}
// Save drawing function
function savePainting() {
  if (painting) {
    saveCanvas("CavePainting", "png"); 
    event15.activated = true;
    background(100);
    return false;    
  }
}

// origional save drawing function
// function keyPressed() {
//   if (painting) {
//     if (keyCode == UP_ARROW) {
//       saveCanvas("out", "png");
//     } else if (keyCode == DOWN_ARROW) {
//       background(100);
//     }
//     return false;
//   }
// }

function mousePressed() {
  if (painting) {
    if (mouseX < 40 && mouseY < 40) {
      randomColor = 0;
    } else if (mouseX < 40 && mouseY < 65) {
      randomColor = 50;
    } else if (mouseX < 40 && mouseY < 90) {
      randomColor = 100;
    } else if (mouseX < 40 && mouseY < 115) {
      randomColor = 150;
    } else if (mouseX < 40 && mouseY < 140) {
      randomColor = 200;
    } else if (mouseX < 40 && mouseY < 165) {
      randomColor = 250;
    }
  }
}

class Event {
  constructor(innerhtml, id, activated, disabled, name, cost, result) {
    this.innerhtml = innerhtml;
    this.id = id;
    this.activated = activated;
    this.disabled = disabled;
    this.name = name;
    this.cost = cost;
    this.result = result;
  }
  show() {
    this.name = document.createElement("button");
    this.name.innerHTML = this.innerhtml;
    this.name.id = this.id;
    buttonGroupElement.appendChild(this.name);
    if (this.disabled) {
      this.name.disabled = true;
    }
  }
}

const event1 = new Event(
  "Our culture, our story",
  "culture",
  false,
  false,
  "culture",
  0
);
const event2 = new Event(
  "Sharpen a stone (50 Clicks)",
  "click2x",
  false,
  true,
  "doubleClick",
  50
);
const event3 = new Event(
  "Chop down a tree (200 Clicks)",
  "click3x",
  false,
  true,
  "trippleClick",
  200
);
const event4 = new Event(
  "Trap an animal (400 Clicks)",
  "click4x",
  false,
  true,
  "quadrupleClick",
  400
);
const event41 = new Event(
  "Weave a basket (1000 Clicks)",
  "click4x",
  false,
  true,
  "quadrupleClick",
  1000
);
const event42 = new Event(
  "Build a fire (1500 Clicks)",
  "click4x",
  false,
  true,
  "quadrupleClick",
  1500
);
const event43 = new Event(
  "Together we are strong (2000 Clicks)",
  "click4x",
  false,
  true,
  "quadrupleClick",
  2000
);
const event44 = new Event(
  "Call me Chieftain (3000 Clicks)",
  "click4x",
  false,
  true,
  "quadrupleClick",
  3000
);const event45 = new Event(
  "Trade with another tribe (7000 Clicks)",
  "click4x",
  false,
  true,
  "quadrupleClick",
  7000
);
const event5 = new Event(
  "Find a pattern in nature (750 Culture)",
  "click^2",
  false,
  true,
  "squaredClick",
  750
);
const event6 = new Event(
  "Create a stone carving (2500 Culture)",
  "click^3",
  false,
  true,
  "CubedClick",
  2500
);
const event61 = new Event(
  "Make a symbol (5000 Culture)",
  "click^4",
  false,
  true,
  "CubedClick",
  5000
);
const event62 = new Event(
  "Give the symbol power (7500 Culture)",
  "click^5",
  false,
  true,
  "CubedClick",
  7500
);
const event63 = new Event(
  "Remember the dead (12000 Culture)",
  "click^6",
  false,
  true,
  "CubedClick",
  12000
);
const event64 = new Event(
  "Reach full abstraction! (15000 Culture)",
  "click^7",
  false,
  true,
  "CubedClick",
  15000
);
const event65 = new Event(
  "Write down a rule (23500 Culture)",
  "click^8",
  false,
  true,
  "CubedClick",
  23500
);
const event7 = new Event(
  "Ice begins to melt... (500 Clicks)",
  "autoClick1",
  false,
  true,
  "autoClick1",
  500
);
const event8 = new Event(
  "Begin Exploration (25 Culture)",
  "autoClick2",
  false,
  true,
  "autoClick2",
  25
);
const event9 = new Event(
  "The desert is harsh, yet beautiful (75 Culture)",
  "autoClick3",
  false,
  true,
  "autoClick3",
  75
);
const event91 = new Event(
  "Make a friend of an animal (150 Culture)",
  "autoClick4",
  false,
  true,
  "autoClick4",
  150
);
const event92 = new Event(
  "Something drives me to go even further (500 Culture)",
  "autoClick5",
  false,
  true,
  "autoClick5",
  500
);
const event93 = new Event(
  "How will I cross this river? (1000 Culture)",
  "autoClick6",
  false,
  true,
  "autoClick6",
  1000
);
const event94 = new Event(
  "Does this world ever end? (1250 Culture)",
  "autoClick7",
  false,
  true,
  "autoClick7",
  1250
);
const event95 = new Event(
  "This planet will be ours (2500 Culture)",
  "autoClick8",
  false,
  true,
  "autoClick8",
  2500
);
const event10 = new Event(
  "Hunt! (click the square)",
  "hunt",
  false,
  false,
  "hunt",
  0
);
// maybe add to counterEvents...
const event11 = new Event(
  "Make a bracelet (10 Culture)",
  "fiber",
  false,
  true,
  "fiber",
  10
);
const event12 = new Event(
  "See the beauty",
  "biomes",
  false,
  true,
  "biomes",
  0
);
const event13 = new Event(
  "Light a Fire (10 Culture)",
  "fire",
  false,
  true,
  "fire",
  10
);
const event14 = new Event(
  "Click to explore the cave",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event141 = new Event(
  "Go deeper",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event142 = new Event(
  "Hint: The cave is always open...",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event143 = new Event(
  "What is in here?",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event144 = new Event(
  "Explore The Cave",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event145 = new Event(
  "Explore The Cave",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event146 = new Event(
  "Explore The Cave",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event147 = new Event(
  "Explore The Cave",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event148 = new Event(
  "Explore The Cave",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event149 = new Event(
  "Explore The Cave",
  "caveExploration",
  false,
  true,
  "caveExploration",
  0
);
const event15 = new Event(
  "Your work will go down in history",
  "cavePainting",
  false,
  false,
  "cavePainting",
  0
);
const event151 = new Event(
  "Your work will go down in history",
  "cavePainting",
  false,
  false,
  "cavePainting",
  0
);
const event152 = new Event(
  "Your work will go down in history",
  "cavePainting",
  false,
  false,
  "cavePainting",
  0
);
const event153 = new Event(
  "Your work will go down in history",
  "cavePainting",
  false,
  false,
  "cavePainting",
  0
);

let counterEvents = [
  event2,
  event3,
  event4,
  event41,
  event42,
  event43,
  event44,
  event45,
  event7,
  event12,
  event14,
  event141,
  event142,
  event143,
  event144,
  event145,
  event146,
  event147,
  event148,
  event149,
  event15,
  event151,
  event152,
  event153
];

let events = [
  //event1,
  event5,
  event6,
  event61,
  event62,
  event63,
  event64,
  event65,
  // event7,
  event8,
  event9,
  event91,
  event92,
  event93,
  event94,
  event95,
  // event10,
  event11,
  // event12,
  event13
  // event14,
  // event15
];
  
click(event10, startHunting);


// for (let i = 0; i < events.length; i++) {
//   events[i].show();
// }
