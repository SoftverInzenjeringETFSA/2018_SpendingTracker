import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, ScrollView, Alert} from 'react-native';
import ipConfig from '../config.json';
import Toast from 'react-native-simple-toast';


export class Home extends Component{
    constructor(props){
        super(props);
        this.state = { currentValue: 230 };
        this.value=230;
       }
    componentDidMount(){
        //192.168.1.5

        fetch(ipConfig.ip_adress.value + '/api/trenutnoStanje',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
                 body: JSON.stringify({
                 email: this.props.navigation.state.params.email,
                 lozinka: this.props.navigation.state.params.lozinka,
                 racun:  this.props.navigation.state.params.odabraniRacun
            }),
          })
        .then(response => response.json())
        .then((responseJson) => {
            console.log(responseJson.trenutniIznos);
            //this.value=responseJson.trenutniIznos.toString();
            this.setState({currentValue: responseJson.trenutniIznos})
            console.log(this.currentValue + "hi");
          })
      }
    onPressButton= () =>{
      Toast.show("Doviđenja - uspješna odjava");
        this.props.navigation.navigate('Login');
    }

    brisiRacun() {


            Alert.alert(
        'Brisanje računa',
        'Želite li obrisati račun:',
        [

          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => {
            console.log('OK Pressed');
            fetch(ipConfig.ip_adress.value + '/api/brisiRacun',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                            'Content-Type': 'application/json',
                },
                     body: JSON.stringify({
                        email: this.props.navigation.state.params.email,
                        lozinka: this.props.navigation.state.params.lozinka,
                        racun:  this.props.navigation.state.params.odabraniRacun
                }),
              })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.success) {
                    Toast.show('Račun uspješno obrisan.')
                }
                else
                    Toast.show('Greška: ' + responseJson.data);
              });

          }},
        ],
        { cancelable: false }
      )





    }
    render(){
        return (
            <ScrollView >
                <View style={styles.buttonContainer}>
                    <Button color="#343C47"   onPress={
                    this.onPressButton} title="Odjavi se"/>
                 </View>
                <View style={styles.imagecontainer}>
                <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>Trenutno stanje</Text>
                </View>
                <View style={styles.contentcontainer}>
                <View style={styles.costcontainer}>
                <Text style={styles.accountText}>{this.state.currentValue}  KM</Text>
                </View>
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button}  onPress={()=>
                this.props.navigation.navigate('NewExpense',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka, odabraniRacun : this.props.navigation.state.params.odabraniRacun})} title="Unesi trošak"/>
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('NewPrihod',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka,  odabraniRacun : this.props.navigation.state.params.odabraniRacun})} title="Unesi prihod"/>
                    </View>
                <View style={styles.buttonContainer}>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('PregledKategorija',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka,  odabraniRacun : this.props.navigation.state.params.odabraniRacun})} title="Pregled kategorija"/>
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('PregledStatistike')} title="Pregled statistike"/>
                </View>

                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('AzuriranjeProfila',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka,  odabraniRacun : this.props.navigation.state.params.odabraniRacun})} title="Azuriraj profil"/>
                </View>

                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('HistorijaTroskova',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka,  odabraniRacun : this.props.navigation.state.params.odabraniRacun})} title="Historija troskova"/>
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={() => this.brisiRacun()} title="Briši račun"/>
                </View>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('DevelopersHelp')} title="Pomoć za razvojni tim"/>
                </View>
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    imagecontainer: {
      alignItems: 'center'
    },
    buttonContainer:{
        marginBottom:8
    },
    contentcontainer:{

      alignItems: 'flex-start',
      padding: 20,

    },
    button:{
        backgroundColor:'#343C47',
        color:'white',
        width:320,
        marginBottom:5
    },
   costcontainer:{
       width:320,
       height:200,
        alignItems: 'center',
        padding: 20,
        borderWidth: 2,
        backgroundColor:'#6FAD4A',
        borderColor:  '#343C47',
        justifyContent:'center'
      },
    container: {
      flex: 3,
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
    },
    accountText:{
        color:'white',
        fontSize: 30
    },
    logout:{
        width: 100,
        marginLeft:130
    }
  });

export default Home;
