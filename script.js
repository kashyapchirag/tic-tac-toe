console.log('Welcome to MyTicTacToe.com');
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

document.querySelector(".turn").textContent = "Turn for X";
let turn = "X";
let turnfn = () => {
    if (turn === "X") {
        turn = "0";
    } else {
        turn = "X";
    }
};
let gameOver = false;
let checkForWin = () => {
    let winArray = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]; let boxtexts = document.getElementsByClassName("boxtext");
    winArray.forEach(e => {
        if (((boxtexts[e[0]].textContent === boxtexts[e[1]].textContent) && (boxtexts[e[1]].textContent === boxtexts[e[2]].textContent) && (boxtexts[e[0]].textContent != ""))&&(gameOver===false)){
            document.querySelector(".turn").textContent = turn + " Won";
            document.querySelector(".gif").style.height="100px";
            gameover.play();
            gameOver = true;
        }

    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    box.addEventListener("click", () => {
        let boxtext = box.querySelector(".boxtext");
        if (boxtext.textContent === "") {
            boxtext.textContent += turn;
            ting.play();
            checkForWin();
            if (!gameOver) {
                turnfn();
                document.querySelector(".turn").textContent = "turn for " + turn;
            }

        }
    })
});

document.querySelector("#reset").addEventListener("click",()=>{
    gameOver=false;
    Array.from(document.getElementsByClassName("boxtext")).forEach(boxtext=>{
        boxtext.textContent="";
    });
});
