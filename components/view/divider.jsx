import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useTheme } from "@react-navigation/native";

function Divider({ style, ...props }) {
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const styles = createStyles({ theme, width, height });
  return <View style={[styles.divider, style]} {...props} />;
}

export default Divider;
const createStyles = ({ theme }) =>
  StyleSheet.create({
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
  });
