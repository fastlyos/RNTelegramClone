import PropTypes from "prop-types";
import faker from "faker";
import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from "react-native";

function DevsScreen() {
  const listItemData = new Array(80).fill(1).map((i, idx) => ({
    id: idx,
    text: faker.random.words(5),
  }));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { height, width, x, y },
          },
        }) => {
          console.log("height", height); // 814
        }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "beige", height: 814 }}>
          <View style={{ paddingVertical: 200 }}>
            <Text>12344</Text>
          </View>
          <FlatList
            bounces={false}
            scrollEnabled={false}
            keyExtractor={(item) => String(item.id)}
            removeClippedSubviews
            nestedScrollEnabled
            style={{ flex: 1, backgroundColor: "chocolate"}}
            contentContainerStyle={{ paddingVertical: 50 }}
            data={listItemData}
            renderItem={({ item, index }) => {
              return (
                <View style={{ paddingVertical: 10 }}>
                  <Text>{item.text}</Text>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
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
