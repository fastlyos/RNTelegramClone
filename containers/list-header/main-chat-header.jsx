import React, { useState, useEffect, useCallback, forwardRef, useRef, memo } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";
import SearchBar from "../search-bar/search-bar";

const ChatHeader = memo(({ searchBarRef, placeholder }) => {
  //
  const scrollValue = useRef(new Animated.Value(0)).current;
  const headerHeight = scrollValue.interpolate({
    inputRange: [60, 110],
    outputRange: [60, 0],
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const marginTop = scrollValue.interpolate({
    inputRange: [-10, 0],
    outputRange: [10, 0],
    extrapolateRight: "clamp",
  });
  //
  const theme = useTheme();
  const styles = createStyles({ theme });
  const animatedStyles = createAnimatedStyles({ headerHeight, marginTop });

  const onScrollEvent = useCallback(
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: scrollValue,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    [],
  );
  searchBarRef.current.onScrollEvent = onScrollEvent;
  // searchBarRef.current.animatedStyles = animatedStyles;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Animated.View style={[styles.header, styles.borderHeader, animatedStyles.header, animatedStyles.padding]}>
      <View style={styles.searchBarBox}>
        <SearchBar placeholder={placeholder} />
      </View>
    </Animated.View>
  );
});

ChatHeader.propTypes = {};
ChatHeader.defaultProps = {};

const MainChatHeader = forwardRef((props, ref) => {
  ref.current = {
    onScrollEvent: () => {},
    // animatedStyles: {},
  };
  return <ChatHeader {...props} searchBarRef={ref} />;
});

export default MainChatHeader;

const createAnimatedStyles = ({ headerHeight = 0, marginTop = 0 }) => ({
  header: {
    height: headerHeight,
  },
  padding: {
    marginTop,
  },
});

const createStyles = ({ theme }) =>
  StyleSheet.create({
    header: {
      backgroundColor: theme.colors.card,
    },
    searchBarBox: {
      paddingVertical: 10,
      flex: 1,
    },
    borderHeader: {
      shadowRadius: 0,
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
    },
  });
