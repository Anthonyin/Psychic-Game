$(document).ready(function() {
  // var letters = 'asdasdasd'.split('')
  var computerChoose = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  var win = 0;
  var lose = 0;
  var guessLeft = 9;
  var guessPick = [];

  var userGuess = '';

  function reset() {
    guessLeft = 9;
    guessPick = [];
  }

  reset();

  var computerGuess = (computerGuess =
    computerChoose[Math.floor(Math.random() * computerChoose.length)]);
  console.log(computerGuess);

  document.onkeyup = function(event) {
    userGuess = event.key;
    console.log(userGuess);
    checkGuess();
    appendCounter();
  };

  function checkGuess() {
    if (computerGuess === userGuess) {
      win++;
      reset();
    }

    if (computerGuess !== userGuess) {
      guessLeft--;
      guessPick.push(userGuess);
    }
    if (guessLeft === 0) {
      lose++;
      reset();
    }
  }

  function appendCounter() {
    $('#wins').text('Your wins are:' + win);
    $('#losses').text('Your lose are:' + lose);
    $('#guessesLeft').text('You are left:' + guessLeft);
    $('#YouguessSofar').text('You alreadyt picked:' + guessPick);
  }
});
