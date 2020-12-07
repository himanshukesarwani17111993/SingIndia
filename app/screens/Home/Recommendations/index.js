import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { IMAGES } from '../../../config/images';
import styles from './styles';

export default ({ navigation }) => {
  return (
    <ScrollView style={{ paddingBottom: 20 }}>
      {list.map((item, index) => (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('UserProfile')}
          key={index}>
          <Card containerStyle={styles.card}>
            <View style={styles.row}>
              <View style={styles.left}>
                <Image source={IMAGES.recommended} style={styles.image} />
              </View>
              <View style={styles.right}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.user}>{item.user}</Text>
                <View style={styles.likeView}>
                  <Icon type="antdesign" name="hearto" color="#999999" />
                  <Text style={styles.likeText}>{item.likes}</Text>
                </View>
              </View>
            </View>
          </Card>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

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
