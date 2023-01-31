import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import Dialog from 'react-native-dialog';
import Danger from '../../../assets/images/Danger';
import {primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {Dimensions} from 'react-native';
import storage from '@react-native-firebase/storage';
import {firebase} from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';
import {Medium} from '../../Utils/FontFamily/Fonfamily';

const GuestHome = props => {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [image, setimage] = React.useState();
  const [data, setuserData] = React.useState([]);
  const [productsname, setProductName] = React.useState([]);

  console.log('data', productsname);
  const familyregister = async () => {
    const imagearr = [];

    for (const v of productsname) {
      const url = await storage().ref(v.toString()).getDownloadURL();
      imagearr.push(url);

      // const blockresult = await setData(v, );
    }
    console.log('VVVVVVVV', imagearr);
  };
  const getImage = async () => {
    setLoading(true);
    await firebase
      .firestore()
      .collection('Products')
      .get()
      // firebase
      //   .firestore()
      //   .collection('Products')
      //   .get()
      .then(querySnapshot => {
        const arr = [];
        const pro = [];
        querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          data.id = snapshot.id;
          console.log('userdata', snapshot.data());

          arr.push(data);
          // pro.push(data.PrductName);
        });
        setuserData(arr);
        setProductName(pro);
      });
    // await familyregister();
    // const url = await storage().ref('adminproducts').getDownloadURL();
    // console.log(url);
    setLoading(false);
    // setimage(url);
  };
  React.useEffect(() => {
    getImage();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      getImage();

      // return () => unsubscribe();
    }, []),
  );
  // const cat = [
  //   {
  //     name: 'Wireless Earbuds',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  //   {
  //     name: 'Sports',
  //     img: require('../../../components/assets/2.jpg'),
  //   },
  //   {
  //     name: 'Hats & Caps',
  //     img: require('../../../components/assets/3.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/2.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  //   {
  //     name: 'Hats & Caps',
  //     img: require('../../../components/assets/2.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/3.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  //   {
  //     name: 'Hats & Caps',
  //     img: require('../../../components/assets/2.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/3.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  //   {
  //     name: 'Cables convert',
  //     img: require('../../../components/assets/1.jpg'),
  //   },
  // ];
  return (
    <View style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
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
      <ImageBackground
        source={require('../../components/assets/mainimge.jpg')}
        style={{width: '100%', height: 200}}
        imageStyle={{resizeMode: 'cover'}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginTop: 10,
              marginHorizontal: 20,
            }}
            onPress={() => props.navigation.navigate('Login')}>
            <Text style={{fontSize: 18, fontFamily: Medium, color: WhiteColor}}>
              Sign-In
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.catcon}>
        <Text style={styles.cattitle}>Products</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Showmore')}>
          <Text style={styles.shopmore}>SHOP MORE</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data == undefined ? null : (
          <View style={{marginTop: 20}}>
            <FlatList
              contentContainerStyle={{paddingBottom: 70}}
              numColumns={3}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index}) => {
                console.log('item', item);
                return (
                  <View>
                    {index == 0 ||
                    index == 1 ||
                    index == 2 ||
                    index == 3 ||
                    index == 4 ||
                    index == 5 ? (
                      <TouchableOpacity
                        style={styles.cardcon}
                        onPress={() =>
                          props.navigation.navigate('ViewDetailProduct', {
                            item: item,
                            image1: item?.productImage[0],
                            image2: item?.productImage[1],
                            image3: item?.productImage[2],
                          })
                        }>
                        <Image
                          source={{uri: item.productImage[0]}}
                          style={{width: 90, height: 120}}
                        />
                        <Text style={styles.name}>{item.PrductName}</Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                );
              }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default GuestHome;
