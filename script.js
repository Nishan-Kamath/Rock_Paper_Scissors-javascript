let userScore=0
let compScore=0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {
    let options = ['rock' ,'paper' ,'scissors']
    let randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame = () => {
    console.log("Game was draw")
    msg.innerText = "Game was draw"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin ,compChoice ,userChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}!`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice)
    const compChoice = genCompChoice()
    console.log("computer choice = ",compChoice)

    if(userChoice == compChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false : true
        }else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true
        }else{
            userWin = compChoice == "rock" ? false : true
        }
        showWinner(userWin,compChoice,userChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})