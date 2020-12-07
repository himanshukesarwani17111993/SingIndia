import React from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../../config/images';
import styles from './styles';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden backgroundColor="#9806f6" barStyle="light-content" />
      <LinearGradient
        colors={[
          '#9806f6',
          '#9b0ef6',
          '#c87bfa',
          '#ffffff',
          '#f9f6fa',
          '#ae8ac5',
          '#8a56ac',
        ]}
        style={styles.container}>
        <Image
          source={IMAGES.splashlogo}
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;
