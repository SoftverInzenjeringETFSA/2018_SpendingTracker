import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PregledStatistike from './components/PregledStatistike';
import DevelopersHelp from './components/DevelopersHelp';
import Home from './components/Home';
import NewExpense from './components/NewExpense';
import IzborPrikazaStatistike from './components/IzborPrikazaStatistike';
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import PieChart from './components/charts/PieChart';
import PregledKategorija from './components/PregledKategorija';
import unoskategorijzacija from './components/unoskategorizacija'
import Login from './components/Login';
import {Navigation, StackNavigator} from 'react-navigation';

const AppNavigator = StackNavigator({
    Login: {screen: Login},
    Home: {screen: Home},
    DevelopersHelp: {screen: DevelopersHelp},
    NewExpense: {screen: NewExpense},
    PregledStatistike: {screen: PregledStatistike},
    IzborPrikazaStatistike: {screen: IzborPrikazaStatistike},
    BarChart: {screen: BarChart},
    LineChart: {screen: LineChart},
    PieChart: {screen: PieChart},
    PregledKategorija: {screen: PregledKategorija},
    unoskategorijzacija: {screen: unoskategorijzacija}
    
  });
export default class App extends React.Component {
  render() {
    return ( 
      <AppNavigator/>
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