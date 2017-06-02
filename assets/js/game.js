$( document ).ready( function() {

	// Pass current year into footer copyright:
	var thisYear = new Date().getFullYear();

	// Footer (IIFE):
	var footerInfo = ( function() {
		$( ".currentYear" ).html( " &ndash; " + thisYear + " " );
	}) ();

	var titles = [
		"ANALYZE THIS",
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
		"RONIN",
		"SLEEPERS",
		"TAXI DRIVER",
		"THE DEER HUNTER",
		"THE FAN",
		"THE GODFATHER: PART II",
		"THE INTERN",
		"THE SCORE",
		"THE UNTOUCHABLES",
		"THIS BOY'S LIFE",
		"WHAT JUST HAPPENED"
	];

	var winCounter = 0;
	var lossCounter = 0;
	var blanks = []; /* An array to store the blanks in. */
	var letters = []; /* The selectedTitle, split into individual letters and stored in an array. */
	var vault = []; /* An array to store the letters in WITHOUT changing them for display purposes. */
	var wrongLetters = [];
	var guessesLeft = 9;
	var active = false;

	// Function that starts or restarts the game.
	var play = function() {

		// Hide Start Button

		// Display BLANKS div.

		// Set game to active and reset certain stats:
		active = true;
		guessesLeft = 9;
		wrongLetters = [];
		blanks = [];
		vault = [];

		// Randomly Select Title:
		selectedTitle = titles[ Math.floor( Math.random() * titles.length ) ];
		console.log( "Selected Title: " + selectedTitle );
		// Split selectedTitle into individual letters:
		letters = selectedTitle.split( "" );
		
		// Push blanks to blanks array:
		for ( var i = 0; i < letters.length; i++ ) {
			// Push spaces:
			if ( letters[ i ] === " " ) {
				blanks.push( "&nbsp;" );
				vault.push( "&nbsp;" );
			}
			// Push colon:
			else if ( letters[ i ] === ":" ) {
				blanks.push( ":" );
				vault.push( ":" );
			}
			// Push apostrophe:
			else if ( letters[ i ] === "'" ) {
				blanks.push( "\'" );
				vault.push( "\'" );
			}
			else {
				blanks.push( "_" );
				vault.push( letters[ i ] );
			}
		}

		// Print to HTML:
		document.getElementById( "blanks" ).innerHTML = blanks.join( "  " );
		document.getElementById( "winDisplay" ).innerHTML = winCounter;
		document.getElementById( "lossDisplay" ).innerHTML = lossCounter;
		document.getElementById( "guessesLeftDisplay" ).innerHTML = guessesLeft;
		document.getElementById( "wrongLetters" ).innerHTML = wrongLetters; /* Need this to clear display upon restarting game. */

	};

	var checkLetters = function( letter ) {

		var noDuplicate = true;

		for ( var i = 0; i < blanks.length; i++ ) {
			if ( blanks[ i ] == letter ) {
				
				noDuplicate = false;

			}
		}

		// Set this outside the previous for loop so it triggers only once when the letter appears multiple times in the array:
		if ( noDuplicate == false ) {
			// Shake that letter and turn it red temporarily.
			alert( "You already CORRECTLY guessed the letter " + letter + "." );
		}

		if ( noDuplicate ) {
			for ( var i = 0; i < wrongLetters.length; i++ ) {
				if ( wrongLetters[ i ] == letter ) {
					duplicate = true;
					alert( "You already INCORRECTLY guessed the letter " + letter + "." );
					return active = true;
				}
			}
		}

		var correctLetter = false;

		for ( var i = 0; i < letters.length; i++ ) {
			if ( letters[ i ] == letter ) {
				correctLetter = true;
			}
		}

		if ( correctLetter ) {
			for ( var i = 0; i < letters.length; i++ ) {
				if ( letters[ i ] == letter ) {
					blanks[ i ] = letter;
				}
			}
		}
		else {
			wrongLetters.push( letter );
			guessesLeft--;
			document.getElementById( "guessesLeftDisplay" ).innerHTML = guessesLeft;
			document.getElementById( "wrongLetters" ).innerHTML = wrongLetters;
		}
		
		document.getElementById( "blanks" ).innerHTML = blanks.join( "  " );

	};

	var win = function() {
		
		winCounter++;
		document.getElementById( "winDisplay" ).innerHTML = winCounter;
		active = false;
		var won = confirm( "You got it! Congratulations! Would you like to play another round?" );
		
		if ( won ) {
			play();
		}
		else {
			active = false;
		}

	};

	var lose = function() {
		
		lossCounter++;
		document.getElementById( "lossDisplay" ).innerHTML = lossCounter;
		active = false;
		var lost = confirm( "Sorry, you're out of guesses. Would you like to play again?" );
		
		if ( lost ) {
			play();
		}
		else {
			active = false;
		}

	};

	var checkWin = function() {
		
		if ( guessesLeft == 0 ) {
			lose();
		}
		
		else if ( vault.toString() == blanks.toString() ) {
			win();
		}

	}

	// Start Game onClick:
	play();

	// Captures Key Clicks
	document.onkeyup = function( event ) {

		// Alphabet keys only, and only if game is active:
		if ( ( event.keyCode >= 65 ) && ( event.keyCode <= 90 ) && ( active ) ) {
			// Make uppercase:
			var userGuess = String.fromCharCode( event.keyCode ).toUpperCase();

			// Check if userGuess was correct.
			checkLetters( userGuess );

			// Check if user won:
			checkWin();

		}

	};

});