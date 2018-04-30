import React, { Component } from 'react';
import {Text, Button, View} from 'react-native';

export class DevelopersHelp extends Component{
 

    render(){
        return (
            <View>
            <Text>SpendingTracker pomoć za razvojni tim</Text>
           
            <Text>
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