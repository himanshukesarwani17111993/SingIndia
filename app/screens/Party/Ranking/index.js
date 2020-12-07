import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './styles';
import Rooms from './Rooms';
import Stars from './Stars';
import Gifters from './Gifters';
const initialLayout = { width: Dimensions.get('window').width };

const Ranking = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'rooms', title: 'Top Rooms' },
    { key: 'stars', title: 'Top Stars' },
    { key: 'gifters', title: 'Top Gifters' },
  ]);

  const renderScene = SceneMap({
    rooms: Rooms,
    stars: Stars,
    gifters: Gifters,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <View style={{ justifyContent: 'center' }}>
          <Text style={focused ? styles.currentMenu : styles.menu}>
            {route.title}
          </Text>
        </View>
      )}
      indicatorStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: 'white', elevation: 0 }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default Ranking;
