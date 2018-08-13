$(function(event) {
  var move = 0; // This will record the number of moves that have been made.
  var winDetected = 0; // Will detect and indicate when each player has won by setting it .
  var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // this array or arrays is what is used to check if there is a winner.
  var stillPlaying = true; // this will check whether a player has won or not.
  var coveredPos = 0; // Count for the number of covered positions on board.
  var turn = true; // Is set to true of false to alternate between player turns
  var player1Array = []; // player ones array to check against winning arrays.
  var player2Array = []; // player twos array to check against winning arrays.

  console.log("Player 1 makes the first move.");

  $(".col").one("click", function(){
      var row = $(this).parent().index(); // Picks the parent index of the Position class element.
      var columns = $(this).index(); // Picks the specific Position within each of the row classes.
   if ((stillPlaying) && (move < 9) && (!winDetected == 1)) { // This if statement is testing if the game is still being played, that the number of moves are currently less than 9 and the win detection "winDetected" flag is not

            if (turn) { // When it is player ones turn a X will be put on the noard.
                $(this).append("X"); // player ones turn a X is put on board.
                grid[row][columns] = 1; // Sets this grid position to a one indicating player one has this position.
                winnerIs(1); // Checks if player one has one the game.
                turn = false;
                move++; // After each turn the move counter will increment.
              } else {
                $(this).append("0"); // Player twos turn a O is put on the board.
                grid[row][columns] = 2; // Sets this position to a two indicating player two has this position.
                winnerIs(2); // Checks if player two has one the game.
                turn = true;
                move++; // After each turn the move counter will increment.
              }
    } else {
      winnerIs(3)
      console.log("Game has stopped!");
      console.log("The game was a draw");
        }
    })

    function winnerIs(n) {
      var p1 = 1;
      var p2 = 2;
      var draw = 3;
      if ( // This checks the columns for any winning states.
        (grid[0][0] == n && grid[0][1] == n && grid[0][2] == n) ||
        (grid[1][0] == n && grid[1][1] == n && grid[1][2] == n) ||
        (grid[2][0] == n && grid[2][1] == n && grid[2][2] == n) ||
        // This checks the rows for any winning states.
        (grid[0][0] == n && grid[1][0] == n && grid[2][0] == n) ||
        (grid[0][1] == n && grid[1][1] == n && grid[2][1] == n) ||
        (grid[0][2] == n && grid[1][2] == n && grid[2][2] == n) ||
        // This is checking diagonal win states.
        (grid[0][0] == n && grid[1][1] == n && grid[2][2] == n) ||
        (grid[0][2] == n && grid[1][1] == n && grid[2][0] == n)
      ) {
        // These two if and one else if statement are all setting "winDetected" to 1 to indicate that a win has been found. and depending on the
        if (n == p1) {
          console.log("Player one has won the game!");
          winDetected = 1;
        }
        if (n == p2) {
          console.log("Player two has won the game!");
          winDetected = 1;
        }
      } else if (move > 9) {
        console.log("The game was a draw!");
        winDetected = 0;
        }
      }
})
