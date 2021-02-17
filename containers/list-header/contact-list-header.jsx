import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { View, Text, SvgIcons } from "@app/components";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";

const COLORS = {
  header: "rgb(247,247,247)",
  blue: iOSColors.blue,
  subtitle: "rgb(247,247,247)",
};

function ContactListHeader({ title, onPress }) {
  const theme = useTheme();
  const borderStyle = {
    borderBottomWidth: 0.75,
    borderBottomColor: theme.colors.border,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.content, { padding: 10 }]}>
          <Text type="subhead" color={COLORS.blue}>
            {title}
          </Text>
          <FontAwesome5 name="caret-down" size={17} color={COLORS.blue} style={{ paddingLeft: 5 }} />
        </View>
      </TouchableOpacity>
      {/* find people nearby */}
      <TouchableHighlight style={styles.container} onPress={() => {}} activeOpacity={1} underlayColor={theme.colors.backgroundCenter}>
        <View style={styles.content}>
          <View style={styles.image}>
            <SvgIcons name="ic_location" size={28} tintColor={COLORS.blue} />
          </View>
          <View style={[styles.text, borderStyle]}>
            <Text type="subhead" color={COLORS.blue}>
              {"Find People Nearby"}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      {/* invite friends */}
      <TouchableHighlight style={styles.container} onPress={() => {}} activeOpacity={1} underlayColor={theme.colors.backgroundCenter}>
        <View style={styles.content}>
          <View style={styles.image}>
            <SvgIcons name="ic_addmember" size={28} tintColor={COLORS.blue} />
          </View>
          <View style={[styles.text, borderStyle]}>
            <Text type="subhead" color={COLORS.blue}>
              {"Invite Friends"}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

ContactListHeader.propTypes = {};
ContactListHeader.defaultProps = {};
export default memo(ContactListHeader);

const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    minHeight: 50,
    minWidth: 60,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  text: {
    minHeight: 50,
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
  },
});
