import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: FONTS.FONT_EXTRA_BOLD,
  },
  languageText: {
    marginTop: 15,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: FONTS.FONT_BOLD,
  },
  card: {
    // backgroundColor: 'red',
  },
  listContainer: {
    backgroundColor: 'red',
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
  },
  outerCircleCard: {
    marginBottom:-100,
    backgroundColor:"#d3d3d3",
    elevation:3,
    borderRadius:Dimensions.get('window').width*0.50,
    margin: -Dimensions.get('window').width*0.05
  },
  innerCard: {
    height: '100%',
    width: '100%',
    // left: -100,
    borderWidth: 0,
    elevation: 10,
    borderRadius: 400,
    margin: 0,
    padding: 0,
    top: '20%',
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  circlelist: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    borderWidth: 5,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
