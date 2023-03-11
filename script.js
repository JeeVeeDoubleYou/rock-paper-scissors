// rock beats scissors, scissors beat paper, paper beats rock

// define playRound function
function playRound () {
    // Ask computer if it plays rock, paper or scissors (random)
        // randomly generate number between one and three and pass to computerSelection 
    let computerSelection = Math.floor(Math.random()*3)+1
        // convert 1 to rock, 2 to paper and 3 to scissors
    if (computerSelection == 1) {
        computerSelection = 'rock'
    }
    if (computerSelection == 2) {
        computerSelection = 'paper'
    }
    if (computerSelection == 3) {
        computerSelection = 'scissors'
    }
    // Ask user if it plays rock, paper or scissors
    let userSelection = prompt('Rock, paper, scissors! : ')
        // make user input case insensitive -> make all lower case
    userSelection = userSelection.toLowerCase()
    // Compare computerSelection and userSelection
        // if computerSelection == userSelection : return tie
    if (computerSelection == userSelection) {
        return 'Tie'
    } 
        // if computerSelection == rock 
    if (computerSelection == 'rock') {
            // if userSelection == paper
            if (userSelection == 'paper') {
                // user wins!
                return 'User Wins !'
            }
            // if userSelection == scissors
            if (userSelection == 'scissors') {
                // computer wins!
                return 'Computer Wins !'
            }
    }
    // if computerSelection == paper 
            // if userSelection == scissors
                // user wins!
            // if userSelection == rock
                // computer wins!
    if (computerSelection == 'paper') {
        if (userSelection == 'scissors') {
            return 'User Wins !'
        }
        if (userSelection == 'rock') {
            return 'Computer Wins !'
        }
    }
        // if computerSelection == scissors 
            // if userSelection == rock
                // user wins!
            // if userSelection == paper
                // computer wins!
    if (computerSelection == 'scissors') {
        if (userSelection == 'rock') {
            return 'User Wins !'
        }
        if (userSelection == 'paper') {
            return 'Computer Wins !'
        }
    }
    // return winner or nothing if tie
}

// define game function with 5 times playRound inside
function game() {
    let computersWins = 0
    let usersWins = 0

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound()
        console.log(roundWinner)
    // keep score after each round
        // if computer wins! computersWins ++
        // if user wins! usersWins ++
        if (roundWinner == 'User Wins !') {
            usersWins++
        }  
        if (roundWinner == 'Computer Wins !') {
            computersWins++
        }
        console.log('Computer : ' + computersWins)
        console.log('User : ' + usersWins)
    }
    // after the game ends, announce the winner
        // if computersWins > usersWins : console.log('Congrats computer')
    console.log('End of Game')
    if (computersWins > usersWins) {
        console.log('Congrats computer')
    }
    // if computersWins < usersWins : console.log('Bravo user')
    if (computersWins < usersWins) {
        console.log('Bravo user')
    }
    // else : console.log("It's a tie! What are we going to do now?")
    else {
        console.log("It's a tie! What are we going to do now?")
    }
}

// call game function
game()