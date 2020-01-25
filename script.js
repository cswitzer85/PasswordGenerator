//---------------_______________---------------Variables---------------_______________---------------
var lowerSelected
var capitalSelected;
var numbersSelected;
var specialSelected;
var characterLengthSelected;
var characterLength;
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "_", "-", "+", "\=", "{", "[", "\'", "]", "}", "\\", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "f", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
  if (lowerSelected !== true || false); {
    lowerSelected = confirm("Would you like to include lower-case letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (lowerSelected !== true) {
      lowerSelected = false;
    }
  }
} // end of lowerIncluded function

function capitalsInclude() {
  capitalSelected = null;
  if (capitalSelected !== true || false); {
    capitalSelected = confirm("Would you like to include capital letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (capitalSelected !== true) {
      capitalSelected = false;
    }
  }
} // end of capitalsIncluded function

function numbersInclude() {
  numbersSelected = null;
  if (numbersSelected !== true || false); {
    numbersSelected = confirm("Would you like to include numbers? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (numbersSelected !== true) {
      numbersSelected = false;
    }
  }
} // end of numbersIncluded function

function specialInclude() {
  specialSelected = null;
  if (specialSelected !== true || false); {
    specialSelected = confirm("Would you like to include special characters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (specialSelected !== true) {
      specialSelected = false;
    }
  }
} // end of capitalsIncluded function




function createPassword() {
  selectPasswordLength();
  lowerInclude();
  capitalsInclude();
  numbersInclude();
  specialInclude();
  build();
} //end of create password function


function build(){
  alert(" you requested a password with " + characterLength + " characters \n which includes... \n lower case letters: " + lowerSelected + "\n capital letters: " + capitalSelected + "\n numbers: " + numbersSelected + "\n and special characters: " + specialSelected);
  // if """function"""Selected is true, add to list of critera; if false, move on
  // display criteria to user for confirmation
  // run loop to get random selection from list of true selections to run the same number of times as the character length defined by user
  // render resulting password to the password section of the html file
}


//$$$$$*****when generate button is clicked, password generation is initialized*****$$$$$
generateEl.addEventListener("click", function (event) {
  // event.preventDefault(); //may not be needed

  createPassword();

  console.log(
    characterLength,
    lowerSelected,
    capitalSelected,
    numbersSelected,
    specialSelected
    
  );
}
)
