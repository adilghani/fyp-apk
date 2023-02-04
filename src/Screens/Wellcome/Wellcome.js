import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {Image, StatusBar, Text, View} from 'react-native';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {SemiBold} from '../../Utils/FontFamily/Fonfamily';
const Wellcome = props => {
  const [hideSplash, setHideSplash] = React.useState(true);

  React.useEffect(async () => {
    setTimeout(async () => {
      try {
        const role = await AsyncStorage.getItem('role');
        console.log('role', role);
        if (role === 'user') {
          props.navigation.replace('TabNavigation');
        } else if (role === 'admin') {
          props.navigation.replace('AdminTab');
        } else {
          props.navigation.replace('GuestHome');
        }
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  }, [hideSplash]);

  return (
    <View style={{flex: 1, backgroundColor: WhiteColor}}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />

      <ImageBackground
        source={require('../../components/assets/Logo.jpeg')}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'contain',
        }}></ImageBackground>
      {/* <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />

      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: '100%',
          fontFamily: SemiBold,
          color: primary,
        }}>
        Ecommerce
      </Text> */}
    </View>
  );
};
export default Wellcome;
