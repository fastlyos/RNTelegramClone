import "./ReactotronConfig";
import React from "react";
import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "@app/navigation/app-navigation";
import { MainSettingScreen } from "@app/screens";
// import DevsAnimationScreen from "@app/screens/devs-animation-screen";

import useColorScheme from "./hooks/useColorScheme";
import useCachedResources from "./hooks/useCachedResources";
LogBox.ignoreLogs(["RCTBridge", "Require cycle", "Modal with", "Native splash screen is already hidden"]);

function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return null;
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" />
      {/* <MainSettingScreen colorScheme={colorScheme} /> */}
      <AppNavigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}

export default App;
// export { default } from './storybook';
