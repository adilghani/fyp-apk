import {firebase} from '@react-native-firebase/auth';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LeftIconForWhite from '../../../../../assets/images/LeftIconforWhite';
import styles from './style';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';
import {
  maintitle,
  primary,
  WhiteColor,
} from '../../../../Utils/ColorScheme/Colors';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import {Dimensions} from 'react-native';
import Danger from '../../../../../assets/images/Danger';
import {Medium, SemiBold} from '../../../../Utils/FontFamily/Fonfamily';
const AdminViewDetailProduct = props => {
  const {item} = props.route.params;
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [image, setimage] = React.useState();
  const [deleteVisible, setdeleteVisible] = React.useState(false);

  const [data, setuserData] = React.useState([]);
  const [productsname, setProductName] = React.useState([]);
  const [userid, setuserid] = React.useState();
  console.log('Data', item.ProductID);
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
        setdialogVisible(true);
        setMessage('Your Product has been deleted Successfully');
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
                  ? props.navigation.navigate('AdminTab') &
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
      <ImageBackground
        source={{uri: item?.productImage}}
        style={{width: '100%', height: 300, resizeMode: 'cover'}}>
        <TouchableOpacity
          style={{marginTop: 20, marginHorizontal: 20}}
          onPress={() => props.navigation.navigate('AdminHome')}>
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
          style={styles.btn}
          onPress={() => setdeleteVisible(true)}>
          <Text style={styles.btntitle}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AdminViewDetailProduct;
