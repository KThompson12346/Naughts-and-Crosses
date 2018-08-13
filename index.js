$(function(event) {
  // var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  //                  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  //                  [0, 4, 8], [2, 4, 6]]; All the winning combos that a player can win by.
  var move = 0; // This will record the number of moves that have been made.
  var winDetected = 0; // Will detect and indicate when each player has won.
  var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // this array or arrays is what is used to check if there is a winner.
  var stillPlaying = true; // this will check whether a player player has won or not.
  var coveredPos = 0; // Count for the number of covered positions on board.
  // var boardPositions = $(".Position"); // This creates an array of div tags with classname Position.
  var turn = true; // Is set to true of false to alternate between player turns
  var player1Array = []; // player ones array to check against winning arrays.
  var player2Array = []; // player twos array to check against winning arrays.

  console.log("Player 1 makes the first move.");

  $(".Position").one("click", function(){
      var row = $(this).parent().index(); // Picks the parent index of the Position class element.
      var boardPositions = $(this).index(); // Picks the specific Position within each of the row classes.
   if ((stillPlaying) && (move <= 9)) { // this if statement is testing if the game is still being playing.

          if (turn) { // When it is player ones turn a X will be put on the noard.
              $(this).append("X"); // player ones turn a X is put on board.
              player1Array += $(this).index(); // Adds the index number to the player1Array, to be used to test against the winning states.
              grid[row][boardPositions] = 1; // Sets this grid position to a one indicating player one has this position.
              var winner = winnerIs(1); // Checks if player one has one the game.
              turn = false;
                if ((winnerIs == true) || (move >= 9)) {
                stillPlaying = false;
                }
              move++; // After each turn the move counter will increment.
              } else {
              $(this).append("0"); // Player twos turn a O is put on the board.
              player2Array += $(this).index(); // Adds the index number to the player2Array, to be used to test against the winning states.
              grid[row][boardPositions] = 2; // Sets this position to a two indicating player two has this position.
              var winner = winnerIs(2); // Checks if player two has one the game.
              turn = true;
              move++; // After each turn the move counter will increment.
                  if ((winnerIs == true) || (move >= 9)) {
                stillPlaying = false;
                }
            }
            console.log("Move number: " + move); // Prints the move number after every turn
        }
    })

    function winnerIs(n) {
      var p1 = 1;
      var p2 = 2;
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
      ){
          if (n == p1) {
            console.log("PLayer 1 has won the game!");
            return true;
          } else if (n == p2) {
            console.log("PLayer 2 has won the game!");
            return true;
          }
      } else {
        console.log("Game was a draw!");
          return false;
        }
      }
})
