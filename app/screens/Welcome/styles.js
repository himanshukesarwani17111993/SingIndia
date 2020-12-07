import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WHITE,
  },
  container: {
    flex: 1,
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  card: {
    top: '-10%',
    margin: 0,
    right: 0,
    marginLeft: 30,
    height: 196,
    borderWidth: 0,
    backgroundColor: COLORS.COLOR_DARK_PURPLE,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 80,
    padding: 0,
  },
  singText: {
    fontFamily: FONTS.FONT_REGULAR,
    color: COLORS.COLOR_WHITE,
    letterSpacing: 1.5,
  },
  welcomeText: {
    color: COLORS.COLOR_WHITE,
    fontSize: 30,
    fontFamily: FONTS.FONT_BOLD,
    marginTop: 10,
  },
  cardView: {
    marginLeft: 50,
    marginTop: 30,
    justifyContent: 'center',
  },
  secondCard: {
    backgroundColor: COLORS.COLOR_DARK_PINK,
    height: 56,
    width: 173,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    bottom: -22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  spinText: {
    color: COLORS.COLOR_WHITE,
    fontFamily: FONTS.FONT_REGULAR,
    textTransform: 'uppercase',
    fontSize: 16,
    lineHeight: 20,
    marginRight: 5,
  },
});
