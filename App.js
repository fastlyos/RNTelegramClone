import './ReactotronConfig';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/app-navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// export { default } from './storybook';
