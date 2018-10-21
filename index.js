// var arrayOfWords = ["New York Yankees","Albany", "Abraham Lincoln", "Buenos Aires", "Statue of Liberty", "Jukebox",,"Michael Jordan", "Van Halen", "Spongebob Squarepants", "The Godfather"]
// var arrayOfHints = ["Sports Team", "State Capitol","US President", "World Capitol", "US Landmark", "1950's Pop Culture", "Sports Legend", "Bands of the 80's", "Kid's TV Show", "Movie Title" ]
//
var body = document.getElementsByTagName('body')[0];
var input = document.getElementById('input');
var enter = document.getElementById('enter');
var wrongLetter = document.getElementById('wrongLetters');
var newGame = document.getElementById('newGame');
var picture = document.getElementById('picture');
var hintButton = document.getElementById('hintButton')
var guessWord = document.getElementById('guessWord')
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
var wrongLetters = [];
var rightLetters = [];
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
    brick.style.width = '7.5%';
    brick.style.height = '100px';
    brick.style.border = "2px solid"
    brick.style.display = "inline-block";
    brick.style.margin = '5px 5px'
    // brick.style.padding = '50px'
    brick.style.overflow = 'hidden'
    brick.style.textAlign = 'center'
    guessWord.appendChild(brick)

  if(randomWord[i] == ' '){
    brick.style.display = "block";
    brick.style.border = ''
    remainingLetters--;
  }
}
}

function checkLetter(){
  var result = false;
  if(input.value.length > 1){
    alert("You can only enter one letter at a time you dingus!")
    result = true;
  }else if(input.value.length == 0){
    alert("You didnt enter in a letter you dingus!")
  }else{
    // console.log(input.value)
  for(let i=0; i<randomWord.length;i++){
    if(input.value.toUpperCase() == randomWord[i]){
      document.getElementById('brick'+[i]).innerHTML = randomWord[i]
      document.getElementById('brick'+[i]).style.fontSize = '2vh'
      document.getElementById('brick'+[i]).style.textAlign = 'center'
      document.getElementById('brick'+[i]).style.backgroundColor = 'lightGreen'
      if(rightLetters.includes(input.value) == false){
        remainingLetters--;
      }
      result = true;
      // console.log(remainingLetters)

        }
      }
    }
    if(result == true){
      if(rightLetters.includes(input.value)){
        alert("You've already guessed that letter you dingus!")
        // remainingLetters++;
      }else{
        rightLetters.push(input.value)
      }
    }
      //
      // if(result == false){
      //   counter++;
      //   console.log(counter);
      // }
    if(remainingLetters === 0){
      setTimeout(function(){
        if(confirm("Congratulations you guessed "+[randomWord]+" correctly! If you would like to play again please hit OK!")){
          location.reload();
        }
      }, 500);
  }

    if(result==false && input.value.length == 1){
      console.log(counter)
      if(wrongLetters.includes(input.value)){
        alert("You've already guessed that letter you dingus!")
      }else{
        counter++
        wrongLetters.push(input.value)
        wrongLetter.innerHTML = wrongLetters
        wrongLetter.style.textAlign = 'center'
        picture.style.backgroundImage = "url("+"stylesheets/images/hangman"+[counter]+".png"+")"
      }
  }if(counter == 6){
    picture.style.backgroundImage = "url("+"stylesheets/images/hangman6.png"+")"
    setTimeout(function(){
      if(confirm("BOOOOOOOOOOOOO!"+" You couldn't even guess " + [randomWord]+" correctly!"+ " If you would like to play again please hit OK!")){
        location.reload()
      }
    }, 500);


}
}



//event listener that enters the guessed letter on the push of enter
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        enter.click();
        input.value = "";
        function enterTheLetter(event) {
          checkLetter();

    }
}
});
//event listener that enters the guessed letter if the user clicks the button instead of pressing enter
enter.addEventListener('click', checkLetter)
enter.addEventListener('click', function(){
  console.log('butt')
  input.value = ''
})

hintButton.addEventListener('click', function(){
 // var hint = document.createElement('div');
 hint.value = ''
 hint.id = 'hint';
 hint.style.height = '60px';
 hint.style.fontSize= '3vh';
 hint.style.color = 'white';
 hint.innerHTML = "Hint: " +randomHint;
 guessWord.appendChild(hint)
})

//event listener that triggers the start game function on click, then hides the button so you can't duplicate the game
newGame.addEventListener('click', startGame);
newGame.addEventListener('click',function display(){
  newGame.style.display = 'none'
})
