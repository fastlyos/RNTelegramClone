import React from "react";
import faker from "faker";
<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
  TransitionSpecs,
  useHeaderHeight,
  HeaderTitle,
} from "@react-navigation/stack";
import useColorScheme from "@app/hooks/useColorScheme";
=======
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators, TransitionSpecs, useHeaderHeight, HeaderTitle } from "@react-navigation/stack";
import useColorScheme from "@app/hooks/useColorScheme";
// styles
import Colors from "@app/constants/Colors";
>>>>>>> origin/main

// components
import { Image, SearchListHeader } from "@app/components";

// screens
<<<<<<< HEAD
import ExampleScreen from "@app/screens";
import MainContactScreen from "@app/screens/contacts/main-contact-screen";
// import NewContactScreen from '@app/screens/contacts/new-contact-screen';
import MainChatScreen from "@app/screens/chats/main-chat-screen";
import MainSettingScreen from "@app/screens/settings/main-setting-screen";
// styles
import Colors from "@app/constants/colors";
=======
import {
  ExampleScreen,
  MainContactScreen,
  MainChatScreen,
  MainSettingScreen,
  // NewContactScreen
} from "@app/screens/routes";
>>>>>>> origin/main

function TabBarIcon({ name, color, reverse }) {
  return <Ionicons size={32} style={{ marginBottom: -3, transform: reverse && [{ rotateY: "180deg" }] }} name={name} color={color} />;
}

/**
 * Tabstack
 */

// Contacts
const TabContactsStack = createStackNavigator();

function TabContactNavigator() {
  return (
    <TabContactsStack.Navigator>
      <TabContactsStack.Screen
        name="TabContactsScreen"
        component={MainContactScreen}
        options={{
          // header: () => <SearchListHeader />,
          headerTitle: "Contacts",
          // animationEnabled: true,
          headerRight: () => <Ionicons name="ios-add" size={30} color="red" />,
          headerRightContainerStyle: {
            paddingHorizontal: 16,
          },
        }}
      />
    </TabContactsStack.Navigator>
  );
}

// Chats
const TabChatsStack = createStackNavigator();

function TabChatsNavigator() {
  return (
    <TabChatsStack.Navigator>
      <TabChatsStack.Screen
        name="TabChatsScreen"
        component={MainChatScreen}
        options={{
          headerTitle: "Chats",
          headerStyle: {
            borderWidth: 0,
            shadowOpacity: 0,
          },
        }}
      />
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
        uri: "https://reactnative.dev/img/tiny_logo.png",
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
<<<<<<< HEAD
          // header: () => <></>,
=======
>>>>>>> origin/main
          headerTitle: "Settings",
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          // header: (props) => {
          //   return <LogoTitle {...props} />;
          // },
          gestureDirection: "horizontal",
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
          headerBackTitle: "Back",
        }}
      />
    </TabSettingsStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="TabSettings"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabContacts"
        component={TabContactNavigator}
        options={{
          title: "Contacts",
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <TabBarIcon name="md-contact" color={color} />,
=======
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle" size={24} color={color} />,
>>>>>>> origin/main
        }}
      />
      <BottomTab.Screen
        name="TabChats"
        component={TabChatsNavigator}
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatbubbles" color={color} reverse />,
        }}
      />
      <BottomTab.Screen
        name="TabSettings"
        component={TabSettingsNavigator}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cog" color={color} />,
          tabBarBadge: "!",
        }}
      />
    </BottomTab.Navigator>
  );
}
