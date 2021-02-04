import React, { memo } from "react";
<<<<<<< HEAD
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View as RNView } from "react-native";
import PropTypes from "prop-types";
=======
import PropTypes from "prop-types";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View as RNView } from "react-native";
>>>>>>> origin/main

function View({ backgroundColor, children, style, ...props }) {
  const theme = useTheme();
  return (
    <RNView
      {...props}
      // onTouchMove
      style={[{ backgroundColor: theme.colors[backgroundColor] }, style]}>
      {children}
    </RNView>
  );
}

View.propTypes = {};
export default View;
