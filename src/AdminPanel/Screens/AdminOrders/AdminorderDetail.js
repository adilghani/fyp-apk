import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ImageBackground} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LeftIconForWhite from '../../../../assets/images/LeftIconforWhite';
import {primary, WhiteColor} from '../../../Utils/ColorScheme/Colors';
import {SemiBold} from '../../../Utils/FontFamily/Fonfamily';

import styles from './orderdetailstyle';
import Swiper from 'react-native-swiper';
import WhiteLeft from '../../../../assets/images/WhiteLeft';
import RightIconForWhite from '../../../../assets/images/RightIconforWhite';

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
  const {item, image1, image2, image3} = props.route.params;
  const [index, setIndex] = React.useState(0);
  const swiper = React.useRef(null);
  console.log(index);
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
      <View style={{height: 300}}>
        <Swiper
          ref={swiper}
          index={index}
          activeDotColor={'#77E6B6'}
          showsButtons={false}
          onIndexChanged={index => setIndex(index)}
          dotColor="#F8F9D3"
          paginationStyle={styles.pagistio}
          activeDot={
            <View
              style={{
                width: 20,
                backgroundColor: primary,
                height: 5,
                marginLeft: 8,
                borderRadius: 30,
              }}
            />
          }
          dot={
            <View
              style={{
                width: 20,
                backgroundColor: '#E1E1E6',
                height: 5,
                marginLeft: 8,
                borderRadius: 30,
              }}
            />
          }>
          <ImageBackground
            source={{uri: image1}}
            style={{width: '100%', height: 300, resizeMode: 'cover'}}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
              <TouchableOpacity
                style={{marginTop: 20, marginHorizontal: 20}}
                onPress={() => props.navigation.navigate('TabNavigation')}>
                <WhiteLeft />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20%',
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity onPress={() => swiper.current.scrollBy(1)}>
                  <WhiteLeft />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => swiper.current.scrollBy(1)}>
                  <RightIconForWhite />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={{uri: image2}}
            style={{width: '100%', height: 300, resizeMode: 'cover'}}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
              <TouchableOpacity
                style={{marginTop: 20, marginHorizontal: 20}}
                onPress={() => props.navigation.navigate('TabNavigation')}>
                <WhiteLeft />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20%',
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity onPress={() => swiper.current.scrollBy(1)}>
                  <WhiteLeft />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => swiper.current.scrollBy(1)}>
                  <RightIconForWhite />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={{uri: image3}}
            style={{width: '100%', height: 300, resizeMode: 'cover'}}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
              <TouchableOpacity
                style={{marginTop: 20, marginHorizontal: 20}}
                onPress={() => props.navigation.navigate('TabNavigation')}>
                <WhiteLeft />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '20%',
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity onPress={() => swiper.current.scrollBy(1)}>
                  <WhiteLeft />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => swiper.current.scrollBy(1)}>
                  <RightIconForWhite />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </Swiper>
      </View>
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
