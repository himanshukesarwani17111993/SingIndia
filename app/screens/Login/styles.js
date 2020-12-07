import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '30%',
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.COLOR_BACKGROUND,
  },
  topCard: {
    height: '40%',
    backgroundColor: COLORS.COLOR_PRIMARY,
    borderBottomLeftRadius: 120,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 110,
  },
  text: {
    color: 'white',
    fontFamily: FONTS.FONT_BOLD,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  card: {
    marginTop: 25,
    height: 340,
    borderWidth: 0,
    borderBottomLeftRadius: 45,
    elevation: 0,
    borderTopRightRadius: 45,
    padding: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    fontSize: 16,
    fontFamily: FONTS.FONT_MEDIUM,
    marginTop: 20,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    lineHeight: 25,
    textTransform: 'uppercase',
    fontFamily: FONTS.FONT_BOLD,
  },
  btnContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    borderBottomLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  btnStyle: {
    height: 50,
    backgroundColor: COLORS.COLOR_PRIMARY,
  },
  forgotText: {
    fontSize: 18,
    lineHeight: 21,
    fontFamily: FONTS.FONT_BOLD,
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.COLOR_PRIMARY,
  },
  errorText: {
    fontSize: 11,
    color: 'red',
    textTransform: 'capitalize',
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  message: {
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    marginTop: 5,
  },
});

export default styles;
