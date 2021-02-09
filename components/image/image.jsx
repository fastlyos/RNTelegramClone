import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image as RNImage, ImagePropTypes } from "react-native";
import { IMAGE_SOURCES } from "./images-path";

export default function Image({ name, source, ...props }) {
  const sourceImage = name ? IMAGE_SOURCES[name] : source;
  return <RNImage source={sourceImage} {...props} />;
}

Image.propTypes = {};
Image.defaultProps = {};

const styles = StyleSheet.create({});
