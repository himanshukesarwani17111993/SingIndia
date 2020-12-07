import { StyleSheet } from 'react-native';
import { FONTS } from '../../config/styles';

export default StyleSheet.create({
  screen: { flex: 1 },
  menuItem: {
    marginHorizontal: 5,
  },
  currentMenu: {
    fontSize: 18,
    lineHeight: 19,
    fontFamily: FONTS.FONT_EXTRA_BOLD,
  },
  menu: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    color: '#998fa2',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feed: {
    width: 15,
    height: 20,
    marginRight: 10,
  },
  labelContainer: {
    paddingTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
  },
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.7,
    paddingLeft: 10,
  },
});
