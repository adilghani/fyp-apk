import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ImageBackground} from 'react-native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LeftIconForWhite from '../../../../assets/images/LeftIconforWhite';
import {primary, WhiteColor} from '../../../Utils/ColorScheme/Colors';
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

const ViewDetailProduct = props => {
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
  console.log('getid', item?.id);
  const getadminid = async () => {
    const getid = await AsyncStorage.getItem('id');
    setuserid(getid);
  };
  React.useEffect(() => {
    getadminid();
  }, []);
  const submitdata = async () => {
    setLoading(true);
    if (
      name == undefined ||
      contect == undefined ||
      delievrypoint == undefined
    ) {
      setdialogVisible(true);
      setMessage('Fields Required');
      setwhatopen('notdone');
    } else {
      firebase
        .firestore()
        .collection('Orders')
        .add({
          restorentName: item.restorentName,
          PrductName: item.PrductName,
          PickupPoint: item?.PickupPoint,
          description: item?.description,
          productOwnerID: item?.userid,
          ordersubmitownerid: userid,
          deleiveryAddress: delievrypoint,
          username: name,
          contectname: contect,

          productImage: item?.productImage,
          price: item?.price,
          submittime: Date.now(),
          ProductID: Math.random(),
        })
        .then(ref => {
          setLoading(false);
          console.log(ref);
          setdialogVisible1(true);
          setMessage('Product add Succefully ');
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
          if (productImage != null) {
            const storageref = storage().refFromURL(productImage);
            const imageRef = storage().ref(storageref.fullPath);
            setLoading(false);
            console.log('_______', storageref.fullPath);
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
          }
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
          <Input
            placeholder={'Your Address'}
            titleInput={'Address'}
            value={delievrypoint}
            onChangeText={text => setDeleiveryPoinr(text)}
          />
          <Input
            placeholder={'Your Number'}
            titleInput={'Number'}
            keyboardType={'number-pad'}
            value={contect}
            onChangeText={text => setcontect(text)}
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
                  : whatopen == 'deletedone'
                  ? props.navigation.navigate('Home') & setdialogVisible1(false)
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
                {whatopen == 'done' || whatopen == 'deletedone'
                  ? 'Continue'
                  : 'Try Again'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
      <ImageBackground
        source={{uri: item?.productImage}}
        style={{width: '100%', height: 300, resizeMode: 'cover'}}>
        <TouchableOpacity
          style={{marginTop: 20, marginHorizontal: 20}}
          onPress={() => props.navigation.navigate('TabNavigation')}>
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
            userid == item.userid ? Delete() : setdialogVisible(true);
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
