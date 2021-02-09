import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { iOSColors, materialColors } from "react-native-typography";
import useImageDimensions from "@app/hooks/useImageDimensions";

export function SmileIcon() {
  const icSmileDimension = useImageDimensions(require("@app/assets/images/intro/ic_smile.png"));
  const icSmileEyeDimension = useImageDimensions(require("@app/assets/images/intro/ic_smile_eye.png"));
  return (
    <>
      <Image
        source={require("@app/assets/images/intro/ic_smile.png")}
        style={[icSmileDimension, { tintColor: materialColors.blackTertiary }]}
      />
      {/* left eye */}
      <View style={{ position: "absolute", top: 12, left: 9 }}>
        <Image
          source={require("@app/assets/images/intro/ic_smile_eye.png")}
          style={[icSmileEyeDimension, { tintColor: materialColors.blackTertiary }]}
        />
      </View>
      {/* right eye */}
      <View style={{ position: "absolute", top: 12, left: 24 }}>
        <Image
          source={require("@app/assets/images/intro/ic_smile_eye.png")}
          style={[icSmileEyeDimension, { tintColor: materialColors.blackTertiary }]}
        />
      </View>
    </>
  );
}

export function CameraIcon() {
  const icCamDimension = useImageDimensions(require("@app/assets/images/intro/ic_cam.png"));
  const icCamLensDimension = useImageDimensions(require("@app/assets/images/intro/ic_cam_lens.png"));
  return (
    <>
      <Image
        source={require("@app/assets/images/intro/ic_cam.png")}
        style={[icCamDimension, { tintColor: materialColors.blackTertiary }]}
      />
      <View style={{ position: "absolute", top: 12, left: 12 }}>
        <Image
          source={require("@app/assets/images/intro/ic_cam_lens.png")}
          style={[icCamLensDimension, { tintColor: materialColors.blackTertiary }]}
        />
      </View>
    </>
  );
}

export function BubbleIcon({ tintColor }) {
  const icBubbleDimension = useImageDimensions(require("@app/assets/images/intro/ic_bubble.png"));
  return (
    <>
      <Image
        source={require("@app/assets/images/intro/ic_bubble.png")}
        style={[icBubbleDimension, { tintColor: materialColors.blackTertiary }]}
      />
      {/* bubble dot */}
      <View style={{ position: "absolute", top: 11, left: 7 }}>
        <Image
          source={require("@app/assets/images/intro/ic_bubble_dot.png")}
          style={[{ width: 5, height: 5 }, { tintColor: tintColor || "white" }]}
        />
      </View>
      <View style={{ position: "absolute", top: 11, left: 14 }}>
        <Image
          source={require("@app/assets/images/intro/ic_bubble_dot.png")}
          style={[{ width: 5, height: 5 }, { tintColor: tintColor || "white" }]}
        />
      </View>
      <View style={{ position: "absolute", top: 11, left: 21 }}>
        <Image
          source={require("@app/assets/images/intro/ic_bubble_dot.png")}
          style={[{ width: 5, height: 5 }, { tintColor: tintColor || "white" }]}
        />
      </View>
    </>
  );
}

export function PencilIcon() {
  const icPencilDimension = useImageDimensions(require("@app/assets/images/intro/ic_pencil.png"));
  return (
    <>
      <Image
        source={require("@app/assets/images/intro/ic_pencil.png")}
        style={[icPencilDimension, { tintColor: materialColors.blackTertiary }]}
      />
    </>
  );
}
export function PinIcon() {
  const icPinDimension = useImageDimensions(require("@app/assets/images/intro/ic_pin.png"));
  return (
    <>
      <Image
        source={require("@app/assets/images/intro/ic_pin.png")}
        style={[icPinDimension, { tintColor: materialColors.blackTertiary }]}
      />
    </>
  );
}
export function VideoCamIcon() {
  const icVideoCamDimension = useImageDimensions(require("@app/assets/images/intro/ic_videocam.png"));
  return (
    <>
      <Image
        source={require("@app/assets/images/intro/ic_videocam.png")}
        style={[icVideoCamDimension, { tintColor: materialColors.blackTertiary }]}
      />
    </>
  );
}

const styles = StyleSheet.create({});
