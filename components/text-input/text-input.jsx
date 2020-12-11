import React from "react";
import { StyleSheet, Text, View, TextInput as RNTextInput } from "react-native";
import PropTypes from "prop-types";

function TextInput(props) {
  return <RNTextInput {...props} />;
}

TextInput.propTypes = {};
export default TextInput;

const styles = StyleSheet.create({});
