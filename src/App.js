import React,{Component} from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

class HomeScreen extends Component{
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

class ProfileScreen extends Component{
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

class DetailsScreen extends Component{
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
//função para retornar um componente react
const AppNavigator = createStackNavigator(
  //objeto com as rotas(telas)
  {
    home:{
      screen: HomeScreen
    },
    profile:{
      screen:ProfileScreen
    },
    details:{
      screen:DetailsScreen
    }
  },
  //objeto de opções
  {
    //declarando a tela inicial
    initialRouteName: 'home'
  }
)
//declarando o container com createAppContainer passando o componente como parâmetro
const AppContainer = createAppContainer(AppNavigator)

class App extends Component{
  render(){
    //retornando o container para ser exibido na tela
    return <AppContainer/>
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

export default App