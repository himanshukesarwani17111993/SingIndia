/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'app/screens/SplashScreen';
import configureStore from 'app/store/configureStore';
import Root from './Root';
const { persistor, store } = configureStore();
export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<SplashScreen />}
        persistor={persistor}
        onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 2000))}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
