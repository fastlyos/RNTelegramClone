import React from "react";
import { ViewProps as RNViewProps, Animated } from "react-native";

interface SearchBarProps {
  placeholder: String;
  callbackNode: Animated.AnimatedValue;
}

declare const SearchBar: (props: SearchBarProps) => React.ReactNode;
export default SearchBar;
