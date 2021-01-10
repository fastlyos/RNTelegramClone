import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, SafeAreaView, Modal } from "react-native";
import ImageView from "@app/submodules/react-native-image-viewing/dist";

const images2 = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
  },
  {
    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
  },
  require("@app/assets/images/main/ChatWallpaperBuiltin0.jpg"),
];

function DevsScreen() {
  const [visible, setIsVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ImageView
        images={images2}
        animationType="slide"
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
        swipeToCloseEnabled={true}
        doubleTapToZoomEnabled
      />
    </SafeAreaView>
  );
}
DevsScreen.propTypes = {};
DevsScreen.defaultProps = {};
export default DevsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
