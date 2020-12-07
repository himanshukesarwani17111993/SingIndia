import { StyleSheet } from 'react-native';
import { FONTS } from '../../../config/styles';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    height: 148,
    padding: 0,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0,
    overflow: 'hidden',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 15,
    fontFamily: FONTS.FONT_BOLD,
  },
  user: {
    color: '#999999',
    marginTop: 2,
    fontFamily: FONTS.FONT_REGULAR,
  },
  likeView: {
    marginTop: 5,
    flexDirection: 'row',
  },
  likeText: {
    marginLeft: 10,
    fontFamily: FONTS.FONT_REGULAR,
  },
});
