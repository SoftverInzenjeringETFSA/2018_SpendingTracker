import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarChart from './components/charts/Barchart';
import PieChart from './components/charts/PieChart';
import LineChart from './components/charts/LineChart';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <LineChart/>
      </View>
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
