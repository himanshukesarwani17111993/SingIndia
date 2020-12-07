import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../config/styles';

export default StyleSheet.create({
  currentMenu: {
    color: 'white',
    backgroundColor: COLORS.COLOR_PRIMARY,
    paddingHorizontal: 2,
    borderRadius: 60,
    textAlign: 'center',
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  menu: {
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
});
