import React from 'react';
import { Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { COLORS } from '../../config/styles';
import { IMAGES } from '../../config/images';

const Events = ({ navigation }) => {
  const renderItem = () => {
    return (
      <View style={styles.eventContainer}>
        <Image source={IMAGES.event} resizeMode="cover" style={styles.image} />
        <Text style={styles.type}>Magical Night</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Icon
          type="antdesign"
          name="arrowleft"
          size={26}
          color={COLORS.COLOR_LABEL}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.heading}>Events</Text>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Events;
