import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#2960af',
  secondary: '#62dc9d',
  third: '#0e93b6',
  background: '#ebf7fb',
  // colors
  black: '#1E1F20',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',

  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  fontFamily: 'Janna LT Bold',
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
