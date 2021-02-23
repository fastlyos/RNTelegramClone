import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import randomString from "random-string";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { iOSColors } from "react-native-typography";
import { Text, View, TextInput, Divider } from "@app/components";

const COLORS = {
  header: "rgb(247,247,247)",
  blue: "rgb(62, 120,238)",
  subtitle: "rgb(247,247,247)",
};

function NewContactScreen() {
  const navigation = useNavigation();
  const [allowCreate, setAllowCreate] = useState(false);
  const goto = () => navigation && navigation.push("NewContactScreen");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
          <Text type="bodyEmphasized" style={!allowCreate && [{ opacity: 0.2 }]}>
            {"Create"}
          </Text>
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        paddingHorizontal: 15,
      },
    });
    return () => {};
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.nameInputBox}>
          <View style={styles.imageBox}>
            <View style={styles.image} />
          </View>
          <View style={styles.nameInput}>
            <TextInput placeholder="First Name" style={{ paddingVertical: 10, paddingHorizontal: 10 }} />
            <Divider />
            <TextInput placeholder="Last Name" style={{ paddingVertical: 10, paddingHorizontal: 10 }} />
          </View>
        </View>
        <View style={styles.phoneBox}>
          <View style={styles.rowItem}>
            <Text>mobile</Text>
            <TextInput defaultValue="+" te style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10 }} />
          </View>
          <Divider />
          <View style={styles.rowItem}>
            <Text>add phone</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

NewContactScreen.propTypes = {};
export default NewContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: iOSColors.purple,
  },
  nameInputBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageBox: {
    padding: 15,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 999,
    backgroundColor: iOSColors.gray,
  },
  nameInput: {
    flex: 1,
  },
  phoneBox: {
    paddingLeft: 15,
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
