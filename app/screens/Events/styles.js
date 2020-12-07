import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  heading: {
    fontFamily: FONTS.FONT_BOLD,
    fontSize: 26,
    color: COLORS.COLOR_PRIMARY,
    marginLeft: 10,
  },
  eventContainer: {
    height: 310,
    overflow: 'hidden',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  image: {
    height: '90%',
    width: '100%',
    borderRadius: 20,
  },
  type: {
    fontSize: 16,
    fontFamily: FONTS.FONT_BOLD,
    marginTop: 10,
    marginLeft: 10,
  },
  separator: {
    height: 5,
    backgroundColor: '#e7e4ea',
  },
});
