// *save point here*

//---------------_______________---------------Variables---------------_______________---------------
var lowerSelected;
var capitalSelected;
var numbersSelected;
var specialSelected;
var characterLengthSelected;
var characterLength;
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "_", "-", "+", "\=", "{", "[", "\'", "]", "}", "\\", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];
var buildList;
//---------------_______________---------------_______________---------------_______________---------------


//needed variables based on html but not yet functional or tested???

var generateEl = document.querySelector("#generate");
var passwordEl = document.querySelector("#password");

//functions
function selectPasswordLength() {
  characterLengthSelected = null;
  var characterLengthSelected;
  while (characterLengthSelected !== true) {
    characterLength = prompt("Please enter the number of characters you would like in the password. (Note: Minimum: 8 & Maximum: 128; there will be a prompt for each.)");
    //$$$$$*****if the user selects a number between 8 & 128 characterLengthSelecgted is changed to true*****$$$$$
    if (characterLength >= 8 && characterLength <= 128) {
      alert(characterLength + " characters it is! Let's go!");
      characterLengthSelected = true;
    } else {
      alert("ERROR Please enter a valid age");
      characterLengthSelected = null;
    }
  }
} //end of lengthSelect function

//------------------------------------------------------------------*May delete and make lower-case the default*-------
function lowerInclude() {
  lowerSelected = null;
  if (lowerSelected !== true); {
    lowerSelected = confirm("Would you like to include lower-case letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (lowerSelected !== true) {
      lowerSelected = false;
    }
  }
} // end of lowerIncluded function

function capitalsInclude() {
  capitalSelected = null;
  if (capitalSelected !== true); {
    capitalSelected = confirm("Would you like to include capital letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (capitalSelected !== true) {
      capitalSelected = false;
    }
  }
} // end of capitalsIncluded function

function numbersInclude() {
  numbersSelected = null;
  if (numbersSelected !== true); {
    numbersSelected = confirm("Would you like to include numbers? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (numbersSelected !== true) {
      numbersSelected = false;
    }
  }
} // end of numbersIncluded function

function specialInclude() {
  specialSelected = null;
  if (specialSelected !== true); {
    specialSelected = confirm("Would you like to include special characters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (specialSelected !== true) {
      specialSelected = false;
    }
  }
} // end of capitalsIncluded function

function build(){
  
  buildList = [];
  
  alert(" you requested a password with " + characterLength + " characters \n which includes... \n lower case letters: " + lowerSelected + "\n capital letters: " + capitalSelected + "\n numbers: " + numbersSelected + "\n and special characters: " + specialSelected);
  
  if (lowerSelected === true){
      buildList = lowerLetters;
  }
  if (capitalSelected === true){
    if (buildList.length === 0) {
      buildList = capitalLetters;
    } else {
      buildList = buildList.concat(capitalLetters);
    }
  }
  if (numbersSelected === true){
    if (buildList.length === 0) {
      buildList = numbers;
    } else {
      buildList = buildList.concat(numbers);
    }
  }
  if (specialSelected === true){
    if (buildList.length === 0) {
      buildList = specialCharacters;
    } else {
      buildList = buildList.concat(specialCharacters);
    }
  }
  
  else if (lowerSelected === false && capitalSelected === false && numbersSelected === false && specialSelected === false){
    alert("Cannot create a password without any characters selected, please try again.")
  }
  }


//function uses true/false status to build new array from user selected criteria
function createPassword() {
  selectPasswordLength();
  lowerInclude();
  capitalsInclude();
  numbersInclude();
  specialInclude();

  
  
  
  
  
  
  
  
  build();
} //end of create password function


  
  
  // // if """function"""Selected is true, add to list of critera; if false, move on
  // // display criteria to user for confirmation
  // // run loop to get random selection from list of true selections to run the same number of times as the character length defined by user
  // for (var i = 0; i < characterLength; i++) {
  //   var randomCharacter = Math.floor(Math.random() * 5) + 1; //-----------------exchange "5" for a variable based on list length
  //     console.log(randomCharacter);
  // // render resulting password to the password section of the html file



//$$$$$*****when generate button is clicked, password generation is initialized*****$$$$$
generateEl.addEventListener("click", function (event) {
  // event.preventDefault(); //may not be needed

  createPassword();

  console.log(
    characterLength,
    lowerSelected,
    capitalSelected,
    numbersSelected,
    specialSelected,
    buildList
    
  );
}
)
/*
      var passwordResult = '';
      //creates a random number the same length as what the user requested for password length
      for (var i = 0; i < characterLength; i++) {
        var num = Math.floor(Math.random() * 10) + 1;
        passwordResult = passwordResult + (num);
        
        console.log(passwordResult);
      }



*/