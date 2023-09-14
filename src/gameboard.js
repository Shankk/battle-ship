import Player from "./player";
import Ship from "./ship";
import missIMG from "./images/Circle_White.png"
import hitIMG from "./images/Circle_Red.png"

export default class Gameboard {
    constructor(size, owner, player, opponent, gameStatus) {
        this.size = size
        this.owner = owner
        this.player = player
        this.opponent = opponent
        this.gameStatus = gameStatus
        this.attackHandler = (event) => this.receiveAttack(event)
        this.carrier = new Ship("Carrier",5, 1 , 1)
        this.battleship = new Ship("Battle ship",4, 3, 1)
        this.cruiser = new Ship("Cruiser", 3, 5, 1)
        this.submarine = new Ship("Submarine",3, 7, 5)
        this.destroyer = new Ship("Destroyer",2, 3, 6)
        this.ships = [this.carrier]//,[this.battleship,this.cruiser,this.submarine,this.destroyer]
        this.gameboard = this.generateGameboard(this.size)
        this.opponentGameBoard = document.createElement('grid');
    }

    getBoard() {
        return this.gameboard
    }

    assignEnemyGameBoard(gameboard) {
        this.opponentGameBoard = gameboard
    }

    generateGameboard(size) {
        let gameboard = document.createElement('grid');
        gameboard.className = 'grid';
        for(let i = 0; i < size; i++) // Columns
        {
            let column = document.createElement('div');
            column.className = 'column';
            for(let k = 0; k < size; k++) // Rows
            {
                let row = document.createElement('div');
                row.className = 'row';
                row.id = (k) + '' + (i)+ this.owner;
                row.addEventListener('click', this.attackHandler)
                //row.textContent = (k) + '' + (i);
                column.appendChild(row);
            }
            gameboard.appendChild(column);
        }
        return gameboard
    }
    
    //Fix taking attacks and respond to misses.
    //Currently we assign the ship coords on the class object itself.
    //We then match those coords and change the color of the coord to act like the 'ships'
    //since we are assigning the 'ships' to the coords. we also add an event listerner to respond
    //as if we are receivng the attack, otherwise we miss.

    

    toggleShipLocations() {
        for(let ship in this.ships) {
            for(let object in this.ships[ship].getObjects()) {
                let id = this.ships[ship].getObjects()[object] + this.owner
                if(document.getElementById(id) != null) {
                    let element = document.getElementById(id)
                    element.style.backgroundColor = "grey"
                  /*   if(this.player.getTurnStatus() == false) {
                        element.style.backgroundColor = "rgb(0,0,0,0.0)"
                    }
                    else {
                        element.style.backgroundColor = "green"
                    } */
                }
            }
        }
    }

    getShipLocation(position) {
        for(let ship in this.ships) {
            for(let object in this.ships[ship].getObjects()) {
                let id = this.ships[ship].getObjects()[object]
                if(position == id) {
                    this.ships[ship].takeHit()
                    this.ships[ship].isShipSunk()
                    return true
                }
            }
        }
    }

    receiveAttack(event) {
        let element = document.getElementById(event.target.id)
        if(element != null) {
            let position = event.target.id.slice(0,2)
            if(this.opponent.getTurnStatus() === false) return console.log("Cant Attack Your Board")
            else {
                if(this.getShipLocation(position)) {
                    const newHit = document.createElement('img')
                    newHit.src = hitIMG
                    newHit.width = newHit.height = 24
                    element.appendChild(newHit)
                    element.classList.add("hit")
                    console.log("You Hit a Enemy Ship!")
                }
                else {
                    const newMiss = document.createElement('img')
                    newMiss.src = missIMG
                    newMiss.width = newMiss.height = 24
                    element.appendChild(newMiss)
                    element.classList.add("hit")
                    console.log("Missed, No Ship Here")
                }
                this.forceThisBoardTurn()
                this.isFleetDestroyed()
                element.removeEventListener('click', this.attackHandler)
            }
        }
    }

    isFleetDestroyed() {
        let count = 0
        for(let ship in this.ships) {
            if(this.ships[ship].isShipSunk()){
                count++
            }
        }
        if(count >= this.ships.length) {
            console.log(this.player.getName() + " has lost all of their fleet!")
            this.player.disableAttacks()
            this.opponent.disableAttacks()
            this.gameStatus.textContent = this.opponent.getName() + " is the Winner!"
        }
    }

    forceThisBoardTurn() {
        this.player.toggleTurn() // Enables the Receivers Turn to Attack their opponent
        this.opponent.disableAttacks() //Disables the Attackers Turn since they attacked
        this.gameStatus.textContent = this.player.getName() + "'s Turn!"
        this.gameboard.style.boxShadow = "0px 0px 10px 5px red";
        this.opponentGameBoard.getBoard().style.boxShadow = "0px 0px 10px 5px green";
        //this.toggleShipLocations()
        //this.opponentGameBoard.toggleShipLocations()
    }
}