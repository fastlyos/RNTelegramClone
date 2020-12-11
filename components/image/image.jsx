import React from "react";
import PropTypes from "prop-types";
import { Text } from "@app/components/text";
import { View } from "@app/components/view";
import { StyleSheet, Image as RNImage, ImagePropTypes } from "react-native";

export default function Image(props) {
  return <RNImage {...props} />;
}

Image.proptypes = {};

const styles = StyleSheet.create({});
