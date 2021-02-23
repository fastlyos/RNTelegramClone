import React, { useCallback, useEffect, useState, memo, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Animated, Text, View, TouchableOpacity, StatusBar, ScrollView, FlatList, Image, SafeAreaView } from "react-native";
import { SvgIcons, Divider } from "@app/components";
import { useTheme } from "@react-navigation/native";
import { iOSColors } from "react-native-typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapView, { AnimatedRegion } from "react-native-maps";
import { PLACE_LOCATIONS } from "./schema";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";
import useCurrentLocation from "@app/hooks/useCurrentLocation";
// import { ModalView } from "react-native-ios-modal";

const SUGGESTED_LOCAION_HEIGHT = 450;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;
const VISIBLE_MAPVIEW = SCREEN_HEIGHT - SUGGESTED_LOCAION_HEIGHT;

function PinLocationScreen({ navigation }) {
  const theme = useTheme();
  const modalRef = useRef(null);
  const insets = useSafeAreaInsets();
  const scrollYValue = useRef(new Animated.Value(0)).current;
  // states
  const [currentLocation] = useCurrentLocation();
  const currentRegion = useMemo(() => {
    return currentLocation?.coords
      ? {
          latitude: currentLocation?.coords?.latitude,
          longitude: currentLocation?.coords?.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      : undefined;
  }, [currentLocation]);

  const opacityTopButtons = scrollYValue.interpolate({
    inputRange: [0, VISIBLE_MAPVIEW * 0.3 - 0.1, VISIBLE_MAPVIEW * 0.3],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });

  // callbacks
  const onScrollY = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollYValue,
          },
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const goto = () => navigation && navigation.navigate("NewContact");
  const styles = createStyles({ theme, scrollYValue });

  // effects
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Animated.ScrollView style={styles.content} showsVerticalScrollIndicator={false} scrollEventThrottle={1} onScroll={onScrollY}>
        <Animated.View
          style={[
            styles.mapContainer,
            {
              transform: [
                {
                  translateY: Animated.divide(scrollYValue, 2),
                },
              ],
            },
          ]}>
          <MapView style={styles.map} region={currentRegion} loadingEnabled showsUserLocation showsMyLocationButton />
        </Animated.View>
        {/* bottom scroll */}
        <Animated.FlatList
          scrollEnabled={false}
          nestedScrollEnabled
          style={{ flex: 1, marginTop: VISIBLE_MAPVIEW }}
          contentContainerStyle={{
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 1,
          }}
          data={PLACE_LOCATIONS}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => {
            return (
              <View style={{ paddingVertical: 30 }}>
                <Text>{item.address}</Text>
              </View>
            );
          }}
        />
      </Animated.ScrollView>
      {/* top right buttons */}
      <Animated.View style={{ position: "absolute", right: 25, top: 10 + insets.top, opacity: opacityTopButtons }}>
        <View style={{ borderRadius: 8, alignItems: "center", overflow: "hidden", backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {}}>
            <SvgIcons
              name="ic_info"
              width={30}
              tintColor={"blue"}
              containerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}
            />
          </TouchableOpacity>
          <Divider style={{ width: "100%" }} />
          <TouchableOpacity onPress={() => {}}>
            <SvgIcons
              name="ic_gps"
              tintColor={"blue"}
              width={28}
              containerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

PinLocationScreen.propTypes = {};
PinLocationScreen.defaultProps = {};
export default PinLocationScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      marginTop: -50,
      flex: 1,
    },
    mapContainer: {
      marginTop: -SUGGESTED_LOCAION_HEIGHT,
      position: "absolute",
      height: SCREEN_HEIGHT + SUGGESTED_LOCAION_HEIGHT,
      width: SCREEN_WIDTH,
    },
    map: {
      flex: 1,
    },
  });
