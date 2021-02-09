import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const COLORS = {
  border: "rgb(232,232,232)",
};

function Divider({ marginLeft = 0, style, ...props }) {
  const theme = useTheme();
  const styles = createStyles({ theme, marginLeft });
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.divider} />
    </View>
  );
}

export default Divider;
const createStyles = ({ theme, marginLeft }) =>
  StyleSheet.create({
    container: {
      height: 1,
      paddingLeft: marginLeft,
      backgroundColor: marginLeft > 0 ? "white" : "transparent",
    },
    divider: {
      // height: 2,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.border,
    },
  });
