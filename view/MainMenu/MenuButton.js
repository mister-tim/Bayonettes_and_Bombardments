import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class MenuButton extends Component{
    constructor(props){
        super(props)
        this.text = this.props.text
    }
    handler(){
        this.props.handler(this.props.text)
    }
    render(){
        return(
            <View style={styles.button} onTouchEnd={() => this.handler()}>
                <Text style={styles.buttonTxt} >{this.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        backgroundColor: '#efefef',
        borderRadius: 50,
        padding: 5,
        margin: 5,
        borderWidth: 5
    },
    buttonTxt: {
        color: '#0a0a0a',
        fontSize: 18,
        fontWeight:'400',
        textAlign: 'center'
    }
})

export default MenuButton;