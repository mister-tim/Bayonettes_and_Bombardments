class Square{
    constructor(terrain, row, col){
        this.terrain = terrain
        this.occupant = null
        this.reinforced = false
        this.owner = "empty"
        this.effect = effects[terrain]
        this.position = {row: row, col: col}
    }
}

const effects = {
    Mountain: "Difficult",
    Forest: "Cover",
    River: "Blocking",
    Grassland: "Flat"
}

export default Square;