import React, { useLayoutEffect, useCallback, useRef } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Animated, Easing } from "react-native";
import { BlurView } from "expo-blur";
import { SCREEN_HEIGHT } from "@app/constants/Layout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
  TransitionSpecs,
  TransitionPresets,
  useHeaderHeight,
  HeaderTitle,
  Header,
} from "@react-navigation/stack";
import useColorScheme from "@app/hooks/useColorScheme";
// styles
import Colors from "@app/constants/Colors";

// components
import { Image, Text, SvgIcons } from "@app/components";
import { SearchListHeader } from "@app/containers";
import { iOSUIKit, iOSColors } from "react-native-typography";

// screens
import { ContactSearchScreen, MainContactScreen, MainChatScreen, MainSettingScreen, NewContactScreen } from "@app/screens";

const COLORS = {
  header: "rgb(247,247,247)",
  blue: iOSColors.blue,
  subtitle: "rgb(247,247,247)",
  border: "rgb(230, 230, 230)",
};

function TabBarIcon({ name, color, reverse }) {
  return <Ionicons size={32} style={{ marginBottom: -3, transform: reverse && [{ rotateY: "180deg" }] }} name={name} color={color} />;
}

//  * Tabstack
const TabStack = createStackNavigator();

// Contacts
function TabContactNavigator({ navigation }) {
  const gotoNewContact = useCallback(() => navigation.push("NewContactScreen"), [navigation]);
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="TabContactsScreen"
        component={MainContactScreen}
        options={{
          title: "Contacts",
          headerRight: () => (
            <TouchableOpacity onPress={gotoNewContact}>
              <Ionicons name="ios-add" size={30} color={COLORS.blue} />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            paddingHorizontal: 16,
          },
        }}
      />
    </TabStack.Navigator>
  );
}
// Chats
function TabChatsNavigator({ navigation }) {
  const gotoNewContact = useCallback(() => navigation.push("NewContactScreen"), [navigation]);
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="TabChatsScreen"
        component={MainChatScreen}
        options={{
          title: "Chats",
          headerStyle: {
            borderWidth: 0,
            shadowOpacity: 0,
          },
          headerRight: () => (
            <TouchableOpacity onPress={gotoNewContact}>
              <SvgIcons name="ic_create" size={30} tintColor={COLORS.blue} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={gotoNewContact}>
              <Text type="body" color={COLORS.blue}>
                Edit
              </Text>
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            paddingHorizontal: 16,
          },
          headerLeftContainerStyle: {
            paddingHorizontal: 16,
          },
        }}
      />
    </TabStack.Navigator>
  );
}
// Settings
function TabSettingsNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="TabSettingsScreen"
        component={MainSettingScreen}
        options={{
          headerTitle: "Settings",
          // headerTransparent: true,
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
        }}
      />
    </TabStack.Navigator>
  );
}
// BottomTab
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="TabChats"
      lazy={true}
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
        },
      }}>
      <BottomTab.Screen
        name="TabContacts"
        component={TabContactNavigator}
        options={{
          title: "Contacts",
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle" size={24} color={color} />,
          // tabBarVisible: false,
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

// MainBottomStack
const MainBottomStack = createStackNavigator();
export default function MainBottomTab({ navigation, options }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <MainBottomStack.Navigator
      headerMode="screen"
      mode="modal"
      screenOptions={({ route, navigation: _navigation }) => ({
        ...TransitionPresets.ModalPresentationIOS,
        gestureResponseDistance: {
          vertical: SCREEN_HEIGHT - 100, // without space on top
          horizontal: 25,
        },
        cardOverlayEnabled: true,
        gestureEnabled: true,
        headerStatusBarHeight: _navigation.dangerouslyGetState().routes.findIndex((r) => r.key === route.key) > 0 ? 0 : undefined,
      })}
      {...options}>
      <MainBottomStack.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }} />
      <MainBottomStack.Screen
        name="NewContactScreen"
        component={NewContactScreen}
        options={{
          headerShown: true,
          title: "New Contact",
          headerBackTitle: "Cancel",
          headerStyle: { height: 50 },
          headerBackTitleStyle: {
            paddingHorizontal: 15,
            ...iOSUIKit.callout,
            color: iOSColors.blue,
          },
          headerBackImage: () => null,
        }}
      />
    </MainBottomStack.Navigator>
  );
}
