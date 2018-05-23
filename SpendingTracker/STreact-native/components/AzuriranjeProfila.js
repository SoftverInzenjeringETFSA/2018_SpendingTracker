import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Picker } from 'react-native';
import Toast from 'react-native-simple-toast';

export class AzuriranjeProfila extends Component{
  constructor(props){
    super(props);
    this.state = { password: '', mjesecniPrihodi:'', limit:'', valuta: '',email: '',passwordPonovi: '', brojRacuna:''};
}

componentDidMount(){
  fetch('http://192.168.1.2:8081/api/vratiKorisnika', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
         body: JSON.stringify({
          email: this.props.navigation.state.params.email,
          lozinka: this.props.navigation.state.params.lozinka
    }),
    
  })
  .then(response => response.json())
  .then(data => this.setState({password: data.lozinka, passwordPonovi: data.lozinka, mjesecniPrihodi:data.mjesecniPrihod.toString(), limit: data.troskovniLimit.toString(), valuta: data.valuta, email: data.email}));
}

saveChanges=()=>{
  if(this.state.password !== this.state.passwordPonovi) {
    Toast.show("Unesite ponovo lozinku");
  } else {
  fetch('http://192.168.1.2:8081/api/AzurirajProfil/neko@nekoo.com/lozinka123', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    password: this.state.password,
    mjesecniPrihod: Number(this.state.mjesecniPrihodi),
    limit: Number(this.state.limit),
    valuta: this.state.valuta,
    email: this.state.email
  }),
  }) .then((response) => response.json())
    .then((responseJson) => {
     Toast.show("Bravo")
  })
  .catch((error) => {
    console.log(error);
    console.log(this.state.password);
    Toast.show("Neispravni podaci");
  });
  }
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
  onChangeText={(value) => this.setState({password: value})} secureTextEntry={true}>
  </TextInput></View>
  <View style={{flexDirection:'row', flexWrap:'wrap'}}>
    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Ponovi</Text>
    <TextInput
    style={{
    height:35,
    marginBottom:10,
    backgroundColor: 'transparent',
    width:200, 
    marginLeft: 30
    }}
  onChangeText={(value) => this.setState({passwordPonovi: value})} secureTextEntry={true}>
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
    onChangeText={(value) => this.setState({mjesecniPrihodi:value})} ></TextInput>
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
    onChangeText={(value) => this.setState({limit: value})}></TextInput></View>
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
  onChangeText={(value) => this.setState({valuta: value})} ></TextInput>
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
    onChangeText={(value) => this.setState({email:value})} ></TextInput>
  </View>

  <View style={{flexDirection:'row', flexWrap:'wrap'}}>
    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Broj racuna</Text>
    <TextInput
    style={styles.input}
    onChangeText={(value) => this.setState({value})} value={this.state.brojRacuna}></TextInput>
    </View>
    </View>
    <View style={styles.buttonContainer}>
    <Button color="#343C47" style={styles.button} title="Spremi" onPress={this.saveChanges}/> 
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