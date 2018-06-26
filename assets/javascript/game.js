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
var guestLeft = 9;
var guestPick = [];
var computerGuess =
  computerChoose[Math.floor(Math.random() * computerChoose.length)];
console.log(computerGuess);
document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log(userGuess);
  if (computerGuess === userGuess) {
    win++;
    guestLeft = 9;
    guestPick = [];
  } else {
    guestLeft--;
    guestPick.push[userGuess];
  }
  if (guestLeft === 0) {
    lose++;
  }
};
