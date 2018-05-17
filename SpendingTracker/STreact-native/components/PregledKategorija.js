import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, TextInput } from 'react-native';

export default class PregledKategorije extends Component {

  constructor(props){
    super(props);
    this.state = [
      {naziv: ""}
    ];
  }

  componentDidMount(){
    fetch('http://192.168.1.207:8081/api/vratiKategorije/neko@nekoo.com/lozinka123'
    .then(response => response.json())
    .then(data => this.setState( data )))  
  }

  renderItem({ item, index }) {
    return <Text style={style.row}>{item}</Text>;
  }
  render() {
    return (
        <View >
        <View style={styles.imagecontainer}>
        <Image
            style={{width: 200, height: 100}}
           
              />
            <Text style={{color: '#343C47', fontWeight: 'bold', fontSize:25}}>Pregled kategorija</Text>
        </View>
        
        <View style={styles.contentcontainer}>
              
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={{color: '#343C47',marginLeft: 10, fontSize:15}}>Nova kategorija: </Text>
                <TextInput style={styles.input}></TextInput>
              </View>
              
        </View>
        <View style={styles.buttonContainer}>
          <FlatList
            data={this.state}
            renderItem={this.renderItem}
          />
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
 
