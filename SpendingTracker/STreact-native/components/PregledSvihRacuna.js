import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, ScrollView, FlatList} from 'react-native';
import ipConfig from '../config.json';
import Toast from 'react-native-simple-toast';

//const { URL, URLSearchParams } = require('url');

class PregledSvihRacuna extends Component {
    constructor(props) {
        super(props);
        this.state = {
            racuni : []
        }
        this.povuciSveRacune = this.povuciSveRacune.bind(this);
    }

    componentDidMount() {
        this.povuciSveRacune();
    }

    povuciSveRacune() {

        fetch('http://' + ipConfig.ip_adress.value + ':8081/api/sviRacuni',{
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
        .then((responseJSON) => {
            if (responseJSON.success) 
                this.setState({ racuni : responseJSON.data});
            else 
                Toast('Greška: ' + responseJSON.data);
        });
    }

    obrisiRacun() {
        console.log('bris');
        fetch('http://' + ipConfig.ip_adress.value + ':8081/api/obrisiKorRacun',{
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
        .then((responseJSON) => {
            if (responseJSON.success) {
                Toast.show('Račun uspješno izbrisan.');
                this.props.navigation.navigate('Login');
            }
            else 
                Toast.show('Greška: ' + responseJSON.data);
        });
    }

   
    buttonClick(opcija) {
       if (opcija === 'Novi račun') {
            this.props.navigation.navigate('NoviRacun', {email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka});
       }

       else if (opcija === 'Obriši račun') {
           this.obrisiRacun();
       }
       else {
            var person = {email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka, odabraniRacun : opcija}; //opcija je naziv racuna!
            this.props.navigation.navigate('Home', person)
       }
    }   

    render() {
       var racuni = this.state.racuni;
       racuni.push({'naziv' : 'Novi račun'}, {'naziv' : 'Obriši račun'});
    
        console.log(this.state.racuni);
        return(
       
            <View style={styles.container}>
            <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>Dobrodošli...</Text>
            <FlatList
              data={
                  racuni
              }
              renderItem={({item}) => 
                <View style={styles.buttonContainer}>
                    <Button  color="#343C47"  style={styles.button} title={item.naziv} onPress={() => this.buttonClick(item.naziv)}></Button>
                </View>} 
            />

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    buttonContainer:{
        marginBottom:8
    },
    button:{
        backgroundColor:'#343C47',
        color:'white',
        width:320,
        marginBottom:5
    }
  })

export default PregledSvihRacuna;