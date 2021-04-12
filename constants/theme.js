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
  base: '8px',
  font: '14px',
  radius: '20px',
  padding: '30px',
  small: '24px',
  big: '32px',

  // font sizes
  large: '40px',
  small: '24px',
  h1: '30px',
  h2: '24px',
  h3: '20px',
  h4: '16px',
  h5: '14px',
  h6: '13px',
  body1: '30px',
  body2: '22px',
  body3: '16px',
  body4: '14px',
  body5: '13px',
  body6: '12px',

  // app dimensions
  width,
  height,
};
export const FONTS = {
  large: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.large, lineHeight: '40px' },
  small: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.small, lineHeight: '22px' },
  h1: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h1, lineHeight: '36px' },
  h2: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h2, lineHeight: '30px' },
  h3: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h3, lineHeight: '22px' },
  h4: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h4, lineHeight: '22px' },
  h5: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h5, lineHeight: '22px' },
  h6: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h6, lineHeight: '22px' },
  body1: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body1, lineHeight: '36px', },
  body2: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body2, lineHeight: '30px', },
  body3: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body3, lineHeight: '25px', },
  body4: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body4, lineHeight: '22px', },
  body5: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body5, lineHeight: '22px', },
  body6: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body6, lineHeight: '22px', },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
