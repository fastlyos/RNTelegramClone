import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { useTheme, useScrollToTop, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

function ContactSearchScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
    return () => {};
  }, []);

  return (
    <View>
      <Text>1234</Text>
    </View>
  );
}

export default ContactSearchScreen;

const styles = StyleSheet.create({});
