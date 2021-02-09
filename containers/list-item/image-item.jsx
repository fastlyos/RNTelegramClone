import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { PngIcons, Text, View } from "@app/components";
import { useTheme } from "@react-navigation/native";

const COLORS = {
  blue: "rgb(62, 120,238)",
  sky: "rgb(223, 236,254)",
  border: "rgb(235, 235,235)",
  border2: "rgb(130, 130,130)",
};

const TYPES = {
  classic: {
    backgroundColor: COLORS.blue,
    borderColor: COLORS.blue,
    defaultBorderColor: "transparent",
    colors: ["white", "rgb(223, 236,254)"],
    title: "Classic",
  },
  day: {
    backgroundColor: "white",
    borderColor: COLORS.blue,
    defaultBorderColor: COLORS.border,
    colors: ["rgb(214,221,229)", "rgb(52, 120,246)"],
    title: "Day",
  },
  night: {
    backgroundColor: "black",
    borderColor: COLORS.border2,
    defaultBorderColor: "transparent",
    colors: ["rgb(31,31,31)", "rgb(49, 49, 49)"],
    title: "Night",
  },
  tintedNight: {
    backgroundColor: "rgb(22,30,45)",
    borderColor: COLORS.border,
    defaultBorderColor: "transparent",
    colors: ["rgb(30, 42, 62)", "rgb(52, 84, 146)"],
    title: "Tinted Night",
  },
  ultraBlue: {
    backgroundColor: "rgb(26,34,44)",
    borderColor: COLORS.border,
    defaultBorderColor: "transparent",
    colors: ["rgb(36, 48, 62)", "rgb(88, 117, 146)"],
    title: "Ultra Blue",
  },
};

export function ThemeBubbleImageItem({ type = "classic", selected, onPress }) {
  const theme = useTheme();
  const data = TYPES[type];
  const styles = createStyles({ theme, selected, data });

  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={1} onPress={onPress}>
      <View style={styles.content}>
        <PngIcons name="themebubble" noSize style={[styles.firstChatItem, { tintColor: data.colors[0] }]} />
        <PngIcons name="themebubble" noSize style={[styles.secondChatItem, { tintColor: data.colors[1] }]} />
      </View>
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <Text type={selected ? "caption2Emphasized" : "caption2"} color={selected ? COLORS.blue : "black"}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const createStyles = ({ theme, selected, data }) =>
  StyleSheet.create({
    wrapper: {
      marginHorizontal: 10,
      marginVertical: 5,
    },
    content: {
      paddingVertical: 5,
      paddingHorizontal: 5,
      justifyContent: "space-around",
      borderColor: data.defaultBorderColor,
      borderWidth: 1,
      borderRadius: 12,
      backgroundColor: data ? data.backgroundColor : COLORS.blue,
    },
    firstChatItem: {
      marginRight: 25,
      marginVertical: 3,
    },
    secondChatItem: {
      marginLeft: 25,
      marginVertical: 3,
      transform: [{ rotateY: "180deg" }],
      tintColor: COLORS.sky,
    },
  });
