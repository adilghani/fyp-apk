import React from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {Medium} from '../../Utils/FontFamily/Fonfamily';

const Button = ({ButtonTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainCon} onPress={onPress}>
      <Text style={styles.ButtonTitle}>{ButtonTitle}</Text>
    </TouchableOpacity>
  );
};
export default Button;
const styles = StyleSheet.create({
  mainCon: {
    width: Dimensions.get('screen').width / 1.1,
    height: 50,
    borderRadius: 30,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ButtonTitle: {
    fontSize: 18,
    fontFamily: Medium,
    color: WhiteColor,
  },
});
