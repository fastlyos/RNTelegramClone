import React from "react";
import { ImageProps, ImageStyle } from "react-native";

interface PngIconsProps extends ImageProps {
  name: string;
  size: number;
  noSize: boolean;
  style: ImageStyle;
}

export declare const PngIcons: (props: PngIconsProps) => React.ReactNode;
