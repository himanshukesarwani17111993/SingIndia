import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { IMAGES } from '../../config/images';
import styles from './style';

const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image source={IMAGES.welcome} style={styles.image} />
        <Card containerStyle={styles.card}>
          <View style={styles.cardView}>
            <Text style={styles.singText}>SING INDIA</Text>
            <Text style={styles.welcomeText}>Welcome to asdasd Up</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('GetStarted')}>
            <View style={styles.secondCard}>
              <Text style={styles.spinText}>Spin to win</Text>
              <Icon
                type="antdesign"
                name="arrowright"
                color="#ffffff"
                size={16}
              />
            </View>
          </TouchableWithoutFeedback>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
