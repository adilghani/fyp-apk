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
import Danger from '../../../../assets/images/Danger';
import {primary, WhiteColor} from '../../../Utils/ColorScheme/Colors';
import {Dimensions} from 'react-native';
import storage from '@react-native-firebase/storage';
import {firebase} from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';
import WhiteLeft from '../../../../assets/images/WhiteLeft';
import {TextInput} from 'react-native';
import SearchIcon from '../../../../assets/images/SearchImage';
const AdminShowmore = props => {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [image, setimage] = React.useState();
  const [data, setuserData] = React.useState([]);
  const [productsname, setProductName] = React.useState([]);
  const [Searchdata, setSearchdata] = React.useState('nosearch');

  const [Recommendeddata, setRecommendeddata] = React.useState(data);
  console.log('recomdata', Recommendeddata);
  const [search, setSerach] = React.useState('');

  const Esearching = text => {
    const newData = data.filter(item => {
      const itemData = `${item.PrductName.toUpperCase()}`;

      const searchText = text.toUpperCase();

      return itemData.indexOf(searchText) > -1;
    });
    setRecommendeddata(newData);
    console.log('>>>>>>???', newData);
  };
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
      <View style={styles.catcon}>
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => props.navigation.navigate('AdminTab')}>
          <WhiteLeft />
        </TouchableOpacity>
        <Text style={styles.cattitle}>All Products</Text>
      </View>
      <View style={styles.searchcon}>
        <SearchIcon />
        <TextInput
          placeholder="Search product"
          style={styles.input}
          value={search}
          onChangeText={text => {
            Esearching(text);
            setSerach(text);
            setSearchdata(text);
            //   searching(text);
          }}
          // editable={false}
        />
      </View>
      <ScrollView>
        {data == undefined ? null : (
          <View style={{marginTop: 20, alignSelf: 'center'}}>
            <FlatList
              contentContainerStyle={{paddingBottom: 70}}
              numColumns={2}
              data={Searchdata == 'nosearch' ? data : Recommendeddata}
              renderItem={({item, index}) => {
                console.log('item', item.id);
                return (
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.cardcon,
                        {
                          width: Dimensions.get('screen').width / 2.5,
                        },
                      ]}
                      onPress={() =>
                        props.navigation.navigate('AdminViewDetailProduct', {
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
export default AdminShowmore;
