import PropTypes from "prop-types";
import faker from "faker";
import React, { useCallback, useEffect, useRef, useState, memo, useMemo } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
// import { BlurView, VibrancyView } from "@react-native-community/blur";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import * as Animatable from "react-native-animatable";
import { SvgIcons, Text, Image, SearchBar } from "@app/components";
import { ThemeBubbleImageItem } from "@app/containers";
import { iOSColors } from "react-native-typography";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";
import RNSearchBar from "react-native-search-bar";
import { SearchBar as RNESearchBar } from "react-native-elements";

function DevsScreen() {
  // state
  const [visible, setVisible] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [collapse, setCollapse] = useState(false);
  const searchBarRef = useRef();
  const scrollViewRef = useRef();
  const zoomOut = useRef(new Animated.Value(1)).current;
  const scrollViewValue = useRef(new Animated.Value(0)).current;
  // const [blurAmount, setBlurAmount] = useState(0);
  const handleZoomOut = Animated.timing(zoomOut, {
    toValue: 0.95,
    duration: 80,
    useNativeDriver: true,
  });
  const handleZoomIn = Animated.timing(zoomOut, {
    toValue: 1,
    duration: 80,
    useNativeDriver: false,
  });

  // callbacks
  const onScrollView = Animated.event(
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
  const handleScrollEndDrag = () => {
    setCollapse(true);
    console.log("object");
    // searchBarRef.current.handleScrollEndDrag();
    // scrollViewValue._value
  };

  // effect
  useEffect(() => {
    return () => {};
  }, []);

  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <SearchBar ref={searchBarRef} callbackNode={scrollViewValue} scrollViewRef={scrollViewRef} />
        </View>
        <Animated.ScrollView ref={scrollViewRef} onScroll={onScrollView} scrollEventThrottle={1} onScrollEndDrag={handleScrollEndDrag}>
          <View style={{ height: 1000 }}>
            <Text type="title3">12344</Text>
          </View>
          <View style={{ height: 1000 }}>
            <Text type="title3">12344</Text>
          </View>
          <View style={{ height: 1000 }}>
            <Text type="title3">12344</Text>
          </View>
          <View style={{ height: 1000 }}>
            <Text type="title3">12344</Text>
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}
DevsScreen.propTypes = {};
DevsScreen.defaultProps = {};
export default DevsScreen;

const createStyles = ({ theme }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    header: {
      borderBottomColor: iOSColors.gray,
      borderBottomWidth: 1,
      // height: 80,
    },
  });
};
