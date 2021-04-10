import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const CUSTOMFONT_REGULAR = 'ProductSans-Regular';
const CUSTOMFONT_BOLD = 'ProductSans-Bold';
const CUSTOMFONT_BLACK = 'ProductSans-Black';

export const COLORS = {
  default: '#FFFFFF',
  primary: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  tabBar: '#121212',
  input: '#1D1D1D',
  blue: '#4096FE',
  gray: '#878787',
  gray1: '#666666',
  lightGray: '#dedede',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.4)',
  linear: ['#439DFEE8', '#F687FFE8'],
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 20,
  padding: 30,
  small: 24,
  big: 32,

  // font sizes
  large: 40,
  small: 24,
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 13,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 13,
  body6: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  large: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.large, lineHeight: '40px' },
  small: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.small, lineHeight: '22px' },
  h1: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h1+'px', lineHeight: '36px' },
  h2: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h2+'px', lineHeight: '30px' },
  h3: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h3+'px', lineHeight: '22px' },
  h4: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h4+'px', lineHeight: '22px' },
  h5: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h5+'px', lineHeight: '22px' },
  h6: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h6+'px', lineHeight: '22px' },
  body1: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body1+'px', lineHeight: '36px', },
  body2: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body2+'px', lineHeight: '30px', },
  body3: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body3+'px', lineHeight: '22px', },
  body4: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body4+'px', lineHeight: '22px', },
  body5: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body5+'px', lineHeight: '22px', },
  body6: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body6+'px', lineHeight: '22px', },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
