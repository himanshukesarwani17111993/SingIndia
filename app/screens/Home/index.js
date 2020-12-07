import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  Text,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { COLORS } from '../../config/styles';
import { ICONS } from '../../config/images';
import { TabView } from 'react-native-tab-view';
import Recommendations from './Recommendations';
import Nearby from './Nearby';
import styles from './styles';
import { useSelector } from 'react-redux';
const initialLayout = { width: Dimensions.get('window').width / 3 };

export default function Home({ navigation }) {
  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [routes] = useState([
    { key: 'recommend', title: 'Recommendations' },
    { key: 'nearby', title: 'Nearby' },
  ]);
  const [currentRoute, setcurrentRoute] = useState('recommend');

  const { isLoggedIn } = useSelector(state => state.loginReducer);

  const onSearch = () => {
    if (!searchText) {
      return;
    }
    console.log(searchText);
    navigation.navigate('Search', {
      text: searchText,
    });
  };

  const renderCategories = (item, index) => {
    return (
      <Card
        key={index}
        containerStyle={[
          styles.categoryCard,
          {
            backgroundColor: item.color,
          },
        ]}>
        <Text style={styles.categoryText}>{item.name}</Text>
      </Card>
    );
  };
  const renderOptions = (item, index) => {
    return (
      <Card key={index} containerStyle={[styles.optionsCard]}>
        <Text style={styles.categoryText}>{item}</Text>
      </Card>
    );
  };
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
          <Card key={index} containerStyle={[styles.optionsCard]}>
            <Text style={styles.categoryText}>Sing</Text>
          </Card>
        </View>
      </View>
    );
  };
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'recommend':
        return <Recommendations navigation={navigation} />;
      case 'nearby':
        return <Nearby navigation={navigation} />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <View style={styles.labelView}>
      {props.navigationState.routes.map((item, tabIndex) => (
        <TouchableWithoutFeedback
          key={tabIndex}
          onPress={() => {
            if (isLoggedIn) {
              props.jumpTo(item.key);
              setcurrentRoute(item.key);
            }
          }}>
          <Text
            style={
              currentRoute === item.key
                ? styles.focusedLabel
                : styles.unfocusedLabel
            }>
            {item.title}
          </Text>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <ScrollView onStartShouldSetResponder={() => true}>
          <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item, index) => renderCategories(item, index))}
            </ScrollView>
            <View style={styles.content}>
              <View style={styles.inputView}>
                <View style={styles.inputContainer}>
                  <Icon type="antdesign" name="search1" color="#999999" />
                  <TextInput
                    style={styles.input}
                    placeholder="Search by songs or singers"
                    value={searchText}
                    onChangeText={e => setSearchText(e)}
                    onEndEditing={onSearch}
                    onBlur={onSearch}
                  />
                </View>
                <Icon
                  type="font-awesome"
                  name="gift"
                  size={30}
                  color={COLORS.COLOR_DARK_PURPLE}
                />
              </View>

              <View style={{ marginTop: 10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {options.map((item, index) => renderOptions(item, index))}
                </ScrollView>
                <View style={{ marginTop: 15 }}>
                  <View style={styles.row}>
                    <Text style={styles.songTitle}>Songbook</Text>
                    <TouchableWithoutFeedback
                      onPress={() => navigation.navigate('Songbook')}>
                      <Text style={styles.seeAll}>See All</Text>
                    </TouchableWithoutFeedback>
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {users.map((item, index) => renderSongs(item, index))}
                  </ScrollView>
                </View>
              </View>
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const categories = [
  {
    name: 'Celebrity',
    color: '#C13584',
  },
  {
    name: 'New Songs',
    color: '#515bd4',
  },
  {
    name: 'Party',
    color: '#8134af',
  },
  {
    name: 'Live',
    color: '#dd2a7b',
  },
  {
    name: 'Freestyle',
    color: '#E1306C',
    // color: 'rgba(138, 86, 172, 0.2)',
  },
];

const options = ['Selections', 'artists', 'my songs'];

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
];
