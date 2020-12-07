import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 26,
    fontFamily: FONTS.FONT_BOLD,
  },
  listContainer: {
    marginTop: 20,
  },
  allText: {
    fontSize: 15,
    lineHeight: 17,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    color: COLORS.COLOR_PINK,
    textAlign: 'left',
    letterSpacing: 0.3,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: COLORS.COLOR_PINK,
    marginBottom: 10,
  },
  optionsCard: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 50,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 0,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  songsDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  rightView: {
    marginLeft: 13,
  },
  song: {
    fontSize: 13,
    color: COLORS.COLOR_THIRD_LABEL,
    fontFamily: FONTS.FONT_REGULAR,
  },
  artist: {
    fontSize: 10,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    marginTop: 3,
  },
  recordings: {
    fontSize: 14,
    color: '#999999',
    fontFamily: FONTS.FONT_REGULAR,
  },
  songTitle: {
    fontFamily: FONTS.FONT_BOLD,
    fontSize: 18,
  },
  seeAll: {
    color: COLORS.COLOR_DARK_PURPLE,
    fontFamily: FONTS.FONT_REGULAR,
    fontSize: 15,
  },
  image: {
    height: 50,
    width: 50,
  },
});
