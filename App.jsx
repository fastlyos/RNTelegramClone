import "./ReactotronConfig";
import React from "react";
import { StyleSheet, Text, View, StatusBar, LogBox, Platform, UIManager } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "@app/navigation/app-navigation";
// import DevsAnimationScreen from "@app/screens/devs-animation-screen";
import // MainSettingScreen,
// DevsScreen
"@app/screens";

import useColorScheme from "./hooks/useColorScheme";
import useCachedResources from "./hooks/useCachedResources";
LogBox.ignoreLogs(["RCTBridge", "Require cycle", "Modal with", "Native splash screen is already hidden"]);

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return null;
  return (
    <SafeAreaProvider>
      <AppNavigation colorScheme={colorScheme} />
      {/* <MainSettingScreen colorScheme={colorScheme} /> */}
      {/* <DevsScreen colorScheme={colorScheme} /> */}
    </SafeAreaProvider>
  );
}

export default App;
// export { default } from './storybook';
