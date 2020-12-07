import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  picContainer: {
    flex: 1,
  },
  pic: {
    height: '45%',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  usersIcon: {
    height: 20,
    width: 30,
  },
  feedIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 15,
  },
  leftColumn: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightColumn: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatar: {
    height: 68,
    width: 73,
    position: 'absolute',
    top: '-10%',
    marginLeft: 15,
  },
  mainContainer: {
    flex: 1,
    top: '30%',
    backgroundColor: '#f1f0f2',
    borderTopRightRadius: 100,
    padding: 10,
    paddingBottom: 100,
  },
  name: {
    fontSize: 28,
    fontFamily: FONTS.FONT_BOLD,
  },
  id: { fontSize: 14, fontFamily: FONTS.FONT_REGULAR, color: '#998fa2' },
  detailsView: {
    height: 66,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 12,
  },
  detail: {
    alignItems: 'center',
  },
  count: {
    fontSize: 13,
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  subtitle: {
    marginTop: 10,
    fontFamily: FONTS.FONT_REGULAR,
    color: '#78849e',
  },
  family: {
    textAlign: 'center',
    fontFamily: FONTS.FONT_REGULAR,
    color: '#998fa2',
  },
  joinContainer: { justifyContent: 'center', marginTop: 20 },
  optionCard: {
    height: 237,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 20,
  },
  option: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  optionText: {
    color: COLORS.COLOR_PRIMARY,
    fontFamily: FONTS.FONT_REGULAR,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    alignItems: 'center',
    marginVertical: 10,
    flex: 1,
    paddingBottom: 10,
  },
  task: {
    height: 22,
    width: 22,
  },
  optionContainer: {
    padding: 20,
    flex: 1,
  },
  optionsCard: {
    // width: 77,
    backgroundColor: COLORS.COLOR_PRIMARY_LIGHT,
    height: 40,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 0,
    margin: 3,
  },
  categoryText: {
    color: 'white',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 11,
  },
  card: {
    marginVertical: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  postCon: {
    height: 210,
  },
  userpic: {
    width: 47,
    height: 37,
  },
  postdetails: {
    flexDirection: 'row',
  },
  postDetails: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontFamily: FONTS.FONT_BOLD,
  },
  date: {
    fontSize: 12,
    fontFamily: FONTS.FONT_REGULAR,
    color: '#352641',
  },
  postCard: {
    height: 72,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 40,
  },
});
