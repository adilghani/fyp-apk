import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TouchableOpacity, View} from 'react-native';

import {
  Darkcolor,
  primary,
  Primary,
  WhiteColor,
} from '../Utils/ColorScheme/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeIcon from '../../assets/images/HomeIcon';
import Bellicon from '../../assets/images/Bellicon';
import SearchImage from '../../assets/images/SearchImage';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ProfileDark from '../../assets/images/ProfileIcon';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Null = () => {
  return <></>;
};
const navigationhandel = () => ({
  headerShown: false,
});

const TabNavigation = ({state, descriptors, navigation}) => {
  return (
    <Tab.Navigator
      tabBar={(props, display) => (
        <View
          style={{
            width: '100%',
            height: 61,
            backgroundColor: WhiteColor,
            alignSelf: 'center',
            // elevation: 2,
            // borderWidth: 1,
            borderColor: '#016A6A',
            // borderRadius: 18,
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            {/* <MaterialCommunityIcons name="home" color={'white'} size={30} /> */}
            <HomeIcon />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => props.navigation.navigate('SearchProperty')}
            onPress={() => props.navigation.navigate('Cart')}>
            <AntDesign name="shoppingcart" size={30} color={'#b7b7b7'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 10,
              height: 60,
              width: 60,
              borderRadius: 60,
              justifyContent: 'center',
              backgroundColor: primary,
              bottom: 30,
            }}
            onPress={() => props.navigation.navigate('AddCategories')}>
            <Entypo
              name="plus"
              color={WhiteColor}
              size={30}
              style={{alignSelf: 'center'}}></Entypo>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Notification')}>
            <Bellicon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}>
            <ProfileDark />
          </TouchableOpacity>
        </View>
      )}
      // tabBarOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused ? <HomeIcon /> : <HomeIcon />;
      //       color = focused ? primary : Darkcolor;
      //     }

      //     return iconName;
      //   },
      // })}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          //   tabBarButton: props => null,
          //   tabBarVisible: false,
          tabBarLabel: 'Home',
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
