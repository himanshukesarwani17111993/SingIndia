import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    height: '100%',
    width: '100%',
  },
  imageHeader: {
    height: 235,
    width: '100%',
    top: -10,
    justifyContent: 'center',
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },

  userName: {
    fontFamily: FONTS.FONT_EXTRA_BOLD,
    marginTop: 10,
    fontSize: 24,
    lineHeight: 26,
    color: 'white',
    marginLeft: 35,
  },
  email: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONTS.FONT_REGULAR,
    color: '#e0e0e0',
    alignSelf: 'flex-start',
    textAlign: 'center',
    marginLeft: 35,
  },
  profileImage: {
    width: 74,
    height: 74,
    marginLeft: 35,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
  },
  route: {
    color: 'white',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 10,
  },
  contentContainer: {
    padding: 15,
  },
  greyRoute: {
    color: '#e0e0e0',
    marginTop: 50,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    fontSize: 17,
  },
});
