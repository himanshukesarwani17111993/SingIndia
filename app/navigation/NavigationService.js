import * as React from 'react';
import { CommonActions } from '@react-navigation/native';
// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}
function popToTop() {
  navigationRef.current.popToTop();
}

function reset() {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        { name: 'Login' },
        // {
        //   name: 'Profile',
        // },
      ],
    }),
  );
}

export default {
  navigate,
  goBack,
  popToTop,
  reset,
};
