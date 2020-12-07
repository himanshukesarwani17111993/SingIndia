import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { COLORS, FONTS } from '../../config/styles';
import { Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';

export default function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabs}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
            key={route.key.toString()}>
            <View
              style={{
                alignItems: 'center',
              }}>
              {label === 'Home' && (
                <View style={styles.view}>
                  <Icon
                    type="fontisto"
                    name="home"
                    size={25}
                    color={isFocused ? COLORS.COLOR_BLACK : '#999999'}
                  />
                  <Text
                    style={isFocused ? styles.label : styles.unselectedLabel}>
                    Home
                  </Text>
                </View>
              )}
              {label === 'Party' && (
                <View style={styles.view}>
                  <Icon
                    type="fontisto"
                    name="heart"
                    size={25}
                    color={isFocused ? COLORS.COLOR_BLACK : '#999999'}
                  />
                  <Text
                    style={isFocused ? styles.label : styles.unselectedLabel}>
                    Party
                  </Text>
                </View>
              )}
              {label === 'Message1' && (
                <View
                  style={[
                    styles.cartIcon,
                    {
                      backgroundColor: 'white',
                    },
                  ]}>
                  <Image source={ICONS.logo} style={styles.logo} />
                </View>
              )}
              {label === 'Message' && (
                <View style={styles.view}>
                  <Icon
                    type="entypo"
                    name="chat"
                    size={30}
                    color={isFocused ? COLORS.COLOR_BLACK : '#D3D3D3'}
                  />
                  <Text
                    style={isFocused ? styles.label : styles.unselectedLabel}>
                    Message
                  </Text>
                </View>
              )}
              {label === 'Profile' && (
                <View style={styles.view}>
                  <Icon
                    type="font-awesome"
                    name="user"
                    size={30}
                    color={isFocused ? COLORS.COLOR_BLACK : '#D3D3D3'}
                  />
                  <Text
                    style={isFocused ? styles.label : styles.unselectedLabel}>
                    Profile
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    height: 65,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  cartIcon: {
    position: 'absolute',
    bottom: -5,
    borderRadius: 68,
    width: 65,
    height: 65,
    backgroundColor: COLORS.COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  view: { alignItems: 'center' },
  logo: {
    width: '60%',
    height: '60%',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.FONT_BOLD,
    textTransform: 'uppercase',
  },
  unselectedLabel: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.FONT_BOLD,
    textTransform: 'uppercase',
    color: '#999999',
  },
});
