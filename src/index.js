import './styles.css'
import Gameboard from "./gameboard";
import Player from './player';

const gameContent = document.getElementById('gameBoards')
const gameStatus = document.getElementById('gameStatus')
const boardSize = 10

const playerOne = new Player("Player")
const playerTwo = new Player("Computer")
const pOneGameboard = new Gameboard(boardSize, "p1", playerOne, playerTwo,gameStatus)
const pTwoGameboard = new Gameboard(boardSize, "p2", playerTwo, playerOne,gameStatus)

gameContent.appendChild(pOneGameboard.getBoard())
pOneGameboard.toggleShipLocations()
gameContent.appendChild(pTwoGameboard.getBoard())
pTwoGameboard.toggleShipLocations()

pOneGameboard.assignEnemyGameBoard(pTwoGameboard)
pTwoGameboard.assignEnemyGameBoard(pOneGameboard)

pOneGameboard.forceThisBoardTurn()