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
  LayoutAnimation,
} from "react-native";
import { SvgIcons } from "@app/components/icons";
import { View } from "@app/components/view";
import { Text } from "@app/components/text";
import { useTheme } from "@react-navigation/native";
// import { Header } from "@react-navigation/stack";
import { iOSColors, iOSUIKit } from "react-native-typography";

const COLORS = {
  background: "rgb(240, 240, 240)",
  touch: "rgb(210, 210, 210)",
  text: "rgb(135,135,135)",
  border: "rgb(235, 235,235)",
};

const MIN_POINT = 26;
const MAX_POINT = 70;
const MIDDLE_POINT = MIN_POINT + (MAX_POINT - MIN_POINT) * 0.5;
const QUARTER_POINT = MIN_POINT + (MAX_POINT - MIN_POINT) * 0.25;

function SearchBar({ searchBarRef, backgroundColor, scrollViewRef, placeholder, callbackNode, onFocus, onBlur, onCancel }) {
  // state
  // const searchBarRef = useRef(searchBarForwardRef);
  const [hasFocus, setHasFocus] = useState(false);
  const [text, setText] = useState("");
  const [showCancel, setShowCancel] = useState(false);
  const [cancelButtonWidth, setCancelButtonWidth] = useState(null);
  const opacity = callbackNode.interpolate({
    inputRange: [0, MIN_POINT, QUARTER_POINT, MIDDLE_POINT, MAX_POINT],
    outputRange: [1, 0.9, 0.3, 0, 0],
  });
  const maxHeight = callbackNode.interpolate({
    inputRange: [MIN_POINT, MAX_POINT],
    outputRange: [40, 0],
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // callbacks
  const handleOnFocus = useCallback((e) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (!searchBarRef.current?.isFocused()) {
      searchBarRef?.current?.focus();
      return null;
    }
    onFocus && onFocus(e);
    setHasFocus(true);
    setShowCancel(true);
  }, []);
  const handleOnBlur = useCallback((e) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onBlur && onBlur(e);
    setHasFocus(false);
    setText("");
  }, []);
  const handleOnCancel = useCallback(
    (e) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      onCancel && onCancel(e);
      searchBarRef?.current?.clear();
      searchBarRef?.current?.blur();
      setHasFocus(false);
      setShowCancel(false);
      setText("");
    },
    [searchBarRef],
  );
  const handleCollapse = useCallback(() => {
    Animated.timing(callbackNode, {
      toValue: MAX_POINT,
      duration: 100,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [scrollViewRef]);
  const handleExpand = useCallback(() => {
    Animated.timing(callbackNode, {
      toValue: MIN_POINT,
      duration: 100,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [scrollViewRef]);
  const handleScrollEndDrag = useCallback(() => {
    if (hasFocus) return null;
    if (callbackNode._value >= MIDDLE_POINT && callbackNode._value <= MAX_POINT) handleCollapse();
    if (callbackNode._value >= MIN_POINT && callbackNode._value < MIDDLE_POINT) handleExpand();
  }, [handleCollapse, handleExpand]);

  // effect
  useEffect(() => {
    if (searchBarRef?.current) searchBarRef.current.handleScrollEndDrag = handleScrollEndDrag;
    return () => {};
  }, [searchBarRef, handleScrollEndDrag]);

  const theme = useTheme();
  const styles = createStyles({ theme, backgroundColor });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableHighlight
          touchSoundDisabled
          disabled={hasFocus}
          style={styles.contentPress}
          underlayColor={COLORS.touch}
          onPressOut={handleOnFocus}
          onLongPress={handleOnFocus}
          delayLongPress={100}>
          <Animated.View style={[styles.content, !hasFocus && { maxHeight, opacity }]}>
            <SvgIcons name="ic_search" tintColor={COLORS.text} style={{ marginHorizontal: 5, marginTop: 2 }} size={22} />
            <View style={{ flex: showCancel ? 1 : 0 }}>
              <TextInput
                // editable={hasFocus}
                placeholderTextColor={COLORS.text}
                ref={searchBarRef}
                numberOfLines={1}
                onFocus={handleOnFocus}
                onEndEditing={handleOnBlur}
                returnKeyType="search"
                defaultValue={text}
                onChangeText={(txt) => setText(txt)}
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
            onPress={handleOnCancel}>
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
  callbackNode: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onCancel: PropTypes.func,
  backgroundColor: PropTypes.string,
};
SearchBar.defaultProps = {
  placeholder: "Search",
  callbackNode: {
    interpolate: () => null,
    _value: 0,
  },
  onFocus: () => {},
  onBlur: () => {},
  onCancel: () => {},
  backgroundColor: "white",
};

const createStyles = ({ theme, backgroundColor }) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor,
      borderBottomColor: COLORS.border,
      borderBottomWidth: 1,
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    contentPress: {
      flex: 1,
      flexGrow: 1,
      backgroundColor: COLORS.background,
      // backgroundColor: 'red',
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
