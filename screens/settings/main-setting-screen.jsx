import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, SectionList, SafeAreaView } from "react-native";

import { Divider, View, Text } from "@app/components";
import { CommonListItem } from "@app/containers";

import { iOSColors } from "react-native-typography";
import { useTheme, useNavigation } from "@react-navigation/native";
import { settingList } from "./schema";

const COLORS = {
  gray: "rgb(160, 160, 160)",
  padding: "rgb(240, 240, 240)",
};

export default function MainSettingScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles({ theme });
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
          renderItem={({ item }) => <CommonListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
          SectionSeparatorComponent={() => <Divider />}
          renderSectionHeader={({ section: { title } }) => <View style={styles.sectionHeader} />}
        />
      </View>
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
      paddingBottom: 180,
    },
    button: {
      padding: 16,
      backgroundColor: iOSColors.purple,
    },
    content: {
      flex: 1,
      backgroundColor: COLORS.padding,
    },
    bottom: {
      paddingVertical: 10,
    },
    marginLeft: {
      marginLeft: 0,
    },
  });
