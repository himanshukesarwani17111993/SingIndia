import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import styles from './styles';
import OTPTextInput from 'react-native-otp-textinput';

export default function Home({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const [otpText, setOtpText] = useState('');
  const [otpError, setotpError] = useState('');

  const onSubmit = () => {
    setLoading(true);

    if (route.params.otp !== Number(otpText)) {
      setotpError('Invalid OTP');
      setLoading(false);
      return;
    }
    setLoading(false);
    navigation.navigate('NewPassword', { data: route.params });
  };
  console.log(route.params);
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
                size={30}
              />
            </View>
            <Text style={styles.title}>Reset Password</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.emailText}>
              Hy, {route.params.email} Check Your Inbox!{' '}
            </Text>
            <OTPTextInput
              defaultValue={otpText}
              containerStyle={styles.inputContainer}
              handleTextChange={e => setOtpText(e)}
              textInputStyle={styles.oTpInput}
              tintColor="white"
            />
            <Button
              title={'Confirm'}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btntitle}
              loading={loading}
              onPress={onSubmit}
            />
            {otpError ? <Text style={styles.errorText}>{otpError}</Text> : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
