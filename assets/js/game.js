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
	var blanks = [];
	var letters = [];
	var lettersGuessed = [];
	var guessesLeft = 9;
	var active = false;

	// Function that starts or restarts the game.
	var play = function() {

		// Hide Start Button

		// Set game to active:
		active = true;

		// Randomly Select Title:
		selectedTitle = titles[ Math.floor( Math.random() * titles.length ) ];
		console.log( "Selected Title: " + selectedTitle );
		// Split selectedTitle into individual letters:
		letters = selectedTitle.split( "" );
		console.log( "Letters: " + letters );
		console.log( letters[ 3 ] );
		// Count number of blanks in selected title:
		var numBlanks = selectedTitle.length;
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

	}

	var checkWin = function() {
		if ( lossCounter > 0 ) {
			// continue playing
		}
		else {
			lose();
		}
	}

	var win = function() {

	}

	var lose = function() {
		confirm("Sorry, you're out of guesses. Would you like to play again?");
		active = false;
	}

	// Start Game onClick:
	play();








	
	
});