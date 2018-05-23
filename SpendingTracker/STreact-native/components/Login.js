
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,  Button,KeyboardAvoidingView } from 'react-native';
import Toast from 'react-native-simple-toast';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password:''};
    
    this.person;
  }

  onPressButton = () => {
    //console.log('http://192.168.1.16:8081/api/vratiKorisnika/'+ this.state.email +'/' + this.state.password)
    //192.168.1.5
    //192.168.0.18
     return fetch('http://192.168.1.5:8081/api/vratiKorisnika',  {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
           body: JSON.stringify({
           email: this.state.email,
           lozinka: this.state.password
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.person=responseJson;
      
      this.props.navigation.navigate('Home', this.person);
    })
    .catch((error) => {
      Toast.show("Neispravni podaci");
    });
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Image 
          style={styles.imageContainer}
          source={require('../img/logo.png')}
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

        <View style={styles.button}>
        <Button color="#343C47"   onPress={
                 this.onPressButton} title="Prijavi se"/>
        </View>

          <Text 
         style={styles.register}>Nemate račun? Registruj se</Text>
       
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
    marginTop: -200
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
    marginTop: 15,
    backgroundColor:'#343C47',
   // borderColor:'66CCFF',
    borderWidth: 1,
    borderRadius:4
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

