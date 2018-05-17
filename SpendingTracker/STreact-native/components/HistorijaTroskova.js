import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import { ListView } from './C:/Users/Hamza/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';
import { FlatList } from './C:/Users/Hamza/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';

export default class PregledStatistike extends React.Component {
    render() {
      return (
        <View>
          <View style={styles.imagecontainer}>
            </View>
            <View style={styles.buttonContainer}>
                <FlatList>

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
  