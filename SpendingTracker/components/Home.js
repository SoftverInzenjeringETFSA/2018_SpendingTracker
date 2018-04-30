import React, { Component } from 'react';
import {Text, Button, View} from 'react-native';

export class Home extends Component{
 

    render(){
        return (
            <View>
            <Text>SpendingTracker</Text>
            <Button color="#343C47" onPress={()=>
            this.props.navigation.navigate('DevelopersHelp')} title="Pomoć za razvojni tim"/>    
            </View>
                  
           
        );
    }
}

export default Home;