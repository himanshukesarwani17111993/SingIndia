import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  avatar: {
    height: '90%',
    width: '90%',
    borderRadius: 50,
  },
  floatingBtn: {
    height: 80,
    // width: 80,
    borderRadius: 80,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bubbleLeft: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playView: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#5f4591',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -8,
  },
  playlistView: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#c68bec',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  closeActionView: {
    position: 'absolute',
    bottom: 10,
    width: '96%',
    backgroundColor: 'white',
    height: 81,

    alignSelf: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  leftClose: {
    backgroundColor: '#fdfdfd',
    flex: 1,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightClose: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e63a3a',
    flex: 1,
  },
  bubbleGradient: {
    height: '80%',
    width: '80%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});