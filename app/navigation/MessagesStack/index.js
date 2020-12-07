import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Message from '../../screens/Message';
import MessageList from '../../screens/MessageList';
import MessageDetails from '../../screens/MessageDetails';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Message"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Stack.Screen component={Message} name="Message" />
    <Stack.Screen component={MessageList} name="MessageList" />
    <Stack.Screen component={MessageDetails} name="MessageDetails" />
  </Stack.Navigator>
);
