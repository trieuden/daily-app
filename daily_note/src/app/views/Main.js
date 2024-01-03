import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from "./components/Navigation"
import Profile from "./components/Profile";
import DailyExpense from "./components/DailyExpense";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Spend" component={DailyExpense} options={{ headerShown: false }} />
        </Stack.Navigator>
        <Navigation/>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 50,
  }
});

export default Main;
