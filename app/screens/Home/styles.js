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
  categoryCard: {
    height: 130,
    width: 120,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    margin: 8,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    justifyContent: 'flex-end',
  },
  categoryText: {
    color: 'white',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginTop: 20,
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
    marginRight: 10,
  },
  input: {
    flex: 1,
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
    margin: 5,
    marginHorizontal: 15,
  },
  focusedLabel: {
    fontSize: 15,
    fontFamily: FONTS.FONT_BOLD,
    marginRight: 10,
  },
  unfocusedLabel: {
    fontSize: 15,
    fontFamily: FONTS.FONT_BOLD,
    marginRight: 10,
    color: '#999999',
  },
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
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingLeft: 10,
  },
});

export default styles;
