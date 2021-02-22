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
  ChatFoldersScreen,
  NotificationAndSoundScreen,
  PrivacyAndSecurityScreen,
  MainDataStorageScreen,
  MainAppearanceScreen,
  LanguageScreen,
  ListStickersScreen,
  FAQScreen,
  ContactSearchScreen,
} from "@app/screens";

// navigations
import BottomTabNavigator from "./bottom-tab-navigator";
import LinkingConfiguration from "./linking-configuration";

const COLORS = {
  border: "rgb(223,221,226)",
};

export default function AppNavigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? themes.dark : themes.light}
      fallback={<Text>Loading…</Text>}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const DEFAULT_OPTIONS = {
  gestureDirection: "horizontal",
  headerBackTitle: "Back",
  headerStyle: {
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
  },
};

const Stack = createStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{
        headerShown: false,
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      }}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
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
      {/* Contact */}

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

      {/* Settings */}
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ title: "Language" }} />
      <Stack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{
          animationEnabled: true,
          gestureEnabled: true,
          detachPreviousScreen: true,
          title: "Telegram",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
          headerBackTitleStyle: {
            color: "black",
          },
        }}
      />
      {/* Settings/personal */}
      <Stack.Screen name="SavedMessagesScreen" component={SavedMessagesScreen} />
      <Stack.Screen name="RecentCallScreen" component={RecentCallScreen} />
      <Stack.Screen name="ListDevicesScreen" component={ListDevicesScreen} options={{ title: "Devices" }} />
      <Stack.Screen name="ScanCodeScreen" component={ScanCodeScreen} />
      <Stack.Screen name="ChatFoldersScreen" component={ChatFoldersScreen} options={{ title: "Folders" }} />
      {/* Settings/notification */}
      <Stack.Screen name="NotificationAndSoundScreen" component={NotificationAndSoundScreen} />
      {/* Settings/privacy */}
      <Stack.Screen name="PrivacyAndSecurityScreen" component={PrivacyAndSecurityScreen} />
      {/* Settings/storage */}
      <Stack.Screen name="MainDataStorageScreen" component={MainDataStorageScreen} options={{ title: "Data and Storage" }} />
      {/* Settings/appearance */}
      <Stack.Screen name="MainAppearanceScreen" component={MainAppearanceScreen} options={{ title: "Appearance" }} />
      {/* Settings/stickers */}
      <Stack.Screen name="ListStickersScreen" component={ListStickersScreen} />

      {/* others */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
}
