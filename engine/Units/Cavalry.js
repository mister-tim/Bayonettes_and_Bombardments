import Unit from './Unit';

class Cavalry extends Unit{
    constructor(owner){
        super(250, 6, 1, owner)
        this.HorseCondition = 100
        this.type = "Cavalry"
    }
}

export default Cavalry;