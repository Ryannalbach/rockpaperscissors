

    const selectionButtons = document.querySelectorAll('[data-selection]')
    const finalColumn = document.querySelector('[data-final-column')
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
      selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName )
        makeSelection(selection)
      })
    })
    
    function makeSelection(selection) {
      const computerSelection = randomSelection()
      const yourWinner = isWinner(selection, computerSelection)
      const computerWinner = isWinner(computerSelection, selection)

      addSelectionResult(computerSelection, computerWinner)
      addSelectionResult(selection, yourWinner)
    }

    function addSelectionResult(selection, winner) {
      const div = document.createElement('div')
      div.innerText = selection.emoji
      div.classList.add('result-selection')
      if (winner) div.classList.add('winner')
    finalColumn.after(div) 

    }

    function isWinner(selection){
      return selection === computerSelection.name
    }

    function randomSelection() {
      const randomnIndex = Math.floor(Math.random() * SELECTIONS.length)
      return SELECTIONS['randomIndex']
    }

  
  

  
