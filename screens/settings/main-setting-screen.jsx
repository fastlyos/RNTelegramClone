import React from "react";
<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity, Animated, SectionList } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { settingList } from "./schema";
import { CommonListItem, Divider } from "@app/components";

export default function MainSettingScreen({ navigation }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
=======
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";

export default function MainSettingScreen({ navigation }) {
>>>>>>> origin/main
  const gotoOther = () => navigation && navigation.navigate("OtherScreen");
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SectionList
          sections={settingList}
          // sections={() => <></>}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <CommonListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
          ItemSeparatorComponent={() => (
            <View style={styles.bgSeparator}>
              <Divider style={styles.marginLeft} />
            </View>
          )}
          SectionSeparatorComponent={() => <Divider />}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.header} backgroundColor="card">
              {/* <Text type="footnoteEmphasized">{title}</Text> */}
            </View>
          )}
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
      height: 30,
    },
    button: {
      padding: 16,
      backgroundColor: iOSColors.purple,
    },
    content: {
      flex: 1,
    },
    bottom: {
      paddingVertical: 10,
    },
    bgSeparator: {
      backgroundColor: "white",
    },
    marginLeft: {
      marginLeft: 62,
    },
  });
