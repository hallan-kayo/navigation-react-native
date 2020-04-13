import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'//tem que instalar no projeto
import {HomeScreen,ProfileScreen,DetailsScreen} from '../screens'
import Ionicons from 'react-native-vector-icons/Ionicons'

const barra = createBottomTabNavigator(
    //objeto de abas
    {
      'home': HomeScreen,
      'profile': ProfileScreen,
      'details': DetailsScreen 
    },
    //estilização das abas
    {
      //define a aparância das abas
      tabBarOptions:{
        activeTintColor:'tomato',
        inactiveTintColor:'white',
        style:{
          backgroundColor:'#694fad'
        },
        showLabel:false
      },
      defaultNavigationOptions:({navigation})=>({
        tabBarIcon:({focused,horizontal,tintColor})=>{
          const {routeName} = navigation.state
          let IconComponent = Ionicons
          let iconName

          if(routeName === 'home'){
            iconName = 'md-home'
          }else if(routeName === 'profile'){
            iconName = 'md-person'
          }else if(routeName==='details'){
            iconName = 'md-attach'
          }

          return <IconComponent 
            name={iconName} 
            size = {50} 
            color={tintColor}/>
        }
      })
    }
  )

  const BottomBar = createAppContainer(barra)
  export default BottomBar