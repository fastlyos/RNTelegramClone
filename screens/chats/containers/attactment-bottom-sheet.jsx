import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
  Image,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { iOSColors } from "react-native-typography";
import { Camera } from "expo-camera";
import Constants from "expo-constants";

function AttactmentBottomSheet({ assetsList, setCloseSheet }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <View style={styles.body}>
        <View style={styles.listImages}>
          <FlatList
            horizontal
            ListHeaderComponent={() => (
              <View style={{ height: 90, width: 90, margin: 4, borderRadius: 5 }}>
                <Camera style={{ flex: 1, borderRadius: 10, overflow: "hidden" }} type={Camera.Constants.Type.back}>
                  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                      source={require("@assets/images/main/Images.xcassets/Avatar/EditAvatarIcon.imageset/SettingsCameraIcon.png")}
                      style={{ width: 44, height: 33 }}
                    />
                  </View>

                  {/* <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                      }}>
                      <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                  </View> */}
                </Camera>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            data={assetsList}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <ImageBackground
                  borderRadius={5}
                  source={{ uri: item.uri }}
                  style={{
                    height: 90,
                    width: 90,
                    margin: 4,
                  }}>
                  {/* <Text>123123123</Text> */}
                </ImageBackground>
              );
            }}
          />
        </View>
        <TouchableHighlight onPress={() => {}} style={styles.item} underlayColor={iOSColors.customGray}>
          <Text type="title3" color="blue">
            Photo or Video
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} style={styles.item} underlayColor={iOSColors.customGray}>
          <Text type="title3" color="blue">
            File
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} style={styles.item} underlayColor={iOSColors.customGray}>
          <Text type="title3" color="blue">
            Location
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} style={[styles.item, { borderBottomWidth: 0 }]} underlayColor={iOSColors.customGray}>
          <Text type="title3" color="blue">
            Contact
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.bottom}>
        <TouchableHighlight onPress={setCloseSheet} style={styles.bottomItem} underlayColor={iOSColors.customGray}>
          <Text type="title3" color="blue">
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

AttactmentBottomSheet.propTypes = {};

AttactmentBottomSheet.defaultProps = {};
export default AttactmentBottomSheet;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      height: "100%",
      width: "100%",
    },
    body: {
      borderRadius: 10,
      backgroundColor: "white",
    },
    item: {
      alignItems: "center",
      borderBottomWidth: 0.5,
      borderBottomColor: iOSColors.lightGray,
      padding: 15,
    },
    bottom: {
      borderRadius: 10,
      backgroundColor: "white",
      marginVertical: 8,
    },
    bottomItem: {
      padding: 15,
      alignItems: "center",
    },
    listImages: {
      marginVertical: 5,
    },
    panelHeader: {
      alignItems: "center",
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#00000040",
      marginBottom: 10,
    },
  });