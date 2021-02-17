import React, { memo, useRef, useState, useEffect, useCallback, createRef, forwardRef } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  TextInput,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  UIManager,
  Platform,
  LayoutAnimation,
} from "react-native";
import { SvgIcons } from "@app/components/icons";
import { View } from "@app/components/view";
import { Text } from "@app/components/text";
import { useTheme } from "@react-navigation/native";
import { iOSColors, iOSUIKit } from "react-native-typography";

const COLORS = {
  background: "rgb(240, 240, 240)",
  touch: "rgb(210, 210, 210)",
  text: "rgb(135,135,135)",
};

const MIN_HEIGHT = 30;
const MAX_HEIGHT = 60;
const MIDDLE_POINT = (MAX_HEIGHT + MIN_HEIGHT) * 0.5;

function SearchBar({ searchBarRef, scrollViewRef, placeholder, callbackNode, ...props }) {
  // state
  const [hasFocus, setHasFocus] = useState(false);
  const [text, setText] = useState("");
  const [showCancel, setShowCancel] = useState(false);
  const [cancelButtonWidth, setCancelButtonWidth] = useState(null);

  const opacity = callbackNode.interpolate({
    inputRange: [0, 30, 35, 40, 45, 60],
    outputRange: [1, 0.9, 0.3, 0, 0, 0],
  });
  const maxHeight = callbackNode.interpolate({
    inputRange: [MIN_HEIGHT, MAX_HEIGHT],
    outputRange: [30, -10],
  });

  // callbacks
  const onFocus = useCallback(() => {
    UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
    searchBarRef?.current?.focus();
    setHasFocus(true);
    setShowCancel(true);
  }, []);
  const onBlur = useCallback(() => {
    UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
    setHasFocus(false);
    setText("");
  }, []);
  const onCancel = useCallback(() => {
    UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
    setHasFocus(false);
    setShowCancel(false);
    searchBarRef?.current?.clear();
    searchBarRef?.current?.blur();
    setText("");
  }, [searchBarRef]);
  const handleCollapse = useCallback(() => {
    scrollViewRef?.current?.scrollTo({ animated: true, y: MAX_HEIGHT });
    console.log("scrollup");
  }, [scrollViewRef]);
  const handleExpand = useCallback(() => {
    scrollViewRef?.current?.scrollTo({ animated: true, y: MIN_HEIGHT });
    console.log("scrolldown");
  }, [scrollViewRef]);

  const handleScrollEndDrag = useCallback(() => {
    if (hasFocus) return null;
    if (callbackNode._value > MIDDLE_POINT && callbackNode._value < MAX_HEIGHT) handleCollapse();
    if (callbackNode._value > MIN_HEIGHT && callbackNode._value < MIDDLE_POINT) handleExpand();
  }, [handleCollapse, handleExpand]);

  useEffect(() => {
    searchBarRef.current.handleScrollEndDrag = handleScrollEndDrag;
    return () => {};
  }, [searchBarRef, handleScrollEndDrag]);

  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableHighlight
          touchSoundDisabled
          disabled={hasFocus}
          style={styles.contentPress}
          underlayColor={COLORS.touch}
          onPressOut={onFocus}
          onPress={onFocus}
          onLongPress={onFocus}
          delayLongPress={90}>
          <Animated.View style={[styles.content, !hasFocus && { maxHeight, opacity }]}>
            <SvgIcons name="ic_search" tintColor={COLORS.text} style={{ marginHorizontal: 5, marginTop: 2 }} size={22} />
            <View style={{ flex: showCancel ? 1 : 0 }}>
              <TextInput
                // editable={false}
                placeholderTextColor={COLORS.text}
                ref={searchBarRef}
                onFocus={onFocus}
                onEndEditing={onBlur}
                returnKeyType="search"
                defaultValue={text}
                onChangeText={(_text) => setText(_text)}
                placeholder={placeholder}
                style={iOSUIKit.body}
              />
            </View>
            {text !== "" && (
              <TouchableOpacity onPress={() => setText("")}>
                <SvgIcons name="ic_search_clear" tintColor={COLORS.text} size={24} style={{ marginHorizontal: 2 }} />
              </TouchableOpacity>
            )}
          </Animated.View>
        </TouchableHighlight>
        {showCancel && (
          <TouchableOpacity
            onLayout={(event) => setCancelButtonWidth(event.nativeEvent.layout.width)}
            style={[
              styles.cancel,
              {
                opacity: 1,
                right: showCancel ? 0 : -cancelButtonWidth,
              },
            ]}
            onPress={onCancel}>
            <Text type="body" color={iOSColors.blue}>
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const ForwardedSearchBar = forwardRef((props, ref) => <SearchBar {...props} searchBarRef={ref} />);
export default ForwardedSearchBar;

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};
SearchBar.defaultProps = {
  placeholder: "Search",
};

const createStyles = ({ theme }) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    contentPress: {
      flex: 1,
      flexGrow: 1,
      backgroundColor: COLORS.background,
      borderRadius: 10,
      overflow: "hidden",
    },
    content: {
      // paddingVertical: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // opacity: 0.1,
      // height: 20,
    },
    cancel: {
      paddingLeft: 10,
    },
  });
};
