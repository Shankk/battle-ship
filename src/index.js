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
const gameInfo = document.createElement('div')
gameInfo.id = "gameInfo"
const playerOneHeader = document.createElement('h2')
const playerTwoHeader = document.createElement('h2')
playerOneHeader.id = "playerOne"
playerTwoHeader.id = "playerTwo"
const gameStatus = document.createElement('h2')
gameStatus.id = "gameStatus"
// Game Board Container
const gameContent = document.createElement('div')
gameContent.id = "gameBoards"

const boardSize = 10

const playerOne = new Player("Player","p1")
const playerTwo = new Player("Computer","p2")
const pOneGameboard = new Gameboard(boardSize,gameStatus, playerOne, playerTwo,gameContent)
const pTwoGameboard = new Gameboard(boardSize,gameStatus, playerTwo, playerOne,gameContent)

function generateGameInfo() {
    mainContent.appendChild(gameInfo)
    playerOneHeader.textContent = playerOne.getName() + "'s Board"
    playerTwoHeader.textContent = playerTwo.getName() + "'s Board"
    gameStatus.textContent = playerOne.getName() + " Place Your Carrier!"
    gameInfo.appendChild(playerOneHeader)
    gameInfo.appendChild(gameStatus)
    gameInfo.appendChild(playerTwoHeader)
}

function generateGameContent() {
    mainContent.appendChild(gameContent)
    pOneGameboard.generatePlacementBoard()
    gameContent.appendChild(pOneGameboard.getBoard())
    pTwoGameboard.generateComputerBoard()
    gameContent.appendChild(pTwoGameboard.getBoard())
    pTwoGameboard.assignRandomShips()

    pOneGameboard.assignEnemyGameBoard(pTwoGameboard)
    pTwoGameboard.assignEnemyGameBoard(pOneGameboard)
}

function generateStartContent() {
    mainContent.appendChild(inputName)
    mainContent.appendChild(startBtn)
    inputName.placeholder = "Enter Your Name."
    startBtn.addEventListener('click', () =>{
        if(inputName.value.length >= inputName.minLength) {
            mainContent.textContent = ""
            playerOne.setName(inputName.value)
            generateGameInfo()
            generateGameContent()
            
        }
    })
}

generateStartContent()