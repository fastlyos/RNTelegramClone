import React, { useState, useMemo, useRef, useCallback, memo, useEffect } from "react";
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
  Animated,
  LayoutAnimation,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme, useScrollToTop } from "@react-navigation/native";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
// components
import { Text, SearchBar } from "@app/components";
import { ContactListItem, ContactListHeader } from "@app/containers";
import { iOSColors } from "react-native-typography";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@app/constants/Layout";
// data
import contacts from "@app/fixtures/contacts";

const SORTS = {
  name: "Name",
  lastSeen: "Last Seen Time",
};

const COLORS = {
  header: "rgb(247,247,247)",
  blue: "rgb(62, 120,238)",
  subtitle: "rgb(247,247,247)",
};

function MainContactScreen({ navigation }) {
  // states
  const listRef = useRef(null);
  useScrollToTop(listRef);
  const searchBarRef = useRef(null);
  const scrollViewValue = useRef(new Animated.Value(0)).current;
  const contactsTitle = useMemo(() => contacts.groupByContacts.map((i) => i.title), [contacts.groupByContacts]);
  const [sortedBy, setSortedBy] = useState("name");
  const [headerShown, setheaderShown] = useState(true);

  // callbacks
  const goto = useCallback(() => navigation && navigation.navigate("NewContact"), [navigation]);
  const onPressSort = useCallback(
    () =>
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", SORTS.name, SORTS.lastSeen],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            setSortedBy("name");
          } else if (buttonIndex === 2) {
            setSortedBy("lastSeen");
          }
        },
      ),
    [],
  );
  const onScrollView = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollViewValue,
          },
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );
  const handleScrollEndDrag = useCallback(() => searchBarRef.current?.handleScrollEndDrag(), []);
  const handleSearchbarOnFocus = useCallback(() => {
    navigation.setOptions({
      headerShown: false,
      headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
    });
  }, []);
  const handleSearchbarOnCancel = useCallback(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
    });
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  // styles
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  const styles = createStyles({ theme, width, height });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar
          backgroundColor={COLORS.header}
          ref={searchBarRef}
          scrollViewRef={listRef}
          callbackNode={scrollViewValue}
          placeholder="Search"
          onChangeText={() => {}}
          onSearchButtonPress={() => {}}
          onCancel={handleSearchbarOnCancel}
          onFocus={handleSearchbarOnFocus}
        />
        {sortedBy === "name" && (
          <SectionList
            ref={listRef}
            onScroll={onScrollView}
            scrollEventThrottle={1}
            onScrollEndDrag={handleScrollEndDrag}
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
        {sortedBy === "lastSeen" && (
          <FlatList
            ref={listRef}
            onScroll={onScrollView}
            scrollEventThrottle={1}
            onScrollEndDrag={handleScrollEndDrag}
            initialNumToRender={10}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            ListHeaderComponent={() => <ContactListHeader title={`Sorted by ${SORTS[sortedBy]}`} onPress={onPressSort} />}
            data={contacts.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => <ContactListItem {...item} />}
          />
        )}
        {sortedBy === "name" && (
          <View style={styles.titleView}>
            <View style={styles.titleViewbox}>
              {contactsTitle.map((title, index) => (
                <Item title={title} key={title} length={contactsTitle.length} index={index} listRef={listRef} />
              ))}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

MainContactScreen.propTypes = {};
MainContactScreen.defaultProps = {};
export default MainContactScreen;

const Item = memo(({ title, index, listRef, length }) => {
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
});

// screen styles
const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.header,
    },
    content: {
      flex: 1,
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
    },
    textTouch: {
      maxHeight: 18,
      paddingHorizontal: 6,
      alignItems: "center",
    },
  });
