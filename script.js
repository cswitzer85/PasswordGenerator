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
var generateEl = document.querySelector("#generate");


//---------------_______________---------------Functions---------------_______________---------------
//$$$$$*****This function is used to have the user define a number between 8 & 128 and prevent the user from moving forward until a valid entry is made.
function selectPasswordLength() {
  characterLengthSelected = null;
  var characterLengthSelected;
  while (characterLengthSelected !== true) {
    characterLength = prompt("Please enter the number of characters you would like in the password. (Note: Minimum: 8 & Maximum: 128; there will be a prompt for each.)");
    //$$$$$*****if the user selects a number between 8 & 128 characterLengthSelecgted is changed to true*****$$$$$
    if (characterLength >= 8 && characterLength <= 128) {
      alert(characterLength + " characters it is! Let's go!");
      characterLengthSelected = true;
      //$$$$$*****if the user selects anything other than a number between 8 & 128 an alert will pop up and the characterLengthSelected value will be set to null, which will rerun the  selectPasswordLength function*****$$$$$
    } else {
      alert("Please enter a number between 8 and 128.");
      characterLengthSelected = null;
    }
  }
} //$$$$$*****End of lengthSelect function

//$$$$$*****This function will ask the user if they would like to include lower case letters in the password.
function lowerInclude() {
  lowerSelected = null;
  if (lowerSelected !== true); {
    lowerSelected = confirm("Would you like to include lower-case letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (lowerSelected !== true) {
      lowerSelected = false;
    }
  }
} //$$$$$*****End of lowerIncluded function

//$$$$$*****This function will ask the user if they would like to include capital letters in the password.
function capitalsInclude() {
  capitalSelected = null;
  if (capitalSelected !== true); {
    capitalSelected = confirm("Would you like to include capital letters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (capitalSelected !== true) {
      capitalSelected = false;
    }
  }
} //$$$$$*****End of capitalsIncluded function

//$$$$$*****This function will ask the user if they would like to include numbers in the password.
function numbersInclude() {
  numbersSelected = null;
  if (numbersSelected !== true); {
    numbersSelected = confirm("Would you like to include numbers? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (numbersSelected !== true) {
      numbersSelected = false;
    }
  }
} //$$$$$*****End of numbersIncluded function

//$$$$$*****This function will ask the user if they would like to include special characters in the password.
function specialInclude() {
  specialSelected = null;
  if (specialSelected !== true); {
    specialSelected = confirm("Would you like to include special characters? ok = yes, cancel = no)");
    //$$$$$*****changes value of calEl to ture or false, based on the users prompt selection*****$$$$$
    if (specialSelected !== true) {
      specialSelected = false;
    }
  }
} //$$$$$*****End of capitalsIncluded function

//$$$$$*****This function takes the information obtained from the user and creates a random password.
function build() {

  buildList = [];
  //$$$$$*****This alert will display the criteria chosen for the new password.
  alert(" you requested a password with " + characterLength + " characters \n which includes... \n lower case letters: " + lowerSelected + "\n capital letters: " + capitalSelected + "\n numbers: " + numbersSelected + "\n and special characters: " + specialSelected);

  if (lowerSelected === true) {
    buildList = lowerLetters;
  }
  if (capitalSelected === true) {
    if (buildList.length === 0) {
      buildList = capitalLetters;
    } else {
      buildList = buildList.concat(capitalLetters);
    }
  }
  if (numbersSelected === true) {
    if (buildList.length === 0) {
      buildList = numbers;
    } else {
      buildList = buildList.concat(numbers);
    }
  }
  if (specialSelected === true) {
    if (buildList.length === 0) {
      buildList = specialCharacters;
    } else {
      buildList = buildList.concat(specialCharacters);
    }
    //$$$$$*****This function will send an alert if no characters are approved to be in the new password and inform the user that they will need to start over.
  } else if (lowerSelected === false && capitalSelected === false && numbersSelected === false && specialSelected === false) {
    alert("Cannot create a password without any characters selected, please try again.")
  }
} //$$$$$*****End of the build function


//$$$$$*****This function is triggered by the "Generate Password" button and will execute all functions needed to create a random password.
function createPassword() {
  selectPasswordLength();
  lowerInclude();
  capitalsInclude();
  numbersInclude();
  specialInclude();
  build();
  var passwordResult = '';
  //creates a random number the same length as what the user requested for password length
  for (var i = 0; i < characterLength; i++) {
    var randomChild = Math.floor(Math.random() * buildList.length);
    passwordResult = passwordResult + buildList[randomChild];
    document.getElementById("password").value = (passwordResult)
  }
} //end of create password function

//$$$$$*****when generate button is clicked, password generation is initialized*****$$$$$
generateEl.addEventListener("click", function (event) {
  createPassword();;
})