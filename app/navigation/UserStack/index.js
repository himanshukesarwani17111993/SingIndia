import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from 'app/screens/UserHome';
import Songbook from 'app/screens/Songbook';
import Search from 'app/screens/Search';
import Events from 'app/screens/Events';
import Playlist from 'app/screens/Playlist';
import UICamera from 'app/components/UI/Camera';
import { StatusBar } from 'react-native';
import { COLORS } from '../../config/styles';
import UserProfile from 'app/screens/UserProfile';

const Stack = createStackNavigator();

export default ({ route, navigation }) => {
  try {
    let tabBarVisible = true;
    if (route.state.index > 0 && route.state.routes[1].name === 'Camera') {
      tabBarVisible = false;
    }
    navigation.setOptions({
      tabBarVisible: tabBarVisible,
    });
  } catch {
    console.log('route state is undefined');
  }

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
        <Stack.Screen name="UserHome" component={Home} />
        <Stack.Screen name="Songbook" component={Songbook} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Playlist" component={Playlist} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Camera" component={UICamera} />
      </Stack.Navigator>
    </>
  );
};
