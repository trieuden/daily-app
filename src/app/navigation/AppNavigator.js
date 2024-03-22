import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../views/components/Profile';
import Spend from '../views/components/Spend';

const Stack = createStackNavigator();

const render = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Spend" component={Spend} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default render;