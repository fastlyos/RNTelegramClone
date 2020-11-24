import React from 'react';
import Proptypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '@app/components/view';
import { Text } from '@app/components/text';
import { iOSColors, iOSUIKit } from 'react-native-typography';

function Button({ type, color, onPress, children }) {
  const typeStyle = TYPES[type] || iOSUIKit.footnote;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[typeStyle, colorStyle]}> {children}</Text>
    </TouchableOpacity>
  );
}

Button.proptypes = {
  type: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  onPress: Proptypes.func,
};

export default Button;
