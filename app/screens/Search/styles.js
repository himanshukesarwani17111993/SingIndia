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
    flex: 1
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
    height: 40,
    borderRadius: 36,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  optionsCard: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 35,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  optionsCard1: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 35,
    alignSelf:'baseline',
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0,
    paddingHorizontal: 20,
    marginHorizontal: 5
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
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
  MostPopularSearches: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
    marginLeft: 10,
    fontWeight:'bold',
    fontFamily: FONTS.FONT_BOLD,
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
    marginTop: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.FONT_EXTRA_BOLD,
    marginLeft: 60,
    marginTop: 5,
  },
});

export default styles;
