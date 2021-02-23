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

const LIST_ACTIONS = [
  {
    id: 1,
    title: "Reply",
    iconName: "ic_lt_reply",
    color: "black",
  },
  {
    id: 2,
    title: "Pin",
    iconName: "ic_lt_pin",
    color: "black",
  },
  {
    id: 3,
    title: "Forward",
    iconName: "ic_lt_forward",
    color: "black",
  },
  {
    id: 4,
    title: "Delete",
    iconName: "ic_lt_delete",
    color: "red",
  },
  {
    id: 5,
    title: "Select",
    iconName: "ic_select",
    color: "black",
  },
];

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
    // Animated.timing(blurAmount, {
    //   toValue: 100,
    //   duration: 1000,
    //   useNativeDriver: true,
    // }).start();
    return () => {};
  }, []);

  const theme = useTheme();
  const styles = createStyles({ theme, zoomOut });
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "rgb(179, 185, 194)",
        },
      ]}>
      <View style={{ height: 100, width: 100, backgroundColor: "red" }} />
      <BlurView intensity={visible ? 95 : 0} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={{ flex: 1 }}>
            <View style={{ alignItems: "flex-end", paddingTop: 100 }}>
              <TouchableOpacity
                style={styles.zoomOut}
                activeOpacity={1}
                onPressOut={() => {
                  // console.log("onPressOut");
                  handleZoomOut.stop();
                  handleZoomIn.start();
                }}
                onPressIn={() => handleZoomOut.start()}
                onPress={() => setVisible(false)}
                delayLongPress={200}
                onLongPress={() => {
                  setVisible(true);
                  handleZoomOut.stop();
                  handleZoomIn.start();
                }}>
                <Image name="ChannelIntro" />
              </TouchableOpacity>
            </View>
            {visible && (
              <Animatable.View animation="slideInDown" duration={80} style={styles.listActions}>
                <FlatList
                  style={{
                    borderWidth: 0.5,
                    borderRadius: 20,
                    borderColor: iOSColors.customGray,
                  }}
                  scrollEnabled={false}
                  keyExtractor={(item) => String(item.id)}
                  data={LIST_ACTIONS}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity style={styles.itemView} onPress={() => {}}>
                        <Text type="body" color={item.color}>
                          {item.title}
                        </Text>
                        <SvgIcons name={item.iconName} fill={item.color} />
                      </TouchableOpacity>
                    );
                  }}
                />
              </Animatable.View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </BlurView>
    </View>
  );
}
DevsScreen.propTypes = {};
DevsScreen.defaultProps = {};
export default DevsScreen;

const createStyles = ({ theme, zoomOut }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    nonBlurredContent: {
      flex: 1,
      // height: SCREEN_HEIGHT,
      // width: SCREEN_WIDTH,
    },
    zoomOut: {
      transform: [
        {
          scale: zoomOut,
        },
      ],
    },
    blurredImage: {
      width: 192,
      height: 192,
    },
    listActions: {
      paddingTop: 20,
      paddingHorizontal: 30,
    },
    itemView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderWidth: 0.5,
      backgroundColor: "rgb(226,227,229)",
      borderColor: iOSColors.customGray,
    },
  });
};
