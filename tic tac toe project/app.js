let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");  
let msgContainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg"); 

document.addEventListener("DOMContentLoaded", function () {
    checkWinner();
});

console.log("msgContainer before accessing classList:", msgContainer);



let turnO = true;//player w , player y

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO) {
            box.innerText="0";
            turnO = false;
        } else {
            box.innerText ="X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    let msgContainer = document.querySelector(".msg-container"); // Use querySelector

    if (msgContainer) {
        msgContainer.classList.remove("hide"); // Remove the class
        msg.innerText = `Congratulations, winner is ${winner}`;
    } else {
        console.error("msg-container element not found!");
    }
    disabledBoxes();
};




function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
newGameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click" , resetGame);
