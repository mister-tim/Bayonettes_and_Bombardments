import React, { Component } from "react";
import { 
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import Unit from "../../engine/Units/Unit"
import Square from "../../engine/BattleMaps/Square";


class CardDisplay extends Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.target) return (
                <View style={styles.display}>
                    {this.renderHeader(this.props.target)}
                    {this.renderBody(this.props.target)}
                </View>
            )
        else return(
                <View style={styles.display}>
                    <Text>No selection.</Text>
                </View>
            )
    }
    renderBody(target){
        if(target instanceof Square){
            return(
                <View style={styles.body}>
                    <Text style={styles.text}>Effects: {target.effect}</Text>
                </View>
            )
        } else{
            return(
                <View style={styles.body}>
                    <View style={{flex:1}}>
                        <Text style={styles.text}>Men: {target.currentMen}</Text>
                        <Text style={styles.text}>Morale: {target.morale}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.text}>Condition: {target.condition}</Text>
                        <Text style={styles.text}>Experience: {target.experience}</Text>
                    </View>
                </View>
            )
        }
    }
    renderHeader(target){
        return(
            <View style={styles.header}>
                <View style={{flex: 1}}>
                    <Image source={thumbnails[target.terrain] || thumbnails["Grassland"]} style={styles.thumbnail}/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.text}>{target.terrain || target.type}</Text>
                </View>
            </View>
        )
    }
}

const thumbnails = {
    Grassland: require('./grassland.png'),
    Mountain: require('./mountains.png'),
    Forest: require('./forest.png'),
    River: require('./river.png')
}

const styles = StyleSheet.create({
    display:{
        flex: 1,
        borderWidth:1,
        borderColor: "#54E8CF",
        flexDirection: "column"
    },
    text: {
        color: "#000000",
        flex: 1,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#54E8CF"
    },
    header: {
        flex: 2,
        flexDirection: "row"
    },
    thumbnail: {
        width: "100%",
        height: "100%"
    },
    body:{
        flex: 3,
        flexDirection: "row"
    }
})

export default CardDisplay