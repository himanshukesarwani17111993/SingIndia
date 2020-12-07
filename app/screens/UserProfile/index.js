import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { IMAGES, ICONS } from '../../config/images';
import { COLORS } from '../../config/styles';
import { Icon, Card } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/users';

const UserProfile = ({ route }) => {
  console.log(route);
  const renderOptions = (item, index) => {
    return (
      <Card
        key={index}
        containerStyle={[
          styles.optionsCard,
          { height: index === 3 ? 50 : 40 },
        ]}>
        <Text style={styles.categoryText}>{item}</Text>
      </Card>
    );
  };
  const dispatch = useDispatch();

  const { userProfile } = useSelector(state => state.userReducer);
  const { followers, following } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(actions.getUserProfileRequest({ UserId: route.params }));
  }, [dispatch, route.params]);

  useEffect(() => {
    dispatch(actions.getFollowersRequest({ UserId: route.params }));
    dispatch(actions.getFollowingRequest({ UserId: route.params }));
  }, [dispatch, route.params]);

  console.log(userProfile);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}>
        <ImageBackground
          source={IMAGES.userpic}
          imageStyle={styles.pic}
          style={styles.picContainer}>
          <View style={styles.row}>
            <View style={styles.leftColumn}>
              <Image source={ICONS.users} style={styles.usersIcon} />
              <Icon type="font-awesome" name="plus" color="white" size={15} />
            </View>
            <View style={styles.rightColumn}>
              <Icon type="antdesign" name="search1" color="white" />
              <Image source={ICONS.feed} style={styles.feedIcon} />
              <Icon type="entypo" name="dots-three-vertical" color="white" />
            </View>
          </View>
          <View style={styles.mainContainer}>
            <Image source={IMAGES.useravatar} style={styles.avatar} />
            <Text style={styles.name}>
              {userProfile && userProfile.FullName}
            </Text>
            <Text style={styles.id}>
              ID: {userProfile && userProfile.UserId}
            </Text>
            <Text style={styles.id}>VIP</Text>
            <View style={styles.detailsView}>
              <View style={styles.detail}>
                <Text style={styles.count}>{following.length}</Text>
                <Text style={styles.subtitle}>Following</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.count}>{followers.length}</Text>
                <Text style={styles.subtitle}>Followers</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.count}>10</Text>
                <Text style={styles.subtitle}>Rank</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.count}>48</Text>
                <Text style={styles.subtitle}>Gifts</Text>
              </View>
            </View>
            <View style={[styles.detailsView, styles.joinContainer]}>
              <Text style={styles.family}>Join The family</Text>
            </View>
            <View style={styles.optionCard}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ flexGrow: 1 }}>
                {[1, 2].map((item, index) => (
                  <View style={styles.optionContainer} key={index}>
                    <View
                      style={[
                        styles.optionRow,
                        {
                          borderBottomWidth: 1,
                          borderBottomColor: '#e0e0e0',
                        },
                      ]}>
                      <View style={styles.option}>
                        <Icon
                          type="entypo"
                          name="chat"
                          color={COLORS.COLOR_PRIMARY}
                        />
                        <Text style={styles.optionText}>Live</Text>
                      </View>
                      <View style={styles.option}>
                        <Image source={ICONS.task} style={styles.task} />
                        <Text style={styles.optionText}>Tasks</Text>
                      </View>
                      <View style={styles.option}>
                        <Icon
                          type="entypo"
                          name="chat"
                          color={COLORS.COLOR_PRIMARY}
                        />
                        <Text style={styles.optionText}>Live Lvl</Text>
                      </View>
                      <View style={styles.option}>
                        <Icon
                          type="antdesign"
                          name="heart"
                          color={COLORS.COLOR_PRIMARY}
                        />
                        <Text style={styles.optionText}>Celeb</Text>
                      </View>
                    </View>
                    <View style={styles.optionRow}>
                      <View style={styles.option}>
                        <Icon
                          type="font-awesome"
                          name="sliders"
                          color={COLORS.COLOR_PRIMARY}
                        />
                        <Text style={styles.optionText}>Talent</Text>
                      </View>
                      <View style={styles.option}>
                        <Icon
                          type="font-awesome"
                          name="list"
                          color={COLORS.COLOR_PRIMARY}
                        />
                        <Text style={styles.optionText}>Nanopay</Text>
                      </View>
                      <View style={styles.option} />
                      <View style={styles.option} />
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.card}>
              {options.map((item, index) => renderOptions(item, index))}
            </View>
            <ImageBackground source={IMAGES.post} style={styles.postCon} />
            <View style={styles.postCard}>
              <View style={styles.postdetails}>
                <Image source={IMAGES.useravatar} style={styles.userpic} />
                <View style={styles.postDetails}>
                  <Text style={styles.userName}>Maria Snow</Text>
                  <Text style={styles.date}>8 Nov</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;

const options = ['Moments', 'Covers', 'duets', 'short\nvideo'];
