// rock beats scissors, scissors beat paper, paper beats rock

function playRound () {
    let computerSelection = Math.floor(Math.random()*3)+1
    if (computerSelection == 1) {
        computerSelection = 'rock'
    }
    if (computerSelection == 2) {
        computerSelection = 'paper'
    }
    if (computerSelection == 3) {
        computerSelection = 'scissors'
    }
    let userSelection = prompt('Rock, paper, scissors! : ')
    userSelection = userSelection.toLowerCase()
    if (computerSelection == userSelection) {
        return 'Tie'
    } 
    if (computerSelection == 'rock') {
            if (userSelection == 'paper') {
                return 'User Wins !'
            }
            if (userSelection == 'scissors') {
                return 'Computer Wins !'
            }
    }
    if (computerSelection == 'paper') {
        if (userSelection == 'scissors') {
            return 'User Wins !'
        }
        if (userSelection == 'rock') {
            return 'Computer Wins !'
        }
    }
    if (computerSelection == 'scissors') {
        if (userSelection == 'rock') {
            return 'User Wins !'
        }
        if (userSelection == 'paper') {
            return 'Computer Wins !'
        }
    }
}

function game() {
    let computersWins = 0
    let usersWins = 0

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound()
        alert(roundWinner)
        if (roundWinner == 'User Wins !') {
            usersWins++
        }  
        if (roundWinner == 'Computer Wins !') {
            computersWins++
        }
        alert('Computer : ' + computersWins + '\n User : ' + usersWins)
    }
    alert('End of Game')
    if (computersWins > usersWins) {
        alert('Congrats computer')
    }
    else if (computersWins < usersWins) {
        alert('Bravo user')
    }
    else {
        alert("It's a tie! What are we going to do now?")
    }
}

game()