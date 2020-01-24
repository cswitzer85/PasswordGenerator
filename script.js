// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// for loop
// ---> for (var i = 0; i < listName.length; i++) { if... goes here | if else... goes here | else... goes here}


// list of special characters... ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "_", "-", "+", "=", "{", "[", "\'", "]", "}", "\\", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?";]


//Needed for password...GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria                        ***MULT PROMPTS***
// WHEN prompted for password criteria                                                       ***1ST PROMPT***
// THEN I select which criteria to include in the password 
// WHEN prompted for the length of the password                                              ***2nd PROMPT***
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password                              ***3rd PROMPT***
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt 
// THEN my input should be validated and at least one character type should be selected      ***4th PROMPT; based on at least 1 selection from PROMPT #3***
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated                                                            ***ALL PROMPTS SUCCESSFUL***
// THEN the password is either displayed in an alert or written to the page
