import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import { Icon, Card } from 'react-native-elements';
import { IMAGES } from '../../../config/images';
import { useNavigation } from '@react-navigation/native';

const Solo = () => {
  const navigation = useNavigation();
  const renderCategories = (item, index) => {
    return (
      <Card
        key={index}
        s
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

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.column, { marginTop: 0 }]}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Icon type="antdesign" name="search1" color="#999999" />
              <TextInput
                style={styles.input}
                placeholder="Search room by ID or Name"
              />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item, index) => renderCategories(item, index))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.column}>
          <View style={[styles.listView, { marginTop: 15 }]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {list.map((item, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate('UserProfile')}>
                  <Card key={index} containerStyle={styles.card}>
                    <View style={styles.imageContainer}>
                      <Image
                        resizeMode="cover"
                        source={IMAGES.recommended}
                        style={styles.image}
                      />
                    </View>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.outerrow}>
                      <Text style={styles.subtitle}>
                        {item.singers} singers
                      </Text>
                      <View style={styles.row}>
                        <Icon
                          type="font-awesome"
                          color="#999999"
                          name="user"
                          size={15}
                        />
                        <Text style={styles.subtitle}> {item.users}</Text>
                      </View>
                    </View>
                  </Card>
                </TouchableWithoutFeedback>
              ))}
            </ScrollView>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.navigate('UserProfile')}>
                <View style={styles.largeImage}>
                  <Image
                    resizeMode="cover"
                    source={IMAGES.recommended}
                    style={[styles.image, { height: '90%' }]}
                  />
                  <Text style={styles.title}>Lab par Aye</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
          <View style={[styles.listView, { marginTop: 15 }]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {list.map((item, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate('UserProfile')}>
                  <Card key={index} containerStyle={styles.card}>
                    <View style={styles.imageContainer}>
                      <Image
                        resizeMode="cover"
                        source={IMAGES.recommended}
                        style={styles.image}
                      />
                    </View>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.outerrow}>
                      <Text style={styles.subtitle}>
                        {item.singers} singers
                      </Text>
                      <View style={styles.row}>
                        <Icon
                          type="font-awesome"
                          color="#999999"
                          name="user"
                          size={15}
                        />
                        <Text style={styles.subtitle}> {item.users}</Text>
                      </View>
                    </View>
                  </Card>
                </TouchableWithoutFeedback>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Solo;

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
