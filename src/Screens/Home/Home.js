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

const Home = props => {
  const cat = [
    {
      name: 'Wireless Earbuds',
      img: require('../../components/assets/1.jpg'),
    },
    {
      name: 'Sports',
      img: require('../../components/assets/2.jpg'),
    },
    {
      name: 'Hats & Caps',
      img: require('../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/2.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/1.jpg'),
    },
    {
      name: 'Hats & Caps',
      img: require('../../components/assets/2.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/3.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/1.jpg'),
    },
    {
      name: 'Cables convert',
      img: require('../../components/assets/1.jpg'),
    },
  ];
  return (
    <View style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <ImageBackground
        source={require('../../components/assets/mainimge.jpg')}
        style={{width: '100%', height: 200}}
        imageStyle={{resizeMode: 'cover'}}></ImageBackground>
      <View style={styles.catcon}>
        <Text style={styles.cattitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.shopmore}>SHOP MORE</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingBottom: 70}}>
          <ScrollView horizontal>
            <View style={{marginTop: 20}}>
              <FlatList
                numColumns={5}
                data={cat}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={styles.cardcon}
                      onPress={() => props.navigation.navigate('ViewProducts')}>
                      <Image
                        source={item.img}
                        style={{width: 90, height: 120}}
                      />
                      <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;
