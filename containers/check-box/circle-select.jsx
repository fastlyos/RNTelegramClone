import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ViewPropTypes, TouchableOpacity } from "react-native";
import { Text } from "@app/components";

const SIZE = {
  small: { height: 25, width: 25 },
  medium: { height: 35, width: 35 },
};

export default function CircleSelect({ number, size, style, onPress }) {
  const styles = createStyles({ number });
  return (
    <TouchableOpacity style={[styles.container, SIZE[size], style]} onPress={onPress} activeOpacity={1}>
      {number > 0 && (
        <Text style={styles.number} type="subheadEmphasized">
          {number}
        </Text>
      )}
    </TouchableOpacity>
  );
}
CircleSelect.propTypes = {
  number: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
};
CircleSelect.defaultProps = {
  number: 0,
  size: "small",
  onPress: () => {},
};

const createStyles = ({ number }) =>
  StyleSheet.create({
    container: {
      backgroundColor: number > 0 ? "#54a5f8" : "transparent",
      borderRadius: 999,
      height: 25,
      width: 25,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1.5,
      borderColor: "white",
    },
    number: {
      color: "white",
    },
  });
