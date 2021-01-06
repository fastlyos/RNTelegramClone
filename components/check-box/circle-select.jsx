import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Text } from "../text";

export default function CircleSelect({ number }) {
  const styles = createStyles({ number });
  return (
    <View style={styles.container}>
      {number > 0 && (
        <Text style={styles.number} type="subheadEmphasized">
          {number}
        </Text>
      )}
    </View>
  );
}
CircleSelect.propTypes = {
  // isSelected: PropTypes.bool.isRequired,
  number: PropTypes.number.isRequired,
};
CircleSelect.defaultProps = {
  // isSelected: false,
  number: 0,
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
