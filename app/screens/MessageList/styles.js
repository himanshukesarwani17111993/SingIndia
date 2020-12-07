import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.COLOR_THIRD,
  },
  container: {
    flex: 1,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
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
    fontSize: 12,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
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
    // backgroundColor: COLORS.COLOR_PRIMARY,
    height: 35,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0,
    paddingHorizontal: 20,

    justifyContent: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    borderBottomLeftRadius: 50,
  },
  songsDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,

    borderBottomLeftRadius: 50,
  },
  rightView: {
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingRight: 15,
  },
  song: {
    fontSize: 14,
    color: '#999999',
    fontFamily: FONTS.FONT_REGULAR,
  },
  artist: {
    fontSize: 13,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    color: 'white',
    opacity: 0.7,
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
    height: 110,
    borderBottomLeftRadius: 100,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.FONT_BOLD,
    marginLeft: 60,
    marginTop: 5,
  },
  message: {
    fontSize: 14,
    fontFamily: FONTS.FONT_BOLD,
    color: 'white',
  },
  time: {
    color: 'white',
    fontFamily: FONTS.FONT_MEDIUM,
    opacity: 0.7,
  },
  count: {
    width: 22,
    height: 22,
    borderRadius: 22,
    backgroundColor: COLORS.COLOR_PRIMARY_LIGHT,
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: FONTS.FONT_MEDIUM,
    marginTop: 4,
  },
  addContainer: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 0,
  },
  addButton: {
    backgroundColor: COLORS.COLOR_THIRD_BUTTON,
    height: 56,
    width: 56,
    borderRadius: 56,
    borderWidth: 0,
  },
});

export default styles;
