import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import * as actions from '../../actions/search';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';

export default function Home({ navigation, route }) {
  const [searchText, setsearchText] = useState(
    route.params ? route.params.text : '',
  );
  const { isSearching } = useSelector(state => state.loadingReducer);
  const { list } = useSelector(state => state.searchReducer);
  const dispatch = useDispatch();

  const renderOptions = (item, index) => {
    return (
      <Card key={index} containerStyle={[styles.optionsCard]}>
        <Text style={styles.categoryText}>{item}</Text>
      </Card>
    );
  };

  const onSearch = () => {
    dispatch(
      actions.searchRequest({
        TrackName: searchText,
        Limit: 5,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      actions.searchRequest({
        TrackName: searchText,
        Limit: 5,
      }),
    );
  }, [dispatch]);

  const renderList = (item, index) => {
    return (
      <View key={index} style={styles.optionsContainer}>
        <View style={styles.songsDetails}>
          <Image
            source={{ uri: item.images[0].url }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
          />
          <View style={styles.rightView}>
            <Text style={styles.song}>{item.name}</Text>
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
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            type="antdesign"
            onPress={() => navigation.goBack()}
            name="arrowleft"
            style={{
              alignSelf: 'flex-start',
            }}
            size={30}
          />
          <View style={styles.inputContainer}>
            <Icon type="antdesign" name="search1" color="#999999" />
            <TextInput
              style={styles.input}
              placeholder="Search by songs or singers"
              value={searchText}
              onChangeText={e => setsearchText(e)}
              onEndEditing={onSearch}
              onBlur={onSearch}
            />
          </View>
        </View>
        <Text style={styles.MostPopularSearches}>Search History</Text>
        <Card containerStyle={[styles.optionsCard1]}>
          <Text style={styles.categoryText}>Just Do it </Text>
        </Card>
        <Text style={styles.MostPopularSearches}>Most Popular Searches</Text>
        <View style={styles.content}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {options.map((item, index) => renderOptions(item, index))}
          </ScrollView>
        </View>
        <View style={{ flex: 5 }}>
          {isSearching ? (
            <ActivityIndicator />
          ) : (
              <FlatList
                data={list}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => renderList(item, index)}
              />
            )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const options = ['Just Duet', 'Tum ho', 'Mile ho Tum humko'];
