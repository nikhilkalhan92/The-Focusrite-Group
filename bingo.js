// Function to check if a bingo card will ever get Bingo
function hasBingo(card) {
  const size = 5; // Size of the bingo card (5x5)

  // Function to check for a bingo in a row
  function checkRow(row) {
    for (let col = 0; col < size; col++) {
      if (!card[row][col]) {
        return false;
      }
    }
    return true;
  }

  // Function to check for a bingo in a column
  function checkColumn(col) {
    for (let row = 0; row < size; row++) {
      if (!card[row][col]) {
        return false;
      }
    }
    return true;
  }

  // Function to check for a bingo in the main diagonal
  function checkMainDiagonal() {
    for (let i = 0; i < size; i++) {
      if (!card[i][i]) {
        return false;
      }
    }
    return true;
  }

  // Function to check for a bingo in the secondary diagonal
  function checkSecondaryDiagonal() {
    for (let i = 0; i < size; i++) {
      if (!card[i][size - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  // Check for bingo in rows
  for (let row = 0; row < size; row++) {
    if (checkRow(row)) {
      return true;
    }
  }

  // Check for bingo in columns
  for (let col = 0; col < size; col++) {
    if (checkColumn(col)) {
      return true;
    }
  }

  // Check for bingo in diagonals
  if (checkMainDiagonal() || checkSecondaryDiagonal()) {
    return true;
  }

  // If no bingo is found
  return false;
}

// The given bingo card
const bingoCard = [
  [22, 13, 17, 11, 0],
  [8, 2, 23, 4, 24],
  [21, 9, 14, 16, 7],
  [6, 10, 3, 18, 5],
  [1, 12, 20, 15, 19]
];

// Check if the card will ever get Bingo
const result = hasBingo(bingoCard);

// Output the result
console.log(result ? "Bingo is possible!" : "No Bingo possible.");
