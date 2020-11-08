import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import randomString from 'random-string';
import PropTypes from 'prop-types';
import { iOSColors } from 'react-native-typography';

export default function OtherScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Other Screen</Text>
      <Text>{randomString({ length: 20 })}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation?.goBack()}>
        <Text style={{ color: iOSColors.white, fontSize: 20 }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate('OtherScreen2')}>
        <Text style={{ color: iOSColors.white, fontSize: 20 }}>OtherScreen2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate('OtherScreen3')}>
        <Text style={{ color: iOSColors.white, fontSize: 20 }}>OtherScreen3</Text>
      </TouchableOpacity>
    </View>
  );
}

OtherScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: iOSColors.purple,
  },
});
