import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export class  NewExpense extends Component{
    render(){
        return (
            <View >
              <View style={styles.imagecontainer}>
              <Image
                  style={{width: 200, height: 100}}
                  source={require('../img/money.png')}
                    />
                    <Text style={{color: '#1a1a1a', fontWeight: 'bold', fontSize:25}}>Novi trošak</Text>
                   </View>
                   <View style={styles.contentcontainer}>
                    
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#1a1a1a', fontSize:15}}>Iznos</Text>
                    <TextInput
                  style={styles.input}></TextInput></View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#1a1a1a', fontSize:15}}>Kategorija</Text>
                    <TextInput
                    style={styles.input}></TextInput></View>
                   <Button
              title="UNESI"
             loading
              loadingProps={{ size: "large", color: '#343C47' }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: '#343C47',
                width: 1300,
                height: 245,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
             
            />
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
              /*  flex: 1,
                backgroundColor: '#F0FFFF',*/
                alignItems: 'center'

               /* justifyContent: 'center',*/
              },
              contentcontainer:{
                alignItems: 'flex-start',
                padding: 20
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
export default NewExpense;