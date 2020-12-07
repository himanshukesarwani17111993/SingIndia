import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { ICONS, IMAGES } from '../../config/images';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/users';

const Messages = ({ navigation }) => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.loginReducer);
  const { list, following } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(actions.getRequest({ UserId: user._id }));
  }, [dispatch, user]);

  const onFollowPress = FollowingUserId => {
    dispatch(actions.followUserRequest({ UserId: user._id, FollowingUserId }));
  };

  const renderSongs = (item, index) => {
    let source;
    item.ProfilePhoto
      ? (source = { uri: item.ProfilePhoto })
      : (source = IMAGES.userTwo);
    return (
      <View key={index} style={styles.optionsContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('UserProfile', item._id)}>
          <View style={styles.songsDetails}>
            <Image source={source} style={styles.avatar} />
            <View style={styles.rightView}>
              <Text style={styles.artist}>{item.FullName}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View>
          <TouchableWithoutFeedback onPress={() => onFollowPress(item._id)}>
            <Card containerStyle={[styles.optionsCard]}>
              <Text style={styles.categoryText}>
                {following.find(
                  followItem =>
                    followItem.Following &&
                    followItem.Following.FollowingUserId === item._id,
                )
                  ? 'Remove'
                  : 'Follow'}
              </Text>
            </Card>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View />
        <Text style={styles.heading}>Messages</Text>
        <View style={styles.rightHeading}>
          <Icon
            type="feather"
            name="message-square"
            size={30}
            onPress={() => navigation.navigate('MessageList')}
          />
          <Image
            resizeMode="contain"
            source={ICONS.playblack}
            style={styles.feed}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 5, 6].map((_, index) => (
              <View style={styles.messagesItem} key={index}>
                <Image source={IMAGES.useravatar} style={styles.horiAvatar} />
                <Text style={styles.horiName}>James mac</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <View>
              <Icon
                type="feather"
                name="users"
                size={15}
                containerStyle={styles.optionIcon}
              />
              <Text style={styles.optionText}>Friends</Text>
            </View>
            <View>
              <Icon
                type="feather"
                name="sliders"
                size={15}
                containerStyle={styles.optionIcon}
              />
              <Text style={styles.optionText}>Mentions</Text>
            </View>
            <View>
              <View style={styles.optionIcon}>
                <Octicons
                  type="Foundation"
                  name="comment-discussion"
                  size={15}
                />
              </View>
              <Text style={styles.optionText}>Comments</Text>
            </View>
            <View>
              <Icon
                type="font-awesome"
                name="gift"
                size={15}
                containerStyle={styles.optionIcon}
              />
              <Text style={styles.optionText}>Gifts</Text>
            </View>
          </View>
          <Text style={styles.recommendationText}>Recommendations</Text>
          {list.map((item, index) => renderSongs(item, index))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Messages;
