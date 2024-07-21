import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './profile/profile';
import Navigation from './components/navigation';
import Budget from './budget/budget';
import Notification from './notification/notification';
import Setting from './setting/setting';
import Login from './components/login';

const Main = ({setKey}) => {

  const Stack = createStackNavigator();

  return (
    <View style={{ height: '100%' }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
          <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
          <Stack.Screen name="Setting" options={{ headerShown: false }} >
            {(props) => <Setting {...props} setKey={setKey} />}
          </Stack.Screen>
        </Stack.Navigator>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default Main;
