import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, ScrollView} from 'react-native';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state = { currentValue: 230 };
        this.value=230;
       }
    componentDidMount(){
        //192.168.1.5
      
        fetch('http://192.168.2.104:8081/api/trenutnoStanje',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
                 body: JSON.stringify({
                 email: this.props.navigation.state.params.email,
                 lozinka: this.props.navigation.state.params.lozinka,
                 racun: "Racun1"
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
        this.props.navigation.navigate('Login');
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
                this.props.navigation.navigate('NewExpense',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka})} title="Unesi trošak"/>   
                </View>  
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button}  title="Unesi prihod"/>   
                    </View>
                <View style={styles.buttonContainer}>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('PregledKategorija',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka})} title="Pregled kategorija"/>
                </View>
                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('PregledStatistike')} title="Pregled statistike"/>
                </View>

                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('AzuriranjeProfila',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka})} title="Azuriraj profil"/>
                </View>

                <View style={styles.buttonContainer}>
                <Button color="#343C47" style={styles.button} onPress={()=>
                this.props.navigation.navigate('HistorijaTroskova',{email: this.props.navigation.state.params.email, lozinka: this.props.navigation.state.params.lozinka})} title="Historija troskova"/>
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