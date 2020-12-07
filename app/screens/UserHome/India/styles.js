import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../config/styles';

export default StyleSheet.create({
  labelView: {
    padding: 5,
    paddingLeft: 10,
    alignItems: 'center',
  },
  currentCategory: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 12,
    borderColor: COLORS.COLOR_THIRD_LABEL,
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  category: {
    fontFamily: FONTS.FONT_SEMI_BOLD,
    fontSize: 12,
    marginHorizontal: 10,
    color: COLORS.COLOR_THIRD_LABEL,
  },
  dropdownContainer: {
    height: 30,
    width: 120,
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: 'white',
    height: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
