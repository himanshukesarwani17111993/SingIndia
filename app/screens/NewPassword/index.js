import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from '../../actions/loginActions';

export default function Home({ navigation, route }) {
  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const { error, errorMessage } = useSelector(state => state.loginReducer);
  const { isLoginLoading } = useSelector(state => state.loadingReducer);
  console.log(errorMessage);

  const dispatch = useDispatch();

  const validatePassword = () => {
    if (!password) {
      setpasswordError('Password Is Required');
      return true;
    }
    if (password.length < 8) {
      setpasswordError('Password Is Less Than 8 Characters');
      return true;
    }
    setpasswordError('');
  };
  console.log(route.params);

  const onSubmit = () => {
    if (validatePassword()) {
      return;
    }
    dispatch(
      loginActions.requestNew({
        Email: route.params.data.email,
        Otp: route.params.data.otp,
        Password: password,
      }),
    );
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
            <Text style={styles.title}>New Password</Text>
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={e => setPassword(e)}
              placeholder="New Password"
              onBlur={validatePassword}
            />
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}
            <Button
              title={'Change'}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btntitle}
              loading={isLoginLoading}
              onPress={onSubmit}
            />
            {error ? (
              <Text style={[styles.message]}>{errorMessage}</Text>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
