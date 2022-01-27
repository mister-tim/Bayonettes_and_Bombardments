import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MenuButton from './MenuButton'

class MainMenu extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <MenuButton handler={this.props.navHandler} text="Campaign"/>
            <MenuButton handler={this.props.navHandler} text="Battlefield"/>
            <MenuButton handler={this.props.navHandler} text="Settings"/>
            </>
        );
    }
}

const styles = StyleSheet.create({

});

export default MainMenu;