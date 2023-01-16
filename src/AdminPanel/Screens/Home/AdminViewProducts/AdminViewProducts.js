import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LeftICon from '../../../../../assets/images/Lefticon';
import Right from '../../../../../assets/images/Right';
import SearchIcon from '../../../../../assets/images/SearchImage';
import styles from './style';
const AdminViewProducts = props => {
  const cat = [
    {
      name: 'Wireless Earbuds',
      img: require('../../../../components/assets/1.jpg'),
    },
    {
      name: 'Sports',
      img: require('../../../../components/assets/2.jpg'),
    },
    {
      name: 'Hats & Caps',
      img: require('../../../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../../components/assets/2.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../../components/assets/1.jpg'),
    },
    {
      name: 'Hats & Caps',
      img: require('../../../../components/assets/2.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../../../components/assets/1.jpg'),
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.searchcon}>
        <TouchableOpacity>
          <Right />
        </TouchableOpacity>
        <View style={styles.searchinput}>
          <SearchIcon />
          <TextInput placeholder="Search Here" />
        </View>
      </View>
      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            numColumns={2}
            data={cat}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.cardcon}
                  onPress={() =>
                    props.navigation.navigate('AdminViewDetailProduct', {
                      item: item,
                    })
                  }>
                  <Image source={item.img} style={{width: 90, height: 120}} />
                  <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default AdminViewProducts;
