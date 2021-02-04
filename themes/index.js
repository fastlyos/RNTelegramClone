import { Platform, Dimensions } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import colors from "./colors";

const dimemsions = Dimensions.get("screen");

const lightTheme = {
  ...DefaultTheme,
  dimemsions,
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
  dimemsions,
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
