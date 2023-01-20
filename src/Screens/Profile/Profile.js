import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {TouchableOpacity, View, Image, Text, FlatList} from 'react-native';
import LeftICon from '../../../assets/images/Lefticon';
import Right from '../../../assets/images/Right';
import WhiteLeft from '../../../assets/images/WhiteLeft';
import {save_role} from '../Login/Login';
import styles from './styles';
const Profile = props => {
  const [useremail, setuseremail] = React.useState();

  const getusername = async () => {
    const getid = await AsyncStorage.getItem('userdate');
    console.log('getid', getid);
    setuseremail(getid);
  };
  React.useEffect(() => {
    getusername();
  }, []);
  const logout = async () => {
    const value = await save_role('null');
    await AsyncStorage.removeItem('id');
    props.navigation.navigate('GuestHome');
  };
  const Tabs = [
    // {
    //   name: 'Personal information',
    // },
    // {
    //   name: 'Policies',
    // },
    // {
    //   name: 'Help',
    // },
    {
      name: 'Logout',
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.catcon}>
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => props.navigation.navigate('TabNavigation')}>
          <WhiteLeft />
        </TouchableOpacity>
        <Text style={styles.cattitle}>My Profile</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>{useremail}</Text>
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
