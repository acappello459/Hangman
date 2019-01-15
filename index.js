
var body = document.getElementsByTagName('body')[0];
var input = document.getElementById('input');
var enter = document.getElementById('enter');
var wrongLetter = document.getElementById('wrongLetters')
var newGame = document.getElementById('newGame');
var picture = document.getElementById('picture');
var hintButton = document.getElementById('hintButton')
var guessWord = document.getElementById('guessWord')
var hint = document.getElementById('hint')
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var x = window.matchMedia("(max-width: 900px)")
var y = window.matchMedia("(max-width: 400px)")
input.style.display = 'none';
enter.style.display = 'none';
hintButton.style.display = 'none';
wrongLetter.style.display = 'none';
picture.style.display = 'none';

class Word{
  constructor(word, hint){
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


function startGame(){

  console.log(randomWord)
  console.log(randomHint)

  for(let i=0; i<randomWord.length;i++){
    var brick = document.createElement('div')
    brick.id = 'brick' + [i];
    if(y.matches){
      brick.style.width = "4%"
      brick.style.height = "3vh"
    } else if(x.matches){
      brick.style.width = "7%"
      brick.style.height = "5vh"
    } else{
      brick.style.width = '8%';
      brick.style.height = '8vh';
    }
    brick.style.border = "2px solid"
    brick.style.display = "inline-block";
    brick.style.margin = '5px 5px'
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
  }else if(numbers.includes(input.value)){
    alert("You can only enter letters")
  } else if(!letters.includes(input.value)){
    alert("Please enter in a valid letter")
  } else {
    for(let i=0; i<randomWord.length;i++){
    if(input.value.toUpperCase() == randomWord[i]){
      document.getElementById('brick'+[i]).innerHTML = randomWord[i]
      if(y.matches){
        document.getElementById('brick'+[i]).style.fontSize = '1.5em'
      } else if(x.matches){
        document.getElementById('brick'+[i]).style.fontSize = '4vh'
      } else{
        document.getElementById('brick'+[i]).style.fontSize = '7vh'
      }
      document.getElementById('brick'+[i]).style.textAlign = 'center'
      document.getElementById('brick'+[i]).style.backgroundColor = 'lightGreen'
      if(rightLetters.includes(input.value) == false){
        remainingLetters--;
      }
      result = true;

        }
      }
    }
    if(result == true){
      if(rightLetters.includes(input.value.toUpperCase())){
        alert("You've already guessed that letter you dingus!")
      }else{
        rightLetters.push(input.value.toUpperCase())
      }
    }

    if(remainingLetters === 0){
      setTimeout(function(){
        if(confirm("Congratulations you guessed "+[randomWord]+" correctly! If you would like to play again please hit OK!")){
          location.reload();
        }
      }, 200);
  }

    if(result == false && input.value.length == 1){
      console.log(counter)
      if(wrongLetters.includes(input.value.toUpperCase())){
        alert("You've already guessed that letter you dingus!")
      } else if(numbers.includes(input.value) || !letters.includes(input.value)){
        console.log("You can only enter letters")
      }else{
        counter++
        wrongLetters.push(input.value.toUpperCase())
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
    }, 200);


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
  input.value = ''
})

hintButton.addEventListener('click', function(){
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
  input.style.display = ''
  enter.style.display = ''
  hintButton.style.display = ''
  wrongLetter.style.display = ''
  picture.style.display = ''
})
