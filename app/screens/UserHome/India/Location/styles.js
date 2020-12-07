import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  cover: {
    height: 210,
    marginVertical: 10,
    width: '98%',
  },
  numberOne: {
    width: 66,
    height: 33,
    backgroundColor: COLORS.COLOR_PRIMARY,
    top: 15,
    left: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontFamily: FONTS.FONT_SEMI_BOLD,
    fontSize: 13,
    color: 'white',
  },
  row: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    left: 30,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  count: {
    color: 'white',
    fontSize: 12,
    fontFamily: FONTS.FONT_BOLD,
    marginRight: 5,
  },
  avatar: {
    width: 36,
    height: 36,
  },
  songRow: {
    flexDirection: 'row',
    paddingLeft: 20,
    height: 72,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  songDetails: {
    marginLeft: 10,
  },
  song: {
    fontSize: 14,
    fontFamily: FONTS.FONT_REGULAR,
    color: COLORS.COLOR_PRIMARY_DARK,
  },
  artist: {
    fontSize: 16,
    fontFamily: FONTS.FONT_BOLD,
  },
  postView: {
    width: '49%',
    marginRight: 6,
    height: 220,
    marginVertical: 5,
  },
  postimage: {
    height: '100%',
    borderRadius: 4,
  },
  post: {
    height: '80%',
    width: '100%',
  },
  smallAvatar: {
    width: 22,
    height: 22,
    borderRadius: 22,
  },
  postSong: {
    fontSize: 15,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    color: '#9b9b9b',
    marginLeft: 5,
  },
  postRow: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postcount: {
    fontSize: 12,
    fontFamily: FONTS.FONT_BOLD,
    color: COLORS.COLOR_SECONDARY_LABEL,
    marginLeft: 5,
  },
  numberTwo: {
    width: 66,
    height: 33,
    backgroundColor: COLORS.COLOR_PRIMARY,
    top: 10,
    left: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    alignItems: 'center',
    paddingHorizontal: 4,
  },
});
