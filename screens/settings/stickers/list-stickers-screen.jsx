import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import randomString from "random-string";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";

export default function ExampleScreen({ navigation }) {
  const goto = () => navigation && navigation.navigate("NewContact");
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>MainContact</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={goto}>
        <Text style={{ color: iOSColors.white, fontSize: 20 }}>New Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

ExampleScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 16,
    backgroundColor: iOSColors.purple,
  },
});
