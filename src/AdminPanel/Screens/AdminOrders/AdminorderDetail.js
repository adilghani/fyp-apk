import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ImageBackground} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LeftIconForWhite from '../../../../assets/images/LeftIconforWhite';
import {primary, WhiteColor} from '../../../Utils/ColorScheme/Colors';
import {SemiBold} from '../../../Utils/FontFamily/Fonfamily';

import styles from './orderdetailstyle';

const AdminOrderDetail = props => {
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
        <TouchableOpacity
          style={{marginTop: 20, marginHorizontal: 20}}
          onPress={() => props.navigation.navigate('Adminorders')}>
          <LeftIconForWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          height: 60,
          width: '60%',
          justifyContent: 'center',
          padding: 10,
          backgroundColor: primary,
          marginBottom: 10,
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 16, fontFamily: SemiBold, color: WhiteColor}}>
          #{item?.ProductID.toPrecision(7)}
          {/* {Math.round(item?.ProductID)} */}
        </Text>
      </View>
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
export default AdminOrderDetail;