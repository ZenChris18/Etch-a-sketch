const sizeButton = document.querySelector(`.size`)
const container = document.querySelector(`.container`)

function createGrid(gridSize) {
    container.innerHTML = ''
    for(let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div')
        square.classList.add('square')

        const squareSize = 600 / gridSize
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        container.appendChild(square)

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomColor()
        })
    }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}


// Create 16x16 grid on page load
createGrid(16)

sizeButton.addEventListener('click', function(){
    let gridSize
    do {
        gridSize = Number(window.prompt("Enter grid size (1-99)"))
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 99)
    createGrid(gridSize)
})



/*        

old code before putting the hover effect inside the for loop in creating the grid


const box = document.querySelectorAll(`.square`) // returns a nodelist (like an array)

        for(let j = 0; j < box.length ; j++){
            box[j].addEventListener(`mouseenter`, () => {
                box[j].style.backgroundColor = 'red';
            })
        }

*/