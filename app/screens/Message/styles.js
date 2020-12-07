import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontFamily: FONTS.FONT_BOLD,
    alignSelf: 'center',
    marginLeft: 10,
  },
  feed: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
  rightHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horiAvatar: {
    width: 65,
    height: 65,
  },
  horiName: {
    fontSize: 13,
    fontFamily: FONTS.FONT_MEDIUM,
    textTransform: 'capitalize',
    color: '#787c81',
  },
  messagesItem: {
    marginHorizontal: 15,
  },
  container: {
    marginTop: 10,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,

    marginTop: 10,
  },
  optionIcon: {
    width: 40,
    height: 38,
    borderRadius: 40,
    backgroundColor: '#8a56ac',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    fontSize: 12,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    marginTop: 3,
  },
  recommendationText: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: FONTS.FONT_BOLD,
    marginBottom: 20,
  },
  optionsCard: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 40,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0,
    paddingHorizontal: 15,

    justifyContent: 'center',
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
  categoryText: {
    color: 'white',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
});
