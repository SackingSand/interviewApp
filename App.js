import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Store from './stores'

import Home from './screens/Home'
import Favorites from './screens/Favorites'
import Custom from './screens/Custom'

export default function App() {
  
  const Tab = createMaterialBottomTabNavigator();
  
  return (
    <Store>
      <NavigationContainer>
        <Tab.Navigator  
          initialRouteName="Home"
          activeColor="white"
          inactiveColor="black"
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
            name="Custom" 
            component={Custom}
            options={{
              tabBarColor: 'gray',
              tabBarLabel: 'Custom',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="comment-plus-outline" color={color} size={26} />
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
      <StatusBar style="auto" />
    </Store>
  );
}