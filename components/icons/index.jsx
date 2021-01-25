import React from "react";
import { AntDesign as RNAntDesign, Ionicons as RNIonicons } from "@expo/vector-icons";
import { StyleSheet, Image, View } from "react-native";
import { PNG_ICON_SOURCES, SVG_ICON_SOURCES } from "./assets-path";

const DEFAULT_SIZE = 24;

export function AntDesign(props) {
  return <RNAntDesign {...props} />;
}
export function Ionicons(props) {
  return <RNIonicons {...props} />;
}

export function PngIcons({ name, style, ...props }) {
  const source = PNG_ICON_SOURCES[name];
  return <Image {...props} source={source} style={[{ width: DEFAULT_SIZE, height: DEFAULT_SIZE }, style]} />;
}

export function SvgIcons({ name, backgroundColor, containerStyle, tintColor, ...props }) {
  const SvgImage = SVG_ICON_SOURCES[name] || "ic_addgroup";
  if (!SvgImage) return null;
  return (
    <View style={[containerStyle, { backgroundColor: backgroundColor || "transparent" }]}>
      <SvgImage width={DEFAULT_SIZE} fill={tintColor || "black"} {...props} />
    </View>
  );
}
