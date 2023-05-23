// Assignment code here


//prompt to select how many characters in the passowrd
while (true) {
  var lengthInput = prompt("How many characters do you want your password to be? (Between 8-128)");
  if (lengthInput >= 8 && lengthInput <= 128) {
      passwordLength = parseInt(lengthInput);
      break; // exits this loop if the user meets the criteria
  } else {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      continue; // reruns this loop if the user fails to meet the criteria
    }
  }

// user prompts to select what they want included in their password
var includeUppercase = confirm("Select OK to include uppercase letters.");
var includeLowercase = confirm("Select OK to include lowercase letters.");
var includeNumbers = confirm("Select OK to include numbers.");
var includeSpecialChars = confirm("Select OK to include special characters.");

//booleans effected by the user responses
includeUppercase = includeUppercase === true;
includeLowercase = includeLowercase === true;
includeNumbers = includeNumbers === true;
includeSpecialChars = includeSpecialChars === true;

//generates the password
function generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars){
  //define character sets for each option
  
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  //creates an empty string and an empty array
  var newPassword = "";
  var charSets = [];

  //checks the boolean, puses the characters if true.
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

  // creates an error if the user doesn't select any character types.
  if(charSets.length === 0){
    alert("Please select at least one character type.");
    return;
  }

//selects random charSet, then chooses a random letter from the random charSet until the password length is complete. 
  for (var i = 0; i < passwordLength; i++){
      var randomCharSet=charSets[Math.floor(Math.random() * charSets.length)];
      randomChar=randomCharSet[Math.floor(Math.random() * randomCharSet.length)];
      newPassword += randomChar;
  }

    
  return newPassword;
 
    
}




var generatedPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars)

// Display the generated password in an alert
// alert("Your generated password is: " + generatedPassword);

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