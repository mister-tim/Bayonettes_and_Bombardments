import Cavalry from './Cavalry';

class Commander extends Cavalry{
    constructor(owner){
        super(owner)
        this.Command = 1
        this.type = "Commander"
    }
}

export default Commander;