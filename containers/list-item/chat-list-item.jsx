import React, { useCallback, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableHighlight, Animated } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@app/components/text";
import { View } from "@app/components/view";
import Image from "@app/components/image/image";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import CURRENT_USER from "@app/fixtures/currentUser";

const renderRightActions = (progress, dragX) => {
  // const theme = useTheme();
  const styles = StyleSheet.create({});
  const currentuser = CURRENT_USER;
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101, 200],
    outputRange: [-5, 0, 0, 1, 1],
  });

  return (
    <RectButton style={styles.leftAction} onPress={() => {}}>
      <Animated.Text
        style={[
          styles.actionText,
          {
            transform: [{ translateX: trans }],
          },
        ]}>
        Share
      </Animated.Text>
    </RectButton>
  );
};

const renderLeftActions = (progress, dragX) => {
  // const theme = useTheme();
  const styles = StyleSheet.create({});
  const currentuser = CURRENT_USER;
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101, 200],
    outputRange: [-5, 0, 0, 1, 1],
  });

  return (
    <RectButton style={styles.leftAction} onPress={() => {}}>
      <Animated.Text
        style={[
          styles.actionText,
          {
            transform: [{ translateX: trans }],
          },
        ]}>
        Share
      </Animated.Text>
    </RectButton>
  );
};

function ChatListItem({ id, image, chatName, lastMessage, isMute, unreadCount, onPress }) {
  const theme = useTheme();
  return (
    <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions} overshootRight={false}>
      <TouchableHighlight style={styles.container} onPress={onPress} activeOpacity={1} underlayColor={theme.colors.backgroundCenter}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={[styles.content]}>
            <Text type="subheadEmphasized" ellipsizeMode="tail" numberOfLines={2}>
              {chatName}
            </Text>
            <Text ellipsizeMode="tail" numberOfLines={2} allowFontScaling>
              {lastMessage.body}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

ChatListItem.propTypes = {};
ChatListItem.defaultProps = {};

export default memo(ChatListItem);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  imageBox: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    // width: 60,
    // height: 60,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});
