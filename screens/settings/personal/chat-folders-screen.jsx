import React, { useCallback, useEffect, useState, memo, useMemo, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList, Switch } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Divider, Text } from "@app/components";
import { CommonListItem } from "@app/containers";
import LottieView from "lottie-react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";

import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { chatFolders } from "./schema";

const COLORS = {
  blue: "blue",
  title: "rgb(120,120,120)",
  background: "rgb(240,240,244)",
};

function ChatFoldersScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles({ theme });
  const imageRef = useRef(null);

  const handlePressImage = useCallback(() => {
    imageRef?.current?.play();
  }, []);
  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
    return () => {
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SectionList
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={chatFolders}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContent}
          SectionSeparatorComponent={() => <Divider />}
          ListHeaderComponent={() => (
            <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 20, paddingVertical: 10 }}>
              <TouchableOpacity style={{ height: 90, width: 100 }} onPress={handlePressImage} activeOpacity={1}>
                <LottieView ref={imageRef} source={require("@app/assets/animations/ChatListFolders.json")} autoPlay loop={false} />
              </TouchableOpacity>
              <Text type="footnote" color={COLORS.title} style={{ textAlign: "center", paddingVertical: 10 }}>
                Create folders for different groups of chats and quickly switch between them.
              </Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.header} backgroundColor="card">
              <Text type="caption2Emphasized" color={COLORS.title}>
                {title}
              </Text>
            </View>
          )}
          renderItem={({ item, index }) => <CommonListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
          renderSectionFooter={({ section: { footerTitle } }) => (
            <View style={styles.footerView}>
              <Text type="caption2" color={COLORS.title}>
                {footerTitle}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

ChatFoldersScreen.propTypes = {};
ChatFoldersScreen.defaultProps = {};
export default ChatFoldersScreen;

const createStyles = ({ theme }) => {
  const { dimemsions = {} } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    content: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
    flatlistContent: {
      marginVertical: 20,
    },
    footerView: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });
};
