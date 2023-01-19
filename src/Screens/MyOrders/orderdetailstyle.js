import {Dimensions, StyleSheet} from 'react-native';
import {
  Darkcolor,
  maintitle,
  primary,
  WhiteColor,
} from '../../Utils/ColorScheme/Colors';
import {Medium, Regular, SemiBold} from '../../Utils/FontFamily/Fonfamily';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
  searchcon: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  searchinput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 1.2,
    height: 40,
    borderWidth: 1,
    borderColor: Darkcolor,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginLeft: 30,
  },
  cardcon: {
    width: Dimensions.get('screen').width / 2.4,
    height: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Darkcolor,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: Medium,
    color: maintitle,
  },
  price: {
    fontSize: 18,
    fontFamily: Medium,
    color: maintitle,
  },
  tilespe: {
    fontSize: 17,
    fontFamily: Regular,
    color: Darkcolor,
  },
  banrd: {
    fontFamily: Regular,
    color: maintitle,
    fontSize: 16,
    width: '70%',
  },
  btn: {
    width: Dimensions.get('screen').width / 2,
    height: 60,
    borderRadius: 10,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntitle: {
    fontSize: 20,
    fontFamily: SemiBold,
    color: WhiteColor,
  },
});
export default styles;
