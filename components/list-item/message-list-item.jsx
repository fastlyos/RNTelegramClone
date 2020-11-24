import React, { memo } from 'react';
import moment from 'moment';
import { StyleSheet, View } from 'react-native';
import { Text } from '../text';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { iOSColors } from 'react-native-typography';
import CURRENT_USER from '@app/fixtures/currentUser';

function MessageListItem({ data }) {
  const theme = useTheme();
  const currentuser = CURRENT_USER;

  const { body, chatId, isEdit, createdAt, createBy } = data;
  const createdAtText = moment(createdAt).format('HH:mm');

  const isCurentUser = currentuser.id === createBy;
  // style
  const styles = createStyles({ theme, isRightContent: isCurentUser });
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textBodyBox}>
          <Text type="subheadShort">{body}</Text>
          <View style={styles.bottom}>
            <Text type="caption2">{createdAtText}</Text>
            <MaterialCommunityIcons name="check-all" size={15} style={{ paddingLeft: 5 }} />
          </View>
        </View>
      </View>
    </View>
  );
}

MessageListItem.propTypes = {};
MessageListItem.defaultProps = {};

export default memo(MessageListItem);

const createStyles = ({ theme, isRightContent }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: isRightContent ? 'flex-end' : 'flex-start',
      paddingLeft: isRightContent ? 40 : 5,
      paddingRight: isRightContent ? 5 : 40,
      paddingVertical: 5,
    },
    content: {
      flex: 1,
      borderRadius: 8,
      padding: 5,
      backgroundColor: isRightContent ? iOSColors.orange : iOSColors.customGray,
    },
    textBodyBox: {
      // backgroundColor: 'red',
      flex: 1,
      flexDirection: 'column',
      // flexWrap: 'wrap',
      // flexGrow: 1,
      // flexBasis:2
    },
    textbody: {
      flex: 1,
      // alignItems: 'flex-end',

      // flexDirection: 'column',
      // alignContent: 'stretch',
      backgroundColor: 'red',
    },
    bottom: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
