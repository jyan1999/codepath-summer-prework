/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var pattern = [];
var target = 3; //finishes the game at the xth turn
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strike = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  strike = 0;
  gamePlaying = true;
  clueHoldTime = 1000
  // swap the Start and Stop buttons
  document.getElementById("demo").innerHTML = "Try to recreate the tone!";
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(btn) {
  gamePlaying = false;
  clearInterval(x);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("img" + btn).classList.add("hidden");
}

// loses when countdown reachs 0, so no button clicked
function stopGame1() {
  gamePlaying = false;
  clearInterval(x);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("demo").innerHTML = "Game not started";
}

const freqMap = {
  1: 200,
  2: 250,
  3: 300,
  4: 350,
  5: 400
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone(btn);
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
    document.getElementById("img" + btn).classList.remove("hidden");
    document.getElementById("button" + btn).classList.add("hidden");
  }
}
function stopTone(btn) {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
  document.getElementById("img" + btn).classList.add("hidden");
  document.getElementById("button" + btn).classList.remove("hidden");
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("hidden");
  document.getElementById("img" + btn).classList.remove("hidden");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("hidden");
  document.getElementById("img" + btn).classList.add("hidden");
}

function playSingleClue(btn,i) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
    if (i==progress){
      x=setInterval(f,1000);
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
var x;
var timeleft;
function f(){
  if (timeleft < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Game ended";
      loseGame1();
    } else {
      document.getElementById("demo").innerHTML =
        "You have: " + timeleft + " seconds remaining";
    }
    timeleft -= 1;
}

function playClueSequence() {
  guessCounter = 0;
  pattern = [];
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime *= 0.5; //speeds up every turn
  timeleft = (progress + 1) * 3;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    var gen = getRandomInt(1, 6);
    pattern.push(gen);
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i],i,delay); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }

  
}

function loseGame(btn) {
  stopGame(btn);
  clearInterval(x);
  alert("Game Over. You lost.");
  document.getElementById("demo").innerHTML = "Game not started";
}

function loseGame1() {
  stopGame1();
  clearInterval(x);
  alert("Game Over. You lost.");
  document.getElementById("demo").innerHTML = "Game not started";
}

function winGame(btn) {
  stopGame(btn);
  clearInterval(x);
  alert("Game Over. You won!");
  document.getElementById("demo").innerHTML = "Game not started";
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    if (guessCounter == target - 1) {
      clearInterval(x);
      winGame(btn);
    } else if (guessCounter == progress) {
      clearInterval(x);
      progress += 1;
      document.getElementById("demo").innerHTML = "Correct! Next Round";
      playClueSequence();
    } else if (guessCounter < progress) {
      guessCounter += 1;
    }
  } else {
    strike += 1;
    // loses on the third strike
    if (strike < 3) {
      //progress doesn't increase if one gets it wrong
      //basically restart at the same level
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Oops! Try again";
      clueHoldTime*=2; //same level same speed
      playClueSequence();
    } else {
      clearInterval(x);
      loseGame(btn);
    }
  }

  // add game logic here
}
