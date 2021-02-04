<<<<<<< HEAD
import React, { memo } from "react";
import { StyleSheet, ViewPropTypes } from "react-native";
import View from "./view";
import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";
=======
import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useTheme } from "@react-navigation/native";
>>>>>>> origin/main

function Divider({ style, ...props }) {
  const theme = useTheme();
<<<<<<< HEAD
  const styles = createStyles({ theme });
  return <View style={[styles.divider, style]} />;
}

Divider.propTypes = {
  style: ViewPropTypes.style,
};
export default memo(Divider);

=======
  const { width, height } = useWindowDimensions();
  const styles = createStyles({ theme, width, height });
  return <View style={[styles.divider, style]} {...props} />;
}

export default Divider;
>>>>>>> origin/main
const createStyles = ({ theme }) =>
  StyleSheet.create({
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
  });
