export default class Player {
    constructor(name) {
        this.name = name
        this.ourTurn = false
    }

    getName() {
        return this.name
    }

    getTurnStatus() {
        return this.ourTurn
    }

    toggleTurn() {
        this.ourTurn = !this.ourTurn
        if(this.ourTurn) return console.log("Player " + this.name + "'s Turn!")
        
    }
}