import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {} from '@react-navigation/core';
import {
  createStackNavigator,
  useCardAnimation,
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import themes from "@app/themes";

// screens
import {
  OtherScreen,
  NotFoundScreen,
  PinLocationScreen,
  DevsScreen,
  SavedMessagesScreen,
  RecentCallScreen,
  ListDevicesScreen,
  ScanCodeScreen,
  FoldersScreen,
  NotificationAndSoundScreen,
  PrivacyAndSecurityScreen,
  MainDataStorageScreen,
} from "@app/screens";

// navigations
import BottomTabNavigator from "./bottom-tab-navigator";
import LinkingConfiguration from "./linking-configuration";

export default function AppNavigation({ colorScheme }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? themes.dark : themes.light}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: true,
        gestureDirection: "horizontal",
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackTitle: "Back",
      }}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
      <Stack.Screen name="OtherScreen2" component={OtherScreen} />
      <Stack.Screen name="OtherScreen3" component={OtherScreen} />
      {/* Messages */}
      {/* <Stack.Screen name="MainMessagesScreen" component={MainMessagesScreen} /> */}
      <Stack.Screen name="DevsScreen" component={DevsScreen} />
      <Stack.Screen
        name="PinLocationScreen"
        component={PinLocationScreen}
        options={{
          headerShown: false,
          // animationEnabled: true,
          // gestureDirection: "vertical",
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      {/* Settings/personal */}
      <Stack.Screen name="SavedMessagesScreen" component={SavedMessagesScreen} />
      <Stack.Screen name="RecentCallScreen" component={RecentCallScreen} />
      <Stack.Screen name="ListDevicesScreen" component={ListDevicesScreen} />
      <Stack.Screen name="ScanCodeScreen" component={ScanCodeScreen} />
      <Stack.Screen name="FoldersScreen" component={FoldersScreen} />
      {/* Settings/notification */}
      <Stack.Screen name="NotificationAndSoundScreen" component={NotificationAndSoundScreen} />
      {/* Settings/privacy */}
      <Stack.Screen name="PrivacyAndSecurityScreen" component={PrivacyAndSecurityScreen} />
      {/* Settings/storage */}
      <Stack.Screen name="MainDataStorageScreen" component={MainDataStorageScreen} />

      {/* others */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
}
