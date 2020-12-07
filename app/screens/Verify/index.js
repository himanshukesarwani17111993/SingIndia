import React from 'react';
import { View, SafeAreaView, Text, TextInput } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import styles from './styles';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
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
          <Text style={styles.title}>Verification Code</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              keyboardType="number-pad"
            />
          </View>
          <Text style={styles.resend}>Resend code</Text>
          <Button
            title={'Verify'}
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnStyle}
            titleStyle={styles.btntitle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
