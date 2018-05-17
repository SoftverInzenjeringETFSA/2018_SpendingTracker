import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarChart from './components/charts/Barchart';
import PieChart from './components/charts/PieChart';
import LineChart from './components/charts/LineChart';
import DevelopersHelp from './components/DevelopersHelp';
import Home from './components/Home';
import NewExpense from './components/NewExpense';
import {Navigation, StackNavigator} from 'react-navigation';

const AppNavigator = StackNavigator({
    Home: {screen: Home},
    DevelopersHelp: {screen: DevelopersHelp},
    NewExpense: {screen: NewExpense}
    
  });
export default class App extends React.Component {
  render() {
    return (
      
      <AppNavigator/>
      /*<View>
        <LineChart/>
      </View>*/
           
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500
  },
});
