import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { HeaderBackButton, HeaderTitle, useHeaderHeight } from "@react-navigation/stack";
import { SearchBar } from "@app/components";

function SearchListHeader(props) {
  return (
    <View style={styles.searchBox}>
      <SearchBar />
    </View>
  );
}

SearchListHeader.propTypes = {};

export default SearchListHeader;

const styles = StyleSheet.create({
  searchBox: {
    // backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingTop: 50,
    flex: 1,
  },
});
