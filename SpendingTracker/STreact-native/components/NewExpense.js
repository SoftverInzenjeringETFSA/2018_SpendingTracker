import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Picker } from 'react-native';

export class  NewExpense extends Component{
    render(){
        return (
            <View >
              <View style={styles.imagecontainer}>
              <Image
                  style={{width: 200, height: 100}}
                  source={require('../img/money.png')}
                    />
                    <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>Novi trošak</Text>
                   </View>
                   <View style={styles.contentcontainer}>
                    
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Iznos</Text>
                    <TextInput
                  style={styles.input}></TextInput></View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Picker
                    style={{ height: 50, width: 100,color:"#343C47" }}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker></View>
            </View>
            <View style={styles.buttonContainer}>
                   <Button color="#343C47" style={styles.button} title="Unesi"/>   
                    </View>
                  </View>
                );
              }
            }
            
            const dugmad = StyleSheet.create({
              container:{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 45,
                borderColor: "transparent",
               borderWidth: 0,
                borderRadius: 5
              }
            });
            
            const styles = StyleSheet.create({
              imagecontainer: {
                alignItems: 'center'
              },
              contentcontainer:{
                alignItems: 'flex-start',
                padding: 20
              },
              buttonContainer:{
                marginBottom:8
            },
            button:{
              backgroundColor:'#343C47',
              color:'white',
              width:320,
              marginBottom:5
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
                marginLeft: 10,
                backgroundColor: 'transparent',
                width:200
              }
            });
export default NewExpense;