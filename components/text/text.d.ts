import React from "react";
import { TextProps as RNTextProps, TextStyle } from "react-native";

type TYPES =
  | "largeTitleEmphasized"
  | "title3Emphasized"
  | "title3"
  | "bodyEmphasized"
  | "body"
  | "subheadEmphasized"
  | "subhead"
  | "subheadShort"
  | "callout"
  | "footnoteEmphasized"
  | "footnote"
  | "caption2Emphasized"
  | "caption2";

type COLORS = "main" | undefined;

interface TextProps extends RNTextProps {
  style: TextStyle;
  color: COLORS;
  type: TYPES;
}

declare const Text: ({ type, color, style, ...props }: TextProps) => React.ReactNode;
export default Text;
