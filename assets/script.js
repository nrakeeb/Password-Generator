var length = 0
var hasUpperCase = false
var hasLowerCase = false
var hasSymbols = false
var hasNumbers = false

// targing the button element on HTML
var generateBtn = document.querySelector("#generate");

// when user cicks on generate button it open up a prompt for them to choose number of charaters
generateBtn.addEventListener("click", getUserInput);

// generate a password based on user choice.
function generatePassword() {
  var symbolArray = ["!", "£", "$", "%", "^", "&", "*", "(", ")", "+", "~", "#", "}", "=", "+", "?", ".", ">","@"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperCaseArray = ["A", "B", "C", "D",, "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U","V", "W", "X", "Y", "Z"];
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // initialise passward and passwordArray
  var password = ""
  var passwordArray = []

  if (hasUpperCase) {
    passwordArray = passwordArray.concat(upperCaseArray);
  }

  if (hasLowerCase) {
    passwordArray = passwordArray.concat(lowerCaseArray);
  }

  if (hasSymbols) {
    passwordArray = passwordArray.concat(symbolArray);
  }

  if (hasNumbers) {
    passwordArray = passwordArray.concat(numberArray);
  }
// generate password from password array through randomisation
  for (var i = 0; i < length; i++) {

    password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

  return password
}

// if user types a number < 8 or > 128 or text it will default to 64
function getUserInput() {
  length = Number(window.prompt("How many characters would you like your password to contain? Choose between 8 and 128"))
  if (!typeof length == Number || isNaN(length) || length < 8 || length > 128)
  {
    length = 64 // default to 64 
  }
  // user are able to confirm if they want the characters below
  hasUpperCase = window.confirm("Please select okay if you would like upper case characters")
  hasLowerCase = window.confirm("Please select okay if you would like lower case characters")
  hasSymbols = window.confirm(" Please select okay if you would like symbols characters")
  hasNumbers = window.confirm(" Please select okay if you would like numbers characters")

  writePassword()
}
 
// returned password is assigned to password text area 
function writePassword() {
  var password = generatePassword();
// If user does not choose any of the promts it will alert user to select import
  if (!password.includes("undefined")) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  else {
    alert("Please select an input!")
  }
}