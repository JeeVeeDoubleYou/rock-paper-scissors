const userSelections = []

const rockButton = document.querySelector('#rockButton')
rockButton.addEventListener('click', () => getUserSelections(' Rock'))

const paperButton = document.querySelector('#paperButton')
paperButton.addEventListener('click', () => getUserSelections(' Paper'))

const scissorsButton = document.querySelector('#scissorsButton')
scissorsButton.addEventListener('click', () => getUserSelections(' Scissors'))

const output = document.querySelector('#output')
const output2 = document.querySelector('#output2')