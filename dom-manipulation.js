const userSelections = []

const rockButton = document.querySelector('#rockButton')
rockButton.addEventListener('click', () => getUserSelections('rock'))

const paperButton = document.querySelector('#paperButton')
paperButton.addEventListener('click', () => getUserSelections('paper'))

const scissorsButton = document.querySelector('#scissorsButton')
scissorsButton.addEventListener('click', () => getUserSelections('scissors'))

const output = document.querySelector('#output')
const output2 = document.querySelector('#output2')