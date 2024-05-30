import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';
import Profile from './components/profile';
import Navigation from './components/navigation';
import Budget from './budget/budget';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Main = () => {
  const Stack = createStackNavigator();
  return (
    <View style={{ height: '100%'}} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
        </Stack.Navigator>
        <Navigation/>
      </NavigationContainer>
    </View>
  );
};

export default Main;


