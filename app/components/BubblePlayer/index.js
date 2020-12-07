import React, { useState } from 'react';
import Draggable from 'react-native-draggable';
import {
  Image,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IMAGES } from '../../config/images';
import LinearGradient from 'react-native-linear-gradient';
import Player from '../UI/Player';
import styles from './styles';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/UI/bubbleplayer';
import NavigationService from '../../navigation/NavigationService';

const BubblePlayer = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [showDelete, setshowDelete] = useState(false);
  const dispatch = useDispatch();
  const renderMenuOpenBtn = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setshowMenu(value => !value);
        }}>
        <View style={styles.row}>
          <View style={styles.bubbleLeft}>
            <LinearGradient
              colors={['#c72323', '#c7486b', '#a12bec']}
              style={styles.bubbleGradient}>
              <Image source={IMAGES.useravatar} style={styles.avatar} />
            </LinearGradient>
          </View>
          {showMenu && (
            <>
              <View style={styles.playView}>
                <Icon type="feather" color="white" size={19} name="play" />
              </View>
              <TouchableWithoutFeedback
                onPress={() => NavigationService.navigate('Playlist')}>
                <View style={styles.playlistView}>
                  <MaterialCommunityIcons
                    color="white"
                    size={20}
                    name="playlist-music"
                  />
                </View>
              </TouchableWithoutFeedback>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <>
      <Draggable
        x={50}
        y={50}
        minX={10}
        minY={10}
        onDragRelease={(_, gestureState) => {
          setshowDelete(false);
          if (gestureState.moveY >= Dimensions.get('window').height - 50) {
            dispatch(actions.hide());
          }
        }}
        z={1000}
        onDrag={() => {
          setshowDelete(true);
        }}
        maxX={Dimensions.get('window').width}
        maxY={Dimensions.get('window').height}>
        <Player
          openBtn={renderMenuOpenBtn()}
          show={showMenu}
          color="white"
          style={styles.floatingBtn}
        />
      </Draggable>
      {showDelete && (
        <View style={styles.closeActionView}>
          <View style={styles.rightClose}>
            <View style={styles.leftClose}>
              <Text>DRAG TO DELETE</Text>
            </View>

            <Icon
              containerStyle={{ flex: 0.4 }}
              type="antdesign"
              name="delete"
              size={40}
              color="white"
            />
          </View>
        </View>
      )}
    </>
  );
};

export default BubblePlayer;
