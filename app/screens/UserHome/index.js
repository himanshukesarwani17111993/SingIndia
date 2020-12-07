import React, { useState, useEffect } from 'react';
import {
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import { ICONS } from '../../config/images';
import Following from './Following';
import Popular from './Popular';
import India from './India';
import Nearby from './NearBy';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import { TabView } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import * as loginSheetActions from '../../actions/UI/loginSheet';
import { RNCamera } from 'react-native-camera';
import BottomSheet from 'reanimated-bottom-sheet';

const initialLayout = { width: Dimensions.get('window').width };

const UserHome = ({ navigation }) => {
  const { isLoggedIn } = useSelector(state => state.loginReducer);
  const [currentRoute, setcurrentRoute] = useState('');
  const [showActions, setShowActions] = useState(false);
  const [index, setIndex] = useState(isLoggedIn ? 0 : 1);
  const [routes] = useState([
    { key: 'following', title: 'Following' },
    { key: 'popular', title: 'Popular' },
    { key: 'india', title: 'India' },
    { key: 'nearby', title: 'Near By' },
  ]);

  const cameraRef = React.useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (index === 0) {
      setcurrentRoute('following');
    } else if (index === 1) {
      setcurrentRoute('popular');
    } else if (index === 2) {
      setcurrentRoute('india');
    } else {
      setcurrentRoute('nearby');
    }
  }, [index]);

  const ref = React.useRef(null);
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'following':
        return <Following navigation={navigation} />;
      case 'popular':
        return <Popular navigation={navigation} />;
      case 'india':
        return <India navigation={navigation} />;
      case 'nearby':
        return <Nearby navigation={navigation} />;
      default:
        return null;
    }
  };

  const onPress = () => {
    navigation.navigate('Login');
    // dispatch(loginSheetActions.toggle());
    // NavigationService.navigate('Login');
  };

  const renderContent = () => (
    <LinearGradient
      colors={['#c68bec', '#a971cd', '#9c66c0']}
      style={styles.linearGradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}>
      <Text style={styles.loginText}>Or Login With</Text>
      <View style={styles.sheetRow}>
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

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('blur', () => {
  //     if (!isLoggedIn) {
  //       dispatch(loginSheetActions.hide());
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation, dispatch, isLoggedIn]);

  const openPicker = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const renderTabBar = props => {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.labelView}>
          {props.navigationState.routes.map((item, tabIndex) => (
            <TouchableWithoutFeedback
              key={tabIndex}
              onPress={() => {
                if (isLoggedIn) {
                  props.jumpTo(item.key);
                  setcurrentRoute(item.key);
                }
              }}>
              <Text
                style={
                  currentRoute === item.key
                    ? styles.currentCategory
                    : styles.category
                }>
                {item.title}
              </Text>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <Image source={ICONS.feedblack} style={styles.feed} />
      </View>
    );
  };

  const renderActionBtn = () => (
    <View style={styles.actionBtnContainer}>
      <TouchableWithoutFeedback
        disabled={!isLoggedIn}
        onPress={() => setShowActions(value => !value)}>
        <LinearGradient colors={['#8a56ac', '#c68bec']} style={styles.addBtn}>
          <Icon
            type="antdesign"
            name={showActions ? 'close' : 'plus'}
            color="white"
            size={25}
          />
        </LinearGradient>
      </TouchableWithoutFeedback>
    </View>
  );

  const renderActionsButtons = () => {
    return (
      <View style={styles.showActionsContainer}>
        {renderActionBtn()}

        <View style={styles.optionsContainer}>
          {options.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Camera')}>
              <View style={styles.optionRow}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.leftOption}
                  colors={item.colors}>
                  <Text style={styles.optionText}>{item.name}</Text>
                </LinearGradient>
                <View
                  style={[
                    styles.optionIcon,
                    { backgroundColor: item.iconcolor },
                  ]}>
                  <Image
                    resizeMode="contain"
                    source={item.icon}
                    style={styles.optionImage}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView disableScrollViewPanResponder={!isLoggedIn}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (!isLoggedIn) {
              ref.current.snapTo(1);
              // dispatch(loginSheetActions.toggle());
            }
          }}>
          <View style={{ flex: 1 }}>
            {renderActionBtn()}
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
              renderTabBar={renderTabBar}
              swipeEnabled={isLoggedIn}
            />
          </View>
        </TouchableWithoutFeedback>
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
      </ScrollView>
      <BottomSheet
        ref={ref}
        snapPoints={[0, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
      {showActions && renderActionsButtons()}
    </SafeAreaView>
  );
};

export default UserHome;

const options = [
  {
    name: 'Sing',
    icon: ICONS.music,
    colors: ['#fd9b8d', '#fbbe7e'],
    iconcolor: '#ffd9b1',
  },
  {
    name: 'Video',
    icon: ICONS.youtube,
    colors: ['#a076e8', '#a077e8', '#b1c4f8'],
    iconcolor: '#cbd8ff',
  },
  {
    name: 'Jam',
    icon: ICONS.jam,
    colors: ['#5ccd92', '#bfe89c'],
    iconcolor: '#d4eabe',
  },
];
