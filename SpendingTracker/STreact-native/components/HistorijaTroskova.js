import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, FlatList,TouchableOpacity} from 'react-native';
//import { ScrollView } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';
//import { ListView } from './C:/Users/Hamza/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';
//import { FlatList } from './C:/Users/Hamza/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
//npm install --save react-native-modal-datetime-picker or yarn add react-native-modal-datetime-picker
export default class HistorijaTroskova extends React.Component {

  state = {
    isDateTimePickerVisible: false,
  };

  constructor(props){
    super(props);
    console.log("historija " + this.props.navigation.state.params.email);
    this.state ={
      hiostorija: []
    };
  }

  componentDidMount(){
    //192.168.1.5
    fetch('http://192.168.1.5:8081/api/vratiHistoriju',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
           body: JSON.stringify({
           email: this.props.navigation.state.params.email,
           lozinka: this.props.navigation.state.params.lozinka,
           kategorije: this.props.navigation.state.params.kategorije,
           datum1: this.state.datum1,
           datum2:this.state.datum2 
      }),
    })
    .then(response => response.json())
    .then(data => this.setState({historija: data}))
  }

  //renderItem({ item, index }) {
  //  return <Text style={styles.row}>{item.iznos}</Text>;
  //}
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  pokreni_upit = () => this.setState({  });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.state.datum1=date;
    this._hideDateTimePicker();
  };

  _handleDatePicked2 = (date) => {
    this.state.datum2=date;
    this._hideDateTimePicker();
  };

    render() {
      
      return (

        <View>
          <View style={styles.imagecontainer}>
            </View>
            
            <Button color="#343C47" style={styles.button} title="OD" onPress={this._showDateTimePicker}/>
            <Button color="#343C47" style={styles.button} title="DO" onPress={this._showDateTimePicker}/>
            <Button color="#343C47" style={styles.button} title="POTVRDI" onPress={this.pokreni_upit}/>
            
            <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked2}
          onCancel={this._hideDateTimePicker}
        />
            <View style={styles.buttonContainer}>
                <FlatList
                data={this.state.historija}
                renderItem={({item}) => <Text style={styles.row} >Iznos: {item.iznos} \n datum unosa:  {item.datum} \n</Text>}
                >

                    </FlatList>
                </View>
        </View>
      );
    }
  }
  //Kategorija: {item.kategorija.naziv}
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

