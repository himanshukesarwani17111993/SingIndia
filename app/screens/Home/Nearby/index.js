import React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { IMAGES } from '../../../config/images';
import styles from './styles';

const Nearby = () => {
  return (
    <View>
      <View style={styles.listView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Card key={index} containerStyle={styles.card}>
              <ImageBackground
                style={styles.imageContainer}
                resizeMode="cover"
                source={IMAGES.recommended}
                imageStyle={styles.image}>
                <View style={styles.likesView}>
                  <Icon
                    size={15}
                    type="antdesign"
                    name="hearto"
                    color="white"
                  />
                  <Text style={styles.count}>942</Text>
                </View>
              </ImageBackground>

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.views}>+100m</Text>
            </Card>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.listView, { marginTop: 15 }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Card key={index} containerStyle={styles.card}>
              <ImageBackground
                style={styles.imageContainer}
                resizeMode="cover"
                source={IMAGES.recommended}
                imageStyle={styles.image}>
                <View style={styles.likesView}>
                  <Icon
                    size={15}
                    type="antdesign"
                    name="hearto"
                    color="white"
                  />
                  <Text style={styles.count}>942</Text>
                </View>
              </ImageBackground>

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.views}>+100m</Text>
            </Card>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Nearby;

const list = [
  {
    name: 'Lab Par Aye',
    user: 'Maya',
    likes: 942,
  },
  {
    name: 'Lab Par Aye',
    user: 'Maya',
    likes: 942,
  },
  {
    name: 'Lab Par Aye',
    user: 'Maya',
    likes: 942,
  },
  {
    name: 'Lab Par Aye',
    user: 'Maya',
    likes: 942,
  },
  {
    name: 'Lab Par Aye',
    user: 'Maya',
    likes: 942,
  },
];
