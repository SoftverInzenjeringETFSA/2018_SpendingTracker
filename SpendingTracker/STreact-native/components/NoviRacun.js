import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, ScrollView} from 'react-native';
import ipConfig from '../config.json';
import Toast from 'react-native-simple-toast';

class NoviRacun extends Component {
    constructor(props) {
        super(props);

        this.state = {
            naziv : '',
            trenutniIznos : 0
        };

        this.dodajRacun = this.dodajRacun.bind(this);
    }

    dodajRacun() {
        fetch(ipConfig.ip_adress.value + '/api/noviRacun',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                 email: this.props.navigation.state.params.email,
                 lozinka: this.props.navigation.state.params.lozinka,
                 noviRacun : this.state
            }),
        })
        .then(response => response.json())
        .then((responseJson) => {
            if (responseJson.success) {
                Toast.show('Uspješno dodan novi račun - ' + this.state.naziv);
            }
            else {
                Toast.show('Greška: ' + responseJson.data);
            }
        });
    }

    render() {
        return (
            <View>
                <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>Novi račun</Text>
                <View style={styles.contentcontainer}>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Naziv</Text>
                        <TextInput style={styles.input} onChangeText={(naziv) => this.setState({naziv})}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Trenutni iznos:</Text>
                        <TextInput style={styles.input} onChangeText={(trenutniIznos) => this.setState({trenutniIznos})}></TextInput>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                   <Button color="#343C47" style={styles.button} title="Unesi" onPress={this.dodajRacun}/>
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

  export default NoviRacun;
