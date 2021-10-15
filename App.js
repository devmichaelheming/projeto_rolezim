import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import AppLoading from "expo-app-loading";

import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer initialRouteName="SignIn">
      <StatusBar
        backgroundColor="#5E17EB"
        barStyle="light-content"
      />

      <Stack.Navigator>

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}

        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
