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
        const role = await AsyncStorage.getItem('role');
        console.log('role', role.toString());
        if (role === 'user') {
          props.navigation.replace('TabNavigation');
        } else if (role === 'admin') {
          props.navigation.replace('AdminTab');
        } else {
          props.navigation.replace('Login');
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
