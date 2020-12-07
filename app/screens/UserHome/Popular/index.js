import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import styles from './styles';
import { Icon, Card } from 'react-native-elements';
import { IMAGES } from '../../../config/images';

const Popular = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.listView}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: '90%',
          }}>
          {list.map((item, index) => (
            <Card key={index} containerStyle={styles.firstCard}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="cover"
                  source={IMAGES.firstrow}
                  style={styles.firstRowImage}
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.outerrow}>
                <View style={styles.row}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.firstrow}
                    style={styles.avatar}
                  />
                  <Text style={styles.subtitle}>Maya</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    type="antdesign"
                    color="#999999"
                    name="hearto"
                    size={10}
                  />
                  <Text style={styles.subtitle}> {item.users}</Text>
                </View>
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.listView]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: '90%' }}>
          {list.map((item, index) => (
            <Card key={index} containerStyle={[styles.card, { width: 100 }]}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="cover"
                  source={IMAGES.userTwo}
                  style={styles.secondRowImage}
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.outerrow}>
                <View style={styles.row}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.userTwo}
                    style={styles.avatar}
                  />
                  <Text style={styles.subtitle}>Maya</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    type="antdesign"
                    color="#999999"
                    name="hearto"
                    size={10}
                  />
                  <Text style={styles.subtitle}> {item.users}</Text>
                </View>
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.listView, { marginBottom: 15 }]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: '100%' }}>
          {list.map((item, index) => (
            <Card
              key={index}
              containerStyle={[styles.card, { width: 120, height: 200 }]}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="cover"
                  source={IMAGES.userpic}
                  style={styles.secondRowImage}
                />
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.outerrow}>
                <View style={styles.row}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.userpic}
                    style={styles.avatar}
                  />
                  <Text style={styles.subtitle}>Maya</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    type="antdesign"
                    color="#999999"
                    name="hearto"
                    size={10}
                  />
                  <Text style={styles.subtitle}> {item.users}</Text>
                </View>
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <View key={index} style={styles.largeImage}>
            <Image
              resizeMode="cover"
              source={IMAGES.thirdrow}
              style={[styles.thirdrowImage]}
            />
            <Text style={styles.title}>Lab par Aye</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Popular;

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
