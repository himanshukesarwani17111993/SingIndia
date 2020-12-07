import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../../config/styles';

export default StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    height: 260,
  },
  card: {
    width: 120,
    overflow: 'hidden',
    padding: 0,
    borderWidth: 0,
    elevation: 0,
    paddingTop: 0,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  name: {
    fontSize: 17,
    lineHeight: 18,
    marginTop: 10,
    fontFamily: FONTS.FONT_REGULAR,
  },
  views: {
    color: COLORS.COLOR_PRIMARY,
    fontFamily: FONTS.FONT_BOLD,
  },
  likesView: {
    marginRight: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  count: {
    color: 'white',
    fontFamily: FONTS.FONT_BOLD,
    marginLeft: 5,
    fontSize: 10,
  },
});
