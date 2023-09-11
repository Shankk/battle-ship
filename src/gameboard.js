import Player from "./player";
import Ship from "./ship";

export default class Gameboard {
    constructor(size, owner, player, opponent) {
        this.size = size
        this.owner = owner
        this.player = player
        this.opponent = opponent
        this.attackHandler = (event) => this.receiveAttack(event, player, opponent)
        this.carrier = new Ship("Carrier",5, 1 , 1)
        this.battleship = new Ship("Battle ship",4, 3, 1)
        this.cruiser = new Ship("Cruiser", 3, 5, 1)
        this.submarine = new Ship("Submarine",3, 7, 5)
        this.destroyer = new Ship("Destroyer",2, 3, 6)
        this.ships = [this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer]
        //this.gameboardObjects = []
        this.gameboard = this.generateGameboard(this.size)
    }

    getBoard() {
        return this.gameboard
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
                //this.gameboardObjects.push(row.id)
                row.addEventListener('click', this.attackHandler)
                row.textContent = (k) + '' + (i);
                column.appendChild(row);
            }
            gameboard.appendChild(column);
        }
        //console.log(this.gameboardObjects)
        return gameboard
        //parent.appendChild(gameboard);
    }
    
    //Fix taking attacks and respond to misses.
    //Currently we assign the ship coords on the class object itself.
    //We then match those coords and change the color of the coord to act like the 'ships'
    //since we are assigning the 'ships' to the coords. we also add an event listerner to respond
    //as if we are receivng the attack, otherwise we miss.
    
    assignShipLocations() {
        for(let ship in this.ships) {
            for(let object in this.ships[ship].getObjects()) {
                let id = this.ships[ship].getObjects()[object] + this.owner
                if(document.getElementById(id) != null) {
                    let element = document.getElementById(id)
                    element.style.backgroundColor = "grey"
                    //element.removeEventListener('click', this.attackHandler)
                    /* element.addEventListener('click', () => {
                        this.ships[ship].takeHit()
                        this.ships[ship].isShipSunk()
                        element.style.backgroundColor = "red"
                    }, {once: true}) */
                }
                else {
                    console.log("error!, No Ship Object located there")
                }
            }
        }
    }

    getShipLocation(position) {
        for(let ship in this.ships) {
            for(let object in this.ships[ship].getObjects()) {
                let id = this.ships[ship].getObjects()[object]
                //console.log(id)
                if(position == id) {
                    let element = document.getElementById(id + this.owner)
                    element.style.backgroundColor = "red"
                    console.log("There Is A Ship There!: " + id)
                    return true
                }
                else {
                    console.log("error!, No Ship Object located there")
                }
            }
        }
    }

    receiveAttack(event, player, opponent) {
        let element = document.getElementById(event.target.id)
        if(element != null) {
            let position = event.target.id.slice(0,2)
            if(player.getTurnStatus()) return console.log("Cant Attack Your Board")
            else {
                if(this.getShipLocation(position)) {
                    console.log("You Hit a Enemy Ship!")
                }
                else {
                    element.style.backgroundColor = "blue"
                    console.log("Missed, No Ship Here")
                }
                player.toggleTurn()
                opponent.toggleTurn()
                element.removeEventListener('click', this.attackHandler)
            }
        }
    }


}