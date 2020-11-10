import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View as RNView } from 'react-native';
import PropTypes from 'prop-types';

function View({ backgroundColor, children, ...props }) {
  const theme = useTheme();
  return (
    <RNView {...props}
      // onTouchMove
      style={[{ backgroundColor: theme.colors[backgroundColor] }, props.style]}
    >
      {children}
    </RNView>
  );
}

View.propTypes = {};
export default View;
