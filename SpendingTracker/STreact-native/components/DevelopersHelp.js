import React, { Component } from 'react';
import {Text, Button, View} from 'react-native';

export class DevelopersHelp extends Component{
    render(){
        return (
            <View>
            <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>SpendingTracker pomoć za razvojni tim</Text>
           
            <Text style={{color: '#343C47', fontSize:15}}>
            {"\n"}
                Components folder:{"\n"}
                DevelopersHelp.js - pomoć razvojnom timu {"\n"}
                Home.js - početna stranica
            </Text>
            </View>
        );
    }
}

export default DevelopersHelp; 