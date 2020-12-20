import React from "react";
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

import BottomTabNavigator from "./bottom-tab-navigator";
import LinkingConfiguration from "./linking-configuration";
import NotFoundScreen from "@app/screens/not-found-screen";
import OtherScreen from "@app/screens/other-screen";

// settings
// personal
import RecentCallScreen from "@app/screens/settings/personal/recent-call-screen";
import FoldersScreen from "@app/screens/settings/personal/folders-screen";
import MainMessagesScreen from "@app/screens/chats/main-messages-screen";
// notification
import NotificationAndSoundScreen from "@app/screens/settings/notification/notification-and-sound-screen";

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
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
      <Stack.Screen name="OtherScreen2" component={OtherScreen} />
      <Stack.Screen name="OtherScreen3" component={OtherScreen} />
      <Stack.Screen name="MainMessagesScreen" component={MainMessagesScreen} />

      {/* Settings */}
      {/* personal */}
      <Stack.Screen name="RecentCallScreen" component={RecentCallScreen} />
      <Stack.Screen name="FoldersScreen" component={FoldersScreen} options={{ title: "Folders" }} />
      {/*  notification */}
      <Stack.Screen name="NotificationAndSoundScreen" component={NotificationAndSoundScreen} options={{ title: "Notifications" }} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
}
