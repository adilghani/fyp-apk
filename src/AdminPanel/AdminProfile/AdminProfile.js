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
import {maintitle, primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {Medium} from '../../Utils/FontFamily/Fonfamily';
import styles from './style';
import auth from '@react-native-firebase/auth';
import {getAuth} from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import Danger from '../../../assets/images/Danger';
import TrashIcon from '../../../assets/images/TrashIcon';
import {CommonActions} from '@react-navigation/native';

const AdminProfile = props => {
  const [useremail, setuseremail] = React.useState();
  const [allusers, setAllusers] = React.useState();
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const logout = async () => {
    const value = await save_role('null');
    await AsyncStorage.removeItem('id');
    props.navigation.navigate('Login');
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'GuestHome'}],
      }),
    );
  };
  const getallusers = async () => {
    setLoading(true);
    await firebase
      .firestore()
      .collection('Users')
      .get()
      // firebase
      //   .firestore()
      //   .collection('Products')
      //   .get()
      .then(querySnapshot => {
        const arr = [];

        querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          data.id = snapshot.id;
          console.log('userdata', snapshot.data());

          arr.push(data);
          // pro.push(data.PrductName);
        });
        setAllusers(arr);
      })
      .catch(e => {
        setdialogVisible(true);
        setMessage('Some thing went wrong');
        setLoading(false);
        setwhatopen('notdone');
      });

    // await familyregister();
    // const url = await storage().ref('adminproducts').getDownloadURL();
    // console.log(url);
    setLoading(false);
    // setimage(url);
  };
  React.useEffect(() => {
    getallusers();
  }, []);
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
  const Delete = (userid, iddoc) => {
    // alert(userid);
    const uid = userid;
    auth()
      .us.then(() => {
        firebase.firestore().collection('Users').doc(iddoc).delete();
      })
      .catch(error => {
        console.log(error, 'error');
      })
      .finally(i => console.log('finaly', i));
  };

  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Modal
          isVisible={loading}
          style={{
            flex: 1,
            margin: 0,
            // height: height,
            // width: width,
            backgroundColor: 'transparent',
          }}>
          <View
            style={{
              flex: 1,
              margin: 0,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <Spinner type="ThreeBounce" size={50} color={primary} />
          </View>
        </Modal>
        <Dialog.Container
          visible={dialogVisible}
          contentStyle={{
            borderRadius: 10,
            backgroundColor: WhiteColor,
            width: Dimensions.get('screen').width / 1.1,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Danger />
            <View style={styles.cancelcon}>
              <Text style={styles.canceltilte}>
                {' '}
                {whatopen == 'done' ? 'Success' : 'Error'}
              </Text>
              <Text style={styles.canceldet}>{message}</Text>
            </View>
            <View style={styles.cancelbtncon}>
              <TouchableOpacity
                onPress={() => {
                  whatopen == 'done'
                    ? props.navigation.navigate('Home') &
                      setdialogVisible(false)
                    : setdialogVisible(false);
                }}
                style={[
                  styles.cancelbtn,
                  {
                    borderWidth: 2,
                    borderColor: primary,
                    backgroundColor: primary,
                    marginLeft: 15,
                    marginTop: 30,
                  },
                ]}>
                <Text style={[styles.cancelbtntitle, {color: WhiteColor}]}>
                  {whatopen == 'done' ? 'Continue' : 'Try Again'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Dialog.Container>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdminTab')}>
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
            data={allusers}
            renderItem={({item, index}) => {
              console.log('>>>>ids', item.userid);
              return (
                <View style={styles.persolacon}>
                  <Text style={styles.persolaltitle}>{item?.useremail}</Text>
                  {/* <TouchableOpacity
                    onPress={() => Delete(item.userid, item.id)}>
                    <TrashIcon />
                  </TouchableOpacity> */}
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default AdminProfile;
