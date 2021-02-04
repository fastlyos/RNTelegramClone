import React, { useRef, memo, useCallback, useState, useEffect, createRef } from "react";
<<<<<<< HEAD
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Animated,
  ScrollView,
  VirtualizedList as RNVirtualizedList,
  TouchableOpacity,
} from "react-native";
=======
import { StyleSheet, SafeAreaView, View, FlatList, Text, Animated, ScrollView, VirtualizedList as RNVirtualizedList, TouchableOpacity } from "react-native";
>>>>>>> origin/main
import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";
import { ContactListItem, MainChatHeader, ChatListItem, Divider } from "@app/components";
import { iOSColors } from "react-native-typography";
import CHATS from "@app/fixtures/chats";
import MESSAGES from "@app/fixtures/messages";

const CHAT_DATA = CHATS.items.map((chat) => ({
  ...chat,
  lastMessage: MESSAGES.lastMessageByIds[chat.id],
}));

const VirtualizedList = Animated.createAnimatedComponent(RNVirtualizedList);

function MainChatScreen({ navigation }) {
  const searchRef = useRef(null);
  const scrollViewRef = useRef();
  const flatListRef = useRef();
  const theme = useTheme();
  const styles = createStyles({ theme });
  const scrollViewValue = useRef(new Animated.Value(0)).current;
  const scrollFlatlistValue = useRef(new Animated.Value(0)).current;
  // const [scrollEnabled, setscrollEnabled] = useState(false);

  //
  const goto = (routName, params) => () => navigation && navigation.navigate(routName, { ...params });
  // searchRef.current.onScrollEvent(e);

  const onScrollView = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollViewValue,
          },
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  const onScrollFlatlist = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollFlatlistValue,
          },
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );
  // const animatedStyles = searchRef?.current?.animatedStyles;

  // effect
  useEffect(() => {
    scrollViewValue.addListener((e) => {
      // console.log('scrollview', e.value);
      scrollViewRef.current.setNativeProps({
        scrollEnabled: !(e.value >= 0),
        disableScrollViewPanResponder: true,
      });
    });
    scrollFlatlistValue.addListener((e) => {
      // console.log('scrollFlatlistValue', e.value);
      scrollViewRef.current.setNativeProps({
        scrollEnabled: e.value >= 0,
      });
      // flatListRef.current.setNativeProps({
      //   disableScrollViewPanResponder: true
      //   // scrollEnabled: e.value >= 0,
      // });
    });
    return () => {};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        // scrollEnabled={false}
        // scrollEnabled={scrollViewValue < 0}
        // disableScrollViewPanResponder={true}
        scrollEventThrottle={16}
        onScroll={onScrollView}
        contentContainerStyle={{ flex: 1 }}>
        <MainChatHeader ref={searchRef} />
        {/* <Animated.ScrollView
          disableScrollViewPanResponder={true}
          scrollEventThrottle={16}
          onScroll={onScrollFlatlist}
          contentContainerStyle={{ flex: 1 }}> */}
        <Animated.FlatList
          ref={flatListRef}
          // scrollEnabled={true}
          scrollEventThrottle={16}
          onScroll={onScrollFlatlist}
          data={CHAT_DATA}
          // ListHeaderComponent={() => <MainChatHeader ref={searchRef} />}
          ItemSeparatorComponent={() => <Divider />}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <ChatListItem {...item} onPress={goto("MainMessagesScreen", { item })} />}
          initialNumToRender={10}
        />
        {/* {new Array(100).fill(1).map((i, index) => {
            return <Text key={index.toString()}>1111</Text>;
          })}
        </Animated.ScrollView> */}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

MainChatScreen.propTypes = {};
MainChatScreen.defaultProps = {};
export default memo(MainChatScreen);

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.card,
    },
    // content: {
    //   flex: 1,
    // },
    // button: {
    //   padding: 16,
    //   backgroundColor: iOSColors.purple,
    // },
  });
