let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#button-reset");
let utility = document.querySelector(".utility");
let newGame = document.querySelector("#newGame");
let closemodel = document.querySelector("#close-model");
let game = document.querySelector(".game");

let turnO = true;

/* PlayerX
   PlayerO  */

const winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontally
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertically
    [0, 4, 8], [2, 4, 6] //diagonally
];

//resetGame
const resetGame = () => {
    document.querySelectorAll(".box").forEach(box => {
        document.getElementById("winnerModel").style.display = "none";
        document.querySelector(".container").classList.remove("blur");
        box.textContent = " ";
        turnO = true;
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }

        checkWinner();
    });
});

function DisplayWinner(winner) {
    document.getElementById("winnerText").textContent = `Congratulation, player ${winner} won!`;
    document.getElementById("winnerModel").style.display = "block";
    document.querySelector(".container").classList.add("blur");
};

//close model
function closeModel() {
    const modal = document.getElementById("winnerModel").style.display = "none";
    document.querySelector(".container").classList.remove("blur");
    resetGame();
}

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let valPattern1 = boxes[pattern[0]].innerText;
        let valPattern2 = boxes[pattern[1]].innerText;
        let valPattern3 = boxes[pattern[2]].innerText;

        if (valPattern1 != "" && valPattern2 != "" && valPattern3 != "") {
            if (valPattern1 === valPattern2 && valPattern2 === valPattern3) {
                DisplayWinner(valPattern1);
            }
        }
    }
};

//clodeModal
closemodel.addEventListener("click", resetGame);

//newGame
newGame.addEventListener("click", resetGame);

//resetGame
resetBtn.addEventListener("click", resetGame);