let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const getcompchoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
}

const darwgame = () =>{
    msg.innerHTML = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showwin = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        compscorepara.innerHTML = compscore;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) =>{
    console.log("user choice ", userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice ", compchoice);
    if(compchoice === userchoice){
        darwgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "rock" ? true : false;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwin(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice  = choice.getAttribute("id");
        playgame(userchoice);
    })
})