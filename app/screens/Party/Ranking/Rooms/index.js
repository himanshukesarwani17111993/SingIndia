import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import { IMAGES } from '../../../../config/images';

const Ranking = () => {
  const renderCategories = (item, index) => {
    return (
      <View key={index}>
        <ImageBackground
          source={item.image}
          style={styles.topImage}
          imageStyle={styles.cardImage}
          resizeMode="cover">
          <Text style={styles.userName}>{item.name}</Text>
        </ImageBackground>
        <Text style={styles.number}>No. {index + 1}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.column, { marginTop: 0 }]}>
          <View style={styles.container}>
            <Text style={styles.label}>
              By last 7 days top receiver star level
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item, index) => renderCategories(item, index))}
            </ScrollView>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 15 }}>
          {[1, 2, 3, 4, 5, 7, 8, 8, 8, 9].map((item, index) => (
            <View style={styles.row} key={index}>
              <View style={styles.outerrow}>
                <Image
                  source={IMAGES.rankingUser}
                  resizeMode="contain"
                  style={styles.userPic}
                />
                <View style={styles.userDetails}>
                  <Text style={styles.name}>Emily Lerner</Text>
                  <Text style={styles.email}>@nolanemily</Text>
                </View>
              </View>
              <Text style={styles.numberBig}>No. 4</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ranking;

const categories = [
  {
    name: 'Mayur',
    image: IMAGES.rankingOne,
  },
  {
    name: 'Soha',
    image: IMAGES.rankingTwo,
  },
  {
    name: 'BSS',
    image: IMAGES.rankignThree,
  },
];
