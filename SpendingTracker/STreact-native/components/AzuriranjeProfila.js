import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Picker } from 'react-native';
import Toast from 'react-native-simple-toast';

export class  AzuriranjeProfila extends Component{
  constructor(props){
   
    super(props);
    this.state = { password: '', mjesecniPrihodi:'', limit:'', valuta: '',email: '', brojRacuna:''};

  }

  componentDidMount(){
    fetch('http://192.168.1.7:8081/api/vratiKorisnika/neko@nekoo.com/lozinka123')
    .then(response => response.json())
    .then(data => this.setState({limit: data.troskovniLimit}));
  }

  inputExpense=()=>{
    
  /*  fetch('http://192.168.1.7:8081/api/AzurirajProfil/neko@nekoo.com/lozinka123', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
           body: JSON.stringify({
           kategorije: this.state.category,
           iznos: this.state.value
      }),
      
    });
*/
  }
    render(){
        return (
            <View >
                <View style={styles.contentcontainer}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Password</Text>
                    <TextInput
                      style={{
                        height:35,
                        marginBottom:10,
                        backgroundColor: 'transparent',
                        width:200,
                        marginLeft: 20   
                      }}
                      onChangeText={(value) => this.setState({value})} value={this.state.password}>
                      </TextInput></View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Prihodi</Text>
                    <TextInput
                      style={{
                        height:35,
                        marginBottom:10,
                        backgroundColor: 'transparent',
                        width:200,
                        marginLeft: 38    
                      }}
                      onChangeText={(value) => this.setState({value})} value={this.state.mjesecniPrihodi}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Limit</Text>
                    <TextInput
                      style={{
                        height:35,
                        marginBottom:10,
                        backgroundColor: 'transparent',
                        width:200,
                        marginLeft: 50    
                      }}
                      onChangeText={(value) => this.setState({value})} value={this.state.limit}></TextInput></View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Valuta</Text>
                    <TextInput
                      style={{
                        height:35,
                        marginBottom:10,
                        backgroundColor: 'transparent',
                        width:200,
                        marginLeft: 41    
                      }}
                      onChangeText={(value) => this.setState({value})} value={this.state.valuta}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Email</Text>
                    <TextInput
                        style={{
                        height:35,
                        marginBottom:10,
                        backgroundColor: 'transparent',
                        width:200,
                        marginLeft: 46    
                      }}
                      onChangeText={(value) => this.setState({value})} value={this.state.email}></TextInput>
                    </View>

                     <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Broj racuna</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(value) => this.setState({value})} value={this.state.brojRacuna}></TextInput>
                    </View>
                </View>
            <View style={styles.buttonContainer}>
                   <Button color="#343C47" style={styles.button} title="Spremi" onPress={this.inputExpense}/>   
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
                backgroundColor: 'transparent',
                width:200,
                marginLeft: 10
              }
            });
export default AzuriranjeProfila;