import React,{Component} from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends Component{
    //editando barra de opções
    static navigationOptions={
      title:"Detalhes",
      headerStyle:{
        backgroundColor:"blue"
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }
    render(){
      return(
        <View style={styles.container}>
          <Text style={{fontSize:50}}>detalhes</Text>
          <Button title="tela inicial" 
          onPress={() => this.props.navigation.popToTop()}/>
          <Button title="voltar" 
          onPress={() => this.props.navigation.goBack()}/>
        </View>
  
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });