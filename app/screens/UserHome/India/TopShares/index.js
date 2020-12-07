import React from 'react';
import { Text, View, ImageBackground, Image, FlatList } from 'react-native';
import { IMAGES } from '../../../../config/images';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../../../config/styles';
import styles from './styles';
import { Icon } from 'react-native-elements';

const Location = () => {
  const renderItem = (_, index) => (
    <View style={styles.postView}>
      <ImageBackground
        source={IMAGES.firstrow}
        style={styles.post}
        resizeMode="cover"
        imageStyle={styles.postimage}>
        {index + 1 < 3 && (
          <LinearGradient
            style={styles.numberTwo}
            colors={[COLORS.COLOR_PRIMARY_DARK, COLORS.COLOR_PRIMARY_LIGHT]}>
            <Text style={styles.number}>No. {index + 2}</Text>
          </LinearGradient>
        )}
      </ImageBackground>
      <Text style={styles.postSong}>Lab Par Aye</Text>
      <View style={styles.postRow}>
        <View style={styles.leftRow}>
          <Image style={styles.smallAvatar} source={IMAGES.firstrow} />
          <Text style={styles.postcount}>Maya</Text>
        </View>
        <View style={styles.leftRow}>
          <Icon type="feather" name="heart" size={15} />
          <Text style={styles.postcount}>942</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.screen}>
      <ImageBackground source={IMAGES.locationbg} style={styles.cover}>
        <LinearGradient
          style={styles.numberOne}
          colors={[COLORS.COLOR_PRIMARY_DARK, COLORS.COLOR_PRIMARY_LIGHT]}>
          <Text style={styles.number}>No. 1</Text>
        </LinearGradient>
        <View style={styles.row}>
          <View style={styles.innerRow}>
            <Text style={styles.count}>256</Text>
            <Icon type="feather" name="message-square" color="white" />
          </View>
          <View style={styles.innerRow}>
            <Text style={styles.count}>516</Text>
            <Icon type="feather" name="heart" color="white" />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.songRow}>
        <Image source={IMAGES.useravatar} style={styles.avatar} />
        <View style={styles.songDetails}>
          <Text style={styles.song}>Tum hi ana</Text>
          <Text style={styles.artist}>John Brown</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        numColumns={2}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item, _) => item.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </View>
  );
};

export default Location;
