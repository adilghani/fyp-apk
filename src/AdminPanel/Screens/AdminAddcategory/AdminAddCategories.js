import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LeftICon from '../../../../assets/images/Lefticon';
import Input from '../../../components/Input/Input';
import {primary, WhiteColor} from '../../../Utils/ColorScheme/Colors';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../../components/Button/Button';
import Right from '../../../../assets/images/Right';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/firestore';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import Danger from '../../../../assets/images/Danger';
import {Dimensions} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native';
import storage from '@react-native-firebase/storage';
const AdminAddCategories = props => {
  const [userid, setuserid] = React.useState('');
  const [Restorentname, setRestorentname] = React.useState();
  const [ProductName, setProductName] = React.useState();
  const [pcikuppoint, setPickupPoint] = React.useState();
  const [description, setDescription] = React.useState();
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [image, setImage] = React.useState();
  const [selectimage, setSelectImage] = React.useState();
  const [key, setkey] = React.useState('1');
  console.log('uri', selectimage);

  // launchImageLibrary(options callback)
  const getpick = async () => {
    const result = await launchImageLibrary();
    console.log('gt', result);
    setImage(result.assets);
    result.assets.map(item => {
      setSelectImage(item.uri);
    });
  };

  // You can also use as a promise without 'callback':
  // const result = await launchImageLibrary()
  const getadminid = async () => {
    const getid = await AsyncStorage.getItem('adminid');
    console.log('getid', getid);
    setuserid(getid);
  };
  React.useEffect(() => {
    getadminid();
  }, []);
  const submitdata = async () => {
    if (image == undefined) {
      setdialogVisible(true);
      setMessage('Please add image');
      setwhatopen('notdone');
    } else if (
      Restorentname == undefined ||
      ProductName == undefined ||
      pcikuppoint == undefined ||
      description == undefined
    ) {
      setdialogVisible(true);
      setMessage('Fields Required');
      setwhatopen('notdone');
    } else {
      try {
        setLoading(true);
        await storage().ref('adminproducts').putFile(selectimage);
        firebase
          .firestore()
          .collection('Products')
          .add({
            restorentName: Restorentname,
            PrductName: ProductName,
            PickupPoint: pcikuppoint,
            description: description,
            userid: userid,
            productkey: 'adminproducts',
          })
          .then(ref => {
            setLoading(false);

            console.log(ref);
          });
      } catch (e) {
        setLoading(false);
        console.log('???', e);
      }
    }
    // const uploaduri = selectimage;
    // let filename = uploaduri.substring(uploaduri.lastIndexOf('/') + 1);
    setSelectImage(null);
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
      <View style={styles.headercon}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TabNavigation')}>
          <Right />
        </TouchableOpacity>
        <Text style={styles.addtitle}>Add Product</Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{marginTop: 30, alignSelf: 'center'}}>
            <Input
              placeholder={'Enter your Restorent name '}
              titleInput={'Restorent Name'}
              value={Restorentname}
              onChangeText={text => setRestorentname(text)}
            />

            <Input
              placeholder={'Enter Product name'}
              titleInput={'Product Name'}
              value={ProductName}
              onChangeText={text => setProductName(text)}
            />
            <Input
              placeholder={'Enter pickup point'}
              titleInput={'Pickup point'}
              value={pcikuppoint}
              onChangeText={text => setPickupPoint(text)}
            />

            <Input
              placeholder={'Enter Description'}
              titleInput={'Description'}
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>
          <TouchableOpacity style={styles.addicon} onPress={getpick}>
            <Entypo
              name="plus"
              color={primary}
              size={30}
              style={{alignSelf: 'center'}}></Entypo>
            <Text style={styles.addimg}>Add Image</Text>
          </TouchableOpacity>
          {image == undefined || image == null ? null : (
            <View>
              <FlatList
                data={image}
                renderItem={({item, index}) => {
                  return (
                    <View style={{alignSelf: 'center', marginTop: 15}}>
                      <Image
                        source={{uri: item.uri}}
                        style={{
                          width: Dimensions.get('screen').width / 1.1,
                          height: 130,
                          resizeMode: 'cover',
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          )}
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        <Button ButtonTitle={'Submit'} onPress={submitdata} />
      </View>
    </View>
  );
};
export default AdminAddCategories;
