class Pathfinder{
    constructor(){
        this.accessable = []
        this.targetable = []
        this.searched = new Map()
        this.queued = new Map()
    }

    addToQueue(position, movement){
        this.searched.set(position, movement)
        this.queued.set(position, movement)
    }
    checkBorders(position, movement){
        if(movement){
            movement -= 1
            if(position.row) this.checkSearched({row: position.row - 1, col: position.col}, movement)
            if(position.row < 9) this.checkSearched({row: position.row + 1, col: position.col}, movement)
            if(position.col) this.checkSearched({row: position.row, col: position.col - 1}, movement)
            if(position.col < 9) this.checkSearched({row: position.row, col: position.col + 1}, movement) 
        }
    }
    checkSearched(position, movement){
        //Does this.searched have key position
            //If not addtoqueue(position, movement)
            //If so is this.searched[position] < movement?
                //If not do nothing
                //If so addtoqueue(position, movement)
        if(!this.searched.has(position)) this.addToQueue(position, movement)
        else if(this.searched.get(position) < movement) this.addToQueue(position, movement)
    }
    checkSquare(square, owner, movement){
        //check to see if the square can be occupied, and add it to this.accessable if so
        if(square.effect !== "Blocking"){
            if(!square.occupant) {
                if(!this.accessable.includes(square.position))this.accessable.push(square.position)
                this.checkBorders(square.position, movement)
            } 
            //if not check to see if can be targeted, and add it to this.targetable if so
            else if(square.occupant.owner !== owner){
                if(!this.targetable.includes(square.position)) this.targetable.push(square.position)
            }  
        }
    }
    findMovement(unit, map){
        //reset all of the arrays in this Object
        this.resetAll()
        //Add unit.position to this.searched
        this.searched.set(unit.position, unit.movement)
        //Add the squares surrounding unit.position to this.searched and this.queued
        this.checkBorders(unit.position, unit.movement)
        //continuessly remove the first item in this.queued and run checkSquare on it until this.queued is empty
        while(this.queued.size){
            this.queuePop(unit, map)
        }
        return this.accessable
    }
    queuePop(unit, map){
        //Get the first item in the queue
        let move = this.queued.entries().next().value //[position, movement]
        //Delete it from the queue
        this.queued.delete(move[0])
        //Run checkSquare on it
        this.checkSquare(map.rows[move[0].row][move[0].col], unit.owner, move[1])
    }
    resetAll(){
        this.accessable = []
        this.targetable = []
        this.searched = new Map()
        this.queued = new Map()
    }
}

export default Pathfinder;