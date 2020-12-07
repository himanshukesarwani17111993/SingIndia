import React from 'react';
import { View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { COLORS } from '../../../../config/styles';

const Play = ({ size, ...rest }) => {
  return (
    <View style={{ width: size + 3 }} {...rest}>
      <MaskedView
        style={{ flex: 1, height: size + 3 }}
        maskElement={
          <View style={styles.row}>
            <Icon
              type="antdesign"
              name="playcircleo"
              size={size}
              color="white"
              style={styles.shadow}
            />
          </View>
        }>
        <LinearGradient
          colors={[
            COLORS.COLOR_PRIMARY_GRADIENT,
            COLORS.COLOR_SECONADRY_GRADIENT,
          ]}
          style={{ flex: 1 }}
        />
      </MaskedView>
    </View>
  );
};

export default Play;
