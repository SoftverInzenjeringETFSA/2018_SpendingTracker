
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password:''};
    
  
  }

  onPressButton = () => {
    return fetch('http://192.168.1.207:8081/api/vratiKorisnika/neko@nekoo.com/lozinka123 ')
    .then((response) => response.json())
    .then((responseJson) => {
      
    })
    .catch((error) => {
      console.error(error);
    });
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Image 
          style={styles.imageContainer}
          source={require('./img/logo.png')} 
        />
        <Text style={styles.header}>Dobrodošli</Text>
        <Text style={styles.header2}>HAFE Spending Tracker aplikacija</Text>
        
        
        <TextInput
          style={styles.input}
          placeholder="Napišite email ovdje"
          onChangeText={(text) => this.setState({email:text})}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Napišite lozinku ovdje"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password:text})}
        />
        
        <TouchableOpacity
         style={styles.button}
         onPress={ this.onPressButton}>

          <Text style={styles.buttonText}>Prijavi se</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={this.onPressButton}>

          <Text 
         style={styles.register}>Nemate račun? Registruj se</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -180
  },
  header: {
    paddingTop:20,
    fontSize:20
  },
  header2: {
    paddingTop:10,
    fontSize:20
  },
  imageContainer:{
    marginTop: 150,
    width: 100,
    height: 100
  },
  input:{
    height:40,
    width: 300,
    marginTop:25,
    paddingHorizontal:10
  },
  button:{
    marginTop: 25,
    backgroundColor:'#343C47',
   // borderColor:'66CCFF',
    borderWidth: 1,
    borderRadius:4,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10
  },
  buttonText:{
    color:'white'
  },
  textBlue:{
 //   color:'#000080'
  },
  register:{
    color:'#E6B247',
    marginTop:20
  },
  account:{
    paddingTop:15,
    paddingBottom:5

  }
});