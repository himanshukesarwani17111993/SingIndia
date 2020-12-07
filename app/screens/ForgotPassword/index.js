import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import * as loginActions from '../../actions/loginActions';

export default function Home({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();
  const { isLoginLoading } = useSelector(state => state.loadingReducer);
  const { errorMessage, error } = useSelector(state => state.loginReducer);

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      setEmailError('email is required');
      return true;
    }
    if (!reg.test(email)) {
      setEmailError('email is invalid');
      return true;
    } else {
      setEmailError(null);
      return false;
    }
  };
  const onSubmit = () => {
    if (validateEmail()) {
      return;
    }
    dispatch(loginActions.requestForgot({ Email: email }));
  };

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
            <Text style={styles.title}>Forgot Password</Text>
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={e => setEmail(e)}
              placeholder="Email"
              onBlur={validateEmail}
            />
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
            {error ? (
              <Text style={[styles.message]}>{errorMessage}</Text>
            ) : null}

            <Button
              title={'Verify'}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btntitle}
              loading={isLoginLoading}
              onPress={onSubmit}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
