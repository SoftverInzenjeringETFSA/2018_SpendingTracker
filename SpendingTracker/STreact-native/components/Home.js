import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

export class Home extends Component{
 

    render(){
        return (
            <View>
                <View style={styles.imagecontainer}>
                <Text>Trenutno stanje</Text>
                </View>
                <View style={styles.contentcontainer}>
                <View style={styles.costcontainer}>
                <Text>300</Text>
                </View>
                </View>
                <View style={styles.contentcontainer}>
                <Button color="#343C47" onPress={()=>
                this.props.navigation.navigate('DevelopersHelp')} title="Pomoć za razvojni tim"/>
                <Button color="#343C47" onPress={()=>
                this.props.navigation.navigate('NewExpense')} title="Novi trosak"/>   
                </View>
            
             
               
            </View>
                  
           
        );
    }
}
const styles = StyleSheet.create({
    imagecontainer: {
      alignItems: 'center'
    },
    contentcontainer:{
      alignItems: 'flex-start',
      padding: 20,
      width:500
    },
   costcontainer:{
       width:320,
       height:220,
        alignItems: 'center',
        padding: 20,
        borderWidth: 2,
        backgroundColor:'#6FAD4A',
        borderColor:  '#343C47',
        justifyContent:'center'
      },
    container: {
      flex: 1,
      width:200,
      backgroundColor: '#F0FFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      height:35,
      marginBottom:10,
      backgroundColor: 'transparent',
      width:300
    }
  });

export default Home; 