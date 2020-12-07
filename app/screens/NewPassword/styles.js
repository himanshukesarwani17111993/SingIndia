import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.COLOR_BACKGROUND,
  },
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    marginTop: 50,
  },
  inputView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginHorizontal: 36,
    marginTop: 20,
  },
  oTpInput: {
    fontSize: 25,
    fontFamily: FONTS.FONT_BOLD,
    textTransform: 'uppercase',
    backgroundColor: 'white',
    height: 90,
    width: 60,
    borderRadius: 15,
    borderWidth: 0,
  },

  optionsCard: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 45,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginLeft: 15,
  },
  song: {
    fontSize: 14,
    color: '#999999',
    fontFamily: FONTS.FONT_REGULAR,
  },
  artist: {
    fontSize: 13,
    fontFamily: FONTS.FONT_SEMI_BOLD,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 35,
  },

  focusedLabel: {
    fontSize: 17,
    fontFamily: FONTS.FONT_BOLD,
    marginRight: 10,
  },
  unfocusedLabel: {
    fontSize: 17,
    fontFamily: FONTS.FONT_BOLD,
    marginRight: 10,
    color: '#999999',
  },
  topCard: {
    backgroundColor: 'white',
    height: 120,
    borderBottomLeftRadius: 100,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.FONT_EXTRA_BOLD,
    marginLeft: 60,
    marginTop: 5,
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
  btntitle: {
    fontSize: 25,
    fontFamily: FONTS.FONT_BOLD,
    textTransform: 'uppercase',
  },
  resend: {
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.COLOR_PRIMARY,
    fontSize: 16,
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  input: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: COLORS.COLOR_PRIMARY,
    fontSize: 13,
    fontFamily: FONTS.FONT_MEDIUM,
  },
  emailText: {
    fontSize: 14,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 11,
    color: 'red',
    textTransform: 'capitalize',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    marginLeft: 20,
    marginTop: 10,
  },
  message: {
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    marginTop: 5,
    color: 'red',
  },
});

export default styles;
