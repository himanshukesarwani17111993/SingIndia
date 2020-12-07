import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStack';
import Profile from '../ProfileStack';
import CustomTab from './CustomTab';
import Party from 'app/screens/Party';
import MessageStack from '../MessagesStack';
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
        component={HomeStack}
        listeners={{
          tabPress: e => {
            if (!isLoggedIn) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tabs.Screen name="Party" component={Party} />
      <Tabs.Screen
        name="Message1"
        component={HomeStack}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
      />
      <Tabs.Screen name="Message" component={MessageStack} />

      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};
