import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Picker } from 'react-native';
import Toast from 'react-native-simple-toast';

export default class ObavjestOLimitu extends Component{
    
    constructor(props){
        super(props);
        this.state={
            trosak: props.trosak
        }
    }

    componentDidMount(){
        fetch('http://192.168.2.104192.168.1.53:8081/api/vratiKorisnika/neko@nekoo.com/lozinka123')
        .then(response => response.json())
        .then(data => this.setState( data, function(){
            
            if(this.state.trosak+data.mjesecniPrihod>data.troskovniLimit){
                Toast.show("Dosegnut limit", Toast.LONG);    
            }
        } ))  
      }

    render() {
        return (
            <View>
                
            </View>
        );
}
}