let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#button-reset");

/**
 * PlayerX
 * PlayerO
 */

let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was hitted!");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        
    });
});

const checkWinner = () => {
    for(let pattern of winningPattern) {
        let valPattern1 = boxes[pattern[0]].innerText;
        let valPattern2 = boxes[pattern[1]].innerText;
        let valPattern3 = boxes[pattern[2]].innerText;

        if(valPattern1 != "" && valPattern2 != "" && valPattern3 != "") {
            if(valPattern1 === valPattern2 && valPattern2 === valPattern3) {
                
                console.log("Winner");
            }
        }
    }
};
