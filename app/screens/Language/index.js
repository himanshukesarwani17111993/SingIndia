import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { IMAGES } from '../../config/images';
import styles from './styles';
const Language = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-asd46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3asdda1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-casd1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-casd605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3dasda1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1bsad1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605asd-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471fasd-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46casd2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-aasd4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bsadd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3adasd53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6sadasd3',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571easd29d72',
      title: 'Third Item',
    }
  ];
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={{width:Dimensions.get('window').width/3,alignSelf:"center",justifyContent:'center'}}>{title}</Text>
  </View>
);
  const renderLanguages = (item, index) => {
    return (
      <View>
        <Text >
          {item}
        </Text>     
        <Image source={IMAGES.story2} style={styles.image} />   
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.selectText}>Select Language</Text>
          <Text style={styles.languageText}>Punjabi</Text>
        </View>
        <View style={{ flex: 1 }}>
        <FlatList
        style={{elevation:5}}
          contentContainerStyle={{borderRadius: 6, overflow: 'hidden'}}
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}/>
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
