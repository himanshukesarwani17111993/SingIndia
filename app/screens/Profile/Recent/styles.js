import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 10,
  },
  photosAndVideos: {
    backgroundColor: COLORS.COLOR_DARK_PURPLE,
    marginTop: 30,
    height: 447,
    borderRadius: 40,
    alignItems: 'center',
    padding: 5,
    paddingTop: 15,
    marginBottom: 10,
  },

  photoTitle: {
    fontSize: 16,
    fontFamily: FONTS.FONT_BOLD,
    color: 'white',
  },
  shots: {
    fontSize: 12,
    fontFamily: FONTS.FONT_MEDIUM,
    color: '#999999',
  },
  leftPicContainer: {
    flex: 1,
  },
  rightPicContainer: {
    flex: 1,
    overflow: 'hidden',
    marginLeft: 10,
    justifyContent: 'space-between',
    height: '97%',
  },
  leftPic: {
    width: '100%',
    height: '97%',
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
  },
  rightTopPic: {
    width: '100%',
    height: '50%',
    marginBottom: 3,
  },
  rightBottomPic: {
    width: '100%',
    height: '50%',
    marginTop: 3,
    borderBottomRightRadius: 60,
  },
  imageRow: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 36,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    padding: 10,
    marginTop: 10,
  },
  post: {
    height: 216,
    borderRadius: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: COLORS.COLOR_DARK_PURPLE,
  },
  details: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    color: 'white',
  },
  time: {
    fontSize: 12,
    marginTop: 2,
    color: 'white',
    opacity: 0.3,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 20,
  },
  song: {
    fontSize: 19,
    color: '#fcfafd',
    textTransform: 'capitalize',
    fontFamily: FONTS.FONT_MEDIUM,
    marginLeft: 10,
  },
  controls: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  innerControls: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 12,
    color: '#bbbccd',
    marginRight: 5,
  },
});
