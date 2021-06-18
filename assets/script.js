// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = 20
var hasUpperCase = true
var hasLowerCase = true
var hasSymbols = true
var hasNumbers = true


// Write password to the #password input

function generatePassword() {
  var symbolArray = ["!","£","$", "%", "^", "&" ,"*", "(" ,")", "+", "~", "#","}"]; 
  var numberArray = ["1", "2", "3", "4"];
  var upperCaseArray = ["A", "B", "C", "D"];
  var lowerCaseArray = ["a", "b", "c", "b"];

  var password = ""
  var array = []

  if (hasUpperCase) {

  } 

 

  for (var i = 0; i < length; i++) {

    password += array[Math.floor(Math.random() * array.length)];
  }

  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);