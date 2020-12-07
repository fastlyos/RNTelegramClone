import colors from './colors';
import { Platform, Dimensions } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
const dimemsions = Dimensions.get('screen');

export default {
  light: {
    ...DefaultTheme,
    dimemsions: dimemsions,
    colors: {
      ...DefaultTheme.colors,
      ...colors.light,
    },
  },
  dark: {
    ...DarkTheme,
    dimemsions: dimemsions,
    colors: {
      ...DarkTheme.colors,
      ...colors.dark,
    },
  },
};
