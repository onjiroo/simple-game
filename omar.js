let nameOFGame = "Math Game";
document.title = nameOFGame;
document.body.style.backgroundColor = "#0075ff";

let formm = document.querySelector("form");
let correctSound = new Audio(
  "https://onjiroo.github.io/simple-game/correct-choice-43861.mp3"
); // Corrected file assignment
let falseSound = new Audio(
  "https://onjiroo.github.io/simple-game/error-8-206492.mp3"
); // Fixed the sound variable name
let startSound = new Audio(
  "https://onjiroo.github.io/simple-game/background-music-for-video-blog-cyborg-in-me-30-second-188534.mp3"
);
let theEndSound = new Audio(
  "https://onjiroo.github.io/simple-game/sinus-bomb-137068.mp3"
);
let theBigSound = new Audio(
  "https://onjiroo.github.io/simple-game/clock-ticking-60-second-countdown-118231.mp3"
);
startSound.volume = 0.5;

let start = document.querySelector(".start");
let timerStarted = false;
let correctPoints = 0;
let incorrectPoints = 0;

start.onclick = function startGame(event) {
  let theCTime = document.querySelector(".playertime").value;
  if (theCTime == 30) {
    startSound.play();
  } else {
    theBigSound.play();
  }

  event.preventDefault();
  let nameOfOperation = document.querySelector(".playerOperation").value;
  let darta = document.querySelector(".allAnswers");
  darta.classList.remove("hidden");
  this.textContent = "running";
  this.style.backgroundColor = "white";
  this.style.color = "black";

  if (!timerStarted) {
    timefunction();
    timerStarted = true;
  }

  if (nameOfOperation === "+") {
    plusfunction();
  } else if (nameOfOperation === "*") {
    multiplyFunction();
  } else if (nameOfOperation === "-") {
    minusFunction();
  }
};

function updateCorrectPoints() {
  let correctPointsElement = document.querySelector(".correctPoints");
  correctPointsElement.textContent = correctPoints;
  correctSound.play(); // Playing the correct sound here
}

function updateIncorrectPoints() {
  falseSound.play(); // Playing the false sound here
  let incorrectPointsElement = document.querySelector(".falsePoints");
  incorrectPointsElement.textContent = incorrectPoints;
}

function plusfunction() {
  let number = Math.floor(Math.random() * 10) + 1;
  let number2 = Math.floor(Math.random() * 10) + 1;

  let object = {
    trueAnswer: number + number2,
    falseAnswerO: number + number2 - 1,
    falseAnswerT: number + number2 + 2,
  };

  let answers = [object.trueAnswer, object.falseAnswerO, object.falseAnswerT];
  answers = answers.sort(() => Math.random() - 0.5);

  let theOne = document.getElementById("one");
  let theTwo = document.getElementById("two"); // Fixed "theTow" to "theTwo"
  let theThree = document.getElementById("three");

  theOne.textContent = answers[0];
  theTwo.textContent = answers[1];
  theThree.textContent = answers[2];

  let allAnswers = [theOne, theTwo, theThree];

  allAnswers.forEach((element) => {
    element.onclick = function () {
      allAnswers.forEach((btn) => (btn.style.pointerEvents = "none"));

      if (parseInt(this.textContent) === object.trueAnswer) {
        correctPoints++;
        updateCorrectPoints();
        this.style.backgroundColor = "green";
      } else {
        incorrectPoints++;
        updateIncorrectPoints();
        this.style.backgroundColor = "red";
      }

      setTimeout(() => {
        this.style.backgroundColor = "";
        plusfunction();
        allAnswers.forEach((btn) => (btn.style.pointerEvents = "auto"));
      }, 500);
    };
  });

  let theTranzit = document.getElementsByClassName("bam")[0];
  theTranzit.textContent = `${number} + ${number2}`;
}
function minusFunction() {
  let number = Math.floor(Math.random() * 30) + 1;
  let number2 = Math.floor(Math.random() * 30) + 1;

  let object = {
    trueAnswer: number - number2,
    falseAnswerO: number - number2 - 1,
    falseAnswerT: number - number2 + 2,
  };

  let answers = [object.trueAnswer, object.falseAnswerO, object.falseAnswerT];
  answers = answers.sort(() => Math.random() - 0.5);

  let theOne = document.getElementById("one");
  let theTwo = document.getElementById("two"); // Fixed "theTow" to "theTwo"
  let theThree = document.getElementById("three");

  theOne.textContent = answers[0];
  theTwo.textContent = answers[1];
  theThree.textContent = answers[2];

  let allAnswers = [theOne, theTwo, theThree];

  allAnswers.forEach((element) => {
    element.onclick = function () {
      allAnswers.forEach((btn) => (btn.style.pointerEvents = "none"));

      if (parseInt(this.textContent) === object.trueAnswer) {
        correctPoints++;
        updateCorrectPoints();
        this.style.backgroundColor = "green";
      } else {
        incorrectPoints++;
        updateIncorrectPoints();
        this.style.backgroundColor = "red";
      }

      setTimeout(() => {
        this.style.backgroundColor = "";
        minusFunction();
        allAnswers.forEach((btn) => (btn.style.pointerEvents = "auto"));
      }, 500);
    };
  });

  let theTranzit = document.getElementsByClassName("bam")[0];
  theTranzit.textContent = `${number} - ${number2}`;
}

