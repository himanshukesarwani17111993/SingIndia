import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStack';
import Profile from '../ProfileStack';
import CustomTab from './CustomTab';
import Party from 'app/screens/Party';
import Message from '../MessagesStack';
import UserStack from '../UserStack';
import { useSelector } from 'react-redux';

const Tabs = createBottomTabNavigator();

export default () => {
  const { isLoggedIn } = useSelector(state => state.loginReducer);
  return (
    <Tabs.Navigator
      tabBar={props => <CustomTab {...props} />}
      initialRouteName="Home">
      <Tabs.Screen
        name="Home"
        component={UserStack}
        options={{
          tabBarVisible: isLoggedIn ? true : false,
        }}
      />
      <Tabs.Screen
        name="Party"
        component={Party}
        listeners={{
          tabPress: e => {
            if (!isLoggedIn) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tabs.Screen
        name="Main"
        component={HomeStack}
        listeners={{
          tabPress: e => {
            if (!isLoggedIn) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tabs.Screen
        name="Message"
        component={Message}
        listeners={{
          tabPress: e => {
            if (!isLoggedIn) {
              e.preventDefault();
            }
          },
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        listeners={{
          tabPress: e => {
            if (!isLoggedIn) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tabs.Navigator>
  );
};
