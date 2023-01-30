import React from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LeftICon from '../../../assets/images/Lefticon';
import Input from '../../components/Input/Input';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../components/Button/Button';
import Right from '../../../assets/images/Right';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/firestore';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import Danger from '../../../assets/images/Danger';
import {Dimensions} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image} from 'react-native';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import WhiteLeft from '../../../assets/images/WhiteLeft';
import {StatusBar} from 'react-native';
import {Alert} from 'react-native';
import {Pressable} from 'react-native';
import {ImageBackground} from 'react-native';
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
  const [image, setImage] = React.useState([]);
  const [selectimage, setSelectImage] = React.useState();
  const [key, setkey] = React.useState('1');
  const [price, setPrice] = React.useState();
  const [DownloadURL, setDownloadURL] = React.useState([]);
  console.log('DownloadURL', DownloadURL);

  // launchImageLibrary(options callback)
  const getpick = () => {
    setImage();
    // const result = await launchImageLibrary();
    // console.log('gt', result);
    // setImage(result.assets);
    // result.assets.map(item => {
    //   setSelectImage(item.uri);
    // });
    ImagePicker.openPicker({
      width: 90,
      height: 120,
      // cropping: true,
      multiple: true,
    }).then(response => {
      console.log('>>>', response);
      const imageuri =
        Platform.OS == 'ios' ? response.sourceURL : response.path;
      if (response.length > 3) {
        Alert.alert('You can select only 3 images');
      } else {
        setImage(response);
        // response.map(img => {
        // });
      }
      // console.log(image);
      // setImage(imageuri);
    });
  };

  // You can also use as a promise without 'callback':
  // const result = await launchImageLibrary()
  const getadminid = async () => {
    const getid = await AsyncStorage.getItem('id');
    console.log('getid', getid);
    setuserid(getid);
  };
  React.useEffect(() => {
    getadminid();
  }, []);
  const submitdata = async () => {
    const imageuri = await uploadimage();
    console.log('iamge uri', imageuri);
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
      if (DownloadURL.length == 2) {
        setLoading(true);
        alert('worlk');
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
            productImage: DownloadURL,
            price: price,
          })
          .then(ref => {
            setLoading(false);
            console.log(ref);
            setdialogVisible(true);
            setMessage('Product add Succefully ');
            setwhatopen('done');
          });
      }
    }
  };

  const uploadimage = async () => {
    const uploadedPhotos = await Promise.all(
      image.map(async photo => {
        const photoUploadUri = photo?.path;
        let filename = photo?.path.substring(photo?.path.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const photoToUpload = storage().ref(filename);
        const uploadPhoto = storage().ref(filename).putFile(photoUploadUri);
        // console.log('filenasme', uploadPhoto.getDownloadURL());

        // *Uploading photo
        try {
          setLoading(true);

          await uploadPhoto;
          const downloadLink = await photoToUpload.getDownloadURL();
          setLoading(false);

          console.log('urls', downloadLink);
          return downloadLink;
        } catch (err) {
          setLoading(false);

          console.log(err);
        }
      }),
    );
    console.log('urls', uploadedPhotos);
    setDownloadURL(uploadedPhotos);
    // image.map(async item => {
    //   // console.log('uploaduri', item);
    //   // const uploaduri = image;
    //   let filename = item?.path.substring(item?.path.lastIndexOf('/') + 1);
    //   const extension = filename.split('.').pop();
    //   const name = filename.split('.').slice(0, -1).join('.');
    //   filename = name + Date.now() + '.' + extension;
    //   // const storageref = await storage().ref(filename);
    //   const storageref = firebase.storage().ref(filename);
    //   console.log('storageref', storageref);

    //   const task = item.path;

    //   try {
    //     setLoading(true);
    //     // await task;
    //     const url = storageref.getDownloadURL();
    //     console.log('uploaduri', url);

    //     setLoading(false);
    //     setImage(null);
    //     return url;
    //   } catch (e) {
    //     setLoading(false);
    //     console.log('???', e);
    //     return null;
    //   }
    // });

    // }
    // const uploaduri = selectimage;
    // let filename = uploaduri.substring(uploaduri.lastIndexOf('/') + 1);
    setSelectImage(null);
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
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
                  ? props.navigation.navigate('Home') & setdialogVisible(false)
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
      <View style={styles.catcon}>
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => props.navigation.navigate('TabNavigation')}>
          <WhiteLeft />
        </TouchableOpacity>
        <Text style={styles.cattitle}>Add Product</Text>
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
            <Input
              placeholder={'Enter Price'}
              titleInput={'Product Price'}
              value={price}
              onChangeText={text => setPrice(text)}
              keyboardType={'number-pad'}
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            {image?.map(img => (
              <ImageBackground
                source={{uri: img.path}}
                style={{
                  width: 90,
                  height: 120,
                  borderRadius: 5,
                  resizeMode: 'cover',
                  margin: 3,
                }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Pressable>
                    {/* <AntDesign name="close" size={25} color="white" /> */}
                  </Pressable>
                </View>
              </ImageBackground>
            ))}
          </View>
          <View style={{marginTop: 20, alignSelf: 'center'}}>
            <Button ButtonTitle={'Submit'} onPress={submitdata} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default AdminAddCategories;
