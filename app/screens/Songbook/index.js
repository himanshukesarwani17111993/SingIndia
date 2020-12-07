import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';
import styles from './styles';

export default function Home({ navigation }) {
  const renderSongs = (item, index) => {
    return (
      <View key={index} style={styles.optionsContainer}>
        <View style={styles.songsDetails}>
          <Image
            source={ICONS.song}
            style={{
              height: 70,
              width: 70,
            }}
          />
          <View style={styles.rightView}>
            <Text style={styles.song}>{item.name}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
            <Text style={styles.recordings}>{item.recordings} recordings</Text>
          </View>
        </View>
        <View>
          <Card containerStyle={[styles.optionsCard]}>
            <Text style={styles.categoryText}>Sing</Text>
          </Card>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topCard}>
          <View style={styles.header}>
            <Icon
              type="antdesign"
              onPress={() => navigation.goBack()}
              name="arrowleft"
              style={{
                alignSelf: 'flex-start',
              }}
              size={30}
              containerStyle={{
                flex: 1,
                alignItems: 'flex-start',
              }}
            />
            <View style={styles.row}>
              <Icon
                type="antdesign"
                name="search1"
                onPress={() => navigation.navigate('Search')}
                size={30}
              />
            </View>
          </View>
          <Text style={styles.title}>Songbook</Text>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {users.map((item, index) => renderSongs(item, index))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const users = [
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
  {
    name: 'Bilie Jean',
    artist: 'Micheal Jackson',
    recordings: '1.4 K',
  },
];
