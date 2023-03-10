import React from 'react';
import {
  ActivityIndicator,
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
import Danger from '../../../../assets/images/Danger';
import {primary, WhiteColor} from '../../../Utils/ColorScheme/Colors';
import {Dimensions} from 'react-native';
import storage from '@react-native-firebase/storage';
import {firebase} from '@react-native-firebase/firestore';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {Medium} from '../../../Utils/FontFamily/Fonfamily';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {save_role} from '../../../Screens/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AdminHome = props => {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [image, setimage] = React.useState();
  const [data, setuserData] = React.useState([]);
  const [productsname, setProductName] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  console.log(index);

  const swiper = React.useRef(null);
  console.log('data', productsname);
  const familyregister = async () => {
    const uid = auth().currentUser.uid;
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
          console.log('userdata', data.id);

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
  const cat = [
    {
      name: 'Wireless Earbuds',
      img: require('../../../components/assets/1.jpg'),
    },
    {
      name: 'Sports',
      img: require('../../../components/assets/2.jpg'),
    },
    {
      name: 'Hats & Caps',
      img: require('../../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/2.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/1.jpg'),
    },
    {
      name: 'Hats & Caps',
      img: require('../../../components/assets/2.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/1.jpg'),
    },
    {
      name: 'Hats & Caps',
      img: require('../../../components/assets/2.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../components/assets/1.jpg'),
    },
  ];
  useFocusEffect(
    React.useCallback(() => {
      getImage();

      // return () => unsubscribe();
    }, []),
  );
  const logout = async () => {
    const value = await save_role('null');
    await AsyncStorage.removeItem('id');
    props.navigation.navigate('Login');
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'GuestHome'}],
      }),
    );
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
      <View style={{height: 300}}>
        <Swiper
          autoplay={true}
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
            source={require('../../../components/assets/on3.jpeg')}
            style={{width: '100%', height: 300, resizeMode: 'cover'}}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
              {/* ****dskjfdksdfj***** */}
              <View
                style={{
                  alignSelf: 'flex-end',
                  marginHorizontal: 20,
                  marginTop: 40,
                }}>
                <TouchableOpacity onPress={logout}>
                  <MaterialIcons name="logout" color={WhiteColor} size={30} />
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', marginTop: '10%'}}>
                <Text
                  style={{fontSize: 24, fontFamily: Medium, color: WhiteColor}}>
                  Buy good Product which you want{' '}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require('../../../components/assets/on2.jpeg')}
            style={{width: '100%', height: 300, resizeMode: 'cover'}}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
              <View
                style={{
                  alignSelf: 'flex-end',
                  marginHorizontal: 20,
                  marginTop: 40,
                }}>
                <TouchableOpacity onPress={logout}>
                  <MaterialIcons name="logout" color={WhiteColor} size={30} />
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', marginTop: '10%'}}>
                <Text
                  style={{fontSize: 24, fontFamily: Medium, color: WhiteColor}}>
                  Buy good Product which you want{' '}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require('../../../components/assets/on1.jpeg')}
            style={{width: '100%', height: 300, resizeMode: 'cover'}}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
              <View
                style={{
                  alignSelf: 'flex-end',
                  marginHorizontal: 20,
                  marginTop: 40,
                }}>
                <TouchableOpacity onPress={logout}>
                  <MaterialIcons name="logout" color={WhiteColor} size={30} />
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', marginTop: '10%'}}>
                <Text
                  style={{fontSize: 24, fontFamily: Medium, color: WhiteColor}}>
                  Buy good Product which you want{' '}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </Swiper>
      </View>
      <View style={styles.catcon1}>
        <Text style={styles.cattitle1}>Products</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AdminShowmore')}>
          <Text style={styles.shopmore}>SHOP MORE</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {data == undefined ? null : (
          <View style={{marginTop: 20}}>
            <FlatList
              contentContainerStyle={{paddingBottom: 70}}
              numColumns={3}
              data={data}
              renderItem={({item, index}) => {
                console.log('item', item.productImage[0]);
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
                          props.navigation.navigate('AdminViewDetailProduct', {
                            item: item,
                            image1: item?.productImage[0],
                            image2: item?.productImage[1],
                            image3: item?.productImage[2],
                          })
                        }>
                        {item?.productImage.map((item, index) => {
                          console.log('images', item);
                        })}
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
export default AdminHome;
