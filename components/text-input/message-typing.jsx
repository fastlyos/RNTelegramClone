import React, { memo } from "react";
import PropTypes from "prop-types";
// components
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { Entypo, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
// import TextInput from './text-input';

// theme
import { useTheme } from "@react-navigation/native";
import { iOSColors, iOSUIKit } from "react-native-typography";

function MessageTyping({ onPressVoice, onPressStickers, onPressAtachment, onFocus }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.itemLeft}>
          <TouchableOpacity onPress={onPressAtachment}>
            <Entypo name="attachment" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputBox}>
          <TextInput onFocus={onFocus} placeholder="Message" style={[iOSUIKit.body, styles.textinput]} />
          <TouchableOpacity onPress={onPressStickers}>
            <MaterialCommunityIcons name="sticker" size={24} color="black" style={styles.sticker} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemRight}>
          <TouchableOpacity onPress={onPressVoice}>
            <MaterialCommunityIcons name="microphone-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

MessageTyping.propTypes = {
  onPressStickers: PropTypes.func.isRequired,
  onPressVoice: PropTypes.func.isRequired,
  onPressAtachment: PropTypes.func.isRequired,
};
MessageTyping.defaultProps = {
  onPressStickers: () => {},
  onPressVoice: () => {},
  onPressAtachment: () => {},
};
export default MessageTyping;

const createStyles = ({ theme }) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: "black",
    },
    content: {
      paddingVertical: 6,
      alignItems: "center",
      flexDirection: "row",
    },
    inputBox: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 999,
      borderWidth: 1,
      borderColor: "black",
    },
    textinput: {
      flex: 1,
      paddingVertical: 5,
      paddingHorizontal: 15,
    },
    sticker: {
      paddingHorizontal: 5,
      transform: [
        {
          rotateZ: "-90deg",
        },
      ],
    },
    itemLeft: {
      paddingHorizontal: 6,
    },
    itemRight: {
      paddingHorizontal: 6,
    },
  });
};
