import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card } from 'react-native-elements';
import { COLORS } from '../../config/styles';
import { IMAGES, ICONS } from '../../config/images';
import styles from './styles';

const GetStarted = ({ navigation }) => {
  const renderList = (item, index) => {
    return (
      <Card containerStyle={styles.card}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <View style={styles.mainCircle}>
              <Image source={ICONS.startedIcon} style={styles.icon} />
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.mainText}>Get Started</Text>
          <Text style={styles.subText}>
            If you're offered a seat on rocket ship,{'\n'}don't ask what
            seat!Just get on.
          </Text>
        </View>
      </Card>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        hidden={false}
        backgroundColor={COLORS.COLOR_PRIMARY_LIGHT}
        barStyle="light-content"
      />
      <ImageBackground source={IMAGES.bg_light} style={styles.container}>
        <FlatList
          data={[1, 2, 3]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => renderList(item, index)}
        />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <View style={styles.secondCard}>
            <Text style={styles.spinText}>Next</Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GetStarted;
