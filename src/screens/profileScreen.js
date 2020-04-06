import React,{Component} from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends Component{
    //editando barra de opções
    static navigationOptions={
      title:"Seu Perfil",
      headerStyle:{
        backgroundColor:"blue"
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }
    render(){
  
      const name = this.props.navigation.getParam('name','anônimo')
      const age = this.props.navigation.getParam('age','não definido')
  
      return(
        <View style={styles.container}>
          <Text style={{fontSize:50}}>perfil</Text>
          <Text>Nome:{JSON.stringify(name)}</Text>
          <Text>idade:{JSON.stringify(age)}</Text>
          <Button title="Detalhes" 
          onPress={() => this.props.navigation.navigate(/*nome da pagina que deseja ir*/'details')}/>
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