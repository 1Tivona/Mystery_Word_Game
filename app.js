const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const chalk = require('chalk');
const port = 3000;
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const index = require('./index.js');
//check to see if words are available by console.log();
//console.log(words);

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: 'whatever',
  resave: false,
  saveUninitialized: true
}));

//getting the index page to show up in local host
app.get('/', function(req, res){
  res.render('index');
});

//getting the game page to show up in the local host
app.get('/game', function(req, res){
  res.render('game', {gameLetters});
  console.log('the game page');
});

app.post('/game', function(req, res){
  var guess = req.body.guess;
  console.log(guess)
})

//moving words into an array -- DON'T actually need this because it confuses the next function
// let gameWords = [];
// gameWords.push(words);
// //console.log(gameWords);
// for (let i=0; i<gameWords.length; i++){
//   console.log(gameWords[i].length);
// }

//choosing a random word and have it appear as &#x2582 (---);
let randWord = words[Math.floor(Math.random() * words.length)];
console.log(randWord);
let gameLetters = [...randWord];
console.log(gameLetters);


function showLetter(letter, isShown){
  if (isShown == true){
    return letter
  }else{
    return '-'
  }
  console.log(hidden)
}







//storing words in the session
 session.word = gameLetters;
 var wordFromStorage = session.word
 console.log(wordFromStorage)




//player guesses letters one at a time (a message should
//render if they attempt to search for more than one letter at a time)




//player wins or loses






app.listen(port, function(req, res){
  console.log('Running Mystery Word Game');
});
