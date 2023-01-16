import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LeftICon from '../../../assets/images/Lefticon';
import Input from '../../components/Input/Input';
import {primary} from '../../Utils/ColorScheme/Colors';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../components/Button/Button';
import Right from '../../../assets/images/Right';

const AddCategories = props => {
  return (
    <View style={styles.main}>
      <View style={styles.headercon}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TabNavigation')}>
          <Right />
        </TouchableOpacity>
        <Text style={styles.addtitle}>Add Product</Text>
      </View>
      <View style={{flex:1}}>

      <ScrollView>

      <View style={{marginTop: 30, alignSelf: 'center'}}>
        <Input
          placeholder={'Enter your Restorent name '}
          titleInput={'Restorent Name'}
        />

        <Input placeholder={'Enter Product name'} titleInput={'Product Name'} />
        <Input placeholder={'Enter pickup point'} titleInput={'Pickup point'} />

        <Input placeholder={'Enter password'} titleInput={'Password'} />
      </View>
      <TouchableOpacity style={styles.addicon}>
        <Entypo
          name="plus"
          color={primary}
          size={30}
          style={{alignSelf: 'center'}}></Entypo>
        <Text style={styles.addimg}>Add Images</Text>
      </TouchableOpacity>
      </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        <Button ButtonTitle={'Submit'} />
      </View>
    </View>
  );
};
export default AddCategories;
