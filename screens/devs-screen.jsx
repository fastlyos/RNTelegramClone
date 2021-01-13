import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import ImageView from "@app/submodules/react-native-image-viewing/dist";
import useModalState from "@app/hooks/useModalState";
import PinLocationScreen from "./chats/pin-location-screen";

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

function DevsScreen({ navigation }) {
  // const [visible, setIsVisible] = useState(false);
  // use it the same way as before (as docs recommend)
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>navigation</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modalVisible}
        animationType="slide"
        // animationIn="slideInUp"
        // animationInTiming={100}
        // animationOut="slideInDown"
        // animationOutTiming={200}
        presentationStyle="formSheet"
        // useNativeDriver={true}
        onDismiss={() => console.log("on dismiss")}
        onRequestClose={() => console.log("on dismiss")}
        // onSwipeComplete={() => console.log("onSwipeComplete")}
        // onSwipeStart={() => console.log("onSwipeStart")}
        onTouchMove={() => console.log("onTouchMove")}
        propagateSwipe
        // onTouchCancel={({ nativeEvent }) => console.log("onTouchCancel", nativeEvent)}
        // supportedOrientations={["portrait", "landscape"]}
        // presentationStyle="formSheet"
        // onRequestClose={() => console.log("aaas")}
        // onOrientationChange={(e) => console.log("onOrientationChange")}
        // onDismiss={() => console.log("aaas")}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>navigation</Text>
          </TouchableOpacity>
          <PinLocationScreen />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
DevsScreen.propTypes = {};
DevsScreen.defaultProps = {};
export default DevsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
