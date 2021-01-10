import React, { memo } from "react";
import PropTypes from "prop-types";
// components
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Text, TextInput } from "@app/components";
import { Entypo, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
// import colors from "@app/constants/colors";

// theme
import { useTheme } from "@react-navigation/native";
import { iOSColors, iOSUIKit } from "react-native-typography";

function MessageTyping({ onPressVoice, onPressStickers, onPressAtachment, onFocus, isShowReply = false, setCloseReply }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <View style={styles.container}>
      {/* reply messages */}
      {isShowReply && (
        <View style={styles.replyView}>
          <View style={styles.replyContent}>
            <Text type="footnoteEmphasized" color="blue">
              Khai
            </Text>
            <Text type="footnote" ellipsizeMode="tail" numberOfLines={1}>
              borderBottomColor: iOSColors.lightGray2borderBottomColor: iOSColors.lightGray2
            </Text>
          </View>
          <TouchableOpacity onPress={setCloseReply} style={styles.replyCancelButton}>
            <Text type="body">X</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* content */}
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
  onPressVoice: PropTypes.func.isRequired,
  onPressStickers: PropTypes.func.isRequired,
  onPressAtachment: PropTypes.func.isRequired,
};
MessageTyping.defaultProps = {
  onPressStickers: () => {},
  onPressVoice: () => {},
  onPressAtachment: () => {},
};
export default MessageTyping;

const createStyles = ({ theme }) => {
  // const { colors } = theme;
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: "black",
    },
    content: {
      backgroundColor: iOSColors.customGray,
      paddingVertical: 6,
      alignItems: "center",
      flexDirection: "row",
    },
    replyView: {
      height: 50,
      backgroundColor: iOSColors.customGray,
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: 45,
    },
    replyContent: {
      flex: 1,
      justifyContent: "center",
      borderLeftColor: iOSColors.blue,
      borderLeftWidth: 3,
      marginVertical: 5,
      paddingLeft: 5,
    },
    replyCancelButton: {
      width: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    inputBox: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 999,
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "white",
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
