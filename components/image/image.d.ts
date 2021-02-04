import React from "react";
import { ImageProps as RNImageProps } from "react-native";

interface ImageProps extends RNImageProps {
  name: string;
}

declare const Image: (props: ImageProps) => React.ReactNode;
export default Image;
