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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: COLORS.COLOR_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: 50,
    borderRadius: 36,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 25,
    fontFamily: FONTS.FONT_BOLD,
    textTransform: 'uppercase',
    backgroundColor: 'white',
    padding: 20,
    height: 90,
    borderRadius: 15,
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
    height: 60,
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
});

export default styles;
