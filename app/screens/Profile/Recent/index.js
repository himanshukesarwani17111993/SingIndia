import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { IMAGES } from '../../../config/images';
import { Icon } from 'react-native-elements';
import styles from './styles';

const Recent = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.photosAndVideos}>
        <Text style={styles.photoTitle}>Photos & Videos</Text>
        <Text style={styles.shots}>269 shots</Text>
        <View style={styles.imageRow}>
          <View style={styles.leftPicContainer}>
            <Image source={IMAGES.recentPicThree} style={styles.leftPic} />
          </View>
          <View style={styles.rightPicContainer}>
            <Image source={IMAGES.recentPicTwo} style={styles.rightTopPic} />
            <Image source={IMAGES.recentPicOne} style={styles.rightBottomPic} />
          </View>
        </View>
      </View>
      {data.map((item, index) => {
        return (
          <View style={styles.post} key={index}>
            <View style={styles.detailsRow}>
              <View />
              <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                <Image source={IMAGES.useravatar} style={styles.avatar} />
                <View style={styles.details}>
                  <Text style={styles.username}>{item.name} </Text>
                  <Text style={styles.time}>1 hour ago</Text>
                </View>
              </View>
              <Icon
                color="white"
                style={{ opacity: 0.3 }}
                type="antdesign"
                name="down"
                size={10}
              />
            </View>
            <View style={styles.songRow}>
              <Icon type="antdesign" name="play" color="#d47fa6" size={50} />
              <Text style={styles.song}>{item.song}</Text>
            </View>
            <View style={styles.controls}>
              <View style={styles.innerControls}>
                <Text style={styles.count}>256</Text>
                <Icon type="feather" name="message-square" color="#998fa2" />
              </View>
              <View style={styles.innerControls}>
                <Text style={styles.count}>516</Text>
                <Icon type="feather" name="heart" color="#998fa2" />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Recent;

const data = [
  {
    avatar: IMAGES.userpic,
    name: 'Ida Niska',
    song: 'tum hi ho',
    comments: 256,
    likes: 516,
  },
  {
    avatar: IMAGES.userpic,
    name: 'Ida Niska',
    song: 'tum hi ho',
    comments: 256,
    likes: 516,
  },
  {
    avatar: IMAGES.userpic,
    name: 'Ida Niska',
    song: 'tum hi ho',
    comments: 256,
    likes: 516,
  },
];
