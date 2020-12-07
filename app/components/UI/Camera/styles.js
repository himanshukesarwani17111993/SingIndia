import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: COLORS.COLOR_LIGHT_PURPLE,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  snapContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    top: 20,
    position: 'absolute',
  },
});
