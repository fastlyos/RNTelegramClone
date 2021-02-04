import React from "react";
import { ViewProps as RNViewProps } from "react-native";

interface DividerProps extends RNViewProps {
  style: ViewStyle;
}

declare const Divider: ({ style, ...props }: DividerProps) => React.ReactNode;
export default Divider;
