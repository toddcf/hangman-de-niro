$( document ).ready( function() {

	// Pass current year into footer copyright:
	var thisYear = new Date().getFullYear();

	// Footer (IIFE):
	var footerInfo = ( function() {
		$( ".currentYear" ).html( " &ndash; " + thisYear + " " );
	}) ();

	var titles = [
		/*"ANALYZE THIS",
		"ANALYZE THAT",
		"AWAKENINGS",
		"BACKDRAFT",
		"CAPE FEAR",
		"CASINO",
		"COP LAND",
		"GOODFELLAS",
		"GREAT EXPECTATIONS",
		"HEAT",
		"JACKIE BROWN",
		"MEET THE PARENTS",
		"RAGING BULL",
		"RONIN",*/
		"SLEEPERS",
		/*"TAXI DRIVER",
		"THE DEER HUNTER",
		"THE FAN",
		"THE GODFATHER: PART II",
		"THE INTERN",
		"THE SCORE",
		"THE UNTOUCHABLES",
		"THIS BOY'S LIFE",
		"WHAT JUST HAPPENED"*/
	];

	var winCounter = 0;
	var lossCounter = 0;
	var blanks = []; /* An array to store the blanks in. */
	var letters = []; /* The selectedTitle, split into individual letters and stored in an array. */
	var wrongLetters = [];
	var guessesLeft = 9;
	var active = false;
	var numBlanks = 0;

	// Function that starts or restarts the game.
	var play = function() {

		// Hide Start Button

		// Display BLANKS div.

		// Set game to active and reset certain stats:
		active = true;
		guessesLeft = 9;
		wrongLetters = [];

		// Randomly Select Title:
		selectedTitle = titles[ Math.floor( Math.random() * titles.length ) ];
		console.log( "Selected Title: " + selectedTitle );
		// Split selectedTitle into individual letters:
		letters = selectedTitle.split( "" );
		console.log( "Letters: " + letters );
		// console.log( letters[ i ] );
		// Count number of blanks in selected title:
		numBlanks = selectedTitle.length;
		console.log( "Number of Blanks: " + numBlanks );
		// Push blanks to blanks array:
		for ( var i = 0; i < letters.length; i++ ) {
			// Push spaces:
			if ( letters[ i ] === " " ) {
				blanks.push( "&nbsp;");
			}
			// Push colon:
			else if ( letters[ i ] === ":" ) {
				blanks.push( ":" );
			}
			// Push apostrophe:
			else if ( letters[ i ] === "'" ) {
				blanks.push( "\'" );
			}
			else {
				blanks.push( "_" );
			}
		}

		// Print to HTML:
		document.getElementById( "blanks" ).innerHTML = blanks.join( "  " );
		document.getElementById( "winDisplay" ).innerHTML = winCounter;
		document.getElementById( "lossDisplay" ).innerHTML = lossCounter;
		document.getElementById( "guessesLeftDisplay" ).innerHTML = guessesLeft;
		document.getElementById( "wrongLetters" ).innerHTML = wrongLetters;

	};

	var checkLetters = function( letter ) {

		console.log( "1. The " + letter + " key has been pressed. Running checkLetters function. correctLetter is currently set to: " + correctLetter );

		var correctLetter = false;
		console.log( "2. correctLetter variable has been declared and set to: " + correctLetter );

		for ( var i = 0; i < letters.length; i++ ) {
			// console.log( "3. Running for loop to see if letters[ " + i + " ] (" + letters[ i ] + ") == letter (" + letter + ")." );
			if ( letters[ i ] == letter ) {
				correctLetter = true;
				// console.log( "4. letters[ " + i + " ] (" + letters[ i ] + ") == letter (" + letter + "), so correctLetter has been set to: " + correctLetter + "." );
			}
		}

		console.log( "5. Initial for loop has finished. correctLetter is currently set to: " + correctLetter);

		if ( correctLetter ) {
			console.log( "6. Beginning second for loop because correctLetter is set to: " + correctLetter );
			for ( var i = 0; i < letters.length; i++ ) {
				console.log( "7. Checking if letters[ " + i + " ] (" + letters[ i ] + ") == letter (" + letter + ")." );
				if ( letters[ i ] == letter ) { /* THIS IS THE PROBLEM RIGHT HERE. */
					console.log( "8. letters[ " + i + " ] (" + letters[ i ] + ") does in fact == letter (" + letter + "), so we are going to change blanks[ " + i + " ] (" + blanks[ i ] + ") to match that.");
					blanks[ i ] = letter;
					console.log( "9. blanks[ " + i + " ] (" + blanks[ i ] + ") is now set to: letter (" + letter + ")." );
				}
			}
		}
		// else {
		// 	wrongLetters.push( letter );
		// 	guessesLeft--;
		// 	console.log( "correctLetter = " + correctLetter );
		// 	console.log( "Guesses Left: " + guessesLeft );
		// 	// document.getElementById( "guessesLeftDisplay" ).innerHTML = guessesLeft;
		// }
		// document.getElementById( "blanks" ).innerHTML = blanks.join( "  " );

	};

	// var win = function() {
	// 	active = false;
	// 	winCounter++;
	// 	document.getElementById( "winDisplay" ).innerHTML = winCounter;
	// 	confirm( "You got it! Congratulations! Would you like to play another round?" );
	// }

	// var lose = function() {
	// 	active = false;
	// 	lossCounter++;
	// 	document.getElementById( "lossDisplay" ).innerHTML = lossCounter;
	// 	confirm( "Sorry, you're out of guesses. Would you like to play again?" );
	// }

	// var checkWin = function() {
	// 	if ( guessesLeft == 0 ) {
	// 		lose();
	// 	}
	// 	else if ( ( guessesLeft >= 0 ) && ( ALL CORRECT LETTERS GUESSED ) ) {
	// 		win();
	// 	}
	// 	else {
	// 		// Continue playing.
	// 	}
	// }

	// Start Game onClick:
	play();

	// Captures Key Clicks
	document.onkeyup = function( event ) {

		// Alphabet keys only, and only if game is active:
		if ( ( event.keyCode >= 65 ) && ( event.keyCode <= 90 ) && ( active ) ) {
			// Make uppercase:
			var userGuess = String.fromCharCode( event.keyCode ).toUpperCase();
			// console.log( "userGuess: " + userGuess );

			// Check if userGuess was correct.
			checkLetters( userGuess );

		}
	
	// checkLetters(userGuess);
	// roundComplete();

	};






	
	
});