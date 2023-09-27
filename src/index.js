import './styles.css'
import Gameboard from "./gameboard";
import Player from './player';

const mainContent = document.getElementById('content')
const inputName = document.createElement('input')
inputName.minLength = 3
inputName.maxLength = 20
const startBtn = document.createElement('button')
startBtn.textContent = "Start Game"
// Game Header Info

const playerOneHeader = document.createElement('h2')
const playerTwoHeader = document.createElement('h2')
playerOneHeader.id = "playerOne"
playerTwoHeader.id = "playerTwo"
const gameStatus = document.createElement('h2')
gameStatus.id = "gameStatus"
// Game Board Container
const gameContainer = document.createElement('div')
gameContainer.id = "gameContainer"
const gameBoardOne = document.createElement('div')
gameBoardOne.className = "gameBoard"
gameBoardOne.id = "gameBoardOne"
const gameBoardTwo = document.createElement('div')
gameBoardTwo.className = "gameBoard"
gameBoardTwo.id = "gameBoardTwo"

const boardSize = 10

const playerOne = new Player("Player","p1")
const playerTwo = new Player("Computer","p2")
const pOneGameboard = new Gameboard(boardSize,gameStatus, playerOne, playerTwo,gameBoardOne)
const pTwoGameboard = new Gameboard(boardSize,gameStatus, playerTwo, playerOne,gameBoardTwo)

function generateGameContent() {
    playerOneHeader.textContent = playerOne.getName() + "'s Board"
    playerTwoHeader.textContent = playerTwo.getName() + "'s Board"
    gameStatus.textContent = playerOne.getName() + " Place Your Carrier!"

    gameContainer.appendChild(gameBoardOne)
    pOneGameboard.generatePlacementBoard()
    gameBoardOne.appendChild(playerOneHeader)
    gameBoardOne.appendChild(pOneGameboard.getBoard())

    gameContainer.appendChild(gameBoardTwo)
    pTwoGameboard.generateComputerBoard()
    gameBoardTwo.appendChild(playerTwoHeader)
    gameBoardTwo.appendChild(pTwoGameboard.getBoard())
    pTwoGameboard.assignRandomShips()

    pOneGameboard.assignEnemyGameBoard(pTwoGameboard)
    pTwoGameboard.assignEnemyGameBoard(pOneGameboard)

    mainContent.appendChild(gameStatus)
    mainContent.appendChild(gameContainer)
}

function generateStartContent() {
    mainContent.appendChild(inputName)
    mainContent.appendChild(startBtn)
    inputName.placeholder = "Enter Your Name."
    startBtn.addEventListener('click', () =>{
        if(inputName.value.length >= inputName.minLength) {
            mainContent.textContent = ""
            playerOne.setName(inputName.value)
            generateGameContent()
            
        }
    })
}

generateStartContent()