import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {TouchableOpacity, View, Image, Text, FlatList} from 'react-native';
import LeftICon from '../../../assets/images/Lefticon';
import Right from '../../../assets/images/Right';
import {save_role} from '../Login/Login';
import styles from './styles';
const Profile = props => {
  const logout = async () => {
    const value = await save_role('null');
    await AsyncStorage.removeItem('id');
    props.navigation.navigate('Login');
  };
  const Tabs = [
    {
      name: 'Personal information',
    },
    {
      name: 'Policies',
    },
    {
      name: 'Help',
    },
    {
      name: 'Logout',
    },
  ];
  return (
    <View style={styles.main}>
      <TouchableOpacity style={{marginHorizontal: 10, marginTop: 20}}>
        <Right />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../components/assets/1.jpg')}
          style={{width: 80, height: 80, borderRadius: 80}}
        />
        <Text style={styles.title}>Kamran ayoub</Text>
        <Text style={styles.title}>+923333333333</Text>
      </View>
      <View></View>
      <View style={styles.cardcon}>
        <FlatList
          data={Tabs}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.persolacon}
                onPress={() => {
                  item.name == 'Logout' ? logout() : null;
                }}>
                <Text style={styles.persolaltitle}>{item.name}</Text>
                <LeftICon />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Profile;
