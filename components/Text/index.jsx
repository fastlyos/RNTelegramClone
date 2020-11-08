import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { iOSColors, iOSUIKit } from 'react-native-typography';

const COLORS = {
  main: iOSColors.tealBlue,
};
const TYPES = {
  h1: iOSUIKit.body,
  h2: iOSUIKit.body,
  h3: iOSUIKit.body,
  h4: iOSUIKit.body,
  h5: iOSUIKit.body,
  h6: iOSUIKit.body,
};

function Text({ type, color, children }) {
  const typeStyle = TYPES[type] || iOSUIKit.footnote;
  const colorStyle = { color: COLORS[color] };
  return <RNText style={[typeStyle, colorStyle]}>{children}</RNText>;
}

Text.proptypes = {
  type: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
};

export default Text;
