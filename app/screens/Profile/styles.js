import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WHITE,
  },
  // container: {
  //   padding: 10,
  // },
  save: {
    color: COLORS.COLOR_PRIMARY,
    alignSelf: 'flex-end',
    margin: 10,
    marginRight: 10,
  },
  topCard: {
    backgroundColor: COLORS.COLOR_WHITE,
    height: 200,
    borderBottomLeftRadius: 100,
  },
  imageContainer: {
    height: 270,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
  name: {
    fontSize: 30,
    fontFamily: FONTS.FONT_BOLD,
    color: 'white',
    textTransform: 'capitalize',
  },
  avatar: {
    height: 48,
    width: 48,
  },
  id: {
    fontFamily: FONTS.FONT_MEDIUM,
    color: '#ffffff',
    opacity: 0.72,
    textTransform: 'uppercase',
  },
  mainView: {
    flex: 1,
    backgroundColor: '#241332',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  countView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 5,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  innerCount: {
    // flex: 1,
    width: '33.3%',
    alignItems: 'center',
  },
  count: {
    fontSize: 22,
    fontFamily: FONTS.FONT_BOLD,
    color: COLORS.COLOR_WHITE,
    // textAlign: 'center',
  },
  countLabel: {
    fontFamily: FONTS.FONT_MEDIUM,
    color: COLORS.COLOR_WHITE,
    opacity: 0.5,
    // textAlign: 'center',
    textTransform: 'uppercase',
  },
  labelContainer: {
    width: '90%',
    backgroundColor: '#352641',
    borderRadius: 30,
    height: 44,
    alignSelf: 'center',
    marginTop: 40,
    overflow: 'hidden',
  },
  labelView: {
    flexDirection: 'row',
    flex: 1,
    padding: 2,
  },
  currentCategory: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    fontSize: 12,
  },
  category: {
    color: COLORS.COLOR_WHITE,
    opacity: 0.5,
    textTransform: 'uppercase',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    fontSize: 12,
  },
  currentTab: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  profileTabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
