import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import { IMAGES } from '../../config/images';
import Recent from './Recent';
import Popular from './Popular';
import { TabView } from 'react-native-tab-view';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/users';

const initialLayout = { width: Dimensions.get('window').width };

const Profile = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'popular', title: 'Popular' },
    { key: 'recent', title: 'Recent' },
  ]);
  const [currentRoute, setcurrentRoute] = useState('');

  const dispatch = useDispatch();

  const { user } = useSelector(state => state.loginReducer);
  const { followers, following } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(actions.getFollowersRequest({ UserId: user._id }));
    dispatch(actions.getFollowingRequest({ UserId: user._id }));
  }, [dispatch, user]);

  useEffect(() => {
    if (index === 0) {
      setcurrentRoute('popular');
    } else if (index === 1) {
      setcurrentRoute('recent');
    }
  }, [index]);

  const renderTabBar = props => {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.labelView}>
          {props.navigationState.routes.map((item, tabIndex) =>
            currentRoute === item.key ? (
              <TouchableWithoutFeedback
                key={tabIndex}
                onPress={() => {
                  setcurrentRoute(item.key);
                  props.jumpTo(item.key);
                }}>
                <ImageBackground
                  imageStyle={styles.currentTab}
                  style={styles.profileTabContainer}
                  resizeMode="contain"
                  source={IMAGES.profileTab}>
                  <Text style={styles.currentCategory}>{item.title}</Text>
                </ImageBackground>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                key={tabIndex}
                onPress={() => {
                  setcurrentRoute(item.key);
                  props.jumpTo(item.key);
                }}>
                <View style={styles.categoryContainer}>
                  <Text style={styles.category}>{item.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            ),
          )}
        </View>
      </View>
    );
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'recent':
        return <Recent navigation={navigation} />;
      case 'popular':
        return <Popular />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="#241332" barStyle="light-content" />
      <ScrollView>
        <ImageBackground
          source={IMAGES.userpic}
          style={styles.imageContainer}
          imageStyle={styles.imageStyle}
          resizeMode="cover">
          <Image
            source={IMAGES.useravatar}
            resizeMode="contain"
            style={styles.avatar}
          />
          <Text style={styles.name}>{user.FullName}</Text>
          <Text style={styles.id}>{user.UserId}</Text>
        </ImageBackground>
        <View style={styles.mainView}>
          <View style={styles.countView}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Followers')}>
              <View style={styles.innerCount}>
                <Text style={styles.count}>{followers.length}</Text>
                <Text style={styles.countLabel}>Followers</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Following')}>
              <View style={[styles.innerCount, { left: 10 }]}>
                <Text style={styles.count}>{following.length}</Text>
                <Text style={styles.countLabel}>Following</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.innerCount}>
              <Text style={styles.count}>0</Text>
              <Text style={styles.countLabel}>Likes</Text>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
              renderTabBar={renderTabBar}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
