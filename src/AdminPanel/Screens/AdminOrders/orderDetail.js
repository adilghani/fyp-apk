import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ImageBackground} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LeftIconForWhite from '../../../assets/images/LeftIconforWhite';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import Input from '../../components/Input/Input';
import {Dimensions} from 'react-native';
import Button from '../../components/Button/Button';
import Close from '../../../assets/images/Close';
import Danger from '../../../assets/images/Danger';
import {firebase} from '@react-native-firebase/firestore';
import styles from './orderdetailstyle';

const OrderDetail = props => {
  const [userid, setuserid] = React.useState();
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [dialogVisible1, setdialogVisible1] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [name, setname] = React.useState();
  const [contect, setcontect] = React.useState();
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');
  const [delievrypoint, setDeleiveryPoinr] = React.useState();
  const {item} = props.route.params;
  const getadminid = async () => {
    const getid = await AsyncStorage.getItem('id');
    console.log('getid', getid);
    setuserid(getid);
  };
  React.useEffect(() => {
    getadminid();
  }, []);

  return (
    <View style={styles.main}>
      <ImageBackground
        source={{uri: item?.productImage}}
        style={{width: '100%', height: 300, resizeMode: 'cover'}}>
        <TouchableOpacity style={{marginTop: 20, marginHorizontal: 20}}>
          <LeftIconForWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <Text style={styles.name}>{item.PrductName}</Text>
        <Text style={styles.price}> {item?.price}</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',

            marginHorizontal: 10,
          }}>
          <Text style={styles.tilespe}>My Name </Text>
          <Text style={styles.banrd}>{item?.username}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',

            marginHorizontal: 10,
          }}>
          <Text style={styles.tilespe}>My Contact </Text>
          <Text style={styles.banrd}>{item?.contectname}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',

            marginHorizontal: 10,
          }}>
          <Text style={styles.tilespe}>Shop name </Text>
          <Text style={styles.banrd}>{item?.restorentName}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',

            marginHorizontal: 10,
          }}>
          <Text style={styles.tilespe}>Pickup point </Text>
          <Text style={styles.banrd}>{item?.PickupPoint}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',

            marginHorizontal: 10,
          }}>
          <Text style={styles.tilespe}>Your Address </Text>
          <Text style={styles.banrd}>{item?.deleiveryAddress}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={styles.tilespe}>Description</Text>
          <Text style={styles.banrd}>{item?.description}</Text>
        </View>
      </View>
    </View>
  );
};
export default OrderDetail;
