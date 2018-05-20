import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, FlatList} from 'react-native';
//import { ScrollView } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';
//import { ListView } from './C:/Users/Hamza/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';
//import { FlatList } from './C:/Users/Hamza/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';

export default class HistorijaTroskova extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      hiostorija: []
    };
  }

  componentDidMount(){
    //192.168.1.5
    fetch('http://192.168.1.7:8081/api/vratiHistoriju/neko@nekoo.com/lozinka123')
    .then(response => response.json())
    .then(data => this.setState({historija: data}))
  }

  //renderItem({ item, index }) {
  //  return <Text style={styles.row}>{item.iznos}</Text>;
  //}

    render() {
      return (
        <View>
          <View style={styles.imagecontainer}>
            </View>
            <View style={styles.buttonContainer}>
                <FlatList
                data={this.state.historija}
                renderItem={({item}) => <Text style={styles.row} >Iznos: {item.iznos}, datum unosa:  {item.datum}</Text>}
                >

                    </FlatList>
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

