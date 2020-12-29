import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "@app/navigation/app-navigation";

import "./ReactotronConfig";
import useColorScheme from "./hooks/useColorScheme";
import useCachedResources from "./hooks/useCachedResources";

function App() {
  const colorScheme = useColorScheme();
  // const isLoadingComplete = useCachedResources();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" />
      <AppNavigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}

export default App;
// export { default } from './storybook';
