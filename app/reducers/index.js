/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
import * as bottomtabReducer from './UI/bottomtabs';
import * as loginSheetReducer from './UI/loginSheet';
import * as bubblePlayerReducer from './UI/bubblePlayer';
import * as userReducer from './userReducer';
import * as searchReducer from './searchReducer';

export default Object.assign(
  loginReducer,
  loadingReducer,
  themeReducer,
  bottomtabReducer,
  loginSheetReducer,
  bubblePlayerReducer,
  searchReducer,
  userReducer,
);
