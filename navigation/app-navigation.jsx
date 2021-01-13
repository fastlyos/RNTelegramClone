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
import { OtherScreen, MainMessagesScreen, NotFoundScreen, PinLocationScreen, DevsScreen } from "@app/screens/routes";

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
      initialRouteName="DevsScreen"
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
      {/* Messages */}
      <Stack.Screen name="MainMessagesScreen" component={MainMessagesScreen} />
      <Stack.Screen
        name="PinLocationScreen"
        component={PinLocationScreen}
        options={{
          // animationEnabled: true,
          // gestureDirection: "vertical",
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      {/* others */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Screen name="DevsScreen" component={DevsScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
}
