import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableHighlight, ViewPropTypes, Switch } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Image, PngIcons, SvgIcons, Divider, View } from "@app/components";
import { useTheme } from "@react-navigation/native";
import { Text } from "@app/components/text";

const COLORS = {
  gray: "rgb(160, 160, 160)",
  padding: "rgb(240, 240, 240)",
  blue: "rgb(55,124,222)",
  touch: "rgb(230,230,230)",
};

function CommonListItem({ title, left, right, onPress }) {
  const { iconName = "", type, invisible: invisibleLeft } = left;
  const invisibleRight = right.invisible;
  const { hideChevronRight = false, isRoundText, isCustomComponent, component: RightComponent, text: rightText } = right;

  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* left */}
          <View style={styles.leftItem}>
            {!invisibleLeft && <>{type === "png" ? <PngIcons name={iconName} size={26} /> : <SvgIcons name={iconName} />}</>}
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
                  <Text type="subheadShort" color={isRoundText ? "white" : COLORS.gray}>
                    {rightText}
                  </Text>
                </View>
                {!hideChevronRight && <SvgIcons name="ic_open" tintColor={COLORS.gray} />}
              </>
            )}
            {isCustomComponent && <RightComponent />}
          </View>
        </View>
        <Divider style={styles.marginLeft} />
      </View>
    </TouchableHighlight>
  );
}

// CommonListItem.propTypes = {
//   left: PropTypes.object.isRequired,
//   right: PropTypes.object.isRequired,
// icon: PropTypes.any.isRequired,
// iconBackgroundColor: PropTypes.string.isRequired,
// rightText: PropTypes.string.isRequired,
// isRoundText: ViewPropTypes.style,
// };
// CommonListItem.defaultProps = {
//   left: {},
//   right: {},
// icon: false,
// iconBackgroundColor: 'transparent',
// rightText: '',
// };
export default CommonListItem;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.touch,
    },
    content: {
      backgroundColor: "white",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: 4,
      paddingHorizontal: 2,
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
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 2,
    },
    rightTextView: {
      backgroundColor: COLORS.blue,
      paddingHorizontal: 4,
      borderRadius: 999,
    },
    marginLeft: {
      marginLeft: 50,
    },
  });
