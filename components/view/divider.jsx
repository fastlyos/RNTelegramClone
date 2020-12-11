import React, { memo } from "react";
import { StyleSheet, ViewPropTypes } from "react-native";
import View from "./view";
import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";

function Divider({ style }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  return <View style={[styles.divider, style]} />;
}

Divider.propTypes = {
  style: ViewPropTypes.style,
};
export default memo(Divider);

const createStyles = ({ theme }) =>
  StyleSheet.create({
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
  });
