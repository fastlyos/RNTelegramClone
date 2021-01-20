import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text as RNText } from "react-native";
import { iOSColors, iOSUIKit, material } from "react-native-typography";

const COLORS = {
  main: iOSColors.tealBlue,
};
const TYPES = {
  display1: material.display1,
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
  //
  largeTitleEmphasizedWhite: iOSUIKit.largeTitleEmphasizedWhite,
  title3EmphasizedWhite: iOSUIKit.title3EmphasizedWhite,
  title3White: iOSUIKit.title3White,
  bodyEmphasizedWhite: iOSUIKit.bodyEmphasizedWhite,
  bodyWhite: iOSUIKit.bodyWhite,
  subheadEmphasizedWhite: iOSUIKit.subheadEmphasizedWhite,
  subheadWhite: iOSUIKit.subheadWhite,
  subheadShortWhite: iOSUIKit.subheadShortWhite,
  calloutWhite: iOSUIKit.calloutWhite,
  footnoteEmphasizedWhite: iOSUIKit.footnoteEmphasizedWhite,
  footnoteWhite: iOSUIKit.footnoteWhite,
  caption2EmphasizedWhite: iOSUIKit.caption2EmphasizedWhite,
  caption2White: iOSUIKit.caption2White,
};

function Text({ type, color, children, style, ...otherProps }) {
  const typeStyle = TYPES[type];
  const colorStyle = { color: COLORS[color] || color };
  return (
    <RNText allowFontScaling style={[typeStyle, colorStyle, style]} {...otherProps}>
      {children}
    </RNText>
  );
}

Text.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
};

Text.defaultProps = {
  color: undefined,
  type: "footnote",
};

export default Text;
