import styled from 'styled-components';
import { COLORS, SIZES, FONTS, icons } from '../constants';

const McText = styled.Text`
  color: ${(props) => (props.color ? props.color : COLORS.default)};

  ${({ h1, h2, h3, h4, h5, h6 }) => {
    switch (true) {
      case h1: { return FONTS.h1; }
      case h2: { return FONTS.h2; }
      case h3: { return FONTS.h3; }
      case h4: { return FONTS.h4; }
      case h5: { return FONTS.h5; }
      case h6: { return FONTS.h6; }
    }
  }}
  ${({ body1, body2, body3, body4, body5, body6 }) => {
    switch (true) {
      case body1: { return FONTS.body1; }
      case body2: { return FONTS.body2; }
      case body3: { return FONTS.body3; }
      case body4: { return FONTS.body4; }
      case body5: { return FONTS.body5; }
      case body6: { return FONTS.body6; }
    }
  }}
`;

const McIcon = styled.Image`
  width: ${(props) => (props.size ? props.size + 'px' : '16px')};
  height: ${(props) => (props.size ? props.size + 'px' : '16px')};
`;
const McAvatar = styled.Image`
  width: ${(props) => (props.size ? props.size + 'px' : '40px')};
  height: ${(props) => (props.size ? props.size + 'px' : '40px')};
`;

export { McText, McIcon, McAvatar };
