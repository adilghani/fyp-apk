import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {SemiBold} from '../../Utils/FontFamily/Fonfamily';
const Wellcome = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 4000);
  });
  return (
    <View style={{flex: 1, backgroundColor: WhiteColor}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />

      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: '100%',
          fontFamily: SemiBold,
          color: primary,
        }}>
        Ecommerce
      </Text>
    </View>
  );
};
export default Wellcome;
