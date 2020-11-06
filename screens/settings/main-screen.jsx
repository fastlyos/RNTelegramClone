import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { iOSColors } from 'react-native-typography';

export default function MainSettingScreen({ navigation }) {
  const gotoOther = () => navigation && navigation.navigate('OtherScreen');

  return (
    <View style={styles.container}>
      <Text>SettingMainScreen</Text>
      <TouchableOpacity style={styles.button} onPress={gotoOther}>
        <Text style={{ color: iOSColors.white, fontSize: 20 }}>Go to Other</Text>
      </TouchableOpacity>
    </View>
  );
}

MainSettingScreen.propTypes = {};

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
