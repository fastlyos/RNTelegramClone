import _ from 'lodash';
import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
// components
import { StyleSheet, SafeAreaView, View, FlatList, Animated } from 'react-native';
import { ContactListItem, ChatListItem, Divider, Text, MessageListItem } from '@app/components';
import { iOSColors } from 'react-native-typography';

// DATA
import CHATS from '@app/fixtures/chats';
import MESSAGES from '@app/fixtures/messages';
import CONTACTS from '@app/fixtures/contacts';

function MainMessagesScreen({ navigation, route }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const chat = route.params?.item;
  const DATA_MESSAGES = _.sortBy(
    MESSAGES.items.filter((mess) => mess.chatId === chat.id),
    'createdAt',
  ).reverse();

  //
  const goto = (routName) => () => navigation && navigation.navigate(routName);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          
          inverted={true}
          data={DATA_MESSAGES}
          // ItemSeparatorComponent={() => <Divider />}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <MessageListItem data={item} />}
          initialNumToRender={10}
        />
      </View>
    </SafeAreaView>
  );
}

MainMessagesScreen.propTypes = {};
MainMessagesScreen.defaultProps = {};
export default MainMessagesScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    // button: {
    //   padding: 16,
    //   backgroundColor: iOSColors.purple,
    // },
    // bottom: {
    //   paddingVertical: 10,
    // },
  });
