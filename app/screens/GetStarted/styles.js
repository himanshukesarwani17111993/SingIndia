import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.COLOR_WHITE,
  },
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: '80%',
  },
  card: {
    margin: 0,
    marginHorizontal: 10,
    height: '70%',
    alignSelf: 'center',
    borderRadius: 80,
    backgroundColor: 'white',
    borderWidth: 0,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },

  outerCircle: {
    backgroundColor: 'rgba(138, 86, 172, 0.1)',
    height: 260,
    width: 260,
    borderRadius: 260,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  innerCircle: {
    backgroundColor: 'rgba(138, 86, 172, 0.3)',
    height: 200,
    width: 200,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCircle: {
    backgroundColor: COLORS.COLOR_PRIMARY_DARK,
    height: 140,
    width: 140,
    borderRadius: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mainText: {
    fontSize: 25,
    fontFamily: FONTS.FONT_BOLD,
    textAlign: 'center',
  },
  subText: {
    marginTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: COLORS.COLOR_SUB_TEXT,
    fontSize: 16,
  },
  secondCard: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 56,
    width: 173,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
