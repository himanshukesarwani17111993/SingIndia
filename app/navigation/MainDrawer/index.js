import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../CustomDrawer';
import HomeTab from '../Hometab';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  const { isLoggedIn } = useSelector(state => state.loginReducer);
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: '93%',
        height: '95%',
        top: '2.5%',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        overflow: 'hidden',
      }}
      screenOptions={{
        gestureEnabled: isLoggedIn,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeTab} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
