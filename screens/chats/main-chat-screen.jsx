import React, { useRef, memo, useCallback, useState, useEffect, createRef } from "react";
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
import PropTypes from "prop-types";
import { Divider, SearchBar } from "@app/components";
import { ContactListItem, ChatListItem } from "@app/containers";
import { useTheme, useScrollToTop, useNavigation } from "@react-navigation/native";
import { iOSColors } from "react-native-typography";
import CHATS from "@app/fixtures/chats";
import MESSAGES from "@app/fixtures/messages";

const CHAT_DATA = CHATS.items.map((chat) => ({
  ...chat,
  lastMessage: MESSAGES.lastMessageByIds[chat.id],
}));

const COLORS = {
  background: "white",
  header: "rgb(247,247,247)",
  blue: "rgb(62, 120,238)",
  subtitle: "rgb(247,247,247)",
  border: "rgb(230, 230, 230)",
};

// const Virtualizedist = Animated.createAnimatedComponent(RNVirtualizedList);

function MainChatScreen() {
  // states
  const navigation = useNavigation();
  const searchBarRef = useRef(null);
  const listRef = useRef(null);
  const scrollViewValue = useRef(new Animated.Value(0)).current;
  useScrollToTop(listRef);
  const searchRef = useRef(null);
  const theme = useTheme();
  const styles = createStyles({ theme });
  const [searchText, setSearchText] = useState("");

  // callbacks
  const goto = useCallback((routName, params) => () => navigation && navigation.navigate(routName, { ...params }), [navigation]);
  const onScrollFlatlist = Animated.event(
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
      useNativeDriver: false,
    },
  );
  const heightSearchBar = scrollViewValue.interpolate({
    inputRange: [-10, 0, 60],
    outputRange: [61, 51, 0],
    extrapolateRight: "clamp",
  });

  const handleSearchbarOnFocus = useCallback(() => {}, []);
  const handleSearchbarOnCancel = useCallback(() => {}, []);

  // effect
  useEffect(() => {
    // scrollViewValue.addListener((v) => console.log(v));
    return () => {};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, { height: heightSearchBar }]}>
        <View style={styles.searchbarBox}>
          <SearchBar
            backgroundColor={COLORS.header}
            ref={searchBarRef}
            scrollViewRef={listRef}
            callbackNode={scrollViewValue}
            placeholder="Search for messages or users"
            onChangeText={setSearchText}
            onSearchButtonPress={() => {}}
            onCancel={handleSearchbarOnCancel}
            onFocus={handleSearchbarOnFocus}
            minPoint={0}
            maxPoint={30}
          />
        </View>
      </Animated.View>
      <Animated.FlatList
        ref={listRef}
        scrollEventThrottle={1}
        onScroll={onScrollFlatlist}
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
export default MainChatScreen;

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
      paddingHorizontal: 8,
      borderBottomColor: COLORS.border,
      borderBottomWidth: 1,
    },
    flatlist: {
      paddingTop: 60,
      backgroundColor: COLORS.background,
    },
    flatlistContainer: {
      paddingBottom: 60,
    },
    searchbarBox: {
      paddingVertical: 8,
    },
    // content: {
    //   flex: 1,
    // },
    // button: {
    //   padding: 16,
    //   backgroundColor: iOSColors.purple,
    // },
  });
