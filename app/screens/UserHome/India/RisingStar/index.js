import React from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { IMAGES } from '../../../../config/images';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../../../config/styles';
import styles from './styles';

const Location = () => {
  const renderItem = (_, index) => (
    <View style={styles.postView} key={index}>
      <ImageBackground
        source={IMAGES.firstrow}
        style={styles.post}
        resizeMode="cover"
        imageStyle={styles.postimage}>
        {index < 3 && (
          <LinearGradient
            style={styles.numberTwo}
            colors={[COLORS.COLOR_PRIMARY_DARK, COLORS.COLOR_PRIMARY_LIGHT]}>
            <Text style={styles.number}>No. {index + 1}</Text>
          </LinearGradient>
        )}
      </ImageBackground>
      <View style={styles.rightCard}>
        <Text style={styles.postSong}>Lab Par Aye</Text>
        <Text style={styles.username}>Maya</Text>
        <Text style={styles.label}>A+ 61k Plays</Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.toplabel}>Ranking of new users</Text>
      {[1, 2, 3, 5, 5, 6].map((item, index) => renderItem(item, index))}
    </ScrollView>
  );
};

export default Location;
