import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import { COLORS } from '../../../config/styles';
import { IMAGES, ICONS } from '../../../config/images';
import { Icon, Card } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const images = [
  IMAGES.event,
  IMAGES.event,
  IMAGES.event,
  IMAGES.event,
  IMAGES.event,
];

const Following = ({ navigation }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const renderSongs = (item, index) => {
    return (
      <View key={index} style={styles.optionsContainer}>
        <View style={styles.songsDetails}>
          <Image
            source={ICONS.song}
            style={{
              height: 40,
              width: 40,
            }}
          />
          <View style={styles.rightView}>
            <Text style={styles.artist}>{item.artist}</Text>
            <Text style={styles.recordings}>{item.recordings}</Text>
          </View>
        </View>
        <View>
          <Card key={index} containerStyle={[styles.optionsCard]}>
            <Text style={styles.categoryText}>Follow</Text>
          </Card>
        </View>
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={images.length}
        activeDotIndex={currentIndex}
        dotStyle={styles.dotStyle}
        containerStyle={{
          position: 'absolute',
          bottom: -15,
          alignSelf: 'center',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const renderPosts = (item, index) => {
    return (
      <View
        style={[
          styles.postContainer,
          { height: item.type === 'image' ? 335 : 270 },
        ]}
        key={index}>
        <View style={styles.postDetailsRow}>
          <Image source={item.image} style={styles.postAvatar} />
          <View style={styles.details}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        <View>
          {item.repost && <Text style={styles.repost}>Repost</Text>}
          {item.type === 'image' && (
            <View style={styles.imagePost}>
              <Text style={styles.caption}>{item.caption}</Text>
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.postImage}
              />
              <View style={{ top: -10, marginLeft: 10 }}>
                <Text style={styles.smallGrey}>{item.name}</Text>
                <View style={styles.postDetailsRow}>
                  <Text style={styles.smallCaption}>A+</Text>
                  <Text style={[styles.smallCaption, { marginLeft: 15 }]}>
                    145 plays
                  </Text>
                </View>
              </View>
            </View>
          )}
          {item.type === 'video' && (
            <>
              <Text style={styles.caption}>{item.caption}</Text>
              <View style={styles.videoPost}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.videoImage}
                />
                <Icon
                  type="antdesign"
                  name="playcircleo"
                  color="white"
                  size={50}
                  containerStyle={styles.playIcon}
                />

                <View style={{ top: -10, marginLeft: 10 }}>
                  <Text style={styles.smallGrey}>{item.name}</Text>
                  <View style={styles.postDetailsRow}>
                    <Text style={styles.smallCaption}>A+</Text>
                    <Text style={[styles.smallCaption, { marginLeft: 15 }]}>
                      145 plays
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}
          <View style={styles.controls}>
            <View style={styles.leftControl}>
              <Icon type="feather" name="share-2" />
              <Icon
                type="font-awesome"
                name="gift"
                size={30}
                color={COLORS.COLOR_PRIMARY}
              />
            </View>
            <View style={styles.rightControl}>
              <Text style={styles.comments}>{item.comments}</Text>
              <Icon
                type="feather"
                name="message-square"
                color={COLORS.COLOR_SECONDARY_LABEL}
                style={styles.controlIcons}
              />
              <Text style={[styles.comments, { marginLeft: 15 }]}>
                {item.likes}
              </Text>
              <Icon
                type="feather"
                name="heart"
                color={COLORS.COLOR_SECONDARY_LABEL}
                style={styles.controlIcons}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((item, index) => (
          <View key={index} style={styles.story}>
            <Image source={item.image} style={styles.storyImage} />
            <Text
              style={[
                styles.storyStatus,
                {
                  backgroundColor:
                    item.status === 'party' ? 'red' : COLORS.COLOR_PRIMARY,
                },
              ]}>
              {item.status}
            </Text>
            <View style={styles.storyRow}>
              <View style={styles.storyAvatarContainer}>
                <Image source={item.image} style={styles.storyAvatar} />
              </View>
              <Text style={styles.storyName}>{item.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.postView}>
        {posts.map((item, index) => renderPosts(item, index))}
      </View>
      <View style={styles.eventContainer}>
        <View style={[styles.storyRow, styles.outerRow]}>
          <View style={styles.storyRow}>
            <Image source={IMAGES.splashlogo} style={styles.logo} />
            <Text style={styles.popularText}>Popular Events</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Events')}>
            <Text style={styles.seeText}>See All</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ marginTop: 10 }}>
          <Carousel
            data={images}
            renderItem={({ item, index }) => {
              return (
                <Image
                  source={item}
                  key={index}
                  style={styles.image}
                  resizeMode="cover"
                />
              );
            }}
            onSnapToItem={index => setcurrentIndex(index)}
            sliderWidth={Dimensions.get('screen').width - 30}
            itemWidth={Dimensions.get('screen').width}
          />
          {pagination()}
        </View>
      </View>
      <View style={{ marginTop: 15, padding: 10 }}>
        <Text style={styles.songTitle}>People You May Like</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {users.map((item, index) => renderSongs(item, index))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Following;

const stories = [
  {
    name: 'James Bruno',
    image: IMAGES.story1,
    status: 'live',
  },
  {
    name: 'Fernando Smith',
    image: IMAGES.story2,
    status: 'party',
  },
  {
    name: 'John Krasinki',
    image: IMAGES.story3,
    status: 'live',
  },
];

const posts = [
  {
    username: 'John Brown',
    date: '8 Nov',
    repost: true,
    image: IMAGES.ipost,
    name: 'Lab Par Aye',
    likes: 942,
    comments: 143,
    type: 'image',
    caption: 'Believe you can and you’re halfway there.',
  },
  {
    username: 'John Brown',
    date: '8 Nov',
    repost: false,
    image: IMAGES.ipost,
    name: 'Lab Par Aye',
    likes: 942,
    comments: 143,
    type: 'video',
    caption: 'Believe you can and you’re halfway there.',
  },
];

const users = [
  {
    name: 'Bilie Jean',
    artist: 'Emily Lerner',
    recordings: '@emilylerner',
  },
  {
    name: 'Bilie Jean',
    artist: 'Emily Lerner',
    recordings: '@emilylerner',
  },
  {
    name: 'Bilie Jean',
    artist: 'Emily Lerner',
    recordings: '@emilylerner',
  },
  {
    name: 'Bilie Jean',
    artist: 'Emily Lerner',
    recordings: '@emilylerner',
  },
  {
    name: 'Bilie Jean',
    artist: 'Emily Lerner',
    recordings: '@emilylerner',
  },
  {
    name: 'Bilie Jean',
    artist: 'Emily Lerner',
    recordings: '@emilylerner',
  },
  {
    name: 'Bilie Jean',
    artist: 'Emily Lerner',
    recordings: '@emilylerner',
  },
];
