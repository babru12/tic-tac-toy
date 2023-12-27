let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let player1Input = document.getElementById("player1");
// let player2Input = document.getElementById("player2");
let turn0 = true;
// let currentPlayer = "Player 1"
const winpattern = [[0,3,6],
                    [0,4,8],
                    [0,1,2],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8]
        ];
        const resetgames=()=>{
            turn0=true;
            enableboxes();
            msgcontainer.classList.add("hide");
            // currentPlayer = "Player 1";
            // player1Input.value = "";
            // player2Input.value = "";
        }
// const winnerDisplay = document.getElementById("winner");
// function resetGame() {
//     // Reset the game by clearing the board and winner display
//     boxes.forEach((box) => {
//         box.innerText = "";
//         box.disabled = false;
//     });
//     winnerDisplay.innerText = "";
//     turn0 = true;
// }
// document.getElementById("player1").addEventListener("input", () => {
//     player1 = document.getElementById("player1").value;
// });

// document.getElementById("player2").addEventListener("input", () => {
//     player2 = document.getElementById("player2").value;
// });
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
            // currentPlayer = player1Input.value || "Player 1";
        }
        else{
            box.innerText="X"
            turn0=true;
            // currentPlayer = player2Input.value || "Player 2";
        }
        box.disabled=true;
        checkWinner();
    });
});
let showWinner=(winner)=>{
     msg.innerText=`congratulation ${winner} is won the game`
     msgcontainer.classList.remove("hide")
     disableboxes();
}
const disableboxes = ()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}
const checkWinner = ()=>{
    for(let winner of winpattern){
        let pos1=boxes[winner[0]].innerText;
        let pos2=boxes[winner[1]].innerText;
        let pos3=boxes[winner[2]].innerText;
        if(pos1!="" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2===pos3){
                console.log("winner", pos1);
                showWinner(pos1);
                // const winningPlayer = pos1 === "O" ? player1 : player2;
                // winnerDisplay.innerText = `Congratulations, ${winningPlayer}! You won the game!`;
            }
        }
    }
}
newbtn.addEventListener("click",resetgames);
resetbtn.addEventListener("click",resetgames);


