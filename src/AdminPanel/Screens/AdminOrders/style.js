import {Dimensions, StyleSheet} from 'react-native';
import {
  WhiteColor,
  maintitle,
  Darkcolor,
  primary,
} from '../../../Utils/ColorScheme/Colors';
import {Medium, SemiBold} from '../../../Utils/FontFamily/Fonfamily';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WhiteColor,
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
    width: Dimensions.get('screen').width / 2.3,
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
});
export default styles;
