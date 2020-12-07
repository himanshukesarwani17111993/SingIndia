import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { COLORS } from '../../config/styles';
import { ICONS } from '../../config/images';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/users';

export default function MessageList({ navigation }) {
  // const dispatch = useDispatch();
  const [firstColor, setFirstColor] = useState(false);

  useEffect(() => {
    data[0].read ? setFirstColor(false) : setFirstColor(true);
  }, []);

  const renderList = (item, index) => {
    return (
      <View
        key={index}
        style={[
          styles.optionsContainer,
          {
            backgroundColor: item.read
              ? COLORS.COLOR_PRIMARY_DARK
              : COLORS.COLOR_THIRD,
          },
        ]}>
        <View style={[styles.songsDetails]}>
          <Image source={ICONS.song} style={styles.avatar} />
          <View style={styles.rightView}>
            <View>
              <Text style={styles.artist}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <View>
              <Text style={styles.time}>9 hrs</Text>
              {!item.read && <Text style={styles.count}>{item.count}</Text>}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.screen,
        {
          backgroundColor: firstColor
            ? COLORS.COLOR_THIRD
            : COLORS.COLOR_PRIMARY_DARK,
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.topCard}>
          <View style={styles.header}>
            <Icon
              type="antdesign"
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={30}
            />
            <Icon
              type="antdesign"
              onPress={() => navigation.goBack()}
              name="search1"
              size={20}
            />
          </View>
          <Text style={styles.title}>Messages</Text>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((item, index) => renderList(item, index))}
          </ScrollView>
        </View>
        <Button
          icon={{ name: 'message-square', type: 'feather', color: 'white' }}
          containerStyle={styles.addContainer}
          buttonStyle={styles.addButton}
        />
      </View>
    </SafeAreaView>
  );
}

const data = [
  {
    name: 'Dina Meyer',
    count: 5,
    message: 'Welcome to Yoga Meetup',
    read: false,
  },
  {
    name: 'Dina Meyer',
    count: 7,
    message: 'Welcome to Yoga Meetup',
    read: false,
  },
  {
    name: 'Dina Meyer',
    count: 7,
    message: 'Welcome to Yoga Meetup',
    read: true,
  },
  {
    name: 'Dina Meyer',
    count: 7,
    message: 'Welcome to Yoga Meetup',
    read: true,
  },
  {
    name: 'Dina Meyer',
    count: 7,
    message: 'Welcome to Yoga Meetup',
    read: true,
  },
  {
    name: 'Dina Meyer',
    count: 7,
    message: 'Welcome to Yoga Meetup',
    read: true,
  },
];
