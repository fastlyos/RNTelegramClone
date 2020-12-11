import React, { memo, useRef, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TextInput, Animated, Easing, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "@react-navigation/native";

function SearchBar(props) {
  const theme = useTheme();
  const textinputRef = useRef();

  const animate = useRef(new Animated.Value(0)).current;

  const onFocus = () => {
    textinputRef?.current?.focus();
    Animated.timing(animate, {
      toValue: 1,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const onBlur = () => {
    // setIsFocused(false);
    animate.setValue(1);
    Animated.timing(animate, {
      toValue: 0,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  // const [isFocused, setIsFocused] = useState(false);
  // const isFocused = textinputRef?.current?.isFocused();
  const styles = createStyles({ theme });
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={onFocus}>
        <View style={styles.content}>
          <Ionicons name="ios-search" size={24} color="black" style={styles.iconSearch} />
          <View style={{ flex: 1 }}>
            <TextInput
              inlineImageLeft="search_icon"
              ref={textinputRef}
              onFocus={onFocus}
              onEndEditing={onBlur}
              defaultValue=""
              placeholder="Search"
              style={styles.textinput}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default memo(SearchBar);

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    content: {
      flex: 1,
      backgroundColor: theme.colors.backgroundCenter,
      borderRadius: 15,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    iconSearch: {
      paddingHorizontal: 10,
    },
    textinputBox: {
      flex: 0.5,
    },
    textinput: {
      fontSize: 16,
    },
  });
