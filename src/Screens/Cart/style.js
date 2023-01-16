import {Dimensions, StyleSheet} from 'react-native';
import {
  WhiteColor,
  maintitle,
  Darkcolor,
  primary,
} from '../../Utils/ColorScheme/Colors';
import {Medium, Regular, SemiBold} from '../../Utils/FontFamily/Fonfamily';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
  headercon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  addtitle: {
    fontSize: 20,
    fontFamily: SemiBold,
    color: maintitle,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -2000,
    textAlign: 'center',
  },
  addicon: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width / 1.1,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: primary,
    alignItems: 'center',
    alignSelf: 'center',
  },
  addimg: {
    fontSize: 18,
    fontFamily: Medium,
    color: primary,
  },
  cartcard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: Medium,
    color: maintitle,
  },
  decs: {
    fontSize: 16,
    fontFamily: Regular,
    color: Darkcolor,
    width: 240,
    // width: '40%',
  },
  btncon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Darkcolor,
    marginLeft: 10,
  },
  btntitle: {
    fontSize: 18,
    fontFamily: Regular,
    color: maintitle,
  },
  count: {
    fontSize: 18,
    fontFamily: Medium,
    color: maintitle,
    marginLeft: 10,
  },
  bottomcon: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  checkoutcon: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
  },
  checkouttitle: {
    fontSize: 17,
    fontFamily: Medium,
    color: WhiteColor,
  },
});
export default styles;
