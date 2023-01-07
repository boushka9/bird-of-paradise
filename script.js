// Variables for random special characters, uppercase letters, lowercase letters, and numbers
var specials = ['!','@','#','$','%','^','&','*','(',')','-','_','+','~',];
var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];


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
    alert("Password must contain at least one character type");
    return null;
  }

  // Users selections stored in object 
  var criteriaSelections = {
    passLength: passLength,
    includeSpecials: includeSpecials,
    includeUppers: includeUppers,
    includeLowers: includeLowers,
    includeNumbers: includeNumbers,
  };

  // @ end - function should return all user selections to be included in their password
  return criteriaSelections; 
}

// Function to select a random upper/lowercase letters, numbers, and/or symbols
// Need simpler function that can be called to generate random for each array (Possible to target all array [like how you can target elements] w a function?)
// other option is to group each character array w their own Math.floor(Math.random()), so i can select the return randoms for each character type?
function getRandomCriteria() {
  var getRandomSpecials = specials[Math.floor(Math.random() * specials.length)];
  var getRandomUppers = uppers[Math.floor(Math.random() * uppers.length)];
  var getRandomLowers = lowers[Math.floor(Math.random() * lowers.length)];
  var getRandomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
}


// Function to generate a random password based on the users selected criteria 
function generatePassword() {
  //get the criteria to include in the password from passwordCriteria function
  var criteria = passwordCriteria();

  // Repeating if statements for each character set the user chooses to include (maybe use .concat and/or .push? [result = new string?])

  // Possibly use a for loop to get the random selection from the character arrays to continue selecting characters as long as < passLength

  // Need to make sure at least one of each desired character type is included in password (Possibly use for loop?)

  // May need to transform resulting array into a string so it can be written in writePassword???

}





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