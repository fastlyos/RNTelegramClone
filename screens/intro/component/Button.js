import React, { useCallback, useEffect, useState, memo, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { iOSUIKit, iOSColors } from 'react-native-typography';

function Button({ title }) {
  return (
    <TouchableOpacity style={styles.box} onPress={() => {}}>
      <Text style={iOSUIKit.bodyWhite}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: iOSColors.tealBlue,
  },
});

export default Button;
