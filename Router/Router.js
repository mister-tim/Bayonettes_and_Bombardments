import React, { Component } from "react";
import { StyleSheet, View } from 'react-native'
import Title from "./Title";
import MainMenu from "../view/MainMenu/MainMenu";
import Campaign from "../view/Campaign/Campaign";
import Battlefield from "../view/Battlefield/Battlefield";
import NavButton from "./Navbutton";
import Game from "../engine/Game"

const maps = require('../engine/BattleMaps/Layouts.json')

class Router extends Component{
    constructor(props){
        super(props)
        if(this.state == null) this.state = {locale: "Main"}
        this.navHandler = this.navHandler.bind(this)
        this.game = new Game()

        this.RouterState = {
            Main: <MainMenu navHandler={this.navHandler}/>,
            Campaign: <Campaign />,
            Battlefield: <Battlefield game={this.game} />,
            //Settings: <Settings/>
        }
    }
    navHandler(location){
        if(location === "Battlefield") this.game.startBattle()
        this.setState({locale: location})
    }
    renderView(){
        return this.RouterState[this.state.locale]
    }
    render(){
        return(
            <View style={styles.window}>
            <View style={styles.titlebar} >
                <NavButton />
                <Title />   
            </View>
            <View style={styles.display}>
                {this.renderView()}
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    window:{
        height:'100%'
    },
    titlebar: {
        flexDirection:'row',
        flex: 1
    },
    display: {
        flex: 14
    }
})

export default Router;