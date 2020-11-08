import colors from './colors';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export default {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...colors.light,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...colors.dark,
    },
  },
};
