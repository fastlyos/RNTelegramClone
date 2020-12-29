import _ from "lodash";
import React, { memo, useCallback, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
// components
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  View,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { ContactListItem, ChatListItem, Divider, Text, MessageListItem, MessageTyping, SearchListHeader } from "@app/components";

// theme
import { useTheme } from "@react-navigation/native";
import { iOSColors } from "react-native-typography";
// DATA
import CHATS from "@app/fixtures/chats";
import MESSAGES from "@app/fixtures/messages";
import CONTACTS from "@app/fixtures/contacts";

// containers
import AttactmentBottomSheet from "./containers/attactment-bottom-sheet";
import { STICKERS } from "./schema";

const keyboardVerticalOffset = Platform.OS === "ios" ? 95 : 0;

function BottomStickers() {
  const theme = useTheme();
  const styles = createStyles({ theme });

  return (
    <View style={styles.bottomView}>
      {/* Stickers */}
      <View style={styles.stickerView}>
        <View style={styles.stickerHeader}>
          <FlatList
            horizontal
            data={STICKERS}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return <View style={styles.stickerHeaderItem} />;
            }}
          />
        </View>
        <View style={styles.stickerBody}>
          <FlatList
            ListHeaderComponent={() => <View style={styles.headerBottomWrapper} />}
            numColumns={5}
            contentContainerStyle={{ alignItems: "center" }}
            data={STICKERS[0].data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return <View style={styles.stickerBodyItem} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}

function MainMessagesScreen({ navigation, route }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const chat = route.params?.item;
  const DATA_MESSAGES = _.sortBy(
    MESSAGES.items.filter((mess) => mess.chatId === chat.id),
    "createdAt",
  ).reverse();

  //
  const goto = (routName) => () => navigation && navigation.navigate(routName);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={keyboardVerticalOffset}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <FlatList
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                inverted={true}
                data={DATA_MESSAGES}
                // ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item, index }) => <MessageListItem data={item} />}
                // initialNumToRender={10}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.bottom}>
            <MessageTyping />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <Animated.View
        pointerEvents="none"
        style={[
          styles.opacityView,
          {
            opacity: Animated.interpolate(fall, {
              inputRange: [0, 1],
              outputRange: [0.6, 0],
            }),
          },
        ]}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[430, -50]}
        initialSnap={1}
        enabledGestureInteraction
        enabledInnerScrolling
        enabledContentGestureInteraction
        enabledHeaderGestureInteraction
        callbackNode={fall}
        // borderRadius={10}
        renderContent={() => <AttactmentBottomSheet assetsList={assetsList} setCloseSheet={setCloseSheet} />}
      />
    </>
  );
}

MainMessagesScreen.propTypes = {};
MainMessagesScreen.defaultProps = {};
export default MainMessagesScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    bottom: {},
    bottomView: {
      // position: 'absolute',
      height: 346,
    },
    stickerView: {
      flex: 1,
    },
    stickerHeader: {
      backgroundColor: "blue",
    },
    stickerHeaderItem: {
      height: 30,
      width: 30,
      backgroundColor: "red",
      marginHorizontal: 10,
      marginVertical: 6,
    },
    stickerBody: {
      flex: 1,
    },
    stickerBodyItem: {
      height: 60,
      width: 60,
      backgroundColor: "gray",
      marginHorizontal: 8,
      marginVertical: 6,
    },
    headerBottomWrapper: {
      width: 300,
      height: 30,
      backgroundColor: "red",
    },
    opacityView: {
      height: "100%",
      width: "100%",
      position: "absolute",
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "black",
      opacity: 0.3,
    },
  });
