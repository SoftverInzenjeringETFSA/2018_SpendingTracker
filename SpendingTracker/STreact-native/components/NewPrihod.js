
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,Picker } from 'react-native';
import Toast from 'react-native-simple-toast';
import ipConfig from '../config.json';
export class  NewExpense extends Component{
  constructor(props){

    super(props);
    this.state = { value: '', category:'',currentValue:''};

  }

  // DIO ZA OBAVJEST O LIMITU: BEGIN
  //this.props.navigation.state.params.email
  componentDidMount(){
    fetch(ipConfig.ip_adress.value + '/api/vratiKorisnika', {
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
    .then(/*data =>  this.setState({limit: data.troskovniLimit, kategorije: data.kategorije})*/);

    fetch(ipConfig.ip_adress.value + '/api/trenutnoStanje',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
           body: JSON.stringify({
            email: this.props.navigation.state.params.email,
            lozinka: this.props.navigation.state.params.lozinka,
            racun: this.props.navigation.state.params.odabraniRacun
      }),

    })
    .then(response => response.json())
    .then(data => this.setState({currentValue: data.trenutniIznos}));
  }

  inputExpense=()=>{
    //192.168.1.5

    // DIO ZA OBAVJEST O LIMITU: BEGIN

    //Toast.show(this.state.limit.toString(),Toast.LONG);
  //  if (this.state.value+this.state.currentValue>this.state.limit){
    //  this.props.navigation.navigate('ObavjestOLimitu');
  //  }
  //  else{

    // DIO ZA OBAVJEST O LIMITU: END
if(isNaN(this.state.value)) {
  Toast.show("Niste unijeli ispravan iznos");
}
else {
    fetch(ipConfig.ip_adress.value + '/api/dodajNoviPrihod/' + this.props.navigation.state.params.odabraniRacun, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
           body: JSON.stringify({
            email: this.props.navigation.state.params.email,
            lozinka: this.props.navigation.state.params.lozinka,
           iznos: this.state.value
      }),

    });

    fetch(ipConfig.ip_adress.value + '/api/novoStanje2/' + this.props.navigation.state.params.odabraniRacun, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
           body: JSON.stringify({
            email: this.props.navigation.state.params.email,
            lozinka: this.props.navigation.state.params.lozinka,
           noviIznos: (+this.state.currentValue) + (+this.state.value)

      }),

    });
    Toast.show("Uspješno ste dodali novi prihod");
  //}
}
  }
    render(){
        return (
            <View >
              <View style={styles.imagecontainer}>
              <Image
                  style={{width: 200, height: 100}}
                  source={require('../img/money.png')}
                    />
                    <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>Novi prihod</Text>
                   </View>
                   <View style={styles.contentcontainer}>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Iznos</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(value) => this.setState({value})}></TextInput></View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    </View>
            </View>
            <View style={styles.buttonContainer}>
                   <Button color="#343C47" style={styles.button} title="Unesi" onPress={this.inputExpense}/>
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
