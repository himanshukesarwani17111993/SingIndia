import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import BottomSheet from 'reanimated-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import { Button, SocialIcon } from 'react-native-elements';
import NavigationService from '../../../navigation/NavigationService';
import * as actions from '../../../actions/UI/loginSheet';
import { useDispatch } from 'react-redux';

const LoginSheet = React.forwardRef((_, ref) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(actions.toggle());
    NavigationService.navigate('Login');
  };

  
  const renderContent = () => (
    <LinearGradient
      colors={['#c68bec', '#a971cd', '#9c66c0']}
      style={styles.linearGradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}>
      <Text style={styles.loginText}>Or Login With</Text>
      <View style={styles.row}>
        <SocialIcon light raised type="google" style={styles.social} />
        <SocialIcon light raised type="facebook" style={styles.social} />
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.account}>
          Don't have an account? <Text style={styles.signup}>SIGN UP</Text>
        </Text>
      </TouchableWithoutFeedback>
      <Text style={styles.contact}>Contact with support</Text>
    </LinearGradient>
  );

  const renderHeader = () => (
    <View style={styles.actionsContainer}>
      <Button
        containerStyle={styles.actions}
        buttonStyle={styles.actionBtn}
        title="Sign up"
        titleStyle={styles.actionTitle}
        onPress={onPress}
      />
      <Button
        containerStyle={styles.actions}
        buttonStyle={[styles.actionBtn, { backgroundColor: '#999999' }]}
        title="Login"
        titleStyle={styles.actionTitle}
        onPress={onPress}
      />
    </View>
  );
  return (
    <BottomSheet
      ref={ref}
      snapPoints={[0, 300, 0]}
      borderRadius={10}
      renderContent={renderContent}
      renderHeader={renderHeader}
    />
  );
});

export default LoginSheet;
