import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { HeaderBackButton, HeaderTitle, useHeaderHeight } from "@react-navigation/stack";
import SearchBar from "../search-bar/search-bar";
import PropTypes from "prop-types";

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
