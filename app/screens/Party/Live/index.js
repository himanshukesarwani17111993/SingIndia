import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import styles from './styles';
import { Icon, Card } from 'react-native-elements';
import { IMAGES } from '../../../config/images';
import { COLORS } from '../../../config/styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const images = [
  IMAGES.event,
  IMAGES.event,
  IMAGES.event,
  IMAGES.event,
  IMAGES.event,
];
const Solo = ({ navigation }) => {
  const [currentRoute, setcurrentRoute] = useState('Hot');
  const [currentIndex, setcurrentIndex] = useState(0);

  const renderCategories = (item, index) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => setcurrentRoute(item.name)}>
        <Text
          style={
            currentRoute === item.name
              ? styles.currentCategory
              : styles.categoryText
          }>
          {item.name}
        </Text>
      </TouchableWithoutFeedback>
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
  const renderFollowing = () => {
    return (
      <View style={styles.followingContainer}>
        <View style={styles.topFollowingCard}>
          <Text style={styles.followingHeader}>My Following</Text>
          <Text style={styles.followingSubtitle}>
            None of your followers is broadcasting now
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 10 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Card key={index} containerStyle={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.recommended}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.outerrow}>
                  <Text style={styles.subtitle}>{item.singers} singers</Text>
                  <View style={styles.row}>
                    <Icon
                      type="font-awesome"
                      color="#999999"
                      name="user"
                      size={15}
                    />
                    <Text style={styles.subtitle}> {item.users}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </ScrollView>
          <Text style={styles.label}>Fresh</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <View key={index} style={styles.largeImage}>
                <Image
                  resizeMode="cover"
                  source={IMAGES.recommended}
                  style={[styles.image, { height: '90%' }]}
                />
                <Text style={styles.title}>Lab par Aye</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const renderHotRoute = () => {
    return (
      <View style={styles.column}>
        <View style={[styles.listView, { marginTop: 15 }]}>
          <Text style={styles.label}>Singer</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Card key={index} containerStyle={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.recommended}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.outerrow}>
                  <Text style={styles.subtitle}>{item.singers} singers</Text>
                  <View style={styles.row}>
                    <Icon
                      type="font-awesome"
                      color="#999999"
                      name="user"
                      size={15}
                    />
                    <Text style={styles.subtitle}> {item.users}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </ScrollView>
        </View>
        {/* <SliderBox
          images={images}
          sliderBoxHeight={200}
          resizeMode="contain"
          imageStyle={styles.boximageContainer}
          // style={styles.sliderBox}
          myStyle={styles.boxContainer}
          ImageComponentStyle={styles.boximageContainer}
          dotColor={COLORS.COLOR_PRIMARY}
          inactiveDotColor={COLORS.COLOR_PRIMARY_DARK}
          dotStyle={styles.dotStyle}
        /> */}
        <View style={styles.eventContainer}>
          <Carousel
            data={images}
            renderItem={({ item, index }) => {
              return (
                <Image
                  source={item}
                  key={index}
                  style={styles.eventImage}
                  resizeMode="contain"
                />
              );
            }}
            onSnapToItem={index => setcurrentIndex(index)}
            sliderWidth={Dimensions.get('screen').width - 30}
            itemWidth={Dimensions.get('screen').width}
          />
          {pagination()}
        </View>

        <Text style={styles.label}>Fresh</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={styles.largeImage}>
              <Image
                resizeMode="cover"
                source={IMAGES.recommended}
                style={[styles.image, { height: '90%' }]}
              />
              <Text style={styles.title}>Lab par Aye</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  const renderHistory = () => {
    return (
      <View style={[styles.column, { backgroundColor: '#e0e0e0' }]}>
        <View style={[styles.listView]}>
          <Text style={styles.blackLabel}>Live</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Card key={index} containerStyle={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.recommended}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.outerrow}>
                  <Text style={styles.subtitle}>{item.singers} singers</Text>
                  <View style={styles.row}>
                    <Icon
                      type="font-awesome"
                      color="#999999"
                      name="user"
                      size={15}
                    />
                    <Text style={styles.subtitle}> {item.users}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </ScrollView>
        </View>
        <View style={[styles.listView, { marginTop: 15 }]}>
          <Text style={styles.blackLabel}>Closed</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Card key={index} containerStyle={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.userTwo}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.outerrow}>
                  <Text style={styles.subtitle}>{item.singers} singers</Text>
                  <View style={styles.row}>
                    <Icon
                      type="font-awesome"
                      color="#999999"
                      name="user"
                      size={15}
                    />
                    <Text style={styles.subtitle}> {item.users}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </ScrollView>
        </View>
        <View style={{ backgroundColor: 'white', paddingBottom: 100 }}>
          <Text style={styles.blackLabel}>Fresh</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <View key={index} style={styles.largeImage}>
                <Image
                  resizeMode="cover"
                  source={IMAGES.recommended}
                  style={[styles.image, { height: '90%' }]}
                />
                <Text style={styles.title}>Lab par Aye</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.column, { marginTop: 0 }]}>
          <View style={styles.container}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryContainer}>
              {categories.map((item, index) => renderCategories(item, index))}

              <Icon
                type="feather"
                name="video"
                containerStyle={styles.video}
                style={{ alignSelf: 'flex-end' }}
              />
            </ScrollView>
          </View>
          {currentRoute === 'Hot' && renderHotRoute()}
          {currentRoute === 'Following' && renderFollowing()}
          {currentRoute === 'History' && renderHistory()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Solo;

const categories = [
  {
    name: 'Hot',
  },
  {
    name: 'Following',
  },
  {
    name: 'History',
  },
];

const list = [
  {
    name: 'Lab Par Aye',
    singers: 6,
    users: 42,
  },
  {
    name: 'Lab Par Aye',
    singers: 6,
    users: 42,
  },
  {
    name: 'Lab Par Aye',
    singers: 6,
    users: 42,
  },
  {
    name: 'Lab Par Aye',
    singers: 6,
    users: 42,
  },
  {
    name: 'Lab Par Aye',
    singers: 6,
    users: 42,
  },
];
