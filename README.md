# Hangman - Robert De Niro Edition

A one-player hangman game built with JavaScript, jQuery, HTML5, and CSS3. Guess the Robert De Niro movie title!

## Game Logic

- Randomly selects a Robert De Niro movie title from an array and displays each character as a blank.
  - If the character is a colon, space, or apostrophe, it is displayed as such rather than as a blank.
- The player presses a key to place their guess. If the key pressed was an alphabet key, the game proceeds. Otherwise, the keypress is ignored.
- The game first checks to see if the letter has already been guessed, either correctly or incorrectly.
  - If so, the player is alerted to the duplicate, and no points are deducted.
  - If not, the game proceeds.
- Correct letters are filled into the blanks.
- Incorrect letters are displayed in a separate area, and a guess is decremented. (Players begin with nine guesses.)
- After each turn, the game checks to see if the player has won or lost.
  - If so, player is invited to play a new round. Their win or loss tally is updated and displayed, their guesses are cleared, and a new Robert De Niro movie title is selected.
  - If not, game continues, pending player's next keypress.

## Challenges Overcome

- My original iteration could only display single-word movie titles. When I added the ability to include multiple-word movie titles, I created new problems for myself:
  - A `space` would be pushed to the selectedTitle array, but would not display as a space in the UI.
    - I solved this by creating a second array wherein a `space` was converted to a `&nbsp;` before being pushed. This allowed the space to display properly in the UI.
  - However, this solution created yet another problem for me. Whenever the game checked if the player had won, the `&nbsp;` character would never match the `space` character, so the player could never win.
    - I solved this problem by having the game check the player's guesses against the array with the `&nbsp;` in it.

## Future Iterations

- At end of round, display the full title and score BEFORE the confirm box pops up.
- Improve CSS3 styling.
  - Center positioning better.
  - Add letter spacing to wrongLetters display.
  - Mobile responsiveness (even though a keyboard is required to play).
- Display movie poster when player either wins or loses.
- Click `Start` button to begin game instead of automatically triggering the game upon loading page.
  - Hide blanks before `Start` button is pressed.
  - Hide `Start` button when game begins. Display blanks in its place.
  - When game ends, display `Play Again?` button instead of confirm box, and hide blanks again.
- Animate the blanks as they appear.
- Do not repeat movie titles. Once all movie titles have been used, either:
  - Begin allowing repeats for indefinite gameplay.
  - Congratulate player on beating the game, and stop the game.

## Technology Used

- HTML5
- CSS3
  - Animate.CSS
- JavaScript
- jQuery