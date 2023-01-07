// Variables


// Series of prompts/alerts for user to select password criteria
function passwordCriteria() {
  //parsInt turns text respond [string] into an integer, radix 10 for numbers 0-9)
  var passLength = parseInt(prompt('How many characters should your password contain?'), 10);

  // If user does not imput a number, they will view alert and function will start over
  if (!passLength) {
    alert('Password length must be provided');
    return passwordCriteria;
  }

  // Length must be greater or equal to 8
  if (passLength < 8) {
    alert('Password length must be at least 8 characters');
  }

  // Length connot be greater than 128
  if (passLength > 128) {
    alert('Password length must less than 129 characters');
  }

  var includeSpecials = confirm("Click 'OK' to include special characters in your password");
  
  // If user presses cancel on special confirmation
  if (!includeSpecials) {
    alert('Password will not contain special characters');
  }

  var includeUppers = confirm("Clikc 'OK' to inlcude uppercase letters in your password");

  // If user presses cancel on uppercase confirmation
  if (!includeUppers) {
    alert('Password will not contain uppercase characters');
  }

  var includeLowers = confirm("Click 'OK' to include lowercase letters in your password");
  
  // If user selects cancel on lowercase confirmation
  if (!includeLowers) {
    alert('Password will not contain lowercase characters');
  }

  var includeNumbers = confirm("Click 'OK' to include numbers in your password");

  // If user selects cancel on numbers confirmation
  if (!includeNumbers) {
    alert('Password will not contain numbers');
  }

  // If user does not confirm to include any of the characters, alert and start over
  if (!includeSpecials && !includeUppers && !includeLowers && !includeNumbers) {
    alert("Password must contain at least one character type")
    return null;
  }
}

// Function to generate a random password based on the users selected criteria 
function generatePassword() {
  //get the criteria to include in the password from passwordCriteria function
  var criteria = passwordCriteria();
//placeholder to make sure passwordCritera is working correctly
}


// Function to select a random upper/lowercase letters, numbers, and/or symbols

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);