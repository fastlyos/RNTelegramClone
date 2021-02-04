import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput as RNTextInput } from "react-native";

function TextInput(props) {
  return <RNTextInput {...props} />;
}

TextInput.propTypes = {};
TextInput.defaultProps = {};
export default TextInput;

const styles = StyleSheet.create({});
