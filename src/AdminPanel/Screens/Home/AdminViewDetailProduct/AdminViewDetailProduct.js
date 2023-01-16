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

const AdminViewDetailProduct = props => {
  const {item} = props.route.params;
  return (
    <View style={styles.main}>
      <ImageBackground
        source={item.img}
        style={{width: '100%', height: 300, resizeMode: 'cover'}}>
        <TouchableOpacity style={{marginTop: 20, marginHorizontal: 20}}>
          <LeftIconForWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}> Rs.20000</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginTop: 20,
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={styles.tilespe}>Specification</Text>
          <Text style={styles.banrd}>Brand,Display Type Box content</Text>
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
          <Text style={styles.tilespe}>Delivery</Text>
          <Text style={styles.banrd}>Hyderabad sindh H no.#321 qasimabad</Text>
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
          <Text style={styles.banrd}>
            T-shirt which is pure cotton with mininmum hardwork stresss.
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          alignSelf: 'flex-end',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntitle}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AdminViewDetailProduct;
