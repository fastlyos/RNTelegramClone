import _ from "lodash";
import React, { memo, useCallback, useMemo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Camera } from "expo-camera";

// components
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  ScrollView,
  View,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
// import ImageView from "@app/submodules/react-native-image-viewing/dist";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { ContactListItem, ChatListItem, Divider, Text, MessageListItem, MessageTyping, SearchListHeader } from "@app/components";

// theme
import { useTheme } from "@react-navigation/native";
import { iOSColors, iOSUIKit } from "react-native-typography";
// DATA
import CHATS from "@app/fixtures/chats";
import MESSAGES from "@app/fixtures/messages";
import CONTACTS from "@app/fixtures/contacts";

// containers
// import AttachmentBottomSheet from "./containers/attachment-bottom-sheet";
import { STICKERS } from "./schema";

const keyboardVerticalOffset = Platform.OS === "ios" ? 95 : 0;

function BottomStickers() {
  const theme = useTheme();
  const styles = createStyles({ theme });

  return (
    <View style={styles.bottomView}>
      {/* Stickers */}
      <View style={styles.stickerView}>
        <View style={styles.stickerHeader}>
          <FlatList
            horizontal
            data={STICKERS}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return <View style={styles.stickerHeaderItem} />;
            }}
          />
        </View>
        <View style={styles.stickerBody}>
          <FlatList
            ListHeaderComponent={() => <View style={styles.headerBottomWrapper} />}
            numColumns={5}
            contentContainerStyle={{ alignItems: "center" }}
            data={STICKERS[0].data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return <View style={styles.stickerBodyItem} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}

function FooterComponent() {
  const [focus, setFocus] = useState(false);
  const textInputRef = useRef(null);
  const [value, setValue] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <KeyboardAvoidingView keyboardVerticalOffset={300} behavior={Platform.OS === "ios" ? "padding" : "position"} style={{ flex: 1 }}> */}
      <View style={{ alignItems: "center", paddingVertical: 25, paddingHorizontal: 10 }}>
        <TextInput
          ref={textInputRef}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            if (!value) setFocus(false);
          }}
          value={value}
          onChangeText={setValue}
          placeholder="Add a caption..."
          style={[
            iOSUIKit.body,
            { color: iOSColors.white },
            focus && {
              borderRadius: 20,
              backgroundColor: "rgba(255,255,255,0.08)",
              paddingHorizontal: 15,
              paddingVertical: 5,
              width: "100%",
            },
          ]}
          placeholderTextColor={iOSColors.customGray}
        />
      </View>
      {/* </KeyboardAvoidingView> */}
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15 }}>
        <View style={{ width: 40, height: 40, backgroundColor: "red" }} />
        <View style={{ width: 40, height: 40, backgroundColor: "red" }} />
        <View style={{ width: 40, height: 40, backgroundColor: "red" }} />
        <View style={{ width: 40, height: 40, backgroundColor: "red" }} />
        <View style={{ width: 40, height: 40, backgroundColor: "blue" }} />
      </View>
    </SafeAreaView>
  );
}

