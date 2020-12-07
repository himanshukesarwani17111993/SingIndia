import { StyleSheet } from 'react-native';
import { FONTS } from '../../../../config/styles';

export default StyleSheet.create({
  screen: { flex: 1 },
  menuItem: {
    marginHorizontal: 5,
  },
  label: {
    fontFamily: FONTS.FONT_REGULAR,
    marginLeft: 10,
  },
  container: {
    marginTop: 10,
  },
  categoryCard: {
    height: 150,
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
    borderRadius: 60,
    marginBottom: 5,
    backgroundColor: 'white',
    padding: 0,
  },
  categoryText: {
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
    fontSize: 16,
    lineHeight: 18,
    marginTop: 3,
    fontFamily: FONTS.FONT_REGULAR,
    color: '#484d54',
  },
  email: {
    fontFamily: FONTS.FONT_REGULAR,
    color: '#484d54',
    marginTop: 5,
  },
  numberBig: {
    fontSize: 20,
    fontFamily: FONTS.FONT_BOLD,
  },

  outerrow: {
    flexDirection: 'row',
  },
  userDetails: {
    marginLeft: 10,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  userName: {
    color: 'white',
  },
  topImage: {
    marginTop: 10,
    height: 160,
    width: 130,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  number: {
    textAlign: 'center',
    color: '#999999',
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  userPic: {
    height: 60,
    width: 60,
  },
});
