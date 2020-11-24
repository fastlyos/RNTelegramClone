import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import { View } from '@app/components/view';
import { Text } from '@app/components/text';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

export default function ContactListHeader({ title, onPress }) {
  const theme = useTheme();
  const borderStyle = {
    borderBottomWidth: 0.75,
    borderBottomColor: theme.colors.border,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.content, { padding: 10 }]}>
          <Text type="subheadEmphasized" color="">
            {title}
          </Text>
          <FontAwesome5 name="caret-down" size={17} color={theme.colors.text} style={{ paddingLeft: 5 }} />
        </View>
      </TouchableOpacity>
      {/* find people nearby */}
      <TouchableHighlight
        style={styles.container}
        onPress={() => {}}
        activeOpacity={1}
        underlayColor={theme.colors.backgroundCenter}>
        <View style={styles.content}>
          <View style={styles.image}>
            <Feather name="map-pin" size={24} />
          </View>
          <View style={[styles.text, borderStyle]}>
            <Text type="subheadEmphasized">{'Find People Nearby'}</Text>
          </View>
        </View>
      </TouchableHighlight>
      {/* invite friends */}
      <TouchableHighlight
        style={styles.container}
        onPress={() => {}}
        activeOpacity={1}
        underlayColor={theme.colors.backgroundCenter}>
        <View style={styles.content}>
          <View style={styles.image}>
            <AntDesign name="adduser" size={24} color="black" />
          </View>
          <View style={[styles.text, borderStyle]}>
            <Text type="subheadEmphasized">{'Invite Friends'}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

ContactListHeader.propTypes = {};

const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    minHeight: 50,
    minWidth: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  text: {
    minHeight: 50,
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
  },
});
