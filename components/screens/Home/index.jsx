import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import QuoteApi from './QuoteApi'
import Custom from './Custom'

export default function App() {
  
  const Tab = createMaterialTopTabNavigator();
  
  return (
        <Tab.Navigator  
          initialRouteName="QuoteApi"
          activeColor="white"
          inactiveColor="black"
        >
          <Tab.Screen 
            name="QuoteApi" 
            component={QuoteApi} 
            options={{
              tabBarColor: 'gray',
              tabBarLabel: 'Api',
            }} 
          />
          <Tab.Screen 
            name="Custom" 
            component={Custom}
            options={{
              tabBarColor: 'gray',
              tabBarLabel: 'Custom',
            }} 
          />
        </Tab.Navigator>
  );
}