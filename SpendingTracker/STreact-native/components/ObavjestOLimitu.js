import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Picker } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
import Toast from 'react-native-simple-toast';

export default class ObavjestOLimitu extends Component{
    
    constructor(props){
        super(props);
        this.state={
            trosak: props.trosak
        }
    }

    componentDidMount(){
        fetch('http://192.168.1.7:8081/api/vratiKorisnika/neko@nekoo.com/lozinka123')
        .then(response => response.json())
        .then(data => this.setState( data, function(){
            Toast.show("Dosegnut limit", Toast.LONG);
            if(this.state.trosak+data.mjesecniprihod<data.troskovniLimit){
                
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