function multiplyFunction() {
  // Changed name from "darpfunction" to "multiplyFunction"
  let number = Math.floor(Math.random() * 10) + 1;
  let number2 = Math.floor(Math.random() * 10) + 1;

  let object = {
    trueAnswer: number * number2,
    falseAnswerO: number * number2 - 1,
    falseAnswerT: number * number2 + 2,
  };

  let answers = [object.trueAnswer, object.falseAnswerO, object.falseAnswerT];
  answers = answers.sort(() => Math.random() - 0.5);

  let theOne = document.getElementById("one");
  let theTwo = document.getElementById("two"); // Fixed "theTow" to "theTwo"
  let theThree = document.getElementById("three");

  theOne.textContent = answers[0];
  theTwo.textContent = answers[1];
  theThree.textContent = answers[2];

  let allAnswers = [theOne, theTwo, theThree];

  allAnswers.forEach((element) => {
    element.onclick = function () {
      allAnswers.forEach((btn) => (btn.style.pointerEvents = "none"));

      if (parseInt(this.textContent) === object.trueAnswer) {
        correctPoints++;
        updateCorrectPoints();
        this.style.backgroundColor = "green";
      } else {
        incorrectPoints++;
        updateIncorrectPoints();
        this.style.backgroundColor = "red";
      }

      setTimeout(() => {
        this.style.backgroundColor = "";
        multiplyFunction();
        allAnswers.forEach((btn) => (btn.style.pointerEvents = "auto"));
      }, 500);
    };
  });

  let theTranzit = document.getElementsByClassName("bam")[0];
  theTranzit.textContent = `${number} * ${number2}`;
}

function timefunction() {
  let theCTime = document.querySelector(".playertime").value;
  let theTime = document.querySelector(".theTime span");
  let time = parseInt(theCTime); // Set the timer based on input time

  let timer = setInterval(function () {
    theTime.textContent = `${time}`;
    time--;

    if (time < 0) {
      theEndSound.play();
      clearInterval(timer);

      setTimeout(() => {
        let divv = document.createElement("div");
        divv.classList.add("thelast");

        let spdiv = document.createElement("div");
        spdiv.style.cssText =
          "width: 400px; height: 300px; background-color: black; display: flex; justify-content: center; align-items: center; flex-direction: column; color: white; border:5px white solid; border-radius: 10px;";

        let correct = document.createElement("span");
        correct.textContent = `Correct points: ${correctPoints}`;

        let falsey = document.createElement("span");
        falsey.textContent = `False points: ${incorrectPoints}`;

        let buttonn = document.createElement("button");
        buttonn.textContent = "continyou";
        buttonn.style.cssText =
          "width: 150px; height: 50px; background-color: green; color: black; font-size: 20px; border-radius: 10px;  border-radius: 10px; margin-top: 20px; cursor: pointer;";
        buttonn.addEventListener("click", resetGame); // Reset game functionality

        spdiv.appendChild(correct);
        spdiv.appendChild(falsey);
        spdiv.appendChild(buttonn);

        divv.appendChild(spdiv);
        document.body.appendChild(divv);
      }, 1000);
    }
  }, 1000);
}

function resetGame() {
  location.reload(); // A simple page reload to reset the game
}
