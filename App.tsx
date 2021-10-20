import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';

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
    <>
      <StatusBar
        backgroundColor="#9147FF"
        barStyle="dark-content"
      />
      <Routes />
    </>
  );
}
