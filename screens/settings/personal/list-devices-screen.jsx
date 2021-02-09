import React, { useCallback, useEffect, useState, memo, useMemo } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList, Switch } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Divider, Text } from "@app/components";
import { SessionListItem } from "@app/containers";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";

import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { sessionsInDevices } from "./schema";

const COLORS = {
  blue: "blue",
  title: "rgb(120,120,120)",
  background: "rgb(240,240,244)",
};

function SwitchComponent() {
  const [value, setValue] = useState(false);
  return <Switch value={value} onValueChange={setValue} />;
}

function ListDevicesScreen() {
  const navigation = useNavigation();
  // const goto = () => navigation && navigation.navigate('');
  const theme = useTheme();
  const styles = createStyles({ theme });

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRightContainerStyle: {
        paddingRight: 12,
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
          <Text type="body" color={COLORS.blue}>
            Edit
          </Text>
        </TouchableOpacity>
      ),
    });
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SectionList
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          sections={sessionsInDevices}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContent}
          SectionSeparatorComponent={() => <Divider />}
          ListHeaderComponent={() => <></>}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.header} backgroundColor="card">
              <Text type="caption2Emphasized" color={COLORS.title}>
                {title}
              </Text>
            </View>
          )}
          renderItem={({ item, index }) => <SessionListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
          renderSectionFooter={({ section: { footerTitle } }) => (
            <View style={styles.footerView}>
              <Text type="caption2" color={COLORS.title}>
                {footerTitle}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

ListDevicesScreen.propTypes = {};
ListDevicesScreen.defaultProps = {};
export default ListDevicesScreen;

const createStyles = ({ theme }) => {
  const { dimemsions = {} } = theme;
  const { width, height } = dimemsions;
  return StyleSheet.create({
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
      marginVertical: 20,
    },
    // columnWrapperStyle: {
    //   ...theme.applicationStyles.divider,
    // },
    footerView: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });
};
