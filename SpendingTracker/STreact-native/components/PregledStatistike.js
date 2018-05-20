import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

export default class PregledStatistike extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        historija: [
            {
                value: 0,
                label: ' '
            }
        ]
    };
  }
  componentDidMount(){
    //192.168.1.5
    fetch('http://192.168.1.7:8081/api/vratiSveRacune/neko@nekoo.com/lozinka123')
    .then(response => response.json())
    .then((data) =>  {
        this.setState({historija: data});
    }, (error) => {
        this.setState({
            historija: [
                {
                    value: 0,
                    label: ' ',
                }
            ]
        });
    }
    )
  }
    render() {
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
                this.props.navigation.navigate('IzborPrikazaStatistike', {historija: this.state.historija})} title="Godisnji"/>
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button}  onPress={()=>
                this.props.navigation.navigate('IzborMjeseca')} title="Mjesecni"/>   
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
    },
    button:{
      backgroundColor:'#343C47',
      color:'white',
      width:320,
      marginBottom:5
  },
  imagecontainer: {
    alignItems: 'center'
  },
  });
  