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
import styles from './style';
const AdminProfile = props => {
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
        <TouchableOpacity style={{marginHorizontal: 10, marginTop: 20}}>
          <Right />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../components/assets/1.jpg')}
            style={{width: 80, height: 80, borderRadius: 80}}
          />
          <Text style={styles.title}>Admin3</Text>
          <Text style={styles.title}>+923333333333</Text>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text style={{fontSize: 20, fontFamily: Medium, color: maintitle}}>
            All Users
          </Text>
        </View>
        <View style={styles.cardcon}>
          <FlatList
            data={Tabs}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.persolacon}
                  onPress={() =>
                    props.navigation.navigate('ViewProfile', {item: item})
                  }>
                  <Text style={styles.persolaltitle}>{item.name}</Text>
                  <LeftICon />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default AdminProfile;
