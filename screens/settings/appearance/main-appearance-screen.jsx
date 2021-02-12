import React, { useCallback, useEffect, useState, memo, useMemo, useRef } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, SectionList, Switch, FlatList } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Divider, Text, View, Image } from "@app/components";
import { CommonListItem, MessageListItem, ThemeBubbleImageItem } from "@app/containers";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";

import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { appearanceList, sampleMessages, themeBubbles, appIcons } from "./schema";

const COLORS = {
  blue: "blue",
  title: "rgb(120,120,120)",
  background: "rgb(240,240,244)",
  gray: "rgb(160, 160, 160)",
  border: "rgb(232,232,232)",
  touch: "rgb(230,230,230)",
};

function MainAppearanceScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles({ theme });
  const [selectedTheme, setSelectedTheme] = useState("classic");

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Appearance Setting */}
        <>
          <View style={styles.header}>
            <Text type="caption2" color={COLORS.title}>
              {"COLOR THEME"}
            </Text>
          </View>
          <View style={styles.messageBox}>
            <MessageListItem data={sampleMessages[0]} />
            <MessageListItem data={sampleMessages[1]} />
          </View>
          <View style={styles.selectTheme}>
            <FlatList
              horizontal
              // nestedScrollEnabled
              data={themeBubbles}
              showsHorizontalScrollIndicator={false}
              style={{ width: "100%" }}
              contentContainerStyle={{ marginHorizontal: 10 }}
              renderItem={({ item }) => (
                <ThemeBubbleImageItem type={item.type} selected={selectedTheme === item.type} onPress={() => setSelectedTheme(item.type)} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
        {/*  */}
        <SectionList
          scrollEnabled={false}
          nestedScrollEnabled
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={[appearanceList[0]]}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContent}
          SectionSeparatorComponent={() => <Divider />}
          // ListHeaderComponent={() => ()}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.header}>
              <Text type="caption2" color={COLORS.title}>
                {title}
              </Text>
            </View>
          )}
          renderItem={({ item, index }) => <CommonListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
          renderSectionFooter={({ section: { footerTitle } }) => (
            <View style={styles.footerView}>
              {!!footerTitle && (
                <Text type="caption2" color={COLORS.title}>
                  {footerTitle}
                </Text>
              )}
            </View>
          )}
        />
        {/* App Icon */}
        <>
          <View style={styles.header}>
            <Text type="caption2" color={COLORS.title}>
              {"APP ICON"}
            </Text>
          </View>
          <View style={styles.selectTheme}>
            <FlatList
              horizontal
              // nestedScrollEnabled
              data={appIcons}
              showsHorizontalScrollIndicator={false}
              style={{ width: "100%" }}
              contentContainerStyle={{ paddingVertical: 10 }}
              renderItem={({ item }) => (
                <View style={{ marginHorizontal: 12 }}>
                  <Image
                    name={item.imageName}
                    style={{ width: 60, height: 60, borderRadius: 10, borderWidth: 1, borderColor: COLORS.border }}
                  />
                  <View style={{ alignItems: "center", paddingVertical: 10 }}>
                    <Text type="caption2Emphasized">{item.title}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>

        {/* Other */}
        <SectionList
          scrollEnabled={false}
          nestedScrollEnabled
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={[appearanceList[1]]}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContent}
          SectionSeparatorComponent={() => <Divider />}
          // ListHeaderComponent={() => ()}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.header}>
              <Text type="caption2" color={COLORS.title}>
                {title}
              </Text>
            </View>
          )}
          renderItem={({ item, index }) => <CommonListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
          renderSectionFooter={({ section: { footerTitle } }) => (
            <View style={styles.footerView}>
              {!!footerTitle && (
                <Text type="caption2" color={COLORS.title}>
                  {footerTitle}
                </Text>
              )}
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

MainAppearanceScreen.propTypes = {};
MainAppearanceScreen.defaultProps = {};
export default MainAppearanceScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    content: {
      // flex: 1,
    },
    messageBox: {
      flex: 1,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    header: {
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
    flatlistContent: {
      paddingVertical: 20,
    },
    footerView: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    selectTheme: {
      paddingTop: 6,
      borderBottomColor: COLORS.border,
      borderBottomWidth: 1,
      backgroundColor: "white",
    },
  });
