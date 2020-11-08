import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, ActionSheetIOS } from 'react-native';
// components
import { View, Text, Button, ContactListItem, ContactListHeader } from '@app/components';
import { iOSColors } from 'react-native-typography';
// data
import contacts from '@app/fixtures/contacts';

const SORTS = ['Name', 'Last Seen Time'];

export default function MainContactScreen({ navigation }) {
  const goto = () => navigation && navigation.navigate('NewContact');
  const [sortedBy, setSortedBy] = useState(0);

  const onPressSort = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...SORTS],
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
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          ListHeaderComponent={() => <ContactListHeader title={`Sorted by ${SORTS[sortedBy]}`} onPress={onPressSort} />}
          data={contacts.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <ContactListItem {...item} />}
        />
      </View>
    </View>
  );
}

MainContactScreen.propTypes = {};

// screen styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: iOSColors.purple,
  },
});
