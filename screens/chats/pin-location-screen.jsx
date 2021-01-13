import React from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { useTheme } from "@react-navigation/native";
import { iOSColors } from "react-native-typography";
import MapView from "react-native-maps";

function PinLocationScreen({ navigation }) {
  const theme = useTheme();
  const styles = createStyles({ theme });
  const goto = () => navigation && navigation.navigate("NewContact");
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <MapView style={styles.map} /> */}
      </View>
    </View>
  );
}

PinLocationScreen.propTypes = {};
PinLocationScreen.defaultProps = {};
export default PinLocationScreen;

const createStyles = ({ theme }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      marginTop: 22,
      // justifyContent: "center",
      // alignItems: "center",
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
  });
