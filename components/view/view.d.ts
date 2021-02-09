import React from "react";
import { ViewProps as RNViewProps, ViewStyle } from "react-native";

interface ViewProps extends RNViewProps {
  backgroundColor: string | undefined;
  children: ReactNode;
  style: ViewStyle;
}
declare const View: ({ backgroundColor, style, ...props }: ViewProps) => React.ReactNode;
export default View;
