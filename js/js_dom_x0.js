let currentPlayer = "x"; // Who is playing now? Start with 'x' by default
let popup = document.querySelector("#popup");
let cells = document.querySelectorAll("#gamerDiv > div");

const checkWin = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical
    [0, 4, 8],
    [2, 4, 6], // Diagonal
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[b].innerHTML === cells[c].innerHTML
    ) {
      return cells[a].innerHTML; // Return the winner
    }
  }

  // Check for a tie
  for (const cell of cells) {
    if (!cell.innerHTML) {
      return null; // Game is still ongoing
    }
  }

  return "tie"; // No winner, it's a tie
};

const endGame = (result) => {
  popup.style.display = "block";
  if (result === "tie") {
    popup.innerHTML = "It's a tie!";
  } else {
    popup.innerHTML = `${result} won the game`;
  }
};

const handleClickXO = (event) => {
  const cell = event.target;

  if (!cell.innerHTML) {
    cell.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === "x" ? "o" : "x"; // Switch players
    const winner = checkWin();

    if (winner) {
      endGame(winner);
    }
  }
};

const initPageLoad = () => {
  for (const cell of cells) {
    cell.addEventListener("click", handleClickXO);
  }
};

const newGame = () => {
  currentPlayer = "x"; // 'x' starts first
  popup.style.display = "none";

  for (const cell of cells) {
    cell.innerHTML = "";
  }
};

window.addEventListener("load", () => {
  initPageLoad();
  newGame();
  document.getElementById("playAgainBtn").addEventListener("click", newGame);
});
