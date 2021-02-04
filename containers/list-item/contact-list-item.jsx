import React, { memo } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Text } from "@app/components/text";
import { View } from "@app/components/view";
import Image from "@app/components/image/image";
import { useTheme } from "@react-navigation/native";

function ContactListItem({ id, avatar, type, firstName, lastName, status, lastSeen, onPress, navigation }) {
<<<<<<< HEAD:components/list-item/contact-list-item.jsx
  const name = firstName + " " + lastName;
  const statusText = status === "online" ? status : "last seen " + moment(lastSeen).fromNow();
=======
  const name = `${firstName} ${lastName}`;
  const statusText = status === "online" ? status : `last seen ${moment(lastSeen).fromNow()}`;
>>>>>>> origin/main:containers/list-item/contact-list-item.jsx
  const theme = useTheme();
  const styles = createStyles({ theme });
  // const borderStyle = {
  //   borderBottomWidth: 0.75,
  //   borderBottomColor: theme.colors.border,
  // };
  //
  return (
    <TouchableHighlight style={styles.container} onPress={() => {}} activeOpacity={1} underlayColor={theme.colors.backgroundCenter}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={{ uri: avatar }} style={{ width: 40, height: 40, borderRadius: 999 }} />
        </View>
        <View style={[styles.content]}>
          <Text type="subheadEmphasized">{name}</Text>
          <Text>{statusText}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

ContactListItem.propTypes = {};
export default memo(ContactListItem);

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
    },
    image: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      height: 52,
      width: 60,
      alignItems: "center",
    },
    content: {
      flex: 1,
      justifyContent: "center",
    },
  });
