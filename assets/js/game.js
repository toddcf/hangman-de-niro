$( document ).ready( function() {

	// Pass current year into footer copyright:
	var thisYear = new Date().getFullYear();

	// Footer (IIFE):
	var footerInfo = ( function() {
		$( ".currentYear" ).html( " &ndash; " + thisYear + " " );
	}) ();

	var titles = [
		// "CASINO",
		// "GOODFELLAS",
		// "HEAT",
		// "RONIN",
		// "SLEEPERS",
		// "THE FAN",
		"THE GODFATHER: PART II"
	];

	var winCounter = 0;
	var lossCounter = 0;
	var blanks = [];
	var letters = [];
	var lettersGuessed = [];
	var guessesLeft = 9;

	// Function that starts or restarts the game.
	var play = function() {

		// Hide Start Button

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
			else {
				blanks.push( "_" );
			}
		}

		// Print to HTML:
		document.getElementById( "blanks" ).innerHTML = blanks.join( "  " );


	}

	// Start Game onClick:
	play();








	// One way to add spaces:
	// if (word[i] === " ") {
 //                guess.innerHTML = " ";
 //                space = 1;
 //            } else {
 //                guess.innerHTML = "_";
 //            }
	
});