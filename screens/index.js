import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import randomString from 'random-string';
import PropTypes from 'prop-types';

export default function ExampleScreen(props) {
  return (
    <View>
      <Text>Example Screen</Text>
      <Text>{randomString({ length: 20 })}</Text>
    </View>
  );
}

ExampleScreen.propTypes = {};

const styles = StyleSheet.create({});
