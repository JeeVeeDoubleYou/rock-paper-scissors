// rock beats scissors, scissors beat paper, paper beats rock
function playRound(userSelection) {
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
    alert('Computer : ' + computerSelection + '\n User : ' + userSelection)
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

function game(userSelection) {
    let computersWins = 0
    let usersWins = 0
    i = 0
    for (selection of userSelection) {
        i++
        roundWinner = playRound(selection)
        output.textContent = roundWinner
        alert('Round ' + i + ' : ' + roundWinner)
        if (roundWinner == 'User Wins !') {
            usersWins++
        }  
        if (roundWinner == 'Computer Wins !') {
            computersWins++
        }
        output.textContent = 'Computer : ' + computersWins + '\n User : ' + usersWins
    }
    alert('Final score : \n Computer : ' + computersWins + ' points \n ' + 'User : ' + usersWins + ' points' )
    output.textContent = 'End of Game'
    if (computersWins > usersWins) {
        output2.textContent = 'User loses :( - Congrats computer'
    }
    else if (computersWins < usersWins) {
        output2.textContent = 'User wins :) - Bravo user'
    }
    else {
        output2.textContent = "It's a tie!"
    }
}

function getUserSelections(click){
    output.textContent = 'Please select all five guesses to continue. Reload the page to start again.'
    userSelections.push(click)
    output2.textContent = ('These are your guesses, in order : ' + userSelections)
    if (userSelections.length == 5) {
        alert('Here are your final guesses : ' + userSelections)
        game(userSelections)
    }
}