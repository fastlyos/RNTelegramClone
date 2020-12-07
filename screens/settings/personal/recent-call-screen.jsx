import React, { memo, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Switch } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { iOSColors } from 'react-native-typography';
import { recentCalls } from '@app/constants/schema';
import { CommonListItem, Divider } from '@app/components';

function SwitchComponent({}) {
  return <Switch />;
}
const FLATLIST_DATA = recentCalls.map((i) => ({
  ...i,
  right: {
    ...i.right,
    isCustomComponent: true,
    component: memo(SwitchComponent),
  },
}));

function RecentCallScreen() {
  const navigation = useNavigation();
  // const goto = () => navigation && navigation.navigate('');
  const theme = useTheme();
  const styles = createStyles({ theme });
  navigation.setOptions({
    headerShown: true,
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.content}>
        <Text>Your recent calls will appear here</Text>
      </View> */}
      <FlatList
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        contentContainerStyle={styles.flatlistContent}
        data={FLATLIST_DATA}
        renderItem={({ item, index }) => <CommonListItem {...item} onPress={() => item.onPress && item.onPress({ navigation })} />}
      />
      {/* <TouchableOpacity style={styles.button} onPress={goto}>
        <Text style={{ color: iOSColors.white, fontSize: 20 }}>New Contact</Text>
      </TouchableOpacity> */}
    </View>
  );
}

RecentCallScreen.propTypes = {};
export default memo(RecentCallScreen);

const createStyles = ({ theme }) => {
  const { dimemsions = {} } = theme;
  const { width, height } = dimemsions;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.card,
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatlistContent: {},
    // button: {
    //   padding: 16,
    //   backgroundColor: iOSColors.purple,
    // },
  });
};
