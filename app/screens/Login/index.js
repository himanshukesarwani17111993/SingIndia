import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import { Card, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../../actions/loginActions';

const Login = ({ navigation }) => {
  const [currentRoute, setcurrentRoute] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setnameError] = useState('');

  const { error, errorMessage, success, successMessage } = useSelector(
    state => state.loginReducer,
  );

  const { isLoginLoading } = useSelector(state => state.loadingReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(loginActions.clearMessage());
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  useEffect(() => {
    if (success) {
      setEmail('');
      setName('');
      setPassword('');
      setcurrentRoute('login');
    }
  }, [success]);

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

  const validatePassword = () => {
    if (!password) {
      setPasswordError('password is required');
      return true;
    }
    if (password.length < 6) {
      setPasswordError('password is invalid');
      return true;
    } else {
      setPasswordError(false);
      return false;
    }
  };
  const validateName = () => {
    if (!name) {
      setnameError('name is required');
      return true;
    } else {
      setnameError(false);
      return false;
    }
  };

  const onSignup = () => {
    if (validateName() || validateEmail() || validatePassword()) {
      return;
    }
    const data = {
      FullName: name,
      Email: email,
      Password: password,
      DeviceType: 'Android',
      IpAddress: '0.0.0.0',
      FirebaseId: 'asdasdasdasdasd',
      Language: 'Hindi',
      LocationLat: '52.5456',
      LocationLong: '562.6454',
    };
    dispatch(loginActions.requestSignup(data));
  };
  const onLogin = () => {
    if (validateEmail() || validatePassword()) {
      return;
    }
    const data = {
      Email: email,
      Password: password,
    };
    dispatch(loginActions.requestLogin(data));
  };

  const clearData = () => {
    setEmail('');
    setPassword('');
    setName('');
    setEmailError('');
    setnameError('');
    setPasswordError('');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <View style={styles.topCard} />
          <View style={styles.container}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(loginActions.clearMessage());
                  clearData();
                  setcurrentRoute('login');
                }}>
                <Text style={styles.text}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(loginActions.clearMessage());
                  clearData();
                  setcurrentRoute('sign up');
                }}>
                <Text style={styles.text}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Card containerStyle={styles.card}>
              {currentRoute === 'sign up' && (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={e => setName(e)}
                    onBlur={() =>
                      !name
                        ? setnameError('Name Is Required')
                        : setnameError('')
                    }
                  />
                  {nameError ? (
                    <Text style={styles.errorText}>{nameError}</Text>
                  ) : null}
                </>
              )}
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={e => setEmail(e)}
                onBlur={validateEmail}
              />
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}

              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onBlur={validatePassword}
                onChangeText={e => setPassword(e)}
              />
              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
            </Card>
            <Button
              title={currentRoute === 'login' ? 'Sign IN' : 'Sign up'}
              containerStyle={styles.btnContainer}
              buttonStyle={styles.btnStyle}
              titleStyle={styles.title}
              loading={isLoginLoading}
              onPress={currentRoute === 'sign up' ? onSignup : onLogin}
            />
            {error ? (
              <Text style={[styles.message, { color: 'red' }]}>
                {errorMessage}
              </Text>
            ) : null}
            {success ? (
              <Text style={[styles.message, { color: 'green' }]}>
                {successMessage}
              </Text>
            ) : null}
            {currentRoute === 'login' && (
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Login;
