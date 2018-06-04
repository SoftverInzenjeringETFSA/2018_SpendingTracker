import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import ipConfig from '../config.json';
export default class IzborPrikazaStatistike extends React.Component {
  
    render() {
    const { navigation } = this.props;
    const historija = navigation.getParam('historija', '');
      return (
        <View>
            <View style={styles.imagecontainer}>
                <Image
                    style={{width: 350, height: 150}}
                    source={require('../images/statistics.png')}
                  />
            </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('BarChart', {historija: historija})} title="Bar Chart"/>
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button}  onPress={()=>
                this.props.navigation.navigate('LineChart', {historija: historija})} title="Line Chart"/>   
                </View> 
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button}  onPress={()=>
                this.props.navigation.navigate('PieChart', {historija: historija})} title="Pie Chart"/>   
                </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0FFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer:{
        marginBottom:8,
        marginTop: 8
    },   button:{
      backgroundColor:'#343C47',
      color:'white',
      width:320,
      marginBottom:5
  },
  imagecontainer: {
    alignItems: 'center'
  },
  });