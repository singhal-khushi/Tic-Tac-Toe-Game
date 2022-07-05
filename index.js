let turnmusic = new Audio("images and audios/ting.mp3");
let vic = new Audio("images and audios/vic.mp3");
let wa = new Audio("images and audios/wa.mp3");
let bg = new Audio("images and audios/bg.mp3");
let turn = "X"
let disp = document.getElementById("disp");
let nl = false;
let infowon = document.getElementById("infowon");
let b1 = 0,
    b2 = 1,
    b3 = 2;
let turnsd=document.getElementById("turnsd");    


// function for turns

const changeturn = () => {
    if (turn === "X")
        turn = "O";
    else turn = "X";

    disp.innerText = turn;
    if (turn === "X") {
        disp.style.color = "rgb(150, 243, 12)";
        disp.style.borderColor = "rgb(150, 243, 12)";
    } else {
        disp.style.color = "rgb(245, 94, 94)";
        disp.style.borderColor = "rgb(245, 94, 94)";
    }
}

//restart function
const res = () => {
    let bxes = document.querySelectorAll(".tx");
    Array.from(bxes).forEach(Element => {
        Element.innerText = "";
    })
    bg.pause();
    turn = "X";
    disp.innerText = turn;
    nl = false;
    gif2.style.display = "none";
    infowon.style.display = "none";
    disp.style.color = "rgb(150, 243, 12)";
    disp.style.borderColor = "rgb(150, 243, 12)";
    turnsd.style.display="block";
    infowon.style.borderColor="black";
    countboth=0;
    infowon.style.fontSize="3.5rem";


}

//function for victory
const checkwin = () => {
    let boxtext = document.getElementsByClassName('tx');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            infowon.innerText = boxtext[e[0]].innerText + " Won"
            nl = true
            gif2.style.display = "flex";
            boxtext[e[0]].style.color = "rgb(235, 83, 83)";
            boxtext[e[1]].style.color = "rgb(235, 83, 83)";
            boxtext[e[2]].style.color = "rgb(235, 83, 83)";
            b1 = e[0];
            b2 = e[1];
            b3 = e[2];
            vic.play();
            infowon.style.display = "block";
            turnsd.style.display="none";
            infowon.style.borderColor="rgb(150, 243, 12)";
            countboth=0;
        }
    })
}



//game
let boxes = document.getElementsByClassName("box");
let countboth=0;
Array.from(boxes).forEach(Element => {
    let boxtx = Element.querySelector(".tx");
    Element.addEventListener("click", () => {
        bg.play();
        if (boxtx.innerText === "" && !nl) {
            boxtx.innerText = turn;
            countboth++;
            turnmusic.pause();
            turnmusic.play();
            checkwin();

            if(countboth==9 && !nl)
            {
                nl=true;
                
                infowon.style.display = "block";
                infowon.style.fontSize="1.5rem";
                infowon.innerText="Match drawn ...";
                infowon.style.borderColor="rgb(150, 243, 12)";
                turnsd.style.display="none";
            }

            
            if (!nl) changeturn();
        } else {
            wa.play();
        }
    })

})


//restart button
reset.addEventListener("click", () => {
    res();
    chngcolor();

})

//function for restoring colors

const chngcolor = () => {
    let boxtext = document.getElementsByClassName('tx');
    boxtext[b1].style.color = "rgb(150, 243, 12)";
    boxtext[b2].style.color = "rgb(150, 243, 12)";
    boxtext[b3].style.color = "rgb(150, 243, 12)";

}


// //match draw condition
// const draw = () => {
//     let nl2 = true;
//     let boxes = document.getElementsByClassName("box");

//     Array.from(boxes).forEach(Element => {
//         let boxtx = Element.querySelector(".tx");
//         if (boxtx.innerText === "" )
//             nl2 = true;
//     })
//     if(nl2) {
//         infowon.innerText="Match drawn ...";
//         nl=false;
//     }
// }