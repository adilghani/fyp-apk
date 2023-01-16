import {Dimensions, StyleSheet} from 'react-native';
import {
  WhiteColor,
  maintitle,
  Darkcolor,
  primary,
} from '../../Utils/ColorScheme/Colors';
import {Medium, SemiBold} from '../../Utils/FontFamily/Fonfamily';

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
});
export default styles;
