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

const AdminHome = props => {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [whatopen, setwhatopen] = React.useState('');
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [image, setimage] = React.useState();
  const [data, setuserData] = React.useState();
  console.log('data', data);
  const getImage = async () => {
    setLoading(true);
    firebase
      .firestore()
      .collection('Products')
      .get()
      // firebase
      //   .firestore()
      //   .collection('Products')
      //   .get()
      .then(querySnapshot => {
        querySnapshot.forEach(snapshot => {
          let data = snapshot.data();
          console.log('userdata', data);
          setuserData([data]);
        });
      });

    const url = await storage().ref('adminproducts').getDownloadURL();
    console.log(url);
    setLoading(false);
    setimage(url);
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
      <ImageBackground
        source={require('../../../components/assets/mainimge.jpg')}
        style={{width: '100%', height: 200}}
        imageStyle={{resizeMode: 'cover'}}></ImageBackground>
      <View style={styles.catcon}>
        <Text style={styles.cattitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.shopmore}>SHOP MORE</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {data == undefined ? null : (
          <View style={{marginTop: 20}}>
            <FlatList
              contentContainerStyle={{paddingBottom: 70}}
              numColumns={5}
              data={data}
              renderItem={({item, index}) => {
                console.log('item', item.PrductName);
                return (
                  <TouchableOpacity
                    style={styles.cardcon}
                    onPress={() =>
                      props.navigation.navigate('AdminViewProducts')
                    }>
                    <Image
                      source={{uri: image}}
                      style={{width: 90, height: 120}}
                    />
                    <Text style={styles.name}>{item.PrductName}</Text>
                  </TouchableOpacity>
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
