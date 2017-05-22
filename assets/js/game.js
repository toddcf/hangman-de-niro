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
	var lettersGuessed = [];
	var guessesLeft = 9;

	// Function that starts or restarts the game.
	var play = function() {

		// Hide Start Button

		// Randomly Select Title:
		selectedTitle = titles[ Math.floor( Math.random() * titles.length ) ];
		// Split selectedTitle into individual letters:
		letters = selectedTitle.split( "" );


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