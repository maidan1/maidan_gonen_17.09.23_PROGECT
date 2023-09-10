let myCard = [];

let myBox = document.querySelectorAll(".box");
let Arr = [
  "/imag/CARD GAME/onePiece1.png",
  "/imag/CARD GAME/onePiece2.png",
  "/imag/CARD GAME/onePiece3.png",
  "/imag/CARD GAME/onePiece4.png",
  "/imag/CARD GAME/onePiece5.png",
  "/imag/CARD GAME/onePiece6.png",
  "/imag/CARD GAME/onePiece7.png",
  "/imag/CARD GAME/onePiece8.png",
];
let i = 0;

let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

shuffle(numbersArr);
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

for (let item of Arr) {
  myBox[numbersArr[i]].firstElementChild.setAttribute("src", item);
  myBox[numbersArr[i + 1]].firstElementChild.setAttribute("src", item);
  i = i + 2;
}

for (let box of myBox) {
  box.addEventListener("click", () => {
    box.firstElementChild.style.display = "block";
    compareToCard(box);
  });
}

window.addEventListener("load", () => {
  compareToCard = (card) => {
    myCard.push(card);
    if (myCard.length == 2) {
      if (
        myCard[0].firstElementChild.getAttribute("src") !=
        myCard[1].firstElementChild.getAttribute("src")
      ) {
        setTimeout(() => {
          myCard[0].firstElementChild.style.display = "none";
          myCard[1].firstElementChild.style.display = "none";
          myCard = [];
        }, 300);
      } else {
        myCard = [];
      }
    }
  };

  document.getElementById("btnNewGame").addEventListener("click", () => {
    window.location.reload();
  });
});
