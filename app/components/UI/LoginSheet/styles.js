import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../config/styles';

export default StyleSheet.create({
  loginModal: {
    position: 'absolute',
    height: 250,
    width: '100%',
    top: '28%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  actionsContainer: {
    flexDirection: 'row',
    bottom: -20,
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  actions: {},
  actionBtn: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 30,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 0,
    padding: 20,
  },
  actionTitle: {
    color: 'white',
    fontSize: 14,
    fontFamily: FONTS.FONT_BOLD,
    textTransform: 'uppercase',
  },
  social: {
    borderRadius: 22,
    height: 50,
    width: 50,
    borderWidth: 0,
  },
  loginText: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: FONTS.FONT_BOLD,
  },
  account: {
    color: 'white',
    fontFamily: FONTS.FONT_REGULAR,
  },
  signup: {
    color: 'black',
    fontFamily: FONTS.FONT_REGULAR,
  },
  contact: {
    color: 'white',
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
