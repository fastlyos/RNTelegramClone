import React, { RefObject } from "react";
import { ViewProps as RNViewProps, Animated, ScrollViewComponent, TextInputComponent } from "react-native";

interface SearchBarProps {
  placeholder: String;
  callbackNode: Animated.AnimatedValue;
  searchBarRef: RefObject<TextInputComponent>;
  scrollViewRef: RefObject<ScrollViewComponent>;
  onCancel: Function;
  onBlur: Function;
  onFocus: Function;
  backgroundColor: String;
}

declare const SearchBar: (props: SearchBarProps) => React.ReactNode;
export default SearchBar;
