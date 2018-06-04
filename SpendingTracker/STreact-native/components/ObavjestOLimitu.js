import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Picker } from 'react-native';
import Toast from 'react-native-simple-toast';
import ipConfig from '../config.json';
export default class ObavjestOLimitu extends Component{
    /*
    constructor(props){
        super(props);
        this.state={
            trosak: props.trosak
        }
    }
    */
    
    componentDidMount(){
        Toast.show("Dosegnuli ste limit",Toast.LONG);
    }

    render() {
        return (
            <View>
                
            </View>
        );
}
}