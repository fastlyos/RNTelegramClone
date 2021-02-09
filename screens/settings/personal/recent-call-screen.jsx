import React, { memo, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList, Switch } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import SegmentedControl from "@react-native-community/segmented-control";
import { Divider, Text } from "@app/components";
import { CommonListItem } from "@app/containers";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";
//
import { recentCalls } from "./schema";

const COLORS = {
  background: "rgb(239,239,244)",
  border: "rgb(230,230,230)",
  text: "rgb(115,115,115)",
};

function HeaderTitle({ values = [], selectedIndex = 0, onChange = () => {} }) {
  return <SegmentedControl style={{ width: 150 }} values={values} selectedIndex={selectedIndex} onChange={onChange} />;
}

function RecentCallScreen({ navigation }) {
  // const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles({ theme });

  // state
  const [segmentControlValue, setSegmentControlValue] = useState(0);

  // callbacks
  const handleChangeSegmentControlValue = (event) => {
    setSegmentControlValue(event?.nativeEvent?.selectedSegmentIndex);
  };

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <HeaderTitle values={["All", "Missed"]} selectedIndex={segmentControlValue} onChange={handleChangeSegmentControlValue} />
      ),
    });
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text type="subhead" color={COLORS.text}>
          {segmentControlValue === 0 ? "Your recent calls will appear here" : "You have no missed calls"}
        </Text>
      </View>
      <SectionList
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        sections={recentCalls}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlistContent}
        SectionSeparatorComponent={() => <Divider />}
        ListHeaderComponent={() => <></>}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header} backgroundColor="card">
            {/* <Text type="footnoteEmphasized">{title}</Text> */}
          </View>
        )}
        renderItem={({ item, index }) => (
          <CommonListItem {...item} containerStyle={styles.item} onPress={() => item?.onPress && item.onPress({ navigation })} />
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
      backgroundColor: COLORS.background,
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
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
    item: {
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    // button: {
    //   padding: 16,
    //   backgroundColor: iOSColors.purple,
    // },
  });
};
