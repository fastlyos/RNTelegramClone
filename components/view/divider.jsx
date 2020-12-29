import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, useWindowDimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import View from "./view";

function Divider({ style }) {
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const styles = createStyles({ theme, width, height });
  return <View style={[styles.divider, style]} />;
}

Divider.propTypes = {};
export default memo(Divider);

const createStyles = ({ theme }) =>
  StyleSheet.create({
    divider: {
      // marginLeft: 60,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
  });
