import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {save_role} from '../../Screens/Login/Login';
import {maintitle} from '../../Utils/ColorScheme/Colors';
import {Medium} from '../../Utils/FontFamily/Fonfamily';
import styles from './style';
import auth from '@react-native-firebase/auth';

const AdminProfile = props => {
  const [useremail, setuseremail] = React.useState();
  const logout = async () => {
    const value = await save_role('null');
    await AsyncStorage.removeItem('id');
    props.navigation.navigate('Login');
  };
  const getusername = async () => {
    const getid = await AsyncStorage.getItem('userdate');
    console.log('getid', getid);
    setuseremail(getid);
  };
  React.useEffect(() => {
    getusername();
  }, []);
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
  const getAllUsers = (req, res) => {
    const maxResults = 1; // optional arg.

    auth
      .listUsers(maxResults)
      .then(userRecords => {
        userRecords.users.forEach(user => console.log(user.toJSON()));
        res.end('Retrieved users list successfully.');
      })
      .catch(error => console.log(error));
  };
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Right />
          </TouchableOpacity>

          <TouchableOpacity onPress={logout}>
            <Text style={styles.title}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* <Image
            source={require('../../components/assets/1.jpg')}
            style={{width: 80, height: 80, borderRadius: 80}}
          /> */}
          <Text style={styles.title}>{useremail}</Text>
          {/* <Text style={styles.title}>+923333333333</Text> */}
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
