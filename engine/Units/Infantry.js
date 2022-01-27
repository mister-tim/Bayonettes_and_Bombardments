import Unit from './Unit';

class Infantry extends Unit{
    constructor(owner){
        super(500, 3, 1, owner)
        this.type = "Infantry"
    }
}

export default Infantry;