import Square from './Square';

class Battlemap{
    constructor(layout){
        this.rows = []
        for(let i=0; i<10;i++) this.rows.push([])
        this.parseLayout(layout)
    }

    checkSquare(square){
        if(!square) return true
        if(square.effect === "Blocking" || square.occupant) return true
        return false
    }
    findMovement(unit){
        let options = []
        //positive loop, start at 0
        for(let row=0; row<unit.movement; row++){
            if(unit.position.row + row > 9) break
            if(row && this.checkSquare(this.rows[unit.position.row + row][unit.position.col])) break
            for(let col=0; col<unit.movement-row; col++){
                if(row === 0 && col === 0) continue
                if(this.checkSquare(this.rows[unit.position.row + row][unit.position.col + col])) break
                //options.push(this.rows[unit.position.row + row][unit.position.col + col])
                options.push({row: unit.position.row + row, col: unit.position.col + col})
            }
        }
        //negative loop, start at 1
        for(let row=0; row<unit.movement; row++){
            if(unit.position.row - row < 0) break
            if(row && this.checkSquare(this.rows[unit.position.row - row][unit.position.col])) break
            for(let col=0; col<unit.movement-row; col++){
                console.log("R: " + row)
                console.log("C: " + col)
                if(row === 0 && col === 0) continue
                if(this.checkSquare(this.rows[unit.position.row - row][unit.position.col - col])) break
                //options.push(this.rows[unit.position.row - row][unit.position.col - col])
                options.push({row: unit.position.row - row, col: unit.position.col - col})
            }
            console.log("End of Row.")
        }
        console.log(options)
        return options
    }
    _findMovement(square, movement){
        //#WRONG
        if(square.position.row)
            if(!this.checkSquare(this.rows[square.position.row -1][square.position.col])){
                this._findMovement(this.rows[square.position.row -1][square.position.col])
            }
        if(square.position.col){

        }
    }
    parseLayout(layout){
        for(let r=0; r<layout.length; r++){
            for(let c=0; c<layout[r].length; c++) this.rows[r].push(new Square(terrains[layout[r][c]], r, c))
        }
    }
    placeUnit(unit, coords){
        unit.updatePosition(coords[0], coords[1])
        this.rows[coords[0]][coords[1]].occupant = unit
        this.rows[coords[0]][coords[1]].owner = unit.owner
    }
    removeUnit(coords){
        let unit = this.rows[coords[0]][coords[1]].occupant
        this.rows[coords[0]][coords[1]].occupant = null
        this.rows[coords[0]][coords[1]].owner = "empty"
        return unit
    }
}

const terrains = {
    G: "Grassland",
    M: "Mountain",
    F: "Forest",
    R: "River"
}

export default Battlemap;