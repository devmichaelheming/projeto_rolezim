import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

import { useFonts } from "expo-font";
import { Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import AppLoading from "expo-app-loading";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    // <NavigationContainer initialRouteName="SignIn">
    //   <StatusBar
    //     backgroundColor="#B42B51"
    //     barStyle="light-content"
    //   />

    //   <Stack.Navigator>

    //     <Stack.Screen
    //       name="SignIn"
    //       component={SignIn}
    //       options={{
    //         headerShown: false,
    //       }}

    //     />

    //     <Stack.Screen
    //       name="SignUp"
    //       component={SignUp}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
      <StatusBar
        backgroundColor="#B42B51"
        barStyle="light-content"
      />
      <Routes />
    </>
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
