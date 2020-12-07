import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/users';

const defaultImage =
  'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg';
export default function Followers({ navigation }) {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.loginReducer);
  const { followers } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(actions.getFollowersRequest({ UserId: user._id }));
  }, [dispatch, user]);

  const renderSongs = (item, index) => {
    console.log(item);
    return (
      <View key={index} style={styles.optionsContainer}>
        <View style={styles.songsDetails}>
          <Image
            source={{
              uri: item.Follower[0].ProfileImage
                ? item.Follower[0].ProfileImage
                : defaultImage,
            }}
            style={styles.image}
          />
          <View style={styles.rightView}>
            <Text style={styles.artist}>{item.Follower[0].UserName}</Text>
          </View>
        </View>
        <View>
          <Card containerStyle={[styles.optionsCard]}>
            <Text style={styles.categoryText}>Remove</Text>
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
          <Text style={styles.title}>Followers</Text>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {followers.map((item, index) => renderSongs(item, index))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
