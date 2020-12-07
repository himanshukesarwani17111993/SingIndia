import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';
//import Language from 'app/screens/Language';
import Welcome from 'app/screens/Welcome';
import GetStarted from 'app/screens/GetStarted';
import HomeTabs from './Hometab';
import Login from 'app/screens/Login';
import ForgotPassword from 'app/screens/ForgotPassword';
import SetNewPassword from 'app/screens/SetNewPassword';
import NewPassword from 'app/screens/NewPassword';
import MainDrawer from './MainDrawer';

import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

function App() {
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={MainDrawer} />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
