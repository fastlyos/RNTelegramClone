import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function DevsAnimationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LottieView source={require("@app/assets/animations/ChatListFolders.json")} autoPlay loop />
    </View>
  );
}
