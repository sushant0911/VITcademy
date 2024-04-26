let plainText = document.getElementById('plainText'); 
let restartBtn = document.getElementById('restart');
let boxes = Array.from(document.getElementsByClassName('box'));
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let gameName = document.querySelector('.hideGame');

turnO = true;
gameName.classList.remove('hideGame');
restartBtn.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText="";
        turnO = true;
    })
    msgContainer.classList.add('hide');
    gameName.classList.remove('hideGame');
})

const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => { 
        if(box.innerText != "O" && box.innerText != "X"){
            if(turnO){
                box.innerText = "O";
                turnO = false;
            }
            else{
                box.innerText = "X";
                turnO = true;
            }    
            checkWinner();
        }
    });
});

const showWinner = (winner) => {
    msg.innerText = `${winner} has won`;
    msgContainer.classList.remove('hide');
    gameName.classList.add('hideGame');

}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}



