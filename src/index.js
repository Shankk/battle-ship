import './styles.css'
import Gameboard from "./gameboard";
import Player from './player';

const gameContent = document.getElementById('content')
const boardSize = 10

const playerOne = new Player("Brian")
const playerTwo = new Player("Marlon")
const pOneGameboard = new Gameboard(boardSize, "p1", playerOne, playerTwo)
const pTwoGameboard = new Gameboard(boardSize, "p2", playerTwo, playerOne)

gameContent.appendChild(pOneGameboard.getBoard())
pOneGameboard.assignShipLocations()
gameContent.appendChild(pTwoGameboard.getBoard())
pTwoGameboard.assignShipLocations()

playerOne.toggleTurn()