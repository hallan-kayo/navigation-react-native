import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'//tem que instalar no projeto
import {HomeScreen,ProfileScreen,DetailsScreen} from '../screens'


const barra = createBottomTabNavigator(
    //objeto de abas
    {
      'home': HomeScreen,
      'profile': ProfileScreen,
      'details': DetailsScreen 
    },
    //estilização das abas
    {
      tabBarOptions:{
        labelStyle:{
          fontSize:15
        },
        activeTintColor:'tomato',
        inactiveTintColor:'white',
        style:{
          backgroundColor:'blue'
        }
      }
    }
  )

  const BottomBar = createAppContainer(barra)
  export default BottomBar