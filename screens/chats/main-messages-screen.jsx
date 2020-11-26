import _ from 'lodash';
import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// components
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import { ContactListItem, ChatListItem, Divider, Text, MessageListItem, MessageTyping } from '@app/components';
// theme
import { useTheme } from '@react-navigation/native';
import { iOSColors } from 'react-native-typography';

// DATA
import CHATS from '@app/fixtures/chats';
import MESSAGES from '@app/fixtures/messages';
import CONTACTS from '@app/fixtures/contacts';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 95 : 0;

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
      <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={keyboardVerticalOffset}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <FlatList
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              inverted={true}
              data={DATA_MESSAGES}
              // ItemSeparatorComponent={() => <Divider />}
              renderItem={({ item, index }) => <MessageListItem data={item} />}
              // initialNumToRender={10}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.bottom}>
          <MessageTyping />
        </View>
      </KeyboardAvoidingView>
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
    bottom: {
      // backgroundColor: 'red',
    },
  });
