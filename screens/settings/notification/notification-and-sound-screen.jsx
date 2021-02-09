import React, { useCallback, useEffect, useState, memo, useMemo, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList, Switch } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Divider, Text } from "@app/components";
import { CommonListItem } from "@app/containers";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";

import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { notificationList } from "./schema";

const COLORS = {
  blue: "blue",
  title: "rgb(120,120,120)",
  background: "rgb(240,240,244)",
};

function NotificationAndSoundScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles({ theme });

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SectionList
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={notificationList}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContent}
          SectionSeparatorComponent={() => <Divider />}
          // ListHeaderComponent={() => ()}
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
              {!!footerTitle && (
                <Text type="caption2" color={COLORS.title}>
                  {footerTitle}
                </Text>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
}

NotificationAndSoundScreen.propTypes = {};
NotificationAndSoundScreen.defaultProps = {};
export default NotificationAndSoundScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
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
      paddingVertical: 20,
    },
    footerView: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });
