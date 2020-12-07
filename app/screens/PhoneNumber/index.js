import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.topCard}>
            <View style={styles.header}>
              <Icon
                type="antdesign"
                onPress={() => navigation.goBack()}
                name="arrowleft"
                style={{
                  alignSelf: 'flex-start',
                }}
                size={30}
                containerStyle={{
                  flex: 1,
                  alignItems: 'flex-start',
                }}
              />
            </View>
            <Text style={styles.title}>Phone Number</Text>
          </View>
          <View style={styles.content}>
            <TextInput style={styles.input} keyboardType="number-pad" />
            <Button
              title={'Verify'}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btntitle}
              onPress={() => navigation.navigate('Verify')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
