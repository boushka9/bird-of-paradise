// Variables for all possible special characters, uppercase letters, lowercase letters, and numbers
// Variables for random selection of each character type
var specials = ['!','@','#','$','%','^','&','*','(',')','-','_','+','~',];
var randomSpecials = specials[Math.floor(Math.random() * specials.length)];
var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomUppers = uppers[Math.floor(Math.random() * uppers.length)];
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomLowers = lowers[Math.floor(Math.random() * lowers.length)];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];


// Series of prompts/alerts for user to select password criteria
function passwordCriteria() {
  // passlength will be read as a number 
  var passLength = Number(prompt('How many characters should your password contain?'));

  // Ensure value must be entered as a number
  if (Number.isNaN(passLength)) {
    alert('Desired length must be entered as a number');
    return null;
  }

  // If user does not imput a number, they will view alert and function will start over
  if (!passLength) {
    alert('Password length must be provided');
    return null;
  }

  // Length must be greater or equal to 8
  if (passLength < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Length connot be greater than 128
  if (passLength > 128) {
    alert('Password length must less than 129 characters');
    return null;
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


// Function to generate a random password based on the users selected criteria 
function generatePassword() {
  // get the criteria to include in the password from passwordCriteria function
  var criteria = passwordCriteria();

   // if criteria has not been completed, exit function
   if (!criteria) return null;

  // Empty array to hold all possible characters as needed
  var allPossible = [];

  // Empty array to ensure at least one of each desired character is used in password
  var atLeastOne = [];

  // Empty array to hold result
  var result = [];

  //repeating if statements to join array's of characters that user selects to the allPossible array
  if (criteria.includeSpecials) {
    allPossible = allPossible.concat(specials);
    //a random from each specials will be added atLeastOne array
    atLeastOne.push(randomSpecials);
  }

  if (criteria.includeUppers) {
    allPossible = allPossible.concat(uppers);
    //a random from each uppers will be added atLeastOne array
    atLeastOne.push(randomUppers);
  }

  if (criteria.includeLowers) {
    allPossible = allPossible.concat(lowers)
    //a random from each lowers will be added atLeastOne array
    atLeastOne.push(randomLowers);
  }

  if (criteria.includeNumbers) {
    allPossible = allPossible.concat(numbers);
    //a random from each numbers will be added atLeastOne array
    atLeastOne.push(randomNumbers);
  }


  // function should continue as long as length is shorter than length from the criteria object
  for (var i = 0; i < criteria.passLength; i++) {
    var getRandomPossible = allPossible[Math.floor(Math.random() * allPossible.length)];
    //add result of getRandomPossible to result array
    result.push(getRandomPossible);
  } 

  
  // function to make sure that one of each type is used
  // while i is less than length of atLeastOne, repeat incriments of 1,
  for (var i = 0; i < atLeastOne.length; i++) {
    var getRandomOne = atLeastOne[Math.floor(Math.random()* atLeastOne.length)];
    //add result of getRandomOne to result array
    result.push(getRandomOne);
  }

  // will return 'result' array withoug commas or spaces
  return result.join('');
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