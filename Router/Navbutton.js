import React, {Component} from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

class NavButton extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={styles.button} >
            <Text style={styles.symbol} >&#8801;</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fafafa",
        flex: 1
    },
    symbol: {
        fontSize: 18,
        fontWeight: '400',
        color: "#020202",
        textAlign: 'center'
    }
})

export default NavButton;