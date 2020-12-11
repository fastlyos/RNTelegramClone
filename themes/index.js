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
    },
  },
};

export default {
  light: lightTheme,
  dark: darkTheme,
};
