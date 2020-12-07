import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../../config/styles';

export default StyleSheet.create({
  screen: { flex: 1 },
  menuItem: {
    marginHorizontal: 5,
  },
  currentMenu: {
    fontSize: 24,
    fontFamily: FONTS.FONT_BOLD,
  },
  menu: {
    fontSize: 16,
    fontFamily: FONTS.FONT_REGULAR,
  },
  header: {
    marginTop: 10,
    padding: 5,
    paddingHorizontal: 10,
  },
  menuList: {
    alignItems: 'center',
    flexGrow: 1,
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
    marginRight: '20%',
    marginBottom: 15,
    marginLeft: 10,
  },
  input: {
    flex: 1,
  },
  container: {
    marginTop: 10,
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
    margin: 6,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  categoryText: {
    color: 'white',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  column: {
    backgroundColor: 'white',
    paddingBottom: 10,
    marginTop: 10,
    flex: 1,
  },
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
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    fontFamily: FONTS.FONT_REGULAR,
    color: '#999999',
  },
  views: {
    fontFamily: FONTS.FONT_BOLD,
  },
  likesView: {
    marginRight: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  count: {
    color: 'white',
    fontFamily: FONTS.FONT_BOLD,
    marginLeft: 5,
    fontSize: 10,
  },
  outerrow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  row: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 13,
    color: '#999999',
    fontFamily: FONTS.FONT_REGULAR,
  },
  largeImage: {
    height: 270,
    width: 240,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 19,
    color: '#999999',
    marginTop: 10,
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
});
