import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Card } from 'react-native-elements';
import { IMAGES } from '../../config/images';
import CircleList from 'react-native-circle-list';

import styles from './styles';

const Language = () => {
  const renderLanguages = (item, index) => {
    return (
      <Text style={{ bottom: Dimensions.get('window').width * 0.6, right: 20 }}>
        {item}
      </Text>
      // <View key={index}>
      //   <Card containerStyle={styles.card}>
      //     <Text>asd</Text>
      //   </Card>
      //   <Card>
      //     <Text>{item}</Text>
      //   </Card>
      // </View>
    );
  };
  const keyExtractor = item => item;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.selectText}>Select Language</Text>
          <Text style={styles.languageText}>Punjabi</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Card containerStyle={styles.outerCircleCard}>
            <View style={{ flex: 1 }} />
            <Card containerStyle={styles.innerCard}>
              {/* <ScrollView horizontal style={{ backgroundColor: 'red' }}>
                {languages.map((item, index) => renderLanguages(item, index))}
              </ScrollView> */}
              {/* <ScrollView
                style={{
                  borderRadius: 200,
                  backgroundColor: 'red',
                }}
                horizontal>
                {languages.map((item, index) => renderLanguages(item, index))}
              </ScrollView> */}
              {/* <CircleList
                data={languages}
                keyExtractor={keyExtractor}
                renderItem={renderLanguages}
              /> */}
            </Card>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Language;

const languages = [
  'Hindi',
  'Gujrati',
  'Punjabi',
  'Kannada',
  'Assamese',
  'Assamese',

  'Assamese',
  'Assamese',

  'Assamese',

  'Assamese',
  'Assamese',
  'Assamese',
  'Assamese',
  'Assamese',
];
