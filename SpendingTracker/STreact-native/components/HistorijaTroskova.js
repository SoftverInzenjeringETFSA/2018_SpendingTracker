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
    fetch('http://192.168.0.18:8081/api/HistroijaTroskova/neko@nekoo.com/lozinka123')
    .then(response => response.json())
    .then(data => this.setState({historija: data}))
  }

    render() {
      return (
        <View>
          <View style={styles.imagecontainer}>
            </View>
            <View style={styles.buttonContainer}>
                <FlatList
                data={this.state.historija}
                renderItem={this.renderItem}
                >

                    </FlatList>
                </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0FFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer:{
        marginBottom:8,
        marginTop: 8
    },
    button:{
      backgroundColor:'#343C47',
      color:'white',
      width:320,
      marginBottom:5
  },
  imagecontainer: {
    alignItems: 'center'
  },
  });
  