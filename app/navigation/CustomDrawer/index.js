import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import styles from './styles';
import { ICONS, IMAGES } from '../../config/images';

import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#241332',
      }}>
      <View style={styles.container}>
        <ImageBackground
          source={IMAGES.drawerheader}
          style={styles.imageHeader}
          imageStyle={styles.headerImage}>
          <Image
            resizeMode="cover"
            source={ICONS.draweruser}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Aurélien Salomon</Text>
          <Text style={styles.email}>@aureliensalomon</Text>
        </ImageBackground>
        <View style={styles.contentContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('UserHome')}>
            <View style={styles.row}>
              <Icon type="feather" name="home" color="#e0e0e0" />
              <Text style={styles.route}>Home</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.row}>
            <Icon type="feather" name="users" color="#e0e0e0" />
            <Text style={styles.route}>Friends</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Events')}>
            <View style={styles.row}>
              <Icon type="feather" name="calendar" color="#e0e0e0" />
              <Text style={styles.route}>Events</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.row}>
            <Icon type="feather" name="user" color="#e0e0e0" />
            <Text style={styles.route}>Contact Us</Text>
          </View>
          <Text style={styles.greyRoute}>About Us</Text>
          <TouchableWithoutFeedback
            onPress={() => dispatch(loginActions.logOut())}>
            <Text style={[styles.greyRoute, { marginTop: 80 }]}>Log Out</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
