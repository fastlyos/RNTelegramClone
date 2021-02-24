import React, { memo, useRef, useState, useEffect, useCallback, createRef, forwardRef } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  TextInput,
  Animated,
  Easing,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
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
  background: "rgb(233, 233, 233)",
  touch: "rgb(210, 210, 210)",
  text: "rgb(135,135,135)",
  border: "rgb(235, 235,235)",
};

const MIN_POINT = 26;
const MAX_POINT = 70;

function SearchBar({
  searchBarRef,
  backgroundColor,
  scrollViewRef,
  placeholder,
  callbackNode,
  onFocus,
  onBlur,
  onCancel,
  onChangeText,
  minPoint,
  maxPoint,
}) {
  const MIDDLE_POINT = minPoint + (maxPoint - minPoint) * 0.5;
  const QUARTER_POINT = minPoint + (maxPoint - minPoint) * 0.25;

  // state
  // const searchBarRef = useRef(searchBarForwardRef);
  const [hasFocus, setHasFocus] = useState(false);
  const [text, setText] = useState("");
  const [showCancel, setShowCancel] = useState(false);
  const [cancelButtonWidth, setCancelButtonWidth] = useState(null);

  const opacity = callbackNode.interpolate({
    inputRange: [0, minPoint, QUARTER_POINT, MIDDLE_POINT, maxPoint],
    outputRange: [1, 0.9, 0.3, 0, 0],
  });
  const maxHeight = callbackNode.interpolate({
    inputRange: [minPoint, maxPoint],
    outputRange: [40, 0],
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // callbacks
  const handleOnFocus = useCallback((e) => {
    LayoutAnimation.configureNext(LayoutAnimation.create(250, "linear", "opacity"));
    if (!searchBarRef.current?.isFocused()) {
      searchBarRef?.current?.focus();
      return null;
    }
    onFocus && onFocus(e);
    setHasFocus(true);
    setShowCancel(true);
  }, []);
  const handleOnBlur = useCallback((e) => {
    LayoutAnimation.configureNext(LayoutAnimation.create(250, "linear", "opacity"));
    onBlur && onBlur(e);
    setHasFocus(false);
    // setText("");
  }, []);
  const handleOnCancel = useCallback(
    (e) => {
      LayoutAnimation.configureNext(LayoutAnimation.create(250, "linear", "opacity"));
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
      toValue: maxPoint,
      duration: 100,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [scrollViewRef]);
  const handleExpand = useCallback(() => {
    Animated.timing(callbackNode, {
      toValue: minPoint,
      duration: 100,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [scrollViewRef]);
  const handleScrollEndDrag = useCallback(() => {
    if (hasFocus) return null;
    if (callbackNode._value >= MIDDLE_POINT && callbackNode._value <= maxPoint) handleCollapse();
    if (callbackNode._value >= minPoint && callbackNode._value < MIDDLE_POINT) handleExpand();
  }, [handleCollapse, handleExpand]);
  const handleOnChangeText = useCallback(
    (txt) => {
      onChangeText(txt);
      setText(txt);
    },
    [onChangeText],
  );
  const handleClearText = useCallback(() => {
    onChangeText("");
    setText("");
  }, []);

  // effect
  useEffect(() => {
    if (searchBarRef?.current) searchBarRef.current.handleScrollEndDrag = handleScrollEndDrag;
    if (searchBarRef?.current) searchBarRef.current.handleOnCancel = handleOnCancel;
    return () => {};
  }, [searchBarRef, handleScrollEndDrag]);

  const theme = useTheme();
  const styles = createStyles({ theme, backgroundColor });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
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
                placeholderTextColor={COLORS.text}
                ref={searchBarRef}
                numberOfLines={1}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                returnKeyType="search"
                defaultValue={text}
                onChangeText={handleOnChangeText}
                placeholder={placeholder}
                style={iOSUIKit.body}
              />
            </View>
            {text !== "" && (
              <TouchableOpacity onPress={handleClearText}>
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
    </SafeAreaView>
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
  minPoint: PropTypes.number,
  maxPoint: PropTypes.number,
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
  minPoint: MIN_POINT,
  maxPoint: MAX_POINT,
};

const createStyles = ({ theme, backgroundColor }) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor,
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
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    cancel: {
      paddingLeft: 10,
    },
  });
};
