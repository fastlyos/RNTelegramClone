import React from "react";
import Proptypes from "prop-types";
import { StyleSheet, Text as RNText, TextPropTypes } from "react-native";
import { iOSColors, iOSUIKit } from "react-native-typography";

const COLORS = {
  main: iOSColors.tealBlue,
  gray: iOSColors.gray,
  white: iOSColors.white,
};
const TYPES = {
  largeTitleEmphasized: iOSUIKit.largeTitleEmphasized,
  title3Emphasized: iOSUIKit.title3Emphasized,
  title3: iOSUIKit.title3,
  bodyEmphasized: iOSUIKit.bodyEmphasized,
  body: iOSUIKit.body,
  subheadEmphasized: iOSUIKit.subheadEmphasized,
  subhead: iOSUIKit.subhead,
  subheadShort: iOSUIKit.subheadShort,
  callout: iOSUIKit.callout,
  footnoteEmphasized: iOSUIKit.footnoteEmphasized,
  footnote: iOSUIKit.footnote,
  caption2Emphasized: iOSUIKit.caption2Emphasized,
  caption2: iOSUIKit.caption2,
};

function Text({ type, color, children, style, ...otherProps }) {
  const typeStyle = TYPES[type];
  const colorStyle = { color: COLORS[color] };
  return (
    <RNText allowFontScaling style={[typeStyle, colorStyle, style]} {...otherProps}>
      {children}
    </RNText>
  );
}

Text.propTypes = {
  type: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  // style: TextPropTypes.style,
};

Text.defaultProps = {
  type: "footnote",
  color: "black",
};

export default Text;
