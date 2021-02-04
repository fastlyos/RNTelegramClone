<<<<<<< HEAD
import colors from "./colors";
import { Platform, Dimensions } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
const dimemsions = Dimensions.get("screen");

const lightTheme = {
  ...DefaultTheme,
  dimemsions: dimemsions,
  colors: {
    ...DefaultTheme.colors,
    ...colors.light,
  },
  applicationStyles: {
    divider: {
      borderWidth: 1,
      borderColor: colors.light.border,
    },
  },
};

const darkTheme = {
  ...DarkTheme,
  dimemsions: dimemsions,
  colors: {
    ...DarkTheme.colors,
    ...colors.dark,
  },
  applicationStyles: {
    divider: {
      borderWidth: 1,
      borderColor: colors.dark.border,
=======
import { Platform, Dimensions } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import colors from "./colors";

const { width, height, fontScale, scale } = Dimensions.get("screen");

export default {
  light: {
    ...DefaultTheme,
    dimemsions: Dimensions.get("screen"),
    colors: {
      ...DefaultTheme.colors,
      ...colors.light,
    },
  },
  dark: {
    ...DarkTheme,
    dimemsions: Dimensions.get("screen"),
    colors: {
      ...DarkTheme.colors,
      ...colors.dark,
>>>>>>> origin/main
    },
  },
};

export default {
  light: lightTheme,
  dark: darkTheme,
};
