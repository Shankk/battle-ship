export default class Player {
    constructor(name, owner) {
        this.ownerShip = owner
        this.name = name
        this.turnStatus = false
    }

    getOwner() {
        return this.ownerShip
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getTurnStatus() {
        return this.turnStatus
    }

    toggleTurn() {
        this.turnStatus = !this.turnStatus
    }

    disableAttacks() {
        this.turnStatus = false
    }
}