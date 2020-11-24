import colors from './colors';
import { Platform, Dimensions } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
const { width, height, fontScale, scale } = Dimensions.get('screen');

export default {
  light: {
    ...DefaultTheme,
    dimemsions: Dimensions.get('screen'),
    colors: {
      ...DefaultTheme.colors,
      ...colors.light,
    },
  },
  dark: {
    ...DarkTheme,
    dimemsions: Dimensions.get('screen'),
    colors: {
      ...DarkTheme.colors,
      ...colors.dark,
    },
  },
};
