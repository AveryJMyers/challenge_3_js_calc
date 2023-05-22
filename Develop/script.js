// Assignment code here



while (true) {
  var lengthInput = prompt("How many characters do you want your password to be? (Between 8-18)");
  if (lengthInput >= 8 && lengthInput <= 128) {
      passwordLength = parseInt(lengthInput);
      break; // Exit the loop if the input is valid
  } else {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      continue;
    }
  }


var includeUppercase = confirm("Select OK to include uppercase letters.");
var includeLowercase = confirm("Select OK to include lowercase letters.");
var includeNumbers = confirm("Select OK to include numbers.");
var includeSpecialChars = confirm("Select OK to include special characters.");

includeUppercase = includeUppercase === true;
includeLowercase = includeLowercase === true;
includeNumbers = includeNumbers === true;
includeSpecialChars = includeSpecialChars === true;


function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars){
  //define character sets for each option
  
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var newPassword = "";
  var charSets = [];

  if(includeUppercase){
    charSets.push(uppercaseChars);
  }
  if(includeLowercase){
    charSets.push(lowercaseChars);
  }
  if(includeNumbers){
    charSets.push(numberChars);
  }

  if(includeSpecialChars)
    charSets.push(specialChars);

  if(charSets.length === 0){
    alert("Please select at least one character type.");
    return;
  }


  for (var i = 0; i < passwordLength; i++){
      var randomCharSet=charSets[Math.floor(Math.random() * charSets.length)];
      randomChar=randomCharSet[Math.floor(Math.random() * randomCharSet.length)];
      newPassword += randomChar;
  }

    
  return newPassword;
 
    
}




var generatedPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars)

// Display the generated password in an alert
alert("Your generated password is: " + generatedPassword);

// Or update the textarea in the HTML with the generated password
var passwordTextarea = document.getElementById("password");
passwordTextarea.value = generatedPassword;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);