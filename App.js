import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Router from './Router/Router'
import MainMenu from './view/MainMenu/MainMenu'

const App: () => Node = () => {
    return(
        <SafeAreaView>
            <Router />
        </SafeAreaView>
    );
};

export default App;