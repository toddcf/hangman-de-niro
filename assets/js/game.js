$( document ).ready( function() {

	// Pass current year into footer copyright:
	var thisYear = new Date().getFullYear();

	// Footer (IIFE):
	var footerInfo = ( function() {
		$( ".currentYear" ).html( " &ndash; " + thisYear + " " );
	}) ();

	var titles = [
		"GOODFELLAS",
		"HEAT",
		"CASINO",
		"SLEEPERS",
		"RONIN"
	];

	var winCounter = 0;
	var lossCounter = 0;
	var blanks = [];
	var lettersGuessed = [];
	var guessesLeft = 9;

	// Function that starts or restarts the game.
	var play = function() {

		// Hide Start Button

		// Randomly Select Title:
		selectedTitle = titles[ Math.floor( Math.random() * titles.length ) ];
		console.log( selectedTitle );
		// Split selectedTitle into individual letters:
		letters = selectedTitle.split( "" );
		console.log( letters );
		// Count number of blanks in selected title:
		var numBlanks = selectedTitle.length;
		console.log( numBlanks );
		// Push blanks to blanks array:
		for ( var i = 0; i < letters.length; i++ ) {
			// Push spaces:
			if ( letters[ i ] === " " ) {
				blanks.push( " ");
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