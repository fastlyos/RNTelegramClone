import React, { useState, useCallback, useEffect, memo, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableHighlight, Animated, Alert, I18nManager } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text, View, Image } from "@app/components";
import { ANIMATION_FILEPATHS } from "@app/components/animation-path";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import CURRENT_USER from "@app/fixtures/currentUser";
import LottieView from "lottie-react-native";
import { SCREEN_WIDTH } from "@app/constants/Layout";

const COLORS = {
  orange: "#ffab00",
  gray: "#C8C7CD",
  red: "#dd2c00",
};

const SWIPE_RIGHT_WIDTH = 192;

const RenderRightAction = ({ text, nameIcon = "anim_archive", color, x, progress, styles, close }) => {
  const imageRef = useRef(null);
  const [isPlayAnimation, setIsPlayAnimation] = useState(false);
  const trans = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [x, 0],
    extrapolateLeft: "clamp",
  });
  const pressHandler = () => {
    // close();
    // Alert.alert(text);
    imageRef?.current?.reset();
    imageRef?.current?.play();
  };

  useEffect(() => {
    const id = progress.addListener(({ value }) => {
      if (!isPlayAnimation && value > 0.3) {
        imageRef?.current?.reset();
        imageRef?.current?.play();
        setIsPlayAnimation(true);
      }
      if (isPlayAnimation && value < 0.2) {
        imageRef?.current?.reset();
        setIsPlayAnimation(false);
      }
    });
    return () => {
      progress.removeListener(id);
    };
  }, [isPlayAnimation, imageRef]);

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
      <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
        <View style={styles.rightBox}>
          <LottieView ref={imageRef} source={ANIMATION_FILEPATHS[nameIcon]} autoPlay autoSize loop={false} style={{ flex: 1 }} />
          <View style={{ position: "absolute", bottom: 10 }}>
            <Text type="footnoteEmphasized" color="white">
              {text}
            </Text>
          </View>
        </View>
      </RectButton>
    </Animated.View>
  );
};

const renderMoreAction = (text, color, trans, styles, close) => {
  const pressHandler = () => {
    close();
    Alert.alert(text);
  };

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
      <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
        <View style={styles.rightBox}>
          <Text style={styles.actionText}>{text}</Text>
        </View>
      </RectButton>
    </Animated.View>
  );
};

const RightActionContainer = ({ progress, dragAnimatedValue, close = () => {} }) => {
  const theme = useTheme();
  const styles = createStyles();

  const LOCATION_LAST_ITEM = SWIPE_RIGHT_WIDTH / 3;
  const trans = dragAnimatedValue.interpolate({
    inputRange: [-250, -249.99, -192, 0],
    outputRange: [-250, LOCATION_LAST_ITEM, LOCATION_LAST_ITEM, 0],
    // extrapolateLeft: "clamp",
  });

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={{ width: SWIPE_RIGHT_WIDTH, flexDirection: "row" }}>
      <RenderRightAction
        text="Unmute"
        nameIcon="anim_unmute"
        color={COLORS.orange}
        x={SWIPE_RIGHT_WIDTH}
        progress={progress}
        styles={styles}
        close={close}
      />
      <RenderRightAction
        text="Delete"
        nameIcon="anim_delete"
        color={COLORS.red}
        x={(SWIPE_RIGHT_WIDTH * 2) / 3}
        progress={progress}
        styles={styles}
        close={close}
      />
      <RenderRightAction
        text="Archive"
        nameIcon="anim_archive"
        color={COLORS.gray}
        x={SWIPE_RIGHT_WIDTH / 3}
        progress={progress}
        styles={styles}
        close={close}
      />
    </View>
  );
};

//
function ChatListItem({ id, image, chatName, lastMessage, isMute, unreadCount, onPress }) {
  const swipeableRow = useRef(null);
  const theme = useTheme();
  const styles = createStyles();

  // callbacks
  const close = useCallback(() => swipeableRow?.current?.close(), []);
  const renderRightActions = useCallback(
    (progress, _dragAnimatedValue) => <RightActionContainer progress={progress} dragAnimatedValue={_dragAnimatedValue} />,
    [close, styles],
  );
  const renderLeftActions = useCallback(
    (_progress, dragX) => {
      const trans = dragX.interpolate({
        // inputRange: [0, 50, 100, 101],
        // outputRange: [-20, 0, 0, 1],
        inputRange: [0, 1],
        outputRange: [128, 0],
        // extrapolate: "clamp",
      });
      return (
        <RectButton style={styles.leftAction} onPress={close}>
          <Animated.Text
            style={[
              styles.actionText,
              {
                transform: [{ translateX: trans }],
              },
            ]}>
            Unpin
          </Animated.Text>
        </RectButton>
      );
    },
    [close],
  );
  return (
    <Swipeable
      ref={swipeableRow}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      friction={1}
      useNativeAnimations
      enableTrackpadTwoFingerGesture
      leftThreshold={40}
      rightThreshold={40}
      overshootRight
      overshootLeft>
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

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "white",
    },
    imageBox: {
      paddingVertical: 8,
      paddingHorizontal: 10,
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
    //
    leftAction: {
      // flex: 1,
      width: 128,
      backgroundColor: "#497AFC",
      justifyContent: "center",
    },
    rightAction: {
      flex: 1,
      marginRight: -SCREEN_WIDTH,
    },
    rightBox: {
      flex: 1,
      marginRight: SCREEN_WIDTH,
      alignItems: "center",
      justifyContent: "center",
    },
  });
