import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Title extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={styles.titlebar} >
                <Text style={styles.title} >Bayonettes and Bombardments</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    titlebar: {
        flex: 4
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    }
});

export default Title;