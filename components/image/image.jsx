import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import { Text } from "@app/components/text";
import { View } from "@app/components/view";
import { StyleSheet, Image as RNImage, ImagePropTypes } from "react-native";
=======
import { StyleSheet, Image as RNImage, ImagePropTypes } from "react-native";
import PropTypes from "prop-types";
import { Text } from "@app/components/text";
import { View } from "@app/components/view";
import { IMAGE_SOURCES } from "./images-path";
>>>>>>> origin/main

export default function Image({ name, source, ...props }) {
  const sourceImage = name ? IMAGE_SOURCES[name] : source;
  return <RNImage source={sourceImage} {...props} />;
}

Image.propTypes = {};
Image.defaultProps = {};

const styles = StyleSheet.create({});
