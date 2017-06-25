var colors = ["blue", "green", "red", "yellow"];
var currentState = ["green", "blue", "blue", "green", "red", "yellow", "red"];
var playerState = [];
var gameStep = 0;
var maxStep = 5;

var initialPrompt = function initialPrompt(recursive) {
  if (recursive === false) {
    generateState();
    renderState();
  } else if (recursive === true) {
    if (gameStep < maxStep) {
      generateState();
      renderState();
    } else {
      resetState();
      initialPrompt(false);
    }
  }
};

var generateState = function generateState() {
  currentState.push(colors[Math.floor(Math.random() * colors.length)]);
};

var renderState = function renderState() {
  var delay = 40;
  var xdelay = 50;
  currentState.forEach(function (val) {
    setTimeout(function () {
      $("#" + val).toggleClass('highlighted');
    }, delay);
    delay += 250;
  });
  currentState.forEach(function (val) {
    setTimeout(function () {
      $("#" + val).toggleClass('highlighted');
    }, xdelay);
    xdelay += 100;
  });

};

var resetState = function resetState() {
  currentState = [];
  userState = [];
  gameStep = 0;
};

renderState();
