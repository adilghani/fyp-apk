import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LeftICon from '../../../assets/images/Lefticon';
import Input from '../../components/Input/Input';
import {primary} from '../../Utils/ColorScheme/Colors';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../components/Button/Button';
import Right from '../../../assets/images/Right';

const Cart = props => {
  return (
    <View style={styles.main}>
      <View style={styles.headercon}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TabNavigation')}>
          <Right />
        </TouchableOpacity>
        <Text style={styles.addtitle}>My Cart</Text>
      </View>
      <View style={{marginTop: 20}}>
        <Image
          source={require('../../components/assets/mainimge.jpg')}
          style={{width: '100%', height: 200}}
        />
      </View>
      <View style={styles.cartcard}>
        <View>
          <Text style={styles.title}>Sport watch</Text>
          <Text style={styles.decs}>
            this watsch you can see all the route and running part
          </Text>
        </View>
        <View style={styles.btncon}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntitle}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}>1</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntitle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomcon}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.btntitle}>Total price</Text>
          <Text style={styles.btntitle}>$ 23.00</Text>
        </View>
        <TouchableOpacity style={styles.checkoutcon}>
          <Text style={styles.checkouttitle}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Cart;
