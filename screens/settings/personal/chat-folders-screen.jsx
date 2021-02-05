import React, { memo, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, SectionList, Switch } from "react-native";
import { useTheme, useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { iOSColors } from "react-native-typography";
import { Divider, Text } from "@app/components";
import { CommonListItem } from "@app/containers";
import { chatFolders } from "./schema";

function SwitchComponent() {
  const [value, setValue] = useState(false);
  return <Switch value={value} onValueChange={setValue} />;
}

function ChatFoldersScreen() {
  const navigation = useNavigation();
  // const goto = () => navigation && navigation.navigate('');
  const theme = useTheme();
  const styles = createStyles({ theme });
  const goto = (routeName) => navigation.navigate(routeName);

  // effect
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text type="footnote" style={{ textAlign: "center" }}>
          Create folders for different groups of chats and quickly switch between them.
        </Text>
      </View>
      <SectionList
        sections={chatFolders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentList}
        SectionSeparatorComponent={() => <Divider />}
        ListHeaderComponent={() => <></>}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerList} backgroundColor="card">
            <Text type="footnoteEmphasized">{title}</Text>
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

ChatFoldersScreen.propTypes = {};
ChatFoldersScreen.defaultProps = {};
export default ChatFoldersScreen;

const createStyles = ({ theme }) => {
  const { dimemsions = {} } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.card,
    },
    header: {
      // justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 30,
    },
    headerList: {
      paddingHorizontal: 20,
    },
    contentList: {
      marginVertical: 20,
    },
    columnWrapperStyle: {
      ...theme.applicationStyles.divider,
    },
    footerView: {
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
  });
};
