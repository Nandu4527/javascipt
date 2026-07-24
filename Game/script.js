let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    const msg = document.getElementById("msg");
    msg.innerText = "The game was a draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userchoices, compChoice) => {
    if (userWin) {
            userScore++;
            userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoices} beats Your ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats Your ${userchoices}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoices) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if (userchoices === compChoice) {
        // Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoices === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoices === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userchoices, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoices = choice.getAttribute("id");
        playGame(userchoices);    
    });
});
