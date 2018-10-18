// var arrayOfWords = ["New York Yankees","Albany", "Abraham Lincoln", "Buenos Aires", "Statue of Liberty", "Jukebox",,"Michael Jordan", "Van Halen", "Spongebob Squarepants", "The Godfather"]
// var arrayOfHints = ["Sports Team", "State Capitol","US President", "World Capitol", "US Landmark", "1950's Pop Culture", "Sports Legend", "Bands of the 80's", "Kid's TV Show", "Movie Title" ]
//
var body = document.getElementsByTagName('body')[0];
var input = document.getElementById('input');
var enter = document.getElementById('enter');
var usedLetter = document.getElementById('usedLetters');
var newGame = document.getElementById('newGame');
var picture = document.getElementById('picture');
var hint = document.getElementById('hint')

// window.addEventListener('load', alert('Would you like to play a game'))



class Word{
  constructor(word, hint, photo){
    this.word = word;
    this.hint = hint;
  }
}

class WordList{
  constructor(){
    this.wordArray =[];
    // this.hintArray = [];
  }
  addWords(word){
    this.wordArray.push(word)
  }
  // addHints(hints){
  //   this.hintArray.push(hint)
  // }
}

var word1 = new Word("NEW YORK YANKEES", "SPORTS TEAM", );
var word2 = new Word("ALBANY", "STATE CAPITAL");
var word3 = new Word("ABRAHAM LINCOLN", "US PRESIDENT");
var word4 = new Word("BUENOS AIRES", "WORLD CAPITAL");
var word5 = new Word("STATUE OF LIBERTY", "US LANDMARK");
var word6 = new Word("JUKEBOX", "1950'S POP CULTURE");
var word7 = new Word("MICHAEL JORDAN", "SPORTS LEGEND");
var word8 = new Word("VAN HALEN", "BANDS OF THE 80'S");
var word9 = new Word("SPONGEBOB SQUAREPANTS", "KID'S TV SHOW");
var word10 = new Word("THE GODFATHER", "MOVIE TITLE");

var a = new WordList()
a.addWords(word1)
a.addWords(word2)
a.addWords(word3)
a.addWords(word4)
a.addWords(word5)
a.addWords(word6)
a.addWords(word7)
a.addWords(word8)
a.addWords(word9)
a.addWords(word10)


var randomNumber = Math.floor(Math.random()*a.wordArray.length);
var randomWord = a.wordArray[randomNumber].word;
var randomHint = a.wordArray[randomNumber].hint;
var usedLetters = [];
var remainingLetters = randomWord.length;
var counter = 0;
// var images = [hangman0.png, hangman1.png, hangman2.png, hangman3.png, hangman4.png, hangman5.png, hangman6.png ]

function startGame(){
  // let randomHint1 = randomHint
  // let randomWord1 = randomWord
  console.log(randomWord)
  console.log(randomHint)
  // var wordSplit = randomWord.split('')
  // console.log(wordSplit)
  for(let i=0; i<randomWord.length;i++){
    var brick = document.createElement('div')
    brick.id = 'brick' + [i]
    brick.style.width = '100px';
    brick.style.height = '100px';
    brick.style.border = "2px solid"
    brick.style.display = "inline-block";
    brick.style.margin = '5px 5px'
    brick.style.overflow = 'hidden'
    body.appendChild(brick)

  if(randomWord[i] == ' '){
    brick.style.border = ''
    remainingLetters--;
  }
}
}

function checkLetter(){
  var result = false;
  if(input.value.length != 1){
    alert("You can only enter one letter at a time you dingus!")
    result = true;
  }else{
    console.log(input.value)
  for(let i=0; i<randomWord.length;i++){
    if(input.value.toUpperCase() == randomWord[i]){
      document.getElementById('brick'+[i]).innerHTML = randomWord[i]
      document.getElementById('brick'+[i]).style.fontSize = '2em'
      document.getElementById('brick'+[i]).style.textAlign = 'center'
      remainingLetters--;
      result = true;
      // console.log(remainingLetters)
      // document.getElementById('brick'+[i]).style.padding = '10px auto'
        }
      }
    }
      if(result == false){
        counter++;
        picture.style.backgroundImage = "url("+"stylesheets/images/hangman"+[counter]+".png"+")"
        console.log(counter);
      }
    if(remainingLetters === 0){
      // document.getElementById('brick'+[i]).innerHTML = randomWord[i];
      let youWin = confirm("Congratulations you won! If you would like to play again please hit OK!");
      if(youWin == true){
        document.location.reload()
        startGame()
      }
  }

  if(input.value.length == 1){
  usedLetters.push(input.value)
  usedLetter.innerHTML += input.value
}
}


newGame.addEventListener('click', startGame);
newGame.addEventListener('click',function display(){
  newGame.style.display = 'none'
})


enter.addEventListener('click', checkLetter)
enter.addEventListener('click', function(){
  console.log('butt')
  input.value = ''
})
