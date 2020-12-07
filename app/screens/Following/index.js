import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/users';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.loginReducer);
  const { following } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(actions.getFollowingRequest({ UserId: user._id }));
  }, [dispatch, user]);
  console.log(following, 'asd');

  const renderSongs = (item, index) => {
    return (
      <View key={index} style={styles.optionsContainer}>
        <View style={styles.songsDetails}>
          <Image source={ICONS.song} style={styles.avatar} />
          <View style={styles.rightView}>
            <Text style={styles.artist}>{item.FullName}</Text>
          </View>
        </View>
        <View>
          <Card containerStyle={[styles.optionsCard]}>
            <Text style={styles.categoryText}>Unfollow</Text>
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
              size={30}
            />
          </View>
          <Text style={styles.title}>Following</Text>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {following.map((item, index) => renderSongs(item, index))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
