import React,{Component} from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component{
    //editando barra de opções
    static navigationOptions={
      title:"Página Inicial",
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
          <Text style={{fontSize:50}}>Tela Inicial</Text>
          {/* botão para ir para outra página */}
          <Button title="Perfil" 
          onPress={() => this.props.navigation.navigate('profile',{name:'hallan',age:18})}/>
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