import React, { memo } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, ViewPropTypes, Switch } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Text } from '@app/components/text';
import PropTypes from 'prop-types';

function CommonListItem({ title, left, right, onPress }) {
  const { invisible = false, icon = '', iconBackgroundColor } = left;
  const invisibleLeft = left.invisible;
  const invisibleRight = right.invisible;
  const { hideChevronRight = false, isRoundText, isCustomComponent, component: RightComponent } = right;
  const rightText = right.text;

  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        {/* left */}
        <View style={styles.leftItem}>
          {!invisibleLeft && (
            <>{!!icon ? <Image source={icon} /> : <View style={[styles.tempIcon, { backgroundColor: iconBackgroundColor }]} />}</>
          )}
        </View>
        {/* content */}
        <View style={styles.body}>
          <Text type="body">{title}</Text>
        </View>
        {/* right */}
        <View style={styles.rightItem}>
          {!invisibleRight && !isCustomComponent && (
            <>
              <View style={isRoundText && styles.rightTextView}>
                <Text type="body" color={isRoundText ? 'white' : 'gray'}>
                  {rightText}
                </Text>
              </View>
              {!hideChevronRight && <Entypo name="chevron-right" size={24} color="rgb(172,170,176)" />}
            </>
          )}
          {isCustomComponent && <RightComponent />}
        </View>
      </View>
    </TouchableHighlight>
  );
}

CommonListItem.propTypes = {
  left: PropTypes.object.isRequired,
  right: PropTypes.object.isRequired,
  // icon: PropTypes.any.isRequired,
  // iconBackgroundColor: PropTypes.string.isRequired,
  // rightText: PropTypes.string.isRequired,
  // isRoundText: ViewPropTypes.style,
};
CommonListItem.defaultProps = {
  left: {},
  right: {},
  // icon: false,
  // iconBackgroundColor: 'transparent',
  // rightText: '',
};
export default memo(CommonListItem);

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      // borderWidth: 0.25,
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 4,
    },
    tempIcon: {
      height: 30,
      width: 30,
    },
    leftItem: {
      paddingHorizontal: 12,
    },
    body: {
      flex: 1,
      paddingHorizontal: 2,
    },
    rightItem: {
      flexDirection: 'row',
      paddingHorizontal: 8,
    },
    rightTextView: {
      backgroundColor: 'rgb(12,102,223)',
      paddingHorizontal: 6,
      borderRadius: 99,
    },
  });
