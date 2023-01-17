import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {SemiBold} from '../../Utils/FontFamily/Fonfamily';
const Wellcome = props => {
  const [hideSplash, setHideSplash] = React.useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     props.navigation.navigate('Login');
  //   }, 4000);
  // });
  React.useEffect(async () => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('role');
        console.log('>>>>>userdata', value);

        if (value == 'user') {
          props.navigation.navigate('TabNavigation');
        } else if (value == 'admin') {
          props.navigation.navigate('AdminTab');
        } else {
          props.navigation.navigate('Login');
        }
      } catch (error) {
        console.log(error);
        // Error retrieving data
      }
    }, 3000);

    //   props.navigation.navigate("HomeTab")
  }, [hideSplash]);
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
