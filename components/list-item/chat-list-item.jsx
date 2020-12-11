import React, { useCallback, useEffect, memo } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@app/components/text";
import { View } from "@app/components/view";
import Image from "@app/components/image/image";
import PropTypes from "prop-types";

function ChatListItem({ id, image, chatName, lastMessage, isMute, unreadCount, onPress }) {
  const theme = useTheme();
  return (
    <TouchableHighlight style={styles.container} onPress={onPress} activeOpacity={1} underlayColor={theme.colors.backgroundCenter}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={[styles.content]}>
          <Text type="subheadEmphasized" ellipsizeMode="tail" numberOfLines={2}>
            {chatName}
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={2} allowFontScaling>
            {lastMessage.body}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

ChatListItem.propTypes = {};
ChatListItem.defaultProps = {};

export default memo(ChatListItem);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  imageBox: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    // width: 60,
    // height: 60,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});
