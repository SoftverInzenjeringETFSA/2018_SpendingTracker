/**
 * Sample React Native App 
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DevelopersHelp from './components/DeveloersHelp';
import Home from './components/Home';
import {Navigation, StackNavigator} from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = StackNavigator({
  Home: {screen: Home},
  DevelopersHelp: {screen: DevelopersHelp}
  
});
export default class App extends Component {
  render() {
    return (
    
      <AppNavigator/>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F1F1',
  }
});
