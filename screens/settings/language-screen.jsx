import React, { useCallback, useEffect, useState, memo, useMemo, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList, Switch } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Divider, Text } from "@app/components";
import { CommonListItem } from "@app/containers";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";

import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { languageList } from "./schema";

const COLORS = {
  blue: "blue",
  title: "rgb(120,120,120)",
  background: "rgb(240,240,244)",
};

function LanguageScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles({ theme });

  const [selectItemIndex, setSelectItemIndex] = useState(0);

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SectionList
          ListHeaderComponent={<View style={{ width: "100%", height: 40, backgroundColor: "red" }} />} // TODO: Search Component
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={languageList}
          extraData={selectItemIndex}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContent}
          SectionSeparatorComponent={() => <Divider />}
          // ListHeaderComponent={() => ()}
          renderItem={({ item, index }) => (
            <CommonListItem {...item} onPress={() => setSelectItemIndex(index)} isSelected={selectItemIndex === index} />
          )}
          renderSectionFooter={({ section: { footerTitle } }) => (
            <View style={styles.footerView}>
              {!!footerTitle && (
                <Text type="caption2" color={COLORS.title}>
                  {footerTitle}
                </Text>
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
}

LanguageScreen.propTypes = {};
LanguageScreen.defaultProps = {};
export default LanguageScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    content: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
    flatlistContent: {
      paddingBottom: 20,
    },
    footerView: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });
