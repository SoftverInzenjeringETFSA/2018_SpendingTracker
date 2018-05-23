import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, Picker} from 'react-native';

export default class IzborPrikazaStatistike extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            historija: [
                {
                    value: 0,
                    label: ' '
                }
            ],
            mjesec: 'Januar',
            pritisnuto: false
        };
      }
      onPressButton = () =>{
        //192.168.1.5
        this.setState({pritisnuto:true});
        this.componentDidMount();
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.historija !== this.state.historija)
            if(this.state.pritisnuto === true) {
                this.setState({pritisnuto:false});
                this.props.navigation.navigate('IzborPrikazaStatistike', {historija: this.state.historija});
            }
    }
    componentDidMount() {
        fetch('http://192.168.1.5:8081/api/vratiSveRacuneMjesec/' + this.state.mjesec, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
                 body: JSON.stringify({
                 email: this.props.navigation.state.params.email,
                 lozinka: this.props.navigation.state.params.lozinka
            }),
          })
        .then(response => response.json())
        .then((data) =>  {
            this.setState({historija: data});
        }, (error) => {
            this.setState({
                historija: [
                    {
                        value: 0,
                        label: 'amila',
                    }
                ]
            });
        }
        );
        console.log(this.state.historija);
    }
    render() {
      return (
        <View>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Picker
                    selectedValue={this.state.mjesec}
                    onValueChange={(itemValue, itemIndex) => this.setState({mjesec: itemValue})}
                    style={{ height: 50, width: 200,color:"#343C47" }}>
                    <Picker.Item label="Januar" value="0" />
                    <Picker.Item label="Februar" value="1" />
                    <Picker.Item label="Mart" value="2" />
                    <Picker.Item label="April" value="3" />
                    <Picker.Item label="Maj" value="4" />
                    <Picker.Item label="Juni" value="5" />
                    <Picker.Item label="Juli" value="6" />
                    <Picker.Item label="August" value="7" />
                    <Picker.Item label="Sepetembar" value="8" />
                    <Picker.Item label="Oktobar" value="9" />
                    <Picker.Item label="Novembar" value="10" />
                    <Picker.Item label="Decembar" value="11" />
                  </Picker></View>
            <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={this.onPressButton} title="Potvrdi"/>
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