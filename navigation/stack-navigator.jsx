import React from 'react';
import { ColorSchemeName } from 'react-native';
import { createStackNavigator, TransitionPresets, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import OtherScreen from '../screens/other-screen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        gestureDirection: 'horizontal',
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
      <Stack.Screen name="OtherScreen2" component={OtherScreen} />
    </Stack.Navigator>
  );
}
