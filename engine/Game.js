import Battle from "./Battle/Battle";
import Battlemap from "./BattleMaps/BattleMap";

const maps = require('../engine/BattleMaps/Layouts.json')

class Game{
    constructor(){
        this.campaign
        this.battle
    }
    startBattle(){
        let map = new Battlemap(maps["New York"])
        this.battle= new Battle({}, {}, map, "Attacker")
    }
}

export default Game;