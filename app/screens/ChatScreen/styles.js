import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';
import { Dimensions, TouchableHighlight, Text } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  Circular: {
    backgroundColor: COLORS.COLOR_DARK_PURPLE,
    width: 30,
    marginLeft: 3,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PurpleCircle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 30, flexDirection: 'column',
    marginLeft: 3,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#9452AA'
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 30,
    marginLeft: 3,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#9452AA'
  },
  ImgBack: {
    width: 25,
    height: 25,
    marginLeft:20
  },
  ImgCross: {
    alignSelf:'flex-end',
    width: 20,
    height: 20,
    marginTop:-25,
    marginRight:20
  },
  search: {
    width: 20,
    alignSelf: 'center',
    justifyContent:'center',
    height: 20
  },
  container: {
    flexDirection: 'column'
    , flex: 1,
  },
  avatar: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10

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
    margin: 8,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    justifyContent: 'flex-end',
  },
  categoryText: {
    color: 'white',
    fontFamily: FONTS.FONT_SEMI_BOLD,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
  inputView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  optionsCard: {
    backgroundColor: COLORS.COLOR_PRIMARY,
    height: 35,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 0,
    paddingHorizontal: 20,

    justifyContent: 'center',
  },
  optionsContainer: {
    margin: 5, elevation: 4,
    flexDirection: 'row',
  },
  MiddleLayerStyleSheet:{
    flexDirection: 'row',
    margin: 5,
    width:'100%'
  },
  Name: {
    color: "#ADB8BE",
    alignSelf: 'flex-start',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 20,
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  Name1:{
    alignSelf: 'flex-start',
    fontSize: 10,
    fontWeight: 'bold',
    color:'#000000',
    marginRight: 20,
    fontFamily: FONTS.FONT_EXTRA_BOLD,
  },
  profileImg: {
    borderWidth: 3,
    borderColor: "#ADB8BE",
    borderWidth: 2,
    borderRadius: 20,
    margin: 2,
    height: 40, width: 40, alignSelf: 'center'
  },
  profilebottomImg: {
    borderWidth: 2,
    borderColor: "#ADB8BE",
    marginLeft:5,
    alignSelf:'center',
    justifyContent: 'center', 
    margin:5,
    marginRight:10,
    borderRadius: 20,
    height: 40, width: 40, alignSelf: 'center'
  },
  Heart: {
    margin: 2,
    height: 10, width: 10, alignSelf: 'center'
  },
  Recording: {
    color: "#000",
    fontSize: 6,
    fontWeight: 'bold',
    alignSelf: 'center', justifyContent: 'center',
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  Details: {
    alignSelf: 'flex-start',
    color: "#ADB8BE",
    fontSize: 8,
    marginRight: 20,
    fontWeight: 'bold',
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  songsDetails: {
    color: "#ADB8BE",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  rightView: {
    marginLeft: 15
    , marginTop: -5
  },
  song: {
    fontSize: 15,
    marginLeft: 20,
    color: '#000000',
    letterSpacing: 0.2,
    fontFamily: FONTS.FONT_BOLD,
  },
  artist: {
    fontSize: 13,
    fontFamily: FONTS.FONT_SEMI_BOLD,
  },
  recordings: {
    fontSize: 14,
    color: '#999999',
    fontFamily: FONTS.FONT_REGULAR,
  },
  songTitle: {
    fontFamily: FONTS.FONT_BOLD,
    fontSize: 18,
  },
  seeAll: {
    color: COLORS.COLOR_DARK_PURPLE,
    fontFamily: FONTS.FONT_REGULAR,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50, width: 50
  },

  focusedLabel: {
    fontSize: 12,
    fontFamily: FONTS.FONT_BOLD,
    marginRight: 10,
  },
  unfocusedLabel: {
    fontSize: 17,
    fontFamily: FONTS.FONT_BOLD,
    marginRight: 10,
    color: '#999999',
  },
  topCard: {
    backgroundColor: 'white',
    height: 110,
    borderBottomLeftRadius: 100,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontFamily: FONTS.FONT_EXTRA_BOLD,
    marginLeft: 60,
    marginTop: 5,
  },
  ButtonText: { color: '#fff', fontSize: 10 },
  ButtonText1: { color: '#00CDCF', fontSize: 10 },
  buttonBottom: { alignSelf: 'center', color: '#00CDCF', marginTop: 15, fontWeight: 'bold', fontSize: 12 },
  BottomBar:{ position: 'absolute',bottom: 0,width: '100%'},
  TextInputLayoutStyle: {flex:1,justifyContent:'center',alignSelf:'center',height:30,padding:0,marginRight:10,textAlignVertical: 'center',paddingLeft: 15, fontSize:10,borderRadius:20, letterSpacing: 0.2, flex:1,backgroundColor:'#d3d3d3' },
  image: { height: 20, width: 20,alignSelf:'center' },
  lineStyle:{borderWidth: 0.4,width:'100%',borderColor:'#00CDCF',marginTop:10,marginBottom:10},
});
export default styles;
