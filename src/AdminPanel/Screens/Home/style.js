import {Dimensions, StyleSheet} from 'react-native';
import {
  WhiteColor,
  maintitle,
  Darkcolor,
  primary,
} from '../../../Utils/ColorScheme/Colors';
import {Medium, Regular, SemiBold} from '../../../Utils/FontFamily/Fonfamily';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
  catcon1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  cattitle1: {
    fontSize: 20,
    fontFamily: SemiBold,
    color: maintitle,
  },
  catcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: primary,
    height: 70,
    width: '100%',
  },
  cattitle: {
    fontSize: 20,
    fontFamily: SemiBold,
    color: WhiteColor,
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    left: 0,
    right: 0,
    zIndex: -2000,
  },
  shopmore: {
    fontSize: 16,
    fontFamily: Medium,
    color: maintitle,
  },
  cardcon: {
    width: Dimensions.get('screen').width / 3,
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
    position: 'absolute',
    bottom: 10,
  },
  searchcon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: Dimensions.get('screen').width / 1.1,
    height: 60,
    backgroundColor: WhiteColor,
    marginTop: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: primary,
    marginBottom: 15,
  },
  input: {
    fontSize: 15,
    color: '#9EA3AE',
    fontFamily: Regular,
    width: '80%',
  },
});
export default styles;
