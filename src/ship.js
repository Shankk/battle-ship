export default class Ship {
    constructor(name,length, xCord, yCord) {
        this.name = name
        this.length = length
        this.xCord = xCord
        this.yCord = yCord
        this.hitCount = 0
        this.isSunk = false
        this.shipObjects = []
        for(let i = 0; i < this.length; i++) {
            this.shipObjects.push(xCord + "" + (yCord + i))
        }
        console.log(name + " " + this.shipObjects)
    }

    getName() {
        return this.name
    }

    getObjects() {
        return this.shipObjects
    }

    getX() {
        return this.xCord
    }

    getY() {
        return this.yCord
    }

    getLength() {
        return this.length
    }

    takeHit () {
        this.hitCount++
    }

    isShipSunk() {
        if(this.hitCount >= this.length) this.isSunk = true
        if(this.isSunk) console.log(this.name + " is Destroyed")
        return this.isSunk
    }
}