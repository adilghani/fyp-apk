import React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {Darkcolor, primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import styles from './style';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import Danger from '../../../assets/images/Danger';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
<<<<<<< HEAD
=======
import {Image} from 'react-native';
import {ScrollView} from 'react-native';
>>>>>>> 9c73260 (updated new code due to conflict in github)

export const save_user_id = async id => {
  await AsyncStorage.setItem('id', JSON.stringify(id));
};
// export const save_admin_id = async id => {
//   await AsyncStorage.setItem('adminid', JSON.stringify(id));
// };
export const save_userdata = async name => {
  await AsyncStorage.setItem('userdate', JSON.stringify(name));
};

export const save_role = async role => {
  await AsyncStorage.setItem('role', role);
};
const Login = props => {
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();

  const Loginwithemail = () => {
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        setLoading(false);
        console.log('userdata', data.user.uid);
        if (data.user.email == 'admin@gmail.com') {
          // props.navigation.navigate('AdminTab');
          props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'AdminTab'}],
            }),
          );
          save_user_id(data.user.uid);
          save_role('admin');
          save_userdata(data.user.email);
        } else {
          // props.navigation.navigate('TabNavigation');
          props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'TabNavigation'}],
            }),
          );
          save_user_id(data.user.uid);
          save_userdata(data.user.email);

          save_role('user');
        }
        console.log('User account created & signed in!', data.user.uid);
        // if ((data.user.email = email)) {
        // }
        // setdialogVisible(true);
        // setMessage('User account created');
        // setwhatopen('done');
      })
      .catch(error => {
        setLoading(false);

        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setdialogVisible(true);
          setwhatopen('notdone');

          setMessage('email-already-in-use');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setwhatopen('notdone');

          setdialogVisible(true);
          setMessage('Invalid email');
        }
        if (error.code === 'auth/user-not-found') {
          console.log('User not Found!');
          setwhatopen('notdone');

          setdialogVisible(true);
          setMessage('User not Found');
        }
        if (error.code === 'auth/wrong-password') {
          console.log('The password is invalid');
          setwhatopen('notdone');

          setdialogVisible(true);
          setMessage('The password is invalid');
        }
        if (error.code === 'auth/unknown') {
          console.log('Something went Wrong');
          setwhatopen('notdone');

          setdialogVisible(true);
          setMessage('Something went Wrong');
        }
        if (error.code === 'auth/network-request-failed') {
          console.log('Netwotk Error');
          setwhatopen('notdone');

          setdialogVisible(true);
          setMessage('Netwotk Error ');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
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
            <Text style={styles.canceltilte}>Error</Text>
            <Text style={styles.canceldet}>{message}</Text>
          </View>
          <View style={styles.cancelbtncon}>
            <TouchableOpacity
              onPress={() => {
                whatopen == 'done'
                  ? props.navigation.navigate('Login') & setdialogVisible(false)
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
<<<<<<< HEAD
      <Text style={styles.loginheader}>Sign-in</Text>
      <View style={{marginTop: 30, alignSelf: 'center'}}>
        <Input
          placeholder={'Enter Email'}
          titleInput={'Email'}
          value={email}
          onChangeText={text => setemail(text)}
        />

        <Input
          placeholder={'Enter password'}
          titleInput={'Password'}
          value={password}
          onChangeText={text => setpassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={{marginTop: 30}}>
        <Button ButtonTitle={'Sign-In'} onPress={Loginwithemail} />
      </View>
      <View
        style={[
          styles.forgotpasswordcon,
          {flexDirection: 'row', marginTop: 10, alignSelf: 'flex-start'},
        ]}>
        <Text style={[styles.forgotpasswordtext, {color: Darkcolor}]}>
          Already have an Account
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Sinup')}>
          <Text style={[styles.forgotpasswordtext, {marginLeft: 5}]}>
            Sing-Up
          </Text>
        </TouchableOpacity>
=======
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 180,
          height: 200,
          aspectRatio: 1 * 1.4,
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <Image
          source={require('../../components/assets/Logo.jpeg')}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          {/* <Text style={styles.loginheader}>Sign-in</Text> */}
          <View style={{alignSelf: 'center'}}>
            <Input
              placeholder={'Enter Email'}
              titleInput={'Email'}
              value={email}
              onChangeText={text => setemail(text)}
            />

            <Input
              placeholder={'Enter password'}
              titleInput={'Password'}
              value={password}
              onChangeText={text => setpassword(text)}
              secureTextEntry={true}
            />
          </View>

          <View style={{marginTop: 30}}>
            <Button ButtonTitle={'Sign-In'} onPress={Loginwithemail} />
          </View>
          <View
            style={[
              styles.forgotpasswordcon,
              {flexDirection: 'row', marginTop: 10, alignSelf: 'flex-start'},
            ]}>
            <Text style={[styles.forgotpasswordtext, {color: Darkcolor}]}>
              Already have an Account
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Sinup')}>
              <Text style={[styles.forgotpasswordtext, {marginLeft: 5}]}>
                Sing-Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
>>>>>>> 9c73260 (updated new code due to conflict in github)
      </View>
    </View>
  );
};
export default Login;
