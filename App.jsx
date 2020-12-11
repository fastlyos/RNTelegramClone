import "./ReactotronConfig";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useColorScheme from "./hooks/useColorScheme";
import AppNavigation from "@app/navigation/app-navigation";
import useCachedResources from "./hooks/useCachedResources";

function App() {
  const colorScheme = useColorScheme();
  // const isLoadingComplete = useCachedResources();
  return (
    <SafeAreaProvider>
      <AppNavigation colorScheme={colorScheme} />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

export default App;
// export { default } from './storybook';
