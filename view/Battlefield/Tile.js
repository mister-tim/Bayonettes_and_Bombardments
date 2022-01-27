import React, {Component} from "react";
import {
    View,
    Image,
    StyleSheet,
    Touchable,
    TouchableWithoutFeedback
} from "react-native"

class Tile extends Component{
    constructor(props){
        super(props)
        this.terrain = tiles[this.props.square.terrain]
    }

    pickStyle(owner){
        if(owner === "empty" && this.props.inrange) return "inrangetile"
        return owner + "tile"
    }
    select(){
        this.props.select(this.props.square)
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => this.select()}>
                <View style={styles[this.pickStyle(this.props.square.owner)]}>
                    <Image source={this.terrain} style={styles.terrain}/>
                </View>                
            </TouchableWithoutFeedback>
        );
    }
}

const tiles = {
    Grassland: require('./images/grassland.png'),
    Mountain: require('./images/mountains.png'),
    Forest: require('./images/forest.png'),
    River: require('./images/river.png')
}

const icons = {

}

const styles = StyleSheet.create({
    emptytile: {
        flex: 1
    },
    playertile: {
        borderWidth: 1,
        borderColor: "#3333FF",
        flex: 1
    },
    nonplayertile: {
        borderWidth: 1,
        borderColor: "#FF0000",
        flex: 1
    },
    inrangetile:{
        borderWidth:1,
        borderColor: "#F2EF16",
        flex: 1
    },
    terrain: {
        width: '100%',
        height: '100%'
    }
})

export default Tile;