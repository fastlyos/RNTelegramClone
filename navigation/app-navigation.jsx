import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, useScrollToTop } from '@react-navigation/native';
import {} from '@react-navigation/core';
import {
  createStackNavigator,
  useCardAnimation,
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/not-found-screen';
import BottomTabNavigator from './bottom-tab-navigator';
import LinkingConfiguration from './linking-configuration';
import OtherScreen from '../screens/other-screen';

export default function AppNavigation({ colorScheme }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
        gestureDirection: 'horizontal',
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackTitle: 'Back',
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
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
