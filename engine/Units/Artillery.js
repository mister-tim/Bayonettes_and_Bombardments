import Unit from './Unit';

class Artillery extends Unit{
    constructor(owner){
        super(80, 2, 10, owner)
        this.GunCondition = 100
        this.type = "Artillery"
    }
}

export default Artillery;