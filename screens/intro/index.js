import React, { useCallback, useEffect, useState, memo, useMemo } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import Button from './component/Button';
import { iOSUIKit } from 'react-native-typography';
import { telegramSphere, telegramPlane1 } from './component/Images';

function IntroScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imagebox}>
          <View>
            <Image source={telegramSphere} defaultSource={telegramSphere} />
            <View style={{ position: 'absolute' }}>
              <Image source={telegramPlane1} defaultSource={telegramPlane1} />
            </View>
          </View>
        </View>
        <View style={styles.textContent}>
          <Text style={iOSUIKit.largeTitleEmphasized}>Telegram</Text>
          <Text style={[iOSUIKit.title3, { textAlign: 'center' }]}>
            The world's fastest messaging app. It is free and secure.
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button title={'Start Messaging'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagebox: {
    alignItems: 'center',
    paddingTop: 150,
    paddingBottom: 60,
  },
  textContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default IntroScreen;
