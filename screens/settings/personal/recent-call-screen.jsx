import React, { memo, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList, Switch } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { Divider, Text } from "@app/components";
import { CommonListItem } from "@app/containers";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";
import { recentCalls } from "./schema";

function SwitchComponent() {
  const [value, setValue] = useState(false);
  return <Switch value={value} onValueChange={setValue} />;
}

const SECTIONLIST_DATA = recentCalls.map((s) => ({
  ...s,
  data: s.data.map((i) => ({
    ...i,
    right: {
      ...i.right,
      isCustomComponent: true,
      component: memo(SwitchComponent),
    },
  })),
}));

function RecentCallScreen() {
  const navigation = useNavigation();
  // const goto = () => navigation && navigation.navigate('');
  const theme = useTheme();
  const styles = createStyles({ theme });

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
        <Text type="body">Your recent calls will appear here</Text>
      </View>
      <SectionList
        sections={SECTIONLIST_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContent}
        // ItemSeparatorComponent={() => <Divider />}
        SectionSeparatorComponent={() => <Divider />}
        ListHeaderComponent={() => <></>}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header} backgroundColor="card">
            {/* <Text type="footnoteEmphasized">{title}</Text> */}
          </View>
        )}
        renderItem={({ item, index }) => <CommonListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
        renderSectionFooter={({ section: { footerTitle } }) => (
          <View style={styles.footerView}>
            <Text>{footerTitle}</Text>
          </View>
        )}
      />
    </View>
  );
}

RecentCallScreen.propTypes = {};
RecentCallScreen.defaultProps = {};
export default RecentCallScreen;

const createStyles = ({ theme }) => {
  const { dimemsions = {} } = theme;
  const { width, height } = dimemsions;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.card,
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      justifyContent: "center",
      alignItems: "center",
    },
    flatlistContent: {
      marginVertical: 20,
      // ...theme.applicationStyles.divider,
      // borderWidth: 1,
      // borderColor: theme.colors.border,
    },
    columnWrapperStyle: {
      ...theme.applicationStyles.divider,
    },
    footerView: {
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    // button: {
    //   padding: 16,
    //   backgroundColor: iOSColors.purple,
    // },
  });
};
