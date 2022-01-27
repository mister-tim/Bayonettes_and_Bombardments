import React, { Component } from "react";
import { 
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image
} from "react-native";
import CardDisplay from "./CardDisplay";

class UnitCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.target) return(
            <View style={styles.card}>
                <CardDisplay target={this.props.target.occupant} />
                <CardDisplay target={this.props.target} />
            </View>
        )
        else return (
            <View style={styles.card}>
                <CardDisplay target={null} />
                <CardDisplay target={null} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        height: (Dimensions.get('window').width)/3,
        backgroundColor: "#C5C9A4",
        flexDirection: "row"
    }
})

export default UnitCard