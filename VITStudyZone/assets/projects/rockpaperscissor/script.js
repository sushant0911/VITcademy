let yourRock = document.getElementById('Rock');
let yourPaper = document.getElementById('Paper');
let yourScissor = document.getElementById('Scissor');
let msg = document.getElementById('msg-container');
let restartBtn = document.getElementById('restart');
let oppoView = document.getElementById('opponent');
let youCount = document.getElementById('youCount');
let compCount = document.getElementById('compCount');

let oppoChoice = (Math.floor(Math.random() * 90))%3;  //to get more randomness 

let yourChoice;

yourRock.addEventListener("click", () => {
    yourChoice = 0;
    console.log("Rock was clicked!");
    checkWinner();
    tryAgain();
})
yourPaper.addEventListener("click", () => {
    yourChoice = 1;
    console.log("Paper was clicked!");
    checkWinner();
    tryAgain();
})
yourScissor.addEventListener("click", () => {
    yourChoice = 2;
    console.log("Scissor was clicked!");
    checkWinner();
    tryAgain();
})

const showDraw = () => {
    msg.innerText = "Match Draw";
    youCount.innerText = parseInt(youCount.innerText);
    compCount.innerText = parseInt(compCount.innerText) ;
    console.log(youCount.innerText);
    console.log(compCount.innerText);
}

const showWin = () => {
    msg.innerText = "You Win";
    youCount.innerText = parseInt(youCount.innerText) + 1;
    compCount.innerText = parseInt(compCount.innerText) ;
    console.log(youCount.innerText);
    console.log(compCount.innerText);
}

const showLose = () => {
    msg.innerText = "You Lose";
    youCount.innerText = parseInt(youCount.innerText);
    compCount.innerText = parseInt(compCount.innerText) + 1;
    console.log(youCount.innerText);
    console.log(compCount.innerText);
}

const checkWinner = () => {


    if (yourChoice == oppoChoice) {
        if (yourChoice == 0) {
            oppoView.innerHTML = `<img src="Images/rock.png" alt="Rock">`;
        }
        else if (yourChoice == 1) {
            oppoView.innerHTML = `<img src="Images/paper.png" alt="Paper">`;
        }
        else {
            oppoView.innerHTML = `<img src="Images/scissors.png" alt="Scissor">`;
        }
        showDraw();
    }

    else if(yourChoice != oppoChoice){
        if (yourChoice == 0) {
            if (oppoChoice == 1) {
                oppoView.innerHTML = `<img src="Images/paper.png" alt="Paper">`;
                showLose();

            }
            else if(oppoChoice == 2){
                oppoView.innerHTML = `<img src="Images/scissors.png" alt="Scissor">`;
                showWin();
            }
        }

        else if (yourChoice == 1) {
            if (oppoChoice == 0) {
                oppoView.innerHTML = `<img src="Images/rock.png" alt="Rock">`;
                showWin();
            }
            else if(oppoChoice == 2){
                oppoView.innerHTML = `<img src="Images/scissors.png" alt="Scissor">`;
                showLose();
            }
        }

        else if (yourChoice == 2) {
            if (oppoChoice == 0) {
                oppoView.innerHTML = `<img src="Images/rock.png" alt="Rock">`;
                showLose();
            }
            else if(oppoChoice == 1){
                oppoView.innerHTML = `<img src="Images/paper.png" alt="Paper">`;
                showWin();
            }
        }
    }
}

const tryAgain = () => {
    oppoChoice = (Math.floor(Math.random() * 90))%3;
}

restartBtn.addEventListener("click", () => {
    msg.innerText = "Let's Start";
    oppoChoice = (Math.floor(Math.random() * 90))%3;
    yourChoice = -1;
    oppoView.innerHTML = "";
    youCount.innerHTML = 0;
    compCount.innerHTML = 0;
})
