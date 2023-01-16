import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import LeftICon from '../../../assets/images/Lefticon';
import Right from '../../../assets/images/Right';
import {maintitle} from '../../Utils/ColorScheme/Colors';
import {Medium} from '../../Utils/FontFamily/Fonfamily';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
const ViewProfile = props => {
  const {item} = props.route.params;
  const Tabs = [
    {
      name: 'Kamran ayoub',
    },
    {
      name: 'Jhangir shah',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
    {
      name: 'GBS Test',
    },
  ];
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={{marginHorizontal: 20, marginTop: 20}}
          onPress={() => props.navigation.navigate('Profile')}>
          <Right />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../components/assets/1.jpg')}
            style={{width: 80, height: 80, borderRadius: 80}}
          />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>+923333333333</Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Feather name="map-pin" size={30} color={'#b7b7b7'} />

          <Text
            style={{
              fontSize: 20,
              fontFamily: Medium,
              color: maintitle,
              marginLeft: 10,
              marginHorizontal: 20,
            }}>
            H:no#321 Qasiabad road Hyderabad Sindh
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          alignSelf: 'flex-end',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntitle}>Delete User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ViewProfile;
