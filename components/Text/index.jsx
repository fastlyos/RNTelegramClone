import React from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import { iOSColors, iOSUIKit } from 'react-native-typography';

const mainColor = iosColors.tealBlue;
const COLORS = ['main', undefined];

function Text({ type, color, children }) {
  const typeStyle = iOSUIKit[type] || iOSUIKit.footnote;
  const colorStyle = {
    main: iOSColors.tealBlue,
  };
  return <RNText style={[typeStyle, { color: colorStyle[color] }]}>{children}</RNText>;
}

export default Text;
