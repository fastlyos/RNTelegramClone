import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableHighlight, ViewPropTypes, Switch } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Image, PngIcons, SvgIcons, Divider, View } from "@app/components";
import { useTheme } from "@react-navigation/native";
import { Text } from "@app/components/text";

const COLORS = {
  gray: "rgb(160, 160, 160)",
  blurText: "rgb(155,155,155)",
  subText: "rgb(62,62,62)",
  titleText: "rgb(40,40,40)",
  activeText: "rgb(150,150,150)",
  padding: "rgb(240, 240, 240)",
  blue: "rgb(55,124,222)",
  touch: "rgb(230,230,230)",
};

function SessionListItem({ title, titleStyle, subtitle = {}, left, right, onPress, disabled, containerStyle, hasBottomDivider = true }) {
  const { text: rightText } = right;
  const { deviceName, ipAddress, location } = subtitle;

  const theme = useTheme();
  const styles = createStyles({ theme });
  return (
    <TouchableHighlight onPress={onPress} disabled={disabled}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.content}>
          {/* content */}
          <View style={styles.body}>
            <Text type="footnoteEmphasized" color={COLORS.titleText} style={titleStyle}>
              {title}
            </Text>
            {rightText && (
              <Text type="footnote" color={COLORS.activeText}>
                {rightText}
              </Text>
            )}
          </View>
          {deviceName && (
            <Text type="footnote" color={COLORS.subText}>
              {deviceName}
            </Text>
          )}
          {ipAddress && location && <Text type="caption2" color={COLORS.blurText} numberOfLines={1}>{`${ipAddress} - ${location}`}</Text>}
        </View>
        {hasBottomDivider && <Divider marginLeft={10} />}
      </View>
    </TouchableHighlight>
  );
}

// SessionListItem.propTypes = {
//   left: PropTypes.object.isRequired,
//   right: PropTypes.object.isRequired,
// icon: PropTypes.any.isRequired,
// iconBackgroundColor: PropTypes.string.isRequired,
// rightText: PropTypes.string.isRequired,
// isRoundText: ViewPropTypes.style,
// };
SessionListItem.defaultProps = {
  left: {},
  right: {},
  onPress: () => {},
};
export default memo(SessionListItem);

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.touch,
    },
    content: {
      backgroundColor: "white",
      // flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    body: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    tempIcon: {
      height: 30,
      width: 30,
    },
    rightTextView: {
      backgroundColor: COLORS.blue,
      paddingHorizontal: 4,
      borderRadius: 999,
    },
    // marginLeft: {
    //   marginLeft: 50,
    // },
  });
