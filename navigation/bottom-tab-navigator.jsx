import React from 'react';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs, useHeaderHeight } from '@react-navigation/stack';

import Colors from '@app/constants/Colors';
import useColorScheme from '@app/hooks/useColorScheme';
import ExampleScreen from '@app/screens';
// contacts
import MainContactScreen from '@app/screens/contacts/main-contact';
// import NewContactScreen from '@app/screens/contacts/new-contact-screen';

// chats
import ListChatScreen from '@app/screens/chats/list-chat-screen';
// settings
import MainSettingScreen from '@app/screens/settings/main-setting-screen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabChats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabContacts"
        component={TabContactNavigator}
        options={{
          tabBarLabel: 'Contacts',
          title: 'Contacts',
          tabBarIcon: ({ color }) => <TabBarIcon name="md-contact" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabChats"
        component={TabChatsNavigator}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatbubbles" color={color} reverse />,
        }}
      />
      <BottomTab.Screen
        name="TabSettings"
        component={TabSettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cog" color={color} />,
          tabBarBadge: '!',
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon({ name, color, reverse }) {
  return <Ionicons size={32} style={{ marginBottom: -3, transform: reverse && [{ rotateY: '180deg' }] }} name={name} color={color} />;
}

/**
 * Tabstack
 */

// Contacts
const TabContactsStack = createStackNavigator();

function TabContactNavigator() {
  return (
    <TabContactsStack.Navigator>
      <TabContactsStack.Screen name="TabContactsScreen" component={MainContactScreen} options={{ headerTitle: 'Contacts' }} />
    </TabContactsStack.Navigator>
  );
}

// Chats
const TabChatsStack = createStackNavigator();

function TabChatsNavigator() {
  return (
    <TabChatsStack.Navigator>
      <TabChatsStack.Screen name="TabChatsScreen" component={ListChatScreen} options={{ headerTitle: 'Chats' }} />
    </TabChatsStack.Navigator>
  );
}

// Settings
const TabSettingsStack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
  );
}

function TabSettingsNavigator() {
  return (
    <TabSettingsStack.Navigator>
      <TabSettingsStack.Screen
        name="TabSettingsScreen"
        component={MainSettingScreen}
        options={{
          headerTitle: 'Settings',
          // header: (props) => {
          //   console.log({ props });
          //   return <LogoTitle {...props} />;
          // },
          gestureDirection: 'horizontal',
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
          headerBackTitle: 'Back',
        }}
      />
    </TabSettingsStack.Navigator>
  );
}
