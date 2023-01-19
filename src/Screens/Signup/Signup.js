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
import {firebase} from '@react-native-firebase/firestore';

const Sinup = props => {
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();

  const Sigup = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        setLoading(false);

        console.log('User account created & signed in!', data);
        setdialogVisible(true);
        setMessage('User account created');
        setwhatopen('done');
        firebase
          .firestore()
          .collection('Users')
          .add({
            useremail: data?.user?.email,
            userid: data?.user?.uid,
          })
          .then(() => {
            console.log('done');

            // Alert.alert(
            //   'Product Deleted',

            // );
          })
          .catch(e => {
            setLoading(false);

            console.log('error while deleting', e);
            setdialogVisible(true);
            setMessage('Error while adding please try agian');
            setwhatopen('notdone');
          });
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
          {whatopen == 'done' ? null : <Danger />}
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
      <Text style={styles.loginheader}>Sign-Up</Text>
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
        <Button ButtonTitle={'Sign-Up'} onPress={Sigup} />
      </View>
      <View
        style={[
          styles.forgotpasswordcon,
          {flexDirection: 'row', marginTop: 10, alignSelf: 'flex-start'},
        ]}>
        <Text style={[styles.forgotpasswordtext, {color: Darkcolor}]}>
          Already have an Account
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={[styles.forgotpasswordtext, {marginLeft: 5}]}>
            Sing-In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Sinup;
