import Player from "./player";
import Ship from "./ship";
import missIMG from "./images/Circle_White.png"
import hitIMG from "./images/Circle_Red.png"

export default class Gameboard {
    constructor(size, gameStatus, player, opponent) {
        this.size = size
        this.player = player
        this.opponent = opponent
        this.gameStatus = gameStatus
        this.attackHandler = (event) => this.receiveAttack(event)
        this.placementHandler = (event) => this.submitShipPlacement(event)
        this.togglePlacementHandler = (event) => this.toggleShipPlacement(event)
        this.carrier = new Ship("Carrier",5)
        this.battleship = new Ship("Battle ship",4)
        this.cruiser = new Ship("Cruiser", 3)
        this.submarine = new Ship("Submarine",3)
        this.destroyer = new Ship("Destroyer",2)
        this.placementShips = [this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer]
        this.ships = [this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer]
        this.gameboard = document.createElement('grid');
        this.gameboard.className = 'grid';
        this.gameBoardObjects = []
        if(!this.gameBoardObjects.length) this.initBoardObjects()
        this.opponentGameBoard = document.createElement('grid');
    }

    getBoard() {
        return this.gameboard
    }

    assignEnemyGameBoard(gameboard) {
        this.opponentGameBoard = gameboard
    }

    initBoardObjects() {
        for(let i = 0; i < (this.size * 10); i++) {
            if(i < 10) this.gameBoardObjects.push({id:"0" + i.toString(),hasShip:false})
            else this.gameBoardObjects.push({id:i.toString(), hasShip:false})
        }
    }
    
    generatePlacementBoard() {
        this.gameboard.textContent = ""
        for(let i = 0; i < this.size; i++) // Columns
        {
            let column = document.createElement('div');
            column.className = 'column';
            for(let k = 0; k < this.size; k++) // Rows
            {
                let row = document.createElement('div');
                row.className = 'row';
                row.id = (k) + '' + (i)+ this.player.getOwner();
                row.addEventListener('mouseover', this.togglePlacementHandler)
                row.addEventListener('mouseout',this.togglePlacementHandler)
                row.addEventListener('click', this.placementHandler)
                column.appendChild(row);
            }
            this.gameboard.appendChild(column);
        }
    }

    generateGameBoard() {
        this.gameboard.textContent = ""
        for(let i = 0; i < this.size; i++) // Columns
        {
            let column = document.createElement('div');
            column.className = 'column';
            for(let k = 0; k < this.size; k++) // Rows
            {
                let row = document.createElement('div');
                row.className = 'row'; 
                row.id = (k) + '' + (i)+ this.player.getOwner();
                column.appendChild(row);
            }
            this.gameboard.appendChild(column);
        }
    }

    generateComputerBoard() {
        this.gameboard.textContent = ""
        for(let i = 0; i < this.size; i++) // Columns
        {
            let column = document.createElement('div');
            column.className = 'column';
            for(let k = 0; k < this.size; k++) // Rows
            {
                let row = document.createElement('div');
                row.className = 'row empty'; 
                row.id = (k) + '' + (i)+ this.player.getOwner();
                row.addEventListener('click', this.attackHandler)
                column.appendChild(row);
            }
            this.gameboard.appendChild(column);
        }
    }
    
    getXAxisShipObjects(element) {
        if(element != null && this.placementShips.length > 0) {
            let xCord = element.id.slice(0,1)
            let yCord = element.id.slice(1,2)
            let shipObjects = []
            for(let i = 0; i < this.placementShips[0].length; i++) {
                if((Number(yCord) + this.placementShips[0].length) <= 10){
                    shipObjects.push(document.getElementById(xCord + (Number(yCord)+i) + this.player.getOwner()))
                }
                else return null
            }
            return shipObjects
        }
    }

    toggleShipPlacement(event) {
        let element = document.getElementById(event.target.id)
        let shipObjects = this.getXAxisShipObjects(element)
        for(let object in shipObjects) {
            if(shipObjects[object].style.backgroundColor == "grey") {
                shipObjects[object].style.backgroundColor = ""
            }
            else if(shipObjects[object].style.backgroundColor == "") {
                shipObjects[object].style.backgroundColor = "grey"
            }
        }

    }

    submitShipPlacement(event) {
        if(this.placementShips.length > 0) {
            let element = document.getElementById(event.target.id)
            let xCord = element.id.slice(0,1)
            let yCord = element.id.slice(1,2)
            if((Number(yCord) + this.placementShips[0].getLength()) > 10) return console.log("Cant Place Boat Here.")
            this.placementShips[0].createShipLocations(xCord,yCord)
            for(let location in this.placementShips[0].getLocations()) {
                if(document.getElementById(this.placementShips[0].getLocations()[location] + this.player.getOwner()).style.backgroundColor == "green") {
                    return console.log("Cant Place Boat Here.")
                }
            }
            this.placementShips.shift()
            this.showShips()
            if(this.placementShips[0] != null) this.gameStatus.textContent = this.player.getName() + " Place Your " + this.placementShips[0].getName()
            else {
                this.gameStatus.textContent = ""
                this.generateGameBoard()
                this.showShips()
                this.forceThisBoardTurn()
            } 
        }
    }

