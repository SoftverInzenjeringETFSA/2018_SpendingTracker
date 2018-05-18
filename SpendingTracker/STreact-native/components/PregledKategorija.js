import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, TextInput, Button } from 'react-native';

export default class PregledKategorije extends Component {

  constructor(props){
    super(props);
    this.state ={
      kategorije: [],
      unos: ""
    };
  }

  componentDidMount(){
    //192.168.1.5
    fetch('http://192.168.1.7:8081/api/vratiKategorije/neko@nekoo.com/lozinka123')
    .then(response => response.json())
    .then(data => this.setState({kategorije: data}))
  }

  novaKategorija=() => {
    //192.168.1.5
    fetch('http://192.168.1.5:8081/api/dodajNovuKategoriju/neko@nekoo.com/lozinka123', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
           body: JSON.stringify({
           naziv: this.state.unos
      }),
    });

  }

  renderItem({ item, index }) {
    return <Text style={styles.row}>{item.naziv}</Text>;
  }
  render() {
    return (
        <View >
        <View style={styles.imagecontainer}>
        <Image
                  style={{width: 80, height: 80, marginBottom: 10, marginTop: 10}}
                  source={require('../images/puzzle.jpg')}
                    />
            <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>Pregled kategorija</Text>
        </View>
        
        <View style={styles.contentcontainer}>
              
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Nova kategorija: </Text>
                <TextInput style={styles.input}
                  onChangeText={(value) => this.setState({unos: value})}>
                </TextInput>
                <Button color="#343C47" style={styles.button} title="Unesi" onPress={this.novaKategorija}/>
              </View>
              
        </View>
        <View style={styles.buttonContainer}>
          <FlatList
            data={this.state.kategorije}
            renderItem={this.renderItem}
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
          alignItems: 'center'
        },
        contentcontainer:{
          alignItems: 'flex-start',
          padding: 20
        },
        buttonContainer:{
          marginBottom:8
      },
      row:{
        color: '#343C47',
        marginLeft: 10, 
        fontSize:15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#6FAD4A',
        marginBottom: 10,
        marginRight: 10,
        padding: 10,
        textAlign: 'center'
      },
      button:{
        backgroundColor:'#343C47',
        color:'white',
        width:320,
        alignSelf: 'stretch',
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
 
