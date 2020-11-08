import React from 'react';
import { StyleSheet, View as RNView } from 'react-native';
import PropTypes from 'prop-types';

function View({ children, ...props }) {
  return <RNView {...props}>{children}</RNView>;
}

View.propTypes = {};
export default View;
