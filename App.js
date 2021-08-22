import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Store from './stores'

import Home from './components/screens/Home'
import Favorites from './components/screens/Favorites'

export default function App() {
  
  const Tab = createMaterialBottomTabNavigator();
  
  return (
    <Store>
      <NavigationContainer>
        <Tab.Navigator  
          initialRouteName="Home"
          activeColor="white"
          inactiveColor="#aaa"
          barStyle={{}}
          shifting={true}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarColor: 'gray',
              tabBarLabel: 'Index',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }} 
          />
          <Tab.Screen 
            name="Favorites" 
            component={Favorites}
            options={{
              tabBarColor: 'gray',
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-heart" color={color} size={26} />
              ),
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" hidden={true} />
    </Store>
  );
}