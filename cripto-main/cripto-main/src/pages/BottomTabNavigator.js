import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import Home from './Home'
import BookStackNavigator from './BookStackNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({  color, size }) => {
        if (route.name === 'Home') {
          return (
            <Ionicons
              name={'md-home'
              }
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Info') {
          return (
            <Ionicons
              name={'information-outline'}
              size={size}
              color={color}
            />
          );
        }
      },headerShown: false,
    }) }
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Info" component={BookStackNavigator} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator