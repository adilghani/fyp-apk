import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LeftIconForWhite from '../../../../assets/images/LeftIconforWhite';
import {
  maintitle,
  primary,
  WhiteColor,
} from '../../../Utils/ColorScheme/Colors';
import styles from './style';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import Input from '../../../components/Input/Input';
import {Dimensions} from 'react-native';
import Button from '../../../components/Button/Button';
import Close from '../../../../assets/images/Close';
import Danger from '../../../../assets/images/Danger';
import {firebase} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import DropDownPicker from 'react-native-dropdown-picker';
import {Medium, Regular} from '../../../Utils/FontFamily/Fonfamily';
import WhiteLeft from '../../../../assets/images/WhiteLeft';
import {StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import RightIconForWhite from '../../../../assets/images/RightIconforWhite';
const ViewDetailProduct = props => {
  const [userid, setuserid] = React.useState();
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [dialogVisible1, setdialogVisible1] = React.useState(false);
  const [deleteVisible, setdeleteVisible] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [name, setname] = React.useState();
  const [contect, setcontect] = React.useState();
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');
  const [delievrypoint, setDeleiveryPoinr] = React.useState();
  const [orderqty, setorderqty] = React.useState();
  const [index, setIndex] = React.useState(0);
  console.log(index);

  const swiper = React.useRef(null);
  const {item, image1, image2, image3} = props.route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('null&');
  const [items, setItems] = useState([
    {label: 'Our Pickup point', value: 'Our Pickup point'},
    {label: 'My Address', value: ''},
  ]);
  // alert(value);
  const getadminid = async () => {
    const getid = await AsyncStorage.getItem('id');
    console.log('getid', getid);
    setuserid(getid);
  };
  React.useEffect(() => {
    getadminid();
  }, []);
  const submitdata = async () => {
    if (name == undefined || contect == undefined || value == undefined) {
      setdialogVisible1(true);
      setMessage('Fields Required');
      setwhatopen('notdone');
    } else {
      setLoading(true);
      firebase
        .firestore()
        .collection('Orders')
        .add({
          restorentName: item?.restorentName,
          PrductName: item?.PrductName,
          PickupPoint: item?.PickupPoint,
          description: item?.description,
          productOwnerID: item?.userid,
          ordersubmitownerid: userid,
          deleiveryAddress: value,
          username: name,
          contectname: contect,
          orderqty: orderqty,

          productImage: item?.productImage,
          price: item?.price,
          submittime: Date.now(),
          ProductID: Math.random(),
        })
        .then(ref => {
          setLoading(false);
          console.log(ref);
          setdialogVisible1(true);
          setMessage('Order submit Succefully ');
          setwhatopen('done');
        });
    }
  };
  const Delete = () => {
    setLoading(true);
    console.log('itemid', item?.id);
    firebase
      .firestore()
      .collection('Products')
      .doc(item?.id)
      .get()
      .then(documentSnapShots => {
        if (documentSnapShots.exists) {
          const {productImage} = documentSnapShots.data();
          {
            productImage.map(item => {
              const storageref = storage().refFromURL(item);
              const imageRef = storage().ref(storageref.fullPath);
              console.log('Deletedata', imageRef);
              // setLoading(false);
              imageRef
                .delete()
                .then(() => {
                  console.log(`${productImage}hase been deleted successfully`);
                  deletefirestoredata();
                  setLoading(false);
                })
                .catch(e => {
                  setLoading(false);

                  console.log('error while deleting the image', e);
                });
            });
          }
          // if (productImage != null) {
          //   console.log('_______', storageref.fullPath);
          // }
        }
      });
  };
  const deletefirestoredata = () => {
    console.log('docid');
    firebase
      .firestore()
      .collection('Products')
      .doc(item?.id)
      .delete()
      .then(() => {
        setLoading(false);
        setdialogVisible1(true);
        setMessage('Your Product has been deleted Successfully');
        setwhatopen('deletedone');

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
        backgroundColor={'transparent'}
        translucent
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
          width: Dimensions.get('screen').width,
        }}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginHorizontal: 20}}
          onPress={() => setdialogVisible(false)}>
          <Close />
        </TouchableOpacity>
        <View style={{marginTop: 30, alignSelf: 'center'}}>
          <Input
            placeholder={'Enter Your Name'}
            titleInput={'Your Name'}
            value={name}
            onChangeText={text => setname(text)}
          />
          {value == null ||
          value == 'null&' ||
          value == undefined ||
          value == 'Our Pickup point' ? (
            <View>
              <Text
                style={{
                  fontSize: 19,
                  marginBottom: 7,
                  fontFamily: Medium,
                  color: maintitle,
                }}>
                Product Recieve Address
              </Text>
              <DropDownPicker
                containerProps={{
                  height: open === true ? 150 : null,
                  backgroundColor: '#fff',
                }}
                style={{
                  width: Dimensions.get('screen').width / 1.1,
                  height: 60,
                  borderWidth: 0.6,
                  borderColor: primary,
                  borderRadius: 5,
                  marginBottom: 10,
                }}
                textStyle={{
                  fontSize: 16,
                  fontFamily: Medium,
                  color: maintitle,
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
          ) : (
            <Input
              placeholder={'Your Address'}
              titleInput={'Address'}
              value={value}
              onChangeText={text => setValue(text)}
              icon={
                <TouchableOpacity
                  style={{marginHorizontal: 20}}
                  onPress={() => setValue('null&')}>
                  <Close />
                </TouchableOpacity>
              }
            />
          )}

          <Input
            placeholder={'Your Number'}
            titleInput={'Number'}
            keyboardType={'number-pad'}
            value={contect}
            onChangeText={text => setcontect(text)}
          />
          <Input
            placeholder={'Product Quantity'}
            titleInput={'Quantity '}
            keyboardType={'number-pad'}
            value={orderqty}
            onChangeText={text => setorderqty(text)}
          />
          <View style={{marginTop: 30}}>
            <Button ButtonTitle={'Submit'} onPress={submitdata} />
          </View>
        </View>
      </Dialog.Container>
      <Dialog.Container
        visible={dialogVisible1}
        contentStyle={{
          borderRadius: 10,
          backgroundColor: WhiteColor,
          width: Dimensions.get('screen').width / 1.1,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {whatopen == 'done' || whatopen == 'deletedone' ? null : <Danger />}

          <View style={styles.cancelcon}>
            <Text style={styles.canceltilte}>
              {' '}
              {whatopen == 'done' || whatopen == 'deletedone'
                ? 'Success'
                : 'Error'}
            </Text>
            <Text style={styles.canceldet}>{message}</Text>
          </View>
          <View style={styles.cancelbtncon}>
            <TouchableOpacity
              onPress={() => {
                whatopen == 'done'
                  ? props.navigation.navigate('MyOrders') &
                    setdialogVisible1(false)
                  : whatopen == 'notdone'
                  ? setdialogVisible1(false)
                  : whatopen == 'deletedone'
                  ? props.navigation.navigate('TabNavigation')
                  : setdialogVisible1(false);
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
                {whatopen == 'done' || whatopen == 'deletedone'
                  ? 'Continue'
                  : 'Try Again'}
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
                style={{marginTop: 40, marginHorizontal: 20}}
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
                style={{marginTop: 40, marginHorizontal: 20}}
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
                style={{marginTop: 40, marginHorizontal: 20}}
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
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <Text style={styles.name}>{item.PrductName}</Text>
        <Text style={styles.price}>Rs:{item?.price}</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',

            marginHorizontal: 15,
          }}>
          <Text style={styles.tilespe}>Pickup point </Text>
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
          <Text style={styles.tilespe}>Description</Text>
          <Text style={styles.banrd}>{item?.description}</Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          alignSelf: 'flex-end',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: userid == item.userid ? 'red' : primary},
          ]}
          onPress={() => {
            userid == item.userid
              ? setdeleteVisible(true)
              : userid == null
              ? props.navigation.replace('Login')
              : setdialogVisible(true);
          }}>
          <Text style={styles.btntitle}>
            {userid == item.userid ? 'Delete' : 'Order Now'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ViewDetailProduct;
