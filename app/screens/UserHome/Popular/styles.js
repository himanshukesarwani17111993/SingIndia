import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../../config/styles';

export default StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.COLOR_GREY_BACKGROUND },
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
    backgroundColor: COLORS.COLOR_GREY_BACKGROUND,
    paddingBottom: 10,
    marginTop: 10,
    flex: 1,
  },
  listView: {
    height: 205,
  },
  card: {
    width: 100,
    overflow: 'hidden',
    padding: 0,
    borderWidth: 0,
    elevation: 0,
    paddingTop: 0,
    marginHorizontal: 5,
    backgroundColor: COLORS.COLOR_GREY_BACKGROUND,
  },
  firstCard: {
    width: 80,
    height: 170,
    overflow: 'hidden',
    padding: 0,
    borderWidth: 0,
    elevation: 0,
    paddingTop: 0,
    marginHorizontal: 5,
    backgroundColor: COLORS.COLOR_GREY_BACKGROUND,
  },
  secondRowImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  // image: {
  //   width: '100%',
  //   height: '100%',
  //   borderRadius: 10,
  // },
  firstRowImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  name: {
    fontSize: 10,
    marginTop: 5,
    fontFamily: FONTS.FONT_SEMI_BOLD,
    color: '#9b9b9b',
    marginLeft: 5,
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
    height: '78%',
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
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 8,
    color: '#817889',
    fontFamily: FONTS.FONT_REGULAR,
    marginLeft: 2,
  },
  largeImage: {
    height: 230,
    width: 185,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: '#9b9b9b',
    marginTop: 10,
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  avatar: {
    height: 17,
    width: 17,
    borderRadius: 17,
  },
  actionContainer: {},
  thirdrowImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
});
