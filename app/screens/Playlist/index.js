import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';
import styles from './styles';
import PlayIcon from '../../components/UI/Icons/Play';
import PauseIcon from '../../components/UI/Icons/Pause';

const list = [
  {
    name: 'Billie Jean',
    artist: 'Micheal Jackson',
    avatar: ICONS.song,
    playing: true,
  },
  {
    name: 'Billie Jean',
    artist: 'Micheal Jackson',
    avatar: ICONS.song,
    playing: false,
  },
  {
    name: 'Billie Jean',
    artist: 'Micheal Jackson',
    avatar: ICONS.song,
    playing: false,
  },
];

const Playlist = () => {
  const [data, setdata] = useState(list);

  const renderSongs = (item, index) => {
    return (
      <View key={index} style={styles.optionsContainer}>
        <View style={styles.songsDetails}>
          <Image source={item.avatar} style={styles.image} />
          <View style={styles.rightView}>
            <Text style={styles.song}>{item.name}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            setdata(mylist => {
              const newList = mylist.map((_, innerIndex) => {
                if (index === innerIndex) {
                  _.playing = !_.playing;
                } else {
                  _.playing = false;
                }

                return _;
              });
              return newList;
            });
          }}>
          <View style={{ marginRight: 10 }}>
            {item.playing ? <PauseIcon size={28} /> : <PlayIcon size={28} />}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.headerRow}>
          <Text style={styles.heading}>Playlist</Text>
          <Icon type="antdesign" name="close" size={25} />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.allText}>All Playlist</Text>
          {data.map((item, index) => renderSongs(item, index))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Playlist;
