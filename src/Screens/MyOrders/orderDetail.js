import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {ImageBackground} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LeftIconForWhite from '../../../assets/images/LeftIconforWhite';
import WhiteLeft from '../../../assets/images/WhiteLeft';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {SemiBold} from '../../Utils/FontFamily/Fonfamily';
import styles from './orderdetailstyle';
import Barcode from 'react-native-barcode-builder';
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
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />

      <ImageBackground
        source={{uri: item?.productImage}}
        style={{width: '100%', height: 300, resizeMode: 'cover'}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}>
          <TouchableOpacity
            style={{marginTop: 20, marginHorizontal: 20}}
            onPress={() => props.navigation.navigate('MyOrders')}>
            <WhiteLeft />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{flex: 1}}>
        <ScrollView>
          {/* <Image
          source={require('../../../../components/assets/barcode.jpg')}
          style={{width: 'auto', height: 70, resizeMode: 'contain'}}
        /> */}
          <View style={{marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
            <Barcode
              value={item?.ProductID.toString()}
              format="CODE128"
              width={1.4}
            />
            <Text style={{fontSize: 16, fontFamily: SemiBold, color: primary}}>
              ID:#{item?.ProductID.toPrecision(7)}
              {/* {Math.round(item?.ProductID)} */}
            </Text>
          </View>
          <View style={{marginHorizontal: 10, marginBottom: 10}}>
            <Text style={[styles.name, {marginBottom: 10}]}>
              {item.PrductName}
            </Text>
            <Text style={styles.price}>RS: {item?.price}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 15,
            }}>
            <Text style={styles.tilespe}>Order Quantity</Text>
            <Text style={styles.banrd}>{item?.orderqty}</Text>
          </View>
          {/* <View
        style={{
          height: 60,
          width: '60%',
          justifyContent: 'center',
          padding: 10,
          backgroundColor: primary,
          marginBottom: 10,
          marginHorizontal: 10,
          marginTop: 20,
        }}></View> */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',

              marginHorizontal: 15,
            }}>
            <Text style={styles.tilespe}>My Name </Text>
            <Text style={styles.banrd}>{item?.username}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',

              marginHorizontal: 15,
            }}>
            <Text style={styles.tilespe}>My Contact </Text>
            <Text style={styles.banrd}>{item?.contectname}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',

              marginHorizontal: 15,
            }}>
            <Text style={styles.tilespe}>Shop name </Text>
            <Text style={styles.banrd}>{item?.restorentName}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',

              marginHorizontal: 15,
            }}>
            <Text style={styles.tilespe}>Product Pickup point</Text>
            <Text style={styles.banrd}>{item?.PickupPoint}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',

              marginHorizontal: 15,
            }}>
            <Text style={styles.tilespe}>Your Delievery Point</Text>
            <Text style={styles.banrd}>{item?.deleiveryAddress}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'space-between',
              marginHorizontal: 15,
            }}>
            <Text style={styles.tilespe}>Description</Text>
            <Text style={styles.banrd}>{item?.description}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default OrderDetail;