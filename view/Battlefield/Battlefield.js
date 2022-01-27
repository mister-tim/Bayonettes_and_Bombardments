import React, {Component} from "react";
import { 
    StyleSheet,
    View,
    Text,
    Dimensions
} from "react-native";
import Tile from "./Tile";
import UnitCard from "./UnitCard";
import Pathfinder from "./Pathfinder";

class Battlefield extends Component{
    constructor(props){
        super(props)
        this.state = {battle: this.props.game.battle, selectedUnit: null, selectedSquare: null, unitRange: null}
        this.selectSquare = this.selectSquare.bind(this)
        this.pathfinder = new Pathfinder()
    }

    componentDidUpdate(prevprops){
        console.log(this.state.unitRange)
    }

    selectSquare(square){
        this.setState({selectedUnit: square.occupant, selectedSquare: square})
        if(square.occupant) this.setState({unitRange: this.pathfinder.findMovement(square.occupant, this.state.battle.map)})
        else this.setState({unitRange: null})
    }
    renderGrid(){
        let rkey = 0, ckey = 0 
        return this.state.battle.map.rows.map((row) =>
            <View key={rkey++} style={styles.row}>{row.map((col) =>
                this.renderTile(col, ckey++))}</View>)
    }
    renderTile(square, key){
        if(this.state.unitRange) 
            return <Tile key={key} inrange={this.state.unitRange.includes(square.position)} square={square} select={this.selectSquare}></Tile>
        else return <Tile key={key} inrange={false} square={square} select={this.selectSquare}></Tile>
    }
    render(){
        return(
            <>
            <View style={styles.grid}>
                {this.renderGrid()}
            </View>
            <UnitCard target={this.state.selectedSquare} />
            </>
        )
    }
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'column',
        height: Dimensions.get('window').width
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default Battlefield;