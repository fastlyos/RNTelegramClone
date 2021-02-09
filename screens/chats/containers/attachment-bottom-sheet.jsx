import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import {
  StyleSheet,
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
import { CircleSelect, Text } from "@app/components";

export const ACTION_ELEMENTS = [
  {
    id: 1,
    title: "Photo or Video",
  },
  {
    id: 2,
    title: "File",
  },
  {
    id: 3,
    title: "Location",
  },
  {
    id: 4,
    title: "Contact",
  },
];

export const ACTION_AFTER_SELECT_ELEMENTS = [
  {
    id: 1,
    title: ({ number }) => `Send ${number} Photo`,
  },
  {
    id: 2,
    title: "Send as File",
  },
];

function AttachmentBottomSheet({
  visible,
  assetsList,
  selectArray,
  setAssetsList,
  setCloseSheet,
  handlePressItemImage,
  handleSelectImage,
}) {
  // states
  const theme = useTheme();
  const styles = createStyles({ theme });

  // effects

  return (
    <View style={{ paddingHorizontal: 8 }}>
      <View style={styles.body}>
        <View style={styles.listImages}>
          <FlatList
            horizontal
            ListHeaderComponent={() => (
              <View style={{ height: 90, width: 90, margin: 4, borderRadius: 5, backgroundColor: iOSColors.black }}>
                {visible && (
                  <Camera style={{ flex: 1, borderRadius: 10, overflow: "hidden" }} type={Camera.Constants.Type.back}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                      <Image
                        source={require("@app/assets/images/main/Images.xcassets/Avatar/EditAvatarIcon/SettingsCameraIcon.png")}
                        style={{ width: 44, height: 33 }}
                      />
                    </View>
                  </Camera>
                )}
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
                  <TouchableOpacity style={{ flex: 1 }} onPress={() => handlePressItemImage(item, index)} />
                  <View style={{ position: "absolute", width: "100%", alignItems: "flex-end", padding: 4 }}>
                    <CircleSelect number={item.selectedNumber} activeOpacity={1} onPress={() => handleSelectImage(index)} />
                  </View>
                </ImageBackground>
              );
            }}
          />
        </View>
        {selectArray.length === 0 && (
          <>
            {ACTION_ELEMENTS.map((item) => (
              <TouchableHighlight onPress={() => {}} style={styles.item} underlayColor={iOSColors.customGray}>
                <Text type="title3" color="blue">
                  {typeof item.title === "string" ? item.title : item.title({})}
                </Text>
              </TouchableHighlight>
            ))}
          </>
        )}
        {selectArray.length > 0 && (
          <>
            {ACTION_AFTER_SELECT_ELEMENTS.map((item) => (
              <TouchableHighlight onPress={() => {}} style={styles.item} underlayColor={iOSColors.customGray}>
                <Text type="title3Emphasized" color="blue">
                  {typeof item.title === "string" ? item.title : item.title({ number: selectArray.length })}
                </Text>
              </TouchableHighlight>
            ))}
          </>
        )}
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

AttachmentBottomSheet.propTypes = {
  visible: PropTypes.bool.isRequired,
  assetsList: PropTypes.array.isRequired,
  selectArray: PropTypes.array.isRequired,
  handlePressItemImage: PropTypes.func.isRequired,
  handleSelectImage: PropTypes.func.isRequired,
  setCloseSheet: PropTypes.func.isRequired,
  setAssetsList: PropTypes.func.isRequired,
};

AttachmentBottomSheet.defaultProps = {
  visible: false,
  assetsList: [],
  selectArray: [],
  handlePressItemImage: () => {},
  handleSelectImage: () => {},
  setCloseSheet: () => {},
  setAssetsList: () => {},
};
export default AttachmentBottomSheet;

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
