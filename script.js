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
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ];
    let boxtexts = document.getElementsByClassName("boxtext");
    winArray.forEach(e => {
        if (((boxtexts[e[0]].textContent === boxtexts[e[1]].textContent) && (boxtexts[e[1]].textContent === boxtexts[e[2]].textContent) && (boxtexts[e[0]].textContent != "")) && (gameOver === false)) {
            music.pause();
            gameover.play();
            document.querySelector(".turn").textContent = turn + " Won";
            gameOver = true;
            document.querySelector(".gif").style.height = "100px";

            let line = document.querySelector(".line");

            let screenWidth = window.innerWidth;

            if (screenWidth < 600) { // phone
                line.style.width = "0vw";
            } else {
                line.style.width = "30vw";
            }


            line.style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;


        }

    })
}




let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    box.addEventListener("click", () => {
        music.play();
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
    });
});

document.querySelector("#reset").addEventListener("click", () => {
    gameOver = false;
    music.pause()
    Array.from(document.getElementsByClassName("boxtext")).forEach(boxtext => {
        boxtext.textContent = "";
        document.querySelector(".gif").style.height = "0px";
    }); document.querySelector(".line").style.width = "0vw";

});
