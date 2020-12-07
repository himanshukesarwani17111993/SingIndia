import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 50 / 2,
    overflow: 'hidden',
    elevation: 10,
    backgroundColor: 'white',
  },

  button: {
    width: '100%',
    height: '100%',
    borderRadius: 50 / 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  items: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -50,
  },
});
