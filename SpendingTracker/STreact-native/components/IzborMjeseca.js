import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

export default class IzborPrikazaStatistike extends React.Component {
    render() {
      return (
        <View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Januar"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Februar"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Mart"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="April"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Maj"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Juni"/>
                </View>    
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Juli"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="August"/>
                </View>    
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Septembar"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Oktobar"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Novembar"/>
                </View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('IzborPrikazaStatistike')} title="Decembar"/>
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