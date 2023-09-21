export default class Ship {
    constructor(name,length) {
        this.name = name
        this.length = length
        this.hitCount = 0
        this.isSunk = false
        this.shipLocations = []
    }

    getName() {
        return this.name
    }

    getLocations() {
        return this.shipLocations
    }

    getLength() {
        return this.length
    }

    createShipLocations(xCord,yCord) {
        if((Number(yCord) + this.length) <= 10) 
        {   this.shipLocations = []
            for(let i = 0; i < this.length; i++) {
                this.shipLocations.push(xCord + "" + (Number(yCord) + i))
            }
            return true
        }
        else {
            return false
        }
    }

    takeHit () {
        this.hitCount++
    }

    isShipSunk() {
        if(this.hitCount >= this.length) this.isSunk = true
        return this.isSunk
    }
}