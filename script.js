//---------------_______________---------------Variables---------------_______________---------------
var lowerSelected
var capitalSelected;
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
  var characterLengthSelected;
  while (characterLengthSelected !== true) {
    characterLength = prompt("Please enter the number of characters you would like in the password. (Note: Minimum: 8 & Maximum: 128; there will be a prompt for each.)");
    //$$$$$*****if the user selects a number between 8 & 128 characterLengthSelecgted is changed to true*****$$$$$
    if (characterLength >= 8 && characterLength <= 128) {
      alert(characterLength + " characters it is! Let's go!");
      characterLengthSelected = true;
    } else {
      alert("ERROR Please enter a valid age");
      characterLengthSelected = undefined;
    }
  }
} //end of lengthSelect function

function lowerInclude() {
  if (lowerSelected !== true || false); {
    lowerSelected = confirm("Would you like to include lower-case letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (lowerSelected !== true) {
      lowerSelected = false;
    }
  }
} // end of capitalsIncluded function

function capitalsInclude() {
  if (capitalSelected !== true || false); {
    capitalSelected = confirm("Would you like to include capital letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (capitalSelected !== true) {
      capitalSelected = false;
    }
  }
} // end of capitalsIncluded function

function createPassword() {
  selectPasswordLength();
  lowerInclude();
  capitalsInclude();
} //end of create password function


//$$$$$*****when generate button is clicked, password generation is initialized*****$$$$$
generateEl.addEventListener("click", function (event) {
  event.preventDefault(); //may not be needed

  createPassword();
}
)