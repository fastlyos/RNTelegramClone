import React from "react";
import { ImageProps, ImageStyle, ViewStyle } from "react-native";

interface PngIconsProps extends ImageProps {
  name: string;
  size: number;
  noSize: boolean;
  style: ImageStyle;
}

export declare const PngIcons: (props: PngIconsProps) => React.ReactNode;
interface SvgIconsProps {
  name: string;
  size: number;
  backgroundColor: string;
  noSize: boolean;
  style: ImageStyle;
  containerStyle: ViewStyle;
  tintColor: string;
}

export declare const SvgIcons: (props: SvgIconsProps) => React.ReactNode;
