export default class Player {
    constructor(name) {
        this.name = name
        this.turnStatus = false
    }

    getName() {
        return this.name
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