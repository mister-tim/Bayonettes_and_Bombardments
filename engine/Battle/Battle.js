import Army from '../Units/Army'
import Cavalry from '../Units/Cavalry'
import Infantry from '../Units/Infantry'
import Artillery from '../Units/Artillery'
import Commander from '../Units/Commander'

class Battle{
    constructor(player, nonplayer, map, role){
        this.players = []
        if(role === "Attacker") this.players.push(player, nonplayer)
        else this.players.push(nonplayer, player)
        this.map = map
        //Begin Garbage test code.
        this.tplayers= [new Army(new Commander("player")), new Army(new Commander("nonplayer"))]
        this.tplayers[0].addUnit(new Artillery("player"))
        this.tplayers[0].addUnit(new Infantry("player"))
        this.tplayers[0].addUnit(new Cavalry("player"))
        this.tplayers[1].addUnit(new Artillery("nonplayer"))
        this.tplayers[1].addUnit(new Infantry("nonplayer"))
        this.tplayers[1].addUnit(new Cavalry("nonplayer"))
        //End Garbage test code.
        this.setupArmies()
    }
    mainLoop(){
        //Control the battle state and check for victory conditions.
    }
    moveUnit(origin, destination){
        this.map.placeUnit(this.map.removeUnit(origin), destination)
    }
    setupArmies(){
        //Place armies onto the battlemap, then begin the main loop.
        //End Goal: Player chooses units from an 'Army Card' and places them onto the map. Then the AI 'does the same'.
        //Temp Goal: Place both armies onto the map automatically.
        //Either way then move onto the main loop.
        //Begin Garbage Test Code.
        for(let i=0; i<2; i++){
            let col = i*9
            this.map.placeUnit(this.tplayers[i].commander, [3, col])
            this.map.placeUnit(this.tplayers[i].infantry[0], [4, col])
            this.map.placeUnit(this.tplayers[i].artillery[0], [5, col])
            this.map.placeUnit(this.tplayers[i].cavalry[0], [6, col])
        }
        //End Garbage Test Code.
        this.mainLoop()
    }
}

const states = {
    SetUp: "Setup Armies",
    AttackerTurn: "Attacker's Turn",
    DefenderTurn: "Defender's Turn"
}

export default Battle;