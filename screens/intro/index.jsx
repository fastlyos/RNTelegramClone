import React, { useCallback, useEffect, useState, memo, useMemo, useRef } from "react";
import _ from "lodash";
import { StyleSheet, View, SafeAreaView, FlatList, Dimensions, Image, TouchableOpacity } from "react-native";
import { Text } from "@app/components";
import { useTheme } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "@app/constants/Layout";

import IntroHeaderImages from "./components/intro-header-images";

import { findCharStyle } from "./utils";
import { CONTENT, TOP_CONFIG } from "./schema";

function renderContentItem({ item, index }) {
  const contentLines = item.content.map((line) => findCharStyle(line, "<bold>", "</bold>"));
  const styles = itemStyle;

  return (
    <View style={{ width: SCREEN_WIDTH, alignItems: "center", flex: 1 }}>
      <Text type="display1">{item.title}</Text>
      <View style={styles.contentTextView}>
        {contentLines.map(({ listContentChars, listStyleChars }, idx) => {
          return (
            <Text type="body" style={styles.contentText} key={String(idx)}>
              {listContentChars.map((text) => {
                return listStyleChars.includes(text) ? (
                  <Text key={text} type="bodyEmphasized">
                    {text}
                  </Text>
                ) : (
                  text
                );
              })}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

function IntroScreen(props) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 95,
  });
  const flatlistRef = useRef(null);

  // states
  const [viewableItem, setViewableItem] = useState(0);

  // callbacks
  const onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
    const viewable = viewableItems[0];
    if (viewable) {
      setViewableItem(viewable.index);
    }
  });
  const scrollToIIndex = useCallback(
    (index) => {
      flatlistRef?.current?.scrollToIndex({
        animated: true,
        index,
      });
    },
    [flatlistRef],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.top}>
          <IntroHeaderImages viewableItem={viewableItem} />
        </View>

        <View style={styles.body}>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            data={CONTENT}
            ref={flatlistRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            style={styles.scrollView}
            renderItem={renderContentItem}
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewableItemsChanged.current}
          />
          <Pagination
            dotsLength={CONTENT.length}
            activeDotIndex={viewableItem}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 99,
              marginHorizontal: 0,
              backgroundColor: "black",
            }}
            inactiveDotOpacity={0.3}
            inactiveDotScale={1}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            if (viewableItem < CONTENT.length - 1) {
              scrollToIIndex(viewableItem + 1);
            } else {
              scrollToIIndex(0);
            }
          }}
          style={{ borderRadius: 25, height: 50, paddingHorizontal: 25, justifyContent: "center", backgroundColor: "#2f95dc" }}>
          <Text type="title3Emphasized" color="white">
            Start Messaging
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default IntroScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    top: {
      height: TOP_CONFIG.IMAGE_SIZE + 160,
      paddingVertical: 80,
    },
    scrollView: {},
    body: {
      paddingVertical: 30,
    },
    bottom: {
      alignItems: "center",
      // height: 300,
    },
  });

const itemStyle = StyleSheet.create({
  contentTextView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    textAlign: "center",
  },
  contentText: {
    paddingVertical: 2,
    textAlign: "center",
  },
});
