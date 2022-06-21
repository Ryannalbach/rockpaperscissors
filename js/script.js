
function playRound(playerSelection, computerSelection) {
    // your code here!
    const selectionButtons = document.querySelectorAll('[data-selection]')
    const SELECTIONS = [
      {
        name: 'rock',
        emoji: '&#x270A',
        beats: 'scissors'
      },
      {
        name: 'paper',
        emoji: '&#x270b',
        beats: 'rock'
      },
      {
        name: 'scissors',
        emoji: '&#x270c',
        beats: 'paper'
      }
    ]

    selectionButtons.forEach(selectionButton => {
      selectionButton.addEventListener('click',e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName )
        makeSelection(selectionName)
      })
    })
    
    function makeSelection(selection) {
      const computerSelection = randomSelections()
      console.log(computerSelection)
    }
    function randomSelection() {
      const randomnIndex = Math.floor(Math.random() * SELECTIONS.length)
      return SELECTIONS[randomIndex]
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  