function MainMessagesScreen({ navigation, route }) {
  const sheetRef = useRef(null);
  const theme = useTheme();
  const styles = createStyles({ theme });

  const chat = route.params?.item;
  const DATA_MESSAGES = _.sortBy(
    MESSAGES.items.filter((mess) => mess.chatId === chat.id),
    "createdAt",
  ).reverse();
  const groups = _.groupBy(MESSAGES.items, (item) => moment(item).startOf("day").format());

  // states
  const fall = useRef(new Animated.Value(1)).current;
  const [isVisibleStickers, setVisibleStickers] = useState(false);
  const [isVisibleAttachments, setVisibleAttachments] = useState(false);
  const [assetsList, setAssetsList] = useState([]);
  const [isShowReply, setIsShowReply] = useState(false);
  const [isVisibleImageViewer, setIsVisibleImageViewer] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectArray, setSelectArray] = useState([]);
  // const [viewImages, setViewImages] = useState([]);

  // callbacks
  const goto = useCallback((routName) => () => navigation && navigation.navigate(routName), [navigation]);
  const setCloseSheet = () => sheetRef.current?.snapTo(1);
  const setOpenSheet = () => sheetRef.current?.snapTo(0);
  const handlePressStickers = useCallback(() => {
    Keyboard.dismiss();
    setVisibleStickers(true);
  }, []);
  const handleFocusMessageTyping = useCallback(() => {
    setVisibleStickers(false);
  }, []);
  const handlePressAtachment = useCallback(() => {
    Keyboard.dismiss();
    setVisibleStickers(false);
    setOpenSheet();
  }, []);
  const handlePressVoice = useCallback(() => {
    Keyboard.dismiss();
    // setIsVisible(true);
  }, []);
  const handlePressItemImage = useCallback((item, index) => {
    setImageIndex(index);
    setIsVisibleImageViewer(true);
  }, []);
  const handleSelectImage = useCallback(
    (index) => {
      let assetsListTemp = assetsList.map((i) => i);
      let selectArrayTemp = [...selectArray];
      const selectedNumberArray = _.map(assetsList, (i) => i.selectedNumber);
      const targetNumber = selectedNumberArray[index];
      if (!_.includes(selectArrayTemp, index)) {
        selectArrayTemp.push(index);
      } else {
        selectArrayTemp = selectArrayTemp.filter((i) => i !== index);
      }
      assetsListTemp = assetsListTemp.map((item, idx) => ({
        ...item,
        selectedNumber: _.findIndex(selectArrayTemp, (i) => i === idx) + 1,
      }));
      setAssetsList(assetsListTemp);
      setSelectArray(selectArrayTemp);
    },
    [assetsList, selectArray],
  );

  // effects
  // useEffect(() => {
  //   Keyboard.addListener("keyboardDidShow", (e) => {
  //     // console.log(e.endCoordinates.height);
  //   });
  // }, []);

  useEffect(() => {
    (async () => {
      const { granted } = await MediaLibrary.requestPermissionsAsync();
      if (granted) {
        const response = await MediaLibrary.getAssetsAsync({ mediaType: MediaLibrary.MediaType.photo });
        const { assets = [] } = response;
        assets.sort((a, b) => b.creationTime - a.creationTime);
        setAssetsList(assets);
      }
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
    })();
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.content}>
            <FlatList
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              inverted={true}
              on
              data={DATA_MESSAGES}
              // ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item, index }) => <MessageListItem data={item} />}
              // initialNumToRender={10}
            />
            {/* Pin message */}
            <TouchableHighlight
              style={{
                position: "absolute",
                height: 50,
                width: "100%",
                backgroundColor: iOSColors.customGray,
                paddingHorizontal: 10,
                borderBottomWidth: 0.5,
                borderBottomColor: iOSColors.lightGray2,
              }}
              underlayColor={theme.colors.backgroundCenter}
              onPress={() => {}}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text type="footnoteEmphasized" color="blue">
                    Pined Message
                  </Text>
                  <Text type="footnote" ellipsizeMode="tail" numberOfLines={1}>
                    {DATA_MESSAGES[0].body}
                  </Text>
                </View>
                <View style={{ height: 50, width: 30, backgroundColor: iOSColors.blue }} />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.bottom}>
            <MessageTyping
              onPressVoice={handlePressVoice}
              onPressStickers={handlePressStickers}
              onPressAtachment={handlePressAtachment}
              onFocus={handleFocusMessageTyping}
              isShowReply={isShowReply}
              setCloseReply={() => setIsShowReply(false)}
            />
            {isVisibleStickers && <BottomStickers />}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* Attachment */}
      <Animated.View
        onTouchEnd={setCloseSheet}
        pointerEvents={isVisibleAttachments ? "auto" : "none"}
        style={[
          styles.opacityView,
          {
            opacity: Animated.interpolate(fall, {
              inputRange: [0, 1],
              outputRange: [0.6, 0],
            }),
          },
        ]}
      />
      {/* <BottomSheet
        ref={sheetRef}
        onCloseEnd={() => setVisibleAttachments(false)}
        onOpenEnd={() => setVisibleAttachments(true)}
        snapPoints={[420, -50]}
        initialSnap={1}
        enabledGestureInteraction
        enabledInnerScrolling
        overdragResistanceFactor={100}
        enabledContentTapInteraction
        enabledContentGestureInteraction
        enabledHeaderGestureInteraction
        callbackNode={fall}
        renderContent={() => (
          <AttachmentBottomSheet
            visible={isVisibleAttachments}
            assetsList={assetsList}
            selectArray={selectArray}
            setAssetsList={setAssetsList}
            setCloseSheet={setCloseSheet}
            handlePressItemImage={handlePressItemImage}
            handleSelectImage={handleSelectImage}
          />
        )}
      />
      <ImageView
        swipeToCloseEnabled
        doubleTapToZoomEnabled
        images={assetsList}
        animationType="fade"
        imageIndex={imageIndex}
        visible={isVisibleImageViewer}
        onRequestClose={() => setIsVisibleImageViewer(false)}
        HeaderComponent={() => (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15 }}>
              <Text color="white">Name</Text>
              <CircleSelect size="medium" />
            </View>
          </SafeAreaView>
        )}
        FooterComponent={() => <FooterComponent />}
      /> */}
    </>
  );
}

MainMessagesScreen.propTypes = {};
MainMessagesScreen.defaultProps = {};
export default MainMessagesScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    bottom: {},
    bottomView: {
      // position: 'absolute',
      height: 346,
    },
    stickerView: {
      flex: 1,
    },
    stickerHeader: {
      backgroundColor: "blue",
    },
    stickerHeaderItem: {
      height: 30,
      width: 30,
      backgroundColor: "red",
      marginHorizontal: 10,
      marginVertical: 6,
    },
    stickerBody: {
      flex: 1,
    },
    stickerBodyItem: {
      height: 60,
      width: 60,
      backgroundColor: "gray",
      marginHorizontal: 8,
      marginVertical: 6,
    },
    headerBottomWrapper: {
      width: 300,
      height: 30,
      backgroundColor: "red",
    },
    opacityView: {
      height: "100%",
      width: "100%",
      position: "absolute",
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "black",
      opacity: 0.3,
    },
  });
