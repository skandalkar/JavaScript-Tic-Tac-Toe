let game = document.querySelector(".game");

let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#button-reset");

let closemodel = document.querySelector("#close-model");

let restart = document.querySelector("#restart");

let drawGameModel = document.querySelector("#drawModel");

let turnO = true; //Bydefault player_O 's turn

/* Player_X
   Player_O  */

const winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],    //horizontally
    [0, 3, 6], [1, 4, 7], [2, 5, 8],    //vertically
    [0, 4, 8], [2, 4, 6]                //diagonally
];

//disabled box field
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

//enabled box field
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = " ";
    }
}

//resetGame
const resetGame = () => {
    document.querySelectorAll(".box").forEach(box => {
        box.textContent = "";
        enableBoxes();
        turnO = true;
        document.getElementById("winnerModel").style.display = "none";
        document.querySelector(".container").classList.remove("blur");

        document.getElementById("drawModel").style.display = "none";
        document.querySelector(".container").classList.remove("blur");
        return;
    });
};

//displayWinnerX/O
function DisplayWinner(winner) {
    document.getElementById("winnerText").textContent = `Congratulation🎉, player ${winner} won!`;
    document.getElementById("winnerModel").style.display = "block";
    document.querySelector(".container").classList.add("blur");
};

//close model
function closeModel() {
    document.getElementById("winnerModel").style.display = "none";
    document.querySelector(".container").classList.remove("blur");
    resetGame();
};

//drawGame
function gameDraw() {
    document.getElementById("drawText").textContent = "Better luck next time game draw! 🤝";
    document.getElementById("drawModel").style.display = "block";
    document.querySelector(".container").classList.add("blur");
};

//drawgameModel
function drawgameModel() {
    document.getElementById("drawModel").style.display = "none";
    document.querySelector(".container").classList.remove("blur");
    resetGame();
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.disabled = true;
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.disabled = true;
            turnO = true;
        }
        checkWinner();
    });
});


//checkingWinner
const checkWinner = () => {
    let isDraw = true;

    for (let pattern of winningPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            disableBoxes();
            DisplayWinner(val1);
            return;
        }
    }

    //checkingForGameDraw
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        disableBoxes();
        setTimeout(gameDraw(), 500);
    }
};

//gameDraw
drawGameModel.addEventListener("click", resetGame);

// restart
restart.addEventListener("click", resetGame);

//clodeModal
closemodel.addEventListener("click", resetGame);

//resetGame
resetBtn.addEventListener("click", resetGame);