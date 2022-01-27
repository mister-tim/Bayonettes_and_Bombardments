import Infantry from "./Infantry";
import Artillery from "./Artillery";
import Cavalry from "./Cavalry";
import Commander from "./Commander";

class Army{
    constructor(){
        this.broken = false
        this.commander
        this.infantry = []
        this.cavalry = []
        this.artillery = []
        for(let i=0; i<arguments.length; i++){
            if(arguments[i] instanceof Commander) this.commander = arguments[i]
            else this.addUnit(arguments[i])
        }
    }
    addUnit(unit){
        if(unit instanceof Infantry) this.infantry.push(unit)
        else if(unit instanceof Cavalry) this.cavalry.push(unit)
        else if(unit instanceof Artillery) this.artillery.push(unit)
    }
}

export default Army;