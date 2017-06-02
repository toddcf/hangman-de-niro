# Hangman - Robert De Niro Edition

A one-player hangman game built with JavaScript, jQuery, HTML5, and CSS3. Guess the Robert De Niro movie title!

## Features

- Randomly selects a Robert De Niro movie title from an array and displays each character as a blank.
  - If the character is a colon, space, or apostrophe, it is displayed as such rather than as a blank.
- The player presses a key to place their guess. If the key pressed was an alphabet key, the game proceeds. Otherwise, the keypress is ignored.
- The game first checks to see if the letter has already been guessed -- either correctly or incorrectly.
  - If so, the player is alerted to the duplicate, and no points are deducted.
  - If not, the game proceeds.
- Correct letters are filled into the blanks.
- Incorrect letters are displayed in a separate area, and a guess is decremented. (Players begin with nine guesses.)
- After each turn, the game checks to see if the player has won or lost.
  - If so, player is invited to play a new round. Their win or loss tally is updated and displayed, their guesses are cleared, and a new Robert De Niro movie title is selected.
  - If not, game continues, pending player's next keypress.

## Future Iterations

- Improve CSS3 styling.
  - Center positioning better.
  - Add letter spacing to wrongLetters display.
  - Mobile responsiveness (even though a keyboard is required to play).
- If player loses round, display what the title was.
- At end of round, display the full title and score BEFORE the confirm box pops up.
- Add favicon.
- Add start button instead of automatically triggering the game upon loading page.
  - Hide start button when game begins.
  - Display "Play Again?" button when game ends.
- Animate the blanks as they appear.
- Do not repeat movie titles. Once all movie titles have been used, either:
  - Keep playing indefinitely.
  - Congratulate player on beating the game, and stop the game.

## Technology Used

- HTML5
- CSS3
  - Animate.CSS
- JavaScript
- jQuery