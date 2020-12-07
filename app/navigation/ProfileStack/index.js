import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Profile from 'app/screens/Profile';
import Followers from 'app/screens/Followers';
import Following from 'app/screens/Following';
import { StatusBar } from 'react-native';
import { COLORS } from '../../config/styles';

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.COLOR_GREY_BACKGROUND}
        barStyle="dark-content"
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Followers" component={Followers} />
        <Stack.Screen name="Following" component={Following} />
      </Stack.Navigator>
    </>
  );
};