    attackLocation(position) {
        //Search Through All Ship Coordinates and check if we hit a ship
        for(let ship in this.ships) {
            if(this.ships[ship].isShipSunk()) {}
            else {
                for(let object in this.ships[ship].getLocations()) {
                    let id = this.ships[ship].getLocations()[object]
                    if(position == id) {
                        this.ships[ship].takeHit()
                        if(this.ships[ship].isShipSunk()) {
                            for(let object in this.ships[ship].getLocations()) {
                                let id = this.ships[ship].getLocations()[object] + this.player.getOwner();
                                if(document.getElementById(id) != null) {
                                    let element = document.getElementById(id)
                                    element.style.backgroundColor = "green"
                                }
                            }
                        }
                        return true
                    }
                }
            }
        }
        return false
    }

    createNewHitImage(element, hitShip) {
        const newHit = document.createElement('img')
        newHit.src = hitShip ? hitIMG : missIMG
        element.appendChild(newHit)
    }

    receiveAttack(event) {
        let element = document.getElementById(event.target.id)
        if(element != null) {
            let position = event.target.id.slice(0,2)
            if(this.opponent.getTurnStatus() === false) return console.log("Cant Attack Your Board")
            else {
                const didWeHitAShip = this.attackLocation(position)
                this.createNewHitImage(element,didWeHitAShip)
                element.className = "row hit"
                this.forceThisBoardTurn()
                if(this.isFleetDestroyed() == true) {
                    console.log(this.player.getName() + " has lost all of their fleet!")
                    this.player.disableAttacks()
                    this.opponent.disableAttacks()
                    this.gameStatus.textContent = this.player.getName() + " has lost all of their Ships!\r\n" + this.opponent.getName() + " is the Winner!"
                }
                else this.receiveComputerAttack()
                element.removeEventListener('click', this.attackHandler)
            }
        }
    }

    receiveComputerAttack() {
        let rndInt = this.randomIntFromInterval(0,this.gameBoardObjects.length-1)
        let element = document.getElementById(this.gameBoardObjects[rndInt].id + this.opponent.getOwner())
        if(element != null) {
            if(this.opponent.getTurnStatus() === true) return console.log("Cant Attack")
            else {
                const didWeHitAShip = this.opponentGameBoard.attackLocation(this.gameBoardObjects[rndInt].id)
                this.createNewHitImage(element,didWeHitAShip)
                this.gameBoardObjects.splice(rndInt,1)
                this.forceThisBoardTurn()
                if(this.opponentGameBoard.isFleetDestroyed() == true) {
                    this.player.disableAttacks()
                    this.opponent.disableAttacks()
                    this.gameStatus.textContent = this.opponent.getName() + " has lost all of their Ships!\r\n" + this.player.getName() + " is the Winner!"
                }
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
        return count >= 5 ? true : false
    }

    assignRandomShips() {
        for(let ship in this.ships) {
            while(this.ships[ship].shipLocations.length == 0) {
                let rndIntX = this.randomIntFromInterval(0,9)
                let rndIntY = this.randomIntFromInterval(0,9)
                let ctn = 0
                if((rndIntY + this.ships[ship].length) <=10) {
                    if(this.gameBoardObjects[Number(rndIntX.toString() + rndIntY.toString())].hasShip == false && 
                    this.gameBoardObjects[Number(rndIntX.toString() + rndIntY.toString()) + this.ships[ship].length].hasShip == false) {
                        for(let i = 0; i < this.ships[ship].length; i++) {
                            this.gameBoardObjects[Number(rndIntX.toString() + rndIntY.toString()) + i].hasShip = true
                        }
                        this.ships[ship].createShipLocations(rndIntX,rndIntY)
                        //console.log(this.gameBoardObjects)
                    }
                }
            }
            //this.showShips()
        }
        
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    } 

    showShips() {
        for(let ship in this.ships) {
            for(let object in this.ships[ship].getLocations()) {
                let id = this.ships[ship].getLocations()[object] + this.player.getOwner();
                if(document.getElementById(id) != null) {
                    let element = document.getElementById(id)
                    element.style.backgroundColor = "green"
                }
            }
        }
    }

    forceThisBoardTurn() {
        this.player.toggleTurn() // Enables the Receivers Turn to Attack their opponent
        this.opponent.toggleTurn() //Disables the Attackers Turn since they attacked
    }
}