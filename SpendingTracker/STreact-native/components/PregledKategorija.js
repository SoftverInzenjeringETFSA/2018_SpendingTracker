import React, { Component } from 'react';
import { Text } from 'react-native';
import { Text, View, FlatList } from 'react-native';

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
            source={require('../img/money.png')}
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
 
