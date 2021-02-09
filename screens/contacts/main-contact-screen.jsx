import React, { useState, useMemo, useRef, useCallback, memo } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import {
  StyleSheet,
  FlatList,
  ActionSheetIOS,
  SectionList,
  SafeAreaView,
  useWindowDimensions,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
// components
import { Text } from "@app/components";
import { ContactListItem, ContactListHeader, SearchBar } from "@app/containers";
import { iOSColors } from "react-native-typography";
// data
import contacts from "@app/fixtures/contacts";

const SORTS = ["Name", "Last Seen Time"];

export default function MainContactScreen({ navigation }) {
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const styles = createStyles({ theme, width, height });
  const listRef = useRef();
  const goto = () => navigation && navigation.navigate("NewContact");
  const [sortedBy, setSortedBy] = useState(1);
  const [headerShown, setheaderShown] = useState(true);
  const contactsTitle = useMemo(() => contacts.groupByContacts.map((i) => i.title), [contacts.groupByContacts]);

  const onPressSort = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", ...SORTS],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setSortedBy(0);
        } else if (buttonIndex === 2) {
          setSortedBy(1);
        }
      },
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {sortedBy === 0 && (
          <SectionList
            ref={listRef}
            ListHeaderComponent={() => <ContactListHeader title={`Sorted by ${SORTS[sortedBy]}`} onPress={onPressSort} />}
            sections={contacts.groupByContacts}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <ContactListItem {...item} />}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.header} backgroundColor="card">
                <Text type="footnoteEmphasized">{title}</Text>
              </View>
            )}
          />
        )}
        {sortedBy === 1 && (
          <FlatList
            ref={listRef}
            initialNumToRender={10}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            ListHeaderComponent={() => <ContactListHeader title={`Sorted by ${SORTS[sortedBy]}`} onPress={onPressSort} />}
            data={contacts.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => <ContactListItem {...item} />}
          />
        )}
        {sortedBy === 0 && (
          <View style={styles.titleView}>
            <View style={styles.titleViewbox}>
              {contactsTitle.map((title, index) => {
                return <Item title={title} key={title} length={contactsTitle.length} index={index} listRef={listRef} />;
              })}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

MainContactScreen.propTypes = {};

const Item = ({ title, index, listRef, length }) => {
  const theme = useTheme();
  const [currentSection, setCurrentSection] = useState(index);
  const { width, height } = useWindowDimensions();
  const styles = createStyles({ theme, width, height });

  const onTouchMove = useCallback(
    (evt) => {
      const sectionIndex = parseInt(evt.nativeEvent.locationY / 18, 10) + index;

      if (sectionIndex >= 0 && sectionIndex < length && sectionIndex !== currentSection) {
        listRef?.current?.scrollToLocation({
          animated: false,
          itemIndex: 0,
          sectionIndex,
          viewPosition: 0,
        });
        setCurrentSection(sectionIndex);
      }
      if (sectionIndex < 0 && sectionIndex !== currentSection) {
        listRef?.current?.scrollToLocation({
          animated: false,
          itemIndex: 0,
          sectionIndex: 0,

          viewPosition: 100,
        });
      }
    },
    [listRef, index, currentSection],
  );

  return (
    <View
      hitSlop={{ top: 0, bottom: 0, left: 0, right: 0 }}
      pressRetentionOffset={{ top: 0, bottom: 0, left: 0, right: 0 }}
      style={styles.textTouch}
      onTouchMove={onTouchMove}>
      <Text type={"footnoteEmphasized"}>{String(title)}</Text>
    </View>
  );
};

// screen styles
const createStyles = ({ theme, width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      // flex: 1,
    },
    button: {
      padding: 16,
      backgroundColor: iOSColors.purple,
    },
    header: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      justifyContent: "center",
    },
    divider: {
      marginLeft: 60,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    titleView: {
      position: "absolute",
      right: 0,
      height: "100%",
    },
    titleViewbox: {
      flex: 1,
      justifyContent: "center",
      // paddingHorizontal: 4,
      // backgroundColor: 'red',
    },
    textTouch: {
      maxHeight: 18,
      paddingHorizontal: 6,
      // marginVertical: 2,
      alignItems: "center",
      // backgroundColor: 'red',
    },
  });
