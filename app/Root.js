import React, { useRef, useEffect } from 'react';
import Navigator from 'app/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import LoginSheet from './components/UI/LoginSheet';
import BubblePlayer from './components/BubblePlayer';
import * as bubblePlayerActions from './actions/UI/bubbleplayer';

const Root = () => {
  const { showLoginSheet } = useSelector(state => state.loginSheetReducer);
  const { showBubblePlayer } = useSelector(state => state.bubblePlayerReducer);
  const { isLoggedIn } = useSelector(state => state.loginReducer);
  // const sheetRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    // sheetRef.current.snapTo(showLoginSheet ? 1 : 0);
    isLoggedIn
      ? dispatch(bubblePlayerActions.show())
      : dispatch(bubblePlayerActions.hide());
  }, [showLoginSheet, isLoggedIn, dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <Navigator />
      {/* <LoginSheet ref={sheetRef} /> */}
      {showBubblePlayer && <BubblePlayer />}
    </View>
  );
};

export default Root;
