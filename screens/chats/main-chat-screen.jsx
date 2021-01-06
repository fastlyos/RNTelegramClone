import React, { useRef, memo, useCallback, useState, useEffect, createRef } from "react";
import { StyleSheet, SafeAreaView, View, FlatList, Text, Animated, ScrollView, VirtualizedList as RNVirtualizedList, TouchableOpacity } from "react-native";
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
  const theme = useTheme();
  const styles = createStyles({ theme });

  //
  const goto = (routName, params) => () => navigation && navigation.navigate(routName, { ...params });

  // const onScrollFlatlist = Animated.event(
  //   [
  //     {
  //       nativeEvent: {
  //         contentOffset: {
  //           y: scrollFlatlistValue,
  //         },
  //       },
  //     },
  //   ],
  //   {
  //     useNativeDriver: false,
  //   },
  // );

  // effect
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.header}>
        <MainChatHeader ref={searchRef} placeholder={"Search for messages or users"} />
      </Animated.View>
      <Animated.FlatList
        scrollEventThrottle={16}
        onScroll={(e) => searchRef.current?.onScrollEvent(e)}
        data={CHAT_DATA}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ChatListItem {...item} onPress={goto("MainMessagesScreen", { item })} />}
        initialNumToRender={10}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
      />
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
    header: {
      position: "absolute",
      width: "100%",
      zIndex: 2,
      backgroundColor: theme.colors.card,
    },
    flatlist: {
      paddingTop: 60,
    },
    flatlistContainer: {
      paddingBottom: 60,
    },
    // content: {
    //   flex: 1,
    // },
    // button: {
    //   padding: 16,
    //   backgroundColor: iOSColors.purple,
    // },
  });
