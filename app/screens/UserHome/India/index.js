import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { TabView } from 'react-native-tab-view';
import TopTrending from './TopTrending';
import TopShares from './TopShares';
import RisingStar from './RisingStar';
import Location from './Location';
import { useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

const initialLayout = { width: Dimensions.get('window').width };

const India = ({ navigation }) => {
  const { isLoggedIn } = useSelector(state => state.loginReducer);
  const [currentRoute, setcurrentRoute] = useState('');
  const [currentLocation, setCurrentLocation] = useState('wb');

  const [index, setIndex] = useState(isLoggedIn ? 0 : 1);
  const [routes] = useState([
    { key: 'location', title: 'Location' },
    { key: 'trends', title: 'Top Trending' },
    { key: 'shares', title: 'Top Shares' },
    { key: 'rising', title: 'Rising Star' },
  ]);

  useEffect(() => {
    if (index === 0) {
      setcurrentRoute('location');
    } else if (index === 1) {
      setcurrentRoute('trends');
    } else if (index === 2) {
      setcurrentRoute('shares');
    } else {
      setcurrentRoute('rising');
    }
  }, [index]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'trends':
        return <TopTrending navigation={navigation} />;
      case 'shares':
        return <TopShares navigation={navigation} />;
      case 'rising':
        return <RisingStar navigation={navigation} />;
      case 'location':
        return <Location navigation={navigation} />;
      default:
        return null;
    }
  };

  const renderTabBar = props => {
    return (
      <View style={styles.labelContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.labelView}
          showsHorizontalScrollIndicator={false}>
          {props.navigationState.routes.map((item, tabIndex) =>
            item.key === 'location' ? (
              <DropDownPicker
                key={tabIndex}
                items={[
                  {
                    label: 'Delhi',
                    value: 'delhi',
                  },
                  {
                    label: 'West Bengal',
                    value: 'wb',
                  },
                  {
                    label: 'Gujarat',
                    value: 'gujarat',
                  },
                ]}
                zIndex={5000}
                defaultValue={currentLocation}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                itemStyle={{
                  justifyContent: 'flex-start',
                  color: 'red',
                }}
                labelStyle={{
                  fontSize: 9,
                }}
                dropDownStyle={{ elevation: 10 }}
                onChangeItem={item => setCurrentLocation(item.value)}
              />
            ) : (
              <TouchableWithoutFeedback
                key={tabIndex}
                onPress={() => {
                  props.jumpTo(item.key);
                  setcurrentRoute(item.key);
                }}>
                <Text
                  style={
                    currentRoute === item.key
                      ? styles.currentCategory
                      : styles.category
                  }>
                  {item.title}
                </Text>
              </TouchableWithoutFeedback>
            ),
          )}
        </ScrollView>
      </View>
    );
  };

  return (
    <View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default India;
