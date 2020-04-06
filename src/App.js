import React,{Component} from 'react';
import {StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {HomeScreen,ProfileScreen,DetailsScreen,bottomBar} from './screens'

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
const Barra = createAppContainer(bottomBar)

class App extends Component{
  render(){
    //retornando o container para ser exibido na tela
    return <AppContainer/>,<Barra/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App