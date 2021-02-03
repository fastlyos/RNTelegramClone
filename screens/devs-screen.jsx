import PropTypes from "prop-types";
import faker from "faker";
import React, { useCallback, useEffect, useRef, useState, memo, useMemo } from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, Animated } from "react-native";
// import { BlurView, VibrancyView } from "@react-native-community/blur";
import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import * as Animatable from "react-native-animatable";
import { SvgIcons, Text, Image } from "@app/components";
import { iOSColors } from "react-native-typography";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";

function DevsScreen() {
  // state
  const [visible, setVisible] = useState(false);
  const zoomOut = useRef(new Animated.Value(1)).current;
  // const [blurAmount, setBlurAmount] = useState(0);
  const handleZoomOut = Animated.timing(zoomOut, {
    toValue: 0.95,
    duration: 80,
    useNativeDriver: true,
  });
  const handleZoomIn = Animated.timing(zoomOut, {
    toValue: 1,
    duration: 80,
    useNativeDriver: true,
  });

  // effect
  useEffect(() => {
    return () => {};
  }, []);

  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <View style={[styles.container]}>
      <Text>1234</Text>
    </View>
  );
}
DevsScreen.propTypes = {};
DevsScreen.defaultProps = {};
export default DevsScreen;

const createStyles = ({ theme }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
