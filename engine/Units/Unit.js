class Unit {
    constructor(men, speed, range, owner){
        this.owner = owner
        this.totalMen = men
        this.currentMen = men
        this.speed = speed
        this.movement = speed
        this.range = range
        this.morale = 75
        this.condition = 100
        this.experience = 0
        this.position = {row:null, col:null}
    }
    updatePosition(row, col){
        this.position.row = row
        this.position.col = col
    }
}

export default Unit;
