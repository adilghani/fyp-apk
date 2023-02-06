import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {ImageBackground} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LeftIconForWhite from '../../../assets/images/LeftIconforWhite';
import WhiteLeft from '../../../assets/images/WhiteLeft';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {Medium, SemiBold} from '../../Utils/FontFamily/Fonfamily';
import styles from './orderdetailstyle';
import Barcode from 'react-native-barcode-builder';
import RightIconForWhite from '../../../assets/images/RightIconforWhite';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
import Danger from '../../../assets/images/Danger';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import {firebase} from '@react-native-firebase/firestore';
const OrderDetail = props => {
  const [userid, setuserid] = React.useState();
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [dialogVisible1, setdialogVisible1] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const swiper = React.useRef(null);
  console.log(index);
  const [loading, setLoading] = React.useState(false);
  const [name, setname] = React.useState();
  const [contect, setcontect] = React.useState();
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');
  const [delievrypoint, setDeleiveryPoinr] = React.useState();
  const {item, image1, image2, image3} = props.route.params;

  const [deleteVisible, setdeleteVisible] = React.useState(false);
  const getadminid = async () => {
    const getid = await AsyncStorage.getItem('id');
    console.log('getid', getid);
    setuserid(getid);
  };
  React.useEffect(() => {
    getadminid();
  }, []);
  const Delete = () => {
    setLoading(true);
    console.log('docid', item?.id);
    firebase
      .firestore()
      .collection('Orders')
      .doc(item?.id)
      .delete()
      .then(() => {
        setLoading(false);
        setdialogVisible(true);
        setMessage('Your Orders has been deleted Successfully');
        setwhatopen('done');

        // Alert.alert(
        //   'Product Deleted',

        // );
      })
      .catch(e => {
        setLoading(false);

        console.log('error while deleting', e);
        setdialogVisible(true);
        setMessage('Error while deleting please try agian');
        setwhatopen('notdone');
      });
  };
  return (
    <View style={styles.main}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
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
                  ? props.navigation.navigate('MyOrders') &
                    setdialogVisible(false) &
                    setdeleteVisible(false)
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
      <Dialog.Container
        visible={deleteVisible}
        contentStyle={{
          borderRadius: 10,
          backgroundColor: WhiteColor,
          width: Dimensions.get('screen').width / 1.1,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {whatopen == 'done' || whatopen == 'deletedone' ? null : <Danger />}

          <View style={styles.cancelcon}>
            <Text style={styles.canceltilte}>Warning!</Text>
            <Text style={styles.canceldet}>
              Are you sure,want to delete this Product?
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => setdeleteVisible(false)}
              style={[
                styles.cancelbtn,
                {
                  backgroundColor: primary,
                  width: Dimensions.get('screen').width / 2.9,
                  marginLeft: 15,
                },
              ]}>
              <Text
                style={{fontSize: 16, fontFamily: Medium, color: WhiteColor}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Delete() & setdeleteVisible(false)}
              style={[
                styles.cancelbtn,
                {
                  backgroundColor: primary,
                  width: Dimensions.get('screen').width / 2.9,
                  marginLeft: 17,
                },
              ]}>
              <Text
                style={{fontSize: 16, fontFamily: Medium, color: WhiteColor}}>
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
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
          <View
            style={{
              alignSelf: 'flex-end',
              paddingHorizontal: 10,
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setdeleteVisible(true)}>
              <Text style={styles.btntitle}>Delete</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default OrderDetail;
