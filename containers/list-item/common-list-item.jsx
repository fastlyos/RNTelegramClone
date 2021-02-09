import React, { memo, useState } from "react";
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
  border: "rgb(232,232,232)",
  text: "rgb(24,24,24)",
};

function SwitchComponent({ switchDefaultValue, onValueChange }) {
  const [value, setValue] = useState(switchDefaultValue || false);
  return (
    <Switch
      value={value}
      onValueChange={(val) => {
        onValueChange(val);
        setValue(val);
      }}
      style={{ marginHorizontal: 10 }}
    />
  );
}

function CommonListItem({
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  left,
  right,
  onPress,
  disabled,
  containerStyle,
  hasBottomDivider = true,
  isSelected,
}) {
  const { iconName = "", type, invisible: invisibleLeft } = left;
  const {
    invisible: invisibleRight,
    hideChevronRight = false,
    isRoundText,
    component: RightComponent,
    text: rightText,
    isSwitch,
    isSelect,
    switchDefaultValue = false,
    onSwitchChangeValue = () => {},
  } = right;

  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <TouchableHighlight onPress={onPress} disabled={disabled || isSwitch}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.content}>
          {/* left */}
          {!invisibleLeft && type && iconName && (
            <View style={styles.leftItem}>{type === "png" ? <PngIcons name={iconName} size={26} /> : <SvgIcons name={iconName} />}</View>
          )}
          {/* content */}
          <View style={[styles.body, hasBottomDivider && styles.borderBottom]}>
            <View style={styles.bodyTextBox}>
              <Text type="subheadShort" style={titleStyle}>
                {title}
              </Text>
              {!!subtitle && (
                <Text type="footnote" style={[styles.subtitle, subtitleStyle]}>
                  {subtitle}
                </Text>
              )}
            </View>
            <View style={styles.rightItem}>
              {!invisibleRight && !isSwitch && (
                <>
                  <View style={isRoundText && styles.rightTextView}>
                    {!!rightText && (
                      <Text type="callout" color={isRoundText ? "white" : COLORS.gray}>
                        {rightText}
                      </Text>
                    )}
                  </View>
                  {!hideChevronRight && <SvgIcons name="ic_open" tintColor={COLORS.gray} size={22} />}
                </>
              )}
              {isSwitch && <SwitchComponent onValueChange={onSwitchChangeValue} switchDefaultValue={switchDefaultValue} />}
              {isSelect && isSelected && <PngIcons name="ModernMenuCheck" size={10} style={{ marginHorizontal: 10 }} />}
            </View>
          </View>
          {/* right */}
        </View>
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
CommonListItem.defaultProps = {
  left: {},
  right: {},
  onPress: () => {},
};
export default memo(CommonListItem);

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
    },
    tempIcon: {
      height: 30,
      width: 30,
    },
    leftItem: {
      // paddingHorizontal: 12,
      paddingLeft: 12,
    },
    body: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 4,
      minHeight: 40,
      marginLeft: 12,
    },
    bodyTextBox: {
      justifyContent: "center",
      paddingVertical: 4,
    },
    subtitle: {
      paddingVertical: 4,
      color: COLORS.gray,
    },
    borderBottom: {
      borderBottomColor: COLORS.border,
      borderBottomWidth: 1,
    },
    rightItem: {
      paddingRight: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    rightTextView: {
      backgroundColor: COLORS.blue,
      paddingHorizontal: 5,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 999,
    },
    // marginLeft: {
    //   marginLeft: 50,
    // },
  });
