import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, SectionList, SafeAreaView, TouchableHighlight } from "react-native";

import { Divider, View, Text } from "@app/components";
import { CommonListItem } from "@app/containers";
import Modal from "react-native-modal";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";

import { iOSColors } from "react-native-typography";
import { useTheme, useNavigation } from "@react-navigation/native";
import { settingList } from "./schema";

const COLORS = {
  gray: "rgb(160, 160, 160)",
  padding: "rgb(240, 240, 240)",
  border: "rgb(232,232,232)",
  touch: "rgb(230,230,230)",
};

export default function MainSettingScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles({ theme });

  const [visibleModal, setVisibleModal] = useState(false);

  const handleOnPressItem = useCallback(
    (item) => () => {
      if (item.id === "Ask-a-Question") {
        setVisibleModal(true);
      } else {
        item.onPress({ navigation });
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SectionList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<View style={styles.header} />}
          sections={settingList}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => item + index}
          initialNumToRender={50}
          renderItem={({ item, index }) => <CommonListItem {...item} hasBottomDivider onPress={handleOnPressItem(item)} />}
          SectionSeparatorComponent={() => <Divider />}
          renderSectionHeader={({ section: { title } }) => <View style={styles.sectionHeader} />}
        />
      </View>
      <Modal isVisible={visibleModal} style={styles.modal} animationIn="zoomInUp" animationOut="zoomOutDown">
        <View style={{ backgroundColor: "white", borderRadius: 10, overflow: "hidden" }}>
          <View style={{ paddingVertical: 15, paddingHorizontal: 25 }}>
            <Text type="subheadEmphasized" style={{ textAlign: "center" }}>
              Please note that Telegram Support is done by volunteers. We try to respond as quickly as possible, but it may take a while.
            </Text>
            <Text type="subheadEmphasized" />
            <Text type="subheadEmphasized" style={{ textAlign: "center" }}>
              Please take a look at the Telegram FAQ: it has important troubleshooting tips and answers to most questions.
            </Text>
          </View>
          <View style={styles.bottom}>
            <TouchableHighlight
              onPress={() => {
                setVisibleModal(false);
                navigation?.navigate("FAQScreen");
              }}
              style={styles.button}
              underlayColor={COLORS.touch}>
              <Text type="body" color="blue">
                FAQ
              </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setVisibleModal(false)} style={styles.button} underlayColor={COLORS.touch}>
              <Text type="bodyEmphasized" color="blue">
                OK
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

MainSettingScreen.propTypes = {};

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: 220,
      backgroundColor: "white",
    },
    sectionHeader: {
      height: 20,
      width: "100%",
      backgroundColor: COLORS.padding,
    },
    contentContainerStyle: {
      backgroundColor: COLORS.white,
      paddingBottom: 100,
    },
    button: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderWidth: 0.3,
      overflow: "hidden",
      borderColor: COLORS.border,
    },
    modal: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 40,
      justifyContent: "center",
    },
    content: {
      flex: 1,
      backgroundColor: COLORS.padding,
    },
    bottom: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
