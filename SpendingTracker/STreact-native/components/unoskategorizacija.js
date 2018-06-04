import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import ipConfig from '../config.json';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://previews.123rf.com/images/vectorshots/vectorshots1307/vectorshots130700359/21073767-cash-and-gold-coin-finance-money-treasure-cartoon-vector-illustration.jpg'}}
        />
        <Text style={{color: '#1a1a1a', fontWeight: 'bold', fontSize:40}}>Novi trošak</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={{color: '#1a1a1a', fontSize:30}}>Iznos</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}></TextInput></View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={{color: '#1a1a1a', fontSize:30}}>Kategorija</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}></TextInput></View>
        <Button
  title="UNESI"
  loading
  loadingProps={{ size: "large", color: '#F0FFFF' }}
  titleStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: '#1a1a1a',
    width: 1300,
    height: 245,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
/>

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
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
