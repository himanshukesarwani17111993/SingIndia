import React, { useState, useEffect } from 'react';
import {
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
  StatusBar,
} from 'react-native';
import styles from './styles';
import { TabView, SceneMap } from 'react-native-tab-view';
import MultiGuest from './MultiGuest';
import Live from './Live';
import Ranking from './Ranking';
import Solo from './Solo';
import { ICONS } from '../../config/images';
const initialLayout = { width: Dimensions.get('window').width };

const Party = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'solo', title: 'Solo ' },
    { key: 'live', title: 'Live ' },
    { key: 'multiguest', title: 'Multi-Guest ' },
    { key: 'ranking', title: 'Ranking ' },
  ]);
  const [currentRoute, setCurrentRoute] = useState('solo');

  const renderScene = SceneMap({
    solo: Solo,
    live: Live,
    multiguest: MultiGuest,
    ranking: Ranking,
  });

  useEffect(() => {
    if (index === 0) {
      setCurrentRoute('solo');
    } else if (index === 1) {
      setCurrentRoute('live');
    } else if (index === 2) {
      setCurrentRoute('multiguest');
    } else {
      setCurrentRoute('ranking');
    }
  }, [index]);

  const renderTabBar = props => {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.labelView}>
          {props.navigationState.routes.map((item, tabIndex) => (
            <TouchableWithoutFeedback
              key={tabIndex}
              onPress={() => {
                props.jumpTo(item.key);
                setCurrentRoute(item.key);
              }}>
              <Text
                style={
                  currentRoute === item.key ? styles.currentMenu : styles.menu
                }>
                {item.title}
              </Text>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <Image source={ICONS.feedblack} style={styles.feed} />
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

export default Party;
