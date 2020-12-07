import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from 'app/screens/Home';
import Songbook from 'app/screens/Songbook';
import Search from 'app/screens/Search';
import UserProfile from 'app/screens/UserProfile';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Songbook" component={Songbook} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
  </Stack.Navigator>
);
