import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import { SvgIcons, View } from "@app/components";
// import { StatusBar } from "expo-status-bar";
import randomString from "random-string";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { WebView } from "react-native-webview";

function FAQScreen({ navigation }) {
  const goto = () => navigation && navigation.navigate("NewContact");

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {}} style={{ paddingHorizontal: 2 }}>
            <SvgIcons name="ic_forward" tintColor="white" size={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ paddingHorizontal: 2 }}>
            <SvgIcons name="ic_pf_more" tintColor="white" size={36} />
          </TouchableOpacity>
        </View>
      ),
    });
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <WebView
          originWhitelist={["*"]}
          javaScriptCanOpenWindowsAutomatically={false}
          mediaPlaybackRequiresUserAction={true}
          allowsInlineMediaPlayback={false}
          cacheEnabled
          scalesPageToFit
          textZoom={false}
          shouldRasterizeIOS
          source={{ uri: "https://telegram.org/faq#general-questions" }}
          style={{ flex: 1, width: "100%", height: "100%" }}
          containerStyle={{ marginTop: -50 }}
        />
      </View>
    </View>
  );
}

FAQScreen.propTypes = {};
FAQScreen.defaultProps = {};
export default FAQScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: iOSColors.purple,
  },
});
