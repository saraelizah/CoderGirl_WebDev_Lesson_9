// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'ANSWER'; // ALL CAPS

// Ask player if they would like to guess a letter or guess the
// solution.

var isGuessingLetter = true; // set to false to guess solution

// If they are guessing a letter, set the letter that they are
// guessing. If they are guessing the word, then set the word
// as their guess.

var guess = 'D'; // UPPERCASE

var n = word.includes(guess);
var totalChar = word.length;

// SCRIPT ////////////////////////////////////////////////////////////

// If guessing a letter...

	// If the word contains the letter...

		// Print back the word with all instances of that letter revealed.

if (isGuessingLetter == true) {
	if (n == true) {
		var x = 0
		for (x = 0 ; x < totalChar ; x++) {
			var i = word.charAt(x);
			if (i==guess) {
				console.log(guess)
			}
		 	if (i!=guess) {
			 	console.log("_")
			};
					
		}

	}
	// If the word does not contain the letter...

		// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.

	else {
		console.log("Sorry, no",guess+"!" ); }
	}	


// If guessing the word...

	// If they are correct...

		// Print "Congratulations! You won Wheel Of Fortune!"

	// If they are incorrect...

		// Print back "Nope, keep trying!"

if (isGuessingLetter == false) {
	if (guess == word) {
		console.log("Congratulations! You won Wheel of Fortune!");	
	} else { 
		console.log("Nope, keep trying!");
	}
};
// End of script!
