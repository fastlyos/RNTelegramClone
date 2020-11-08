import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { iOSColors } from 'react-native-typography';

export default function MainSettingScreen({ navigation }) {
  const gotoOther = () => navigation && navigation.navigate('OtherScreen');

  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={gotoOther}>
          <Text style={{ color: iOSColors.white, fontSize: 20 }}>Go to Other</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

MainSettingScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: iOSColors.purple,
  },
  content: {
    flex: 1,
  },
  bottom: {
    paddingVertical: 10,
  },
});
