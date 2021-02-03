import React, { memo, useEffect, useRef } from "react";
import moment from "moment";
import { StyleSheet, View, Animated, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { useTheme } from "@react-navigation/native";
import { iOSColors } from "react-native-typography";
import CURRENT_USER from "@app/fixtures/currentUser";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
//
import { Text } from "../text";

const renderLeftActions = (progress, dragX) => {
  // const theme = useTheme();
  const styles = createStyles({});
  const currentuser = CURRENT_USER;
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101, 200],
    outputRange: [-5, 0, 0, 1, 1],
  });

  return (
    <RectButton style={styles.leftAction} onPress={() => {}}>
      <Animated.Text
        style={[
          styles.actionText,
          {
            transform: [{ translateX: trans }],
          },
        ]}>
        Share
      </Animated.Text>
    </RectButton>
  );
};

//
function MessageListItem({ data }) {
  const theme = useTheme();
  const currentuser = CURRENT_USER;

  const { body, chatId, isEdit, createdAt, createBy } = data;
  const createdAtText = moment(createdAt).format("HH:mm");

  const isCurentUser = currentuser.id === createBy;
  // style
  const styles = createStyles({ theme, isRightContent: isCurentUser });
  return (
    <Swipeable renderRightActions={renderLeftActions} overshootRight={false}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textBodyBox}>
            <Text type="subheadShort" style={styles.textbody}>
              {body}
            </Text>
            <View style={styles.bottom}>
              <Text type="caption2">{createdAtText}</Text>
              <MaterialCommunityIcons name="check-all" size={15} style={{ paddingLeft: 5 }} />
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

MessageListItem.propTypes = {};
MessageListItem.defaultProps = {};

export default memo(MessageListItem);

const createStyles = ({ theme, isRightContent }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: isRightContent ? "flex-end" : "flex-start",
      paddingLeft: isRightContent ? 40 : 10,
      paddingRight: isRightContent ? 10 : 40,
      paddingVertical: 5,
    },
    content: {
      flex: 1,
      borderRadius: 8,
      padding: 5,
      backgroundColor: isRightContent ? iOSColors.orange : iOSColors.customGray,
    },
    textBodyBox: {
      // backgroundColor: 'red',
      // paddingHorizontal: 2,

      flex: 1,
      flexDirection: "column",
      // flexWrap: 'wrap',
      // flexGrow: 1,
      // flexBasis:2
    },
    textbody: {
      // flex: 1,
      // textAlign: "justify",
      // alignItems: 'flex-end',
      // flexDirection: 'column',
      // alignContent: 'stretch',
    },
    bottom: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    leftAction: {
      height: 80,
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: "space-between",
      flexDirection: "column",
      backgroundColor: "white",
    },
  });